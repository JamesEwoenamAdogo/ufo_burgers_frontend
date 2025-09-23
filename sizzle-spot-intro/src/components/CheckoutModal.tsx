import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart, CartItem } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, MapPin, Clock } from "lucide-react";
import axios from "axios";

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cartItems: CartItem[];
  total: number;
}

const CheckoutModal = ({ open, onOpenChange, cartItems, total }: CheckoutModalProps) => {
  const { dispatch } = useCart();
  const { toast } = useToast();
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    StreetAddress: '',
    city: '',
    specialInstructions: '',
   
  });

  // Initialize form data with localStorage values when component mounts
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedPhone = localStorage.getItem("phone");
    
    setFormData(prev => ({
      ...prev,
      fullName: savedName || '',
      phoneNumber: savedPhone || ''
    }));
  }, []);

  // const deliveryFee = orderType === 'delivery' ? 15.00 : 0;
  const tax = (total) * 0.01; // Ghana VAT rate
  const finalTotal = total + tax;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();



    const userId = localStorage.getItem("id")
    const meal = JSON.parse(localStorage.getItem("ufo-burgers-cart"))
    
    

    const finalMeal = meal.map((item)=>{return {name:item.name,price:item.price,quantity:item.quantity}})
    const order = {...formData,userId,orderType,cost:finalTotal,meal:finalMeal,status:"order placed"}
    const response = await axios.post("/add-order", order)
    console.log(response)
    console.log(order)
    
    // Simulate order processing
    toast({
      title: "🛸 Order Confirmed!",
      description: `Your cosmic burger order has been received! ${orderType === 'pickup' ? 'Ready for pickup in 15-20 minutes.' : 'Delivery estimated in 30-45 minutes.'}`,
    });
    
    // Clear cart and close modal
    dispatch({ type: 'CLEAR_CART' });
    onOpenChange(false);
    
    // Reset form
    setFormData({
      fullName: '', phoneNumber: '', StreetAddress: '', city: '', specialInstructions: '',
      
    });
    localStorage.removeItem("ufo-burger-cart")

  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">
            🛸 Cosmic Checkout
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Order Type Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Order Type</Label>
            <div className="flex gap-4">
              <Button
                type="button"
                variant={orderType === 'pickup' ? 'default' : 'outline'}
                className="flex-1"
                onClick={() => setOrderType('pickup')}
              >
                <MapPin className="mr-2 h-4 w-4" />
                Pickup (Free)
              </Button>
              <Button
                type="button"
                variant={orderType === 'delivery' ? 'default' : 'outline'}
                className="flex-1"
                onClick={() => setOrderType('delivery')}
              >
                <Clock className="mr-2 h-4 w-4" />
                Delivery (+₵15.00)
              </Button>
            </div>
          </div>

          {/* Contact Information for Pickup */}
          {orderType === 'pickup' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Delivery Information */}
          {orderType === 'delivery' && (
            <div className="space-y-4">
              <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
              <h3 className="text-lg font-semibold">Delivery Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    value={formData.StreetAddress}
                    onChange={(e) => handleInputChange('StreetAddress', e.target.value)}
                    required={orderType === 'delivery'}
                  />
                </div>
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    required={orderType === 'delivery'}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div>
            <Label htmlFor="notes">Special Instructions (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Any special requests or dietary restrictions..."
              value={formData.specialInstructions}
              onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
            />
          </div>

          {/* Payment Information */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Payment Information
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="nameOnCard">Name on Card *</Label>
                <Input
                  id="nameOnCard"
                  value={formData.nameOnCard}
                  onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cardNumber">Card Number *</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date *</Label>
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV *</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={(e) => handleInputChange('cvv', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div> */}

          {/* Order Summary */}
          <div className="space-y-4 bg-secondary/50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Order Summary</h3>
            <div className="space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.quantity}x {item.name}</span>
                  <span>₵{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-2 space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>₵{total.toFixed(2)}</span>
                </div>
                {/* {orderType === 'delivery' && (
                  <div className="flex justify-between text-sm">
                    <span>Delivery Fee:</span>
                    <span>Delivery fee would be paid separately to the delivery men</span>
                  </div>
                )} */}
                <div className="flex justify-between text-sm">
                  <span>Tax:</span>
                  <span>₵{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-1">
                  <span>Total:</span>
                  <span className="text-primary">₵{finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
          {orderType=="delivery"&&<h1>Delivery fee will be paid separately to the delivery man</h1>}

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 btn-glow text-lg py-6"
          >
            🚀 Proceed to checkout - ₵{finalTotal.toFixed(2)}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;