import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client"
// import axios from "axios"

function PreviousOrdersModal({ open, onOpenChange }) {
  const [orders, setOrders] = useState([]);

  function formatDate(iso) {
    if (!iso) return { date: "", time: "" };
    try {
      const d = new Date(iso);
      const date = d.toLocaleDateString();
      const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      return { date, time };
    } catch (e) {
      return { date: "", time: "" };
    }
  }

  const placeorder = async(order)=>{
    try {
      localStorage.setItem("order",JSON.stringify(order))
      // Create a clean order object with all necessary fields
      const reorderData = {
        userId: localStorage.getItem("id"),
        fullName: localStorage.getItem("name"),
        phoneNumber: localStorage.getItem("phone"),
        meal: order.items || [], // Array of meal items
        cost: order.total || 0,
        orderType: order.orderType || "pickup",
        city: order.city || "",
        StreetAddress: order.StreetAddress || "",
        specialInstructions: order.specialInstructions || "",
        status: "Pending" // Set initial status
      }
      
      const response = await axios.post("/add-order", reorderData)
      console.log("Reorder successful:", response.data)
      
      // Show success message to user
      alert("Order has been successfully reordered!")
      
    } catch (error) {
      console.error("Error reordering:", error)
      alert("Failed to reorder. Please try again.")
    }
  }

  useEffect(() => {
    let isMounted = true;
    const fetchPreviousOrders = async () => {
      try {
        const id = localStorage.getItem("id")
        const response = await axios.get(`/fetch-user-orders/${id}`);
        console.log(response)
        const apiOrders = Array.isArray(response?.data?.userOrders)
          ? response.data.userOrders.map((item, id) => {
              const { date, time } = formatDate(item?.createdAt);
              return {
                id:id+1,
                total: Number(item?.cost) || 0,
                status: item?.status || "",
                items: Array.isArray(item?.meal) ? item.meal : [],
                date,
                time,
                orderType:item.orderType,
                city:item.city,
                StreetAddress:item.StreetAddress
              };
            })
          : [];
        if (isMounted) {
          setOrders(apiOrders);
        }
      } catch (err) {
        if (isMounted) setOrders([]);
      }
    };
    fetchPreviousOrders();
    return () => {
      isMounted = false;
    };
  }, []);

  function getStatusColor(status) {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Accepted":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Declined":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Cancelled":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Previous Orders
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-6">
          {orders.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No previous orders found</p>
              <p className="text-sm text-muted-foreground mt-2">Your order history will appear here once you make your first purchase!</p>
            </div>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-semibold">{order.id}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{order.date}</span>
                        <Clock className="h-3 w-3" />
                        <span>{order.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={getStatusColor(order.status)}>
                      {order.status || ""}
                    </Badge>
                    <p className="text-lg font-bold text-primary mt-1">₵{Number(order.total || 0).toFixed(2)}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Items Ordered:</h4>
                  {(order.items || []).map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{(item?.quantity || 0)}x {item?.name || ""}</span>
                      <span>₵{Number(item?.price || 0).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="text-gray-500">{`order type:  ${order.orderType}`}</div>
                {order.orderType=="delivery"&& (<div>
                  <div className="text-gray-500">{`city: ${order.city}`}</div>
                  <div className="text-gray-500">{`street address: ${order.StreetAddress}`}</div>


                </div>)}
                {order.specialInstructions&&(
                  <div>{`note: ${order.specialInstructions}`}</div>
                )}
                <div className="flex gap-2 pt-2">
                  {/* <Button variant="outline" size="sm">View Details</Button> */}
                  <Button variant="outline" size="sm" onClick={() => placeorder(order)}>Reorder</Button>
                </div>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PreviousOrdersModal;