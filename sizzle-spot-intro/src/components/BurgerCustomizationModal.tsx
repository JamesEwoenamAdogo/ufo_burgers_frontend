import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Plus, Minus } from "lucide-react";

interface BurgerCustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  burgerItem: any;
}

const BurgerCustomizationModal: React.FC<BurgerCustomizationModalProps> = ({
  isOpen,
  onClose,
  burgerItem
}) => {
  const { dispatch } = useCart();
  const { toast } = useToast();

  // State for selections
  const [selectedSauce, setSelectedSauce] = useState<string>('');
  const [selectedToppings, setSelectedToppings] = useState<{[key: string]: number}>({});
  const [selectedPremiumToppings, setSelectedPremiumToppings] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Options data
  const sauceOptions = [
    { id: 'ufo-sauce', name: 'Ufo Sauce (Mild Spicy)', price: 0 },
    { id: 'galaxy-sauce', name: 'Galaxy Sauce (Sweet)', price: 0 },
    { id: 'buffalo', name: 'Buffalo', price: 0 },
    { id: 'barbecue', name: 'Barbecue', price: 0 },
    { id: 'honey-mustard', name: 'Honey mustard', price: 0 },
    { id: 'ketchup', name: 'Ketchup', price: 0 },
    { id: 'mayo', name: 'Mayo', price: 0 },
    { id: 'mustard', name: 'Mustard', price: 0 },
  ];

  const toppingsOptions = [
    { id: 'pickles', name: 'Pickles', price: 0 },
    { id: 'cabbage', name: 'Cabbage', price: 0 },
    { id: 'jalapeno-peppers', name: 'Jalapeno Peppers', price: 0 },
    { id: 'caramelized-onions', name: 'Caramelized Onions', price: 0 },
    { id: 'diced-onions', name: 'Diced Onions', price: 0 },
  ];

  const premiumToppingsOptions = [
    { id: 'extra-wagyu', name: 'Extra beef WAGYU patty', price: 90 },
    { id: 'extra-beef', name: 'Extra beef patty', price: 40 },
    { id: 'extra-galaxy-chicken', name: 'Extra Galaxy chicken', price: 40 },
    { id: 'extra-american-cheese', name: 'Extra American Cheese', price: 13 },
    { id: 'bacon', name: 'Bacon', price: 25 },
    { id: 'egg', name: 'Egg', price: 13 },
    { id: 'extra-diced-onions', name: 'Extra Diced Onions', price: 7 },
    { id: 'extra-caramelized-onions', name: 'Extra Caramelized Onions', price: 7 },
    { id: 'extra-cabbage', name: 'Extra Cabbage', price: 7 },
    { id: 'extra-jalapeno', name: 'Extra jalapeno peppers', price: 7 },
    { id: 'extra-pickles', name: 'Extra Pickles', price: 7 },
  ];

  // Calculate total toppings count
  const totalToppingsCount = Object.values(selectedToppings).reduce((sum, count) => sum + count, 0);

  // Update total price whenever selections change
  useEffect(() => {
    if (!burgerItem) return;

    let price = burgerItem.price;

    // Add premium toppings prices
    selectedPremiumToppings.forEach(toppingId => {
      const topping = premiumToppingsOptions.find(t => t.id === toppingId);
      if (topping) {
        price += topping.price;
      }
    });

    setTotalPrice(price);
  }, [selectedSauce, selectedToppings, selectedPremiumToppings, burgerItem]);

  const handleToppingQuantityChange = (toppingId: string, increment: boolean) => {
    setSelectedToppings(prev => {
      const currentCount = prev[toppingId] || 0;
      const newCount = increment ? currentCount + 1 : currentCount - 1;
      
      if (newCount <= 0) {
        const { [toppingId]: _, ...rest } = prev;
        return rest;
      }
      
      const totalAfterChange = Object.entries(prev).reduce((sum, [id, count]) => {
        return sum + (id === toppingId ? newCount : count);
      }, 0);
      
      if (totalAfterChange > 2) {
        return prev;
      }
      
      return { ...prev, [toppingId]: newCount };
    });
  };

  const handleAddToCart = () => {
    if (!selectedSauce) {
      toast({
        title: "Please select a sauce",
        description: "Sauce selection is required.",
        variant: "destructive",
      });
      return;
    }

    // Create detailed item description
    const selectedSauceName = sauceOptions.find(s => s.id === selectedSauce)?.name || '';
    const selectedToppingsList = Object.entries(selectedToppings).map(([id, count]) => {
      const topping = toppingsOptions.find(t => t.id === id);
      return `${topping?.name}${count > 1 ? ` (x${count})` : ''}`;
    });
    const selectedPremiumList = selectedPremiumToppings.map(id => {
      const topping = premiumToppingsOptions.find(t => t.id === id);
      return topping?.name;
    }).filter(Boolean);

    let description = `${burgerItem.name} with ${selectedSauceName}`;
    if (selectedToppingsList.length > 0) {
      description += `, ${selectedToppingsList.join(', ')}`;
    }
    if (selectedPremiumList.length > 0) {
      description += `, ${selectedPremiumList.join(', ')}`;
    }

    const customizedItem = {
      id: `${burgerItem.id}-${Date.now()}`,
      name: description,
      price: totalPrice,
      image: burgerItem.image,
    };

    dispatch({
      type: 'ADD_ITEM',
      payload: customizedItem
    });

    toast({
      title: "Added to cart!",
      description: `Customized ${burgerItem.name} has been added to your cart.`,
    });

    // Reset selections and close modal
    setSelectedSauce('');
    setSelectedToppings({});
    setSelectedPremiumToppings([]);
    onClose();
  };

  if (!burgerItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Customize Your {burgerItem.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Sauce Choice */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              Sauce Choice
              <Badge variant="destructive" className="ml-2">Required</Badge>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sauceOptions.map((sauce) => (
                <Card 
                  key={sauce.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedSauce === sauce.id ? 'ring-2 ring-primary bg-primary/5' : ''
                  }`}
                  onClick={() => setSelectedSauce(sauce.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{sauce.name}</span>
                      <span className="text-sm text-muted-foreground">
                        +₵{sauce.price.toFixed(2)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator />

          {/* Toppings Choice */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              Toppings Choice
              <Badge variant="outline" className="ml-2">Max 2 total</Badge>
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Selected: {totalToppingsCount}/2
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {toppingsOptions.map((topping) => {
                const count = selectedToppings[topping.id] || 0;
                return (
                  <Card key={topping.id} className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{topping.name}</span>
                        <span className="text-sm text-muted-foreground ml-2">
                          +₵{topping.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleToppingQuantityChange(topping.id, false)}
                          disabled={count === 0}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">{count}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleToppingQuantityChange(topping.id, true)}
                          disabled={totalToppingsCount >= 2}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <Separator />

          {/* Premium & Extra Toppings - Show different options based on burger type */}
          {(burgerItem.id === 'galaxy-chicken-burger-burgers-wings' || burgerItem.id === 'ufo-wagyu-beef-burger' || burgerItem.id === 'ufo-beef-burger-burgers-wings') && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Premium & Extra toppings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {premiumToppingsOptions.map((topping) => (
                  <Card 
                    key={topping.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedPremiumToppings.includes(topping.id) ? 'ring-2 ring-primary bg-primary/5' : ''
                    }`}
                    onClick={() => {
                      setSelectedPremiumToppings(prev => 
                        prev.includes(topping.id) 
                          ? prev.filter(id => id !== topping.id)
                          : [...prev, topping.id]
                      );
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{topping.name}</span>
                        <span className="text-sm text-muted-foreground">
                          +₵{topping.price.toFixed(2)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <Separator />

          {/* Add to Cart */}
          <div className="flex justify-between items-center pt-4">
            <div className="text-2xl font-bold">
              Total: ₵{totalPrice.toFixed(2)}
            </div>
            <div className="space-x-3">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleAddToCart} className="bg-gradient-primary">
                Add to Cart - ₵{totalPrice.toFixed(2)}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BurgerCustomizationModal;