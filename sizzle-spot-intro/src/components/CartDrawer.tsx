import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, History } from "lucide-react";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import PreviousOrdersModal from "./PreviousOrdersModal";

const CartDrawer = () => {
  const { state, dispatch } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPreviousOrdersOpen, setIsPreviousOrdersOpen] = useState(false);

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-4 w-4" />
            {state.itemCount > 0 && (
              <Badge 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-gradient-primary text-primary-foreground text-xs"
              >
                {state.itemCount}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Your Cosmic Cart ({state.itemCount} items)
            </SheetTitle>
          </SheetHeader>
          
          <div className="mt-6 space-y-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mt-2">Add some cosmic burgers to get started!</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{item.name}</h4>
                        <p className="text-primary font-bold">₵{item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 space-y-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">₵{state.total.toFixed(2)}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 btn-glow"
                      onClick={() => setIsCheckoutOpen(true)}
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Proceed to Checkout
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => dispatch({ type: 'CLEAR_CART' })}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </>
            )}
                    <Button 
                      variant="ghost" 
                      className="w-full text-muted-foreground hover:text-foreground"
                      onClick={() => setIsPreviousOrdersOpen(true)}
                    >
                      <History className="mr-2 h-4 w-4" />
                      View Previous Orders
                    </Button>
          </div>
        </SheetContent>
      </Sheet>
      
      <CheckoutModal 
        open={isCheckoutOpen} 
        onOpenChange={setIsCheckoutOpen}
        cartItems={state.items}
        total={state.total}
      />
      
      <PreviousOrdersModal 
        open={isPreviousOrdersOpen}
        onOpenChange={setIsPreviousOrdersOpen}
      />
    </>
  );
};

export default CartDrawer;