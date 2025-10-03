import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface SpecialFriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: { id: string; name: string; price: number; image: string } | null;
}

const SpecialFriesModal: React.FC<SpecialFriesModalProps> = ({
  isOpen,
  onClose,
  item
}) => {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  const premiumToppings = [
    { id: 'extra-beef-wagyu-patty', name: 'Extra beef WAGYU patty', price: 49 },
    { id: 'extra-beef-patty', name: 'Extra beef patty', price: 28 },
    { id: 'extra-galaxy-chicken', name: 'Extra Galaxy chicken', price: 28 },
    { id: 'extra-american-cheese', name: 'Extra American Cheese', price: 10.5 },
    { id: 'bacon', name: 'Bacon', price: 21 },
    { id: 'egg', name: 'Egg', price: 10.5 },
    { id: 'extra-diced-onions', name: 'Extra Diced Onions', price: 4.9 },
    { id: 'extra-caramelized-onions', name: 'Extra Caramelized Onions', price: 4.9 },
    { id: 'extra-cabbage', name: 'Extra Cabbage', price: 4.9 },
    { id: 'extra-jalapeno-peppers', name: 'Extra jalapeno peppers', price: 4.9 },
    { id: 'extra-pickles', name: 'Extra Pickles', price: 4.9 }
  ];

  const handleToppingToggle = (toppingId: string) => {
    setSelectedToppings(prev => {
      if (prev.includes(toppingId)) {
        return prev.filter(id => id !== toppingId);
      } else {
        return [...prev, toppingId];
      }
    });
  };

  const calculateTotalPrice = () => {
    if (!item) return 0;
    
    let total = item.price;
    
    selectedToppings.forEach(toppingId => {
      const topping = premiumToppings.find(t => t.id === toppingId);
      if (topping) total += topping.price;
    });

    return total;
  };

  const handleAddToCart = () => {
    if (!item) return;

    const selectedToppingNames = selectedToppings.map(toppingId => {
      const topping = premiumToppings.find(t => t.id === toppingId);
      return topping?.name;
    }).filter(Boolean);

    const customizedName = selectedToppingNames.length > 0 
      ? `${item.name} (${selectedToppingNames.join(', ')})`
      : item.name;

    const totalPrice = calculateTotalPrice();

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `${item.id}-custom-${Date.now()}`,
        name: customizedName,
        price: totalPrice,
        image: item.image,
      }
    });

    toast({
      title: "Added to cart!",
      description: `${customizedName} has been added to your cart.`,
    });

    onClose();
    setSelectedToppings([]);
  };

  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Customize Your {item.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Premium & Extra Toppings</h3>
            <p className="text-sm text-muted-foreground mb-3">Select as many as you want (optional)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {premiumToppings.map(topping => (
                <Button
                  key={topping.id}
                  variant={selectedToppings.includes(topping.id) ? "default" : "outline"}
                  className="h-auto p-3 text-left justify-start"
                  onClick={() => handleToppingToggle(topping.id)}
                >
                  <div>
                    <div className="font-medium text-sm">{topping.name}</div>
                    <div className="text-xs text-muted-foreground">+GH₵{topping.price.toFixed(2)}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 text-lg font-bold">
            Total: GH₵{calculateTotalPrice().toFixed(2)}
          </div>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            onClick={handleAddToCart}
            className="bg-gradient-primary"
          >
            Add to Cart - GH₵{calculateTotalPrice().toFixed(2)}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SpecialFriesModal;