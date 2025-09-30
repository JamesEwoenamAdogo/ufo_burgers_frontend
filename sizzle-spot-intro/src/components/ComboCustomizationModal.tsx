import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ComboItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ComboCustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  comboItem: ComboItem | null;
}

interface CustomizationOptions {
  sauce: string;
  toppings: string[];
  premiumToppings: string[];
  fries: string;
  drink: string;
}

const ComboCustomizationModal: React.FC<ComboCustomizationModalProps> = ({
  isOpen,
  onClose,
  comboItem
}) => {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const [selections, setSelections] = useState<CustomizationOptions>({
    sauce: '',
    toppings: [],
    premiumToppings: [],
    fries: '',
    drink: ''
  });

  const sauces = [
    { id: 'ufo-sauce', name: 'Ufo Sauce (Mild Spicy)', price: 0 },
    { id: 'galaxy-sauce', name: 'Galaxy Sauce (Sweet)', price: 0 },
    { id: 'buffalo', name: 'Buffalo', price: 0 },
    { id: 'barbecue', name: 'Barbecue', price: 0 },
    { id: 'honey-mustard', name: 'Honey mustard', price: 0 },
    { id: 'ketchup', name: 'Ketchup', price: 0 },
    { id: 'mayo', name: 'Mayo', price: 0 },
    { id: 'mustard', name: 'Mustard', price: 0 }
  ];

  const toppings = [
    { id: 'pickles', name: 'Pickles', price: 0 },
    { id: 'cabbage', name: 'Cabbage', price: 0 },
    { id: 'jalapeno-peppers', name: 'Jalapeno Peppers', price: 0 },
    { id: 'caramelized-onions', name: 'Caramelized Onions', price: 0 },
    { id: 'diced-onions', name: 'Diced Onions', price: 0 }
  ];

  const premiumToppings = [
    { id: 'extra-beef-wagyu-patty', name: 'Extra beef WAGYU patty', price: 90 },
    { id: 'extra-beef-patty', name: 'Extra beef patty', price: 40 },
    { id: 'extra-galaxy-chicken', name: 'Extra Galaxy chicken', price: 40 },
    { id: 'extra-american-cheese', name: 'Extra American Cheese', price: 13 },
    { id: 'bacon', name: 'Bacon', price: 25 },
    { id: 'egg', name: 'Egg', price: 13 },
    { id: 'extra-diced-onions', name: 'Extra Diced Onions', price: 7 },
    { id: 'extra-caramelized-onions', name: 'Extra Caramelized Onions', price: 7 },
    { id: 'extra-cabbage', name: 'Extra Cabbage', price: 7 },
    { id: 'extra-jalapeno-peppers', name: 'Extra jalapeno peppers', price: 7 },
    { id: 'extra-pickles', name: 'Extra Pickles', price: 7 }
  ];

  const friesOptions = [
    { id: 'french-fries', name: 'French Fries', price: 0 },
    { id: 'sweet-potato-fries', name: 'Sweet Potato Fries', price: 20 }
  ];

  const drinkOptions = [
    { id: 'strawberry-milkshake', name: 'Strawberry Milkshake', price: 40 },
    { id: 'chocolate-milkshake', name: 'Chocolate Milkshake', price: 40 },
    { id: 'vanilla-milkshake', name: 'Vanilla Milkshake', price: 40 },
    { id: 'coke', name: 'Coke', price: 0 },
    { id: 'coke-zero', name: 'Coke Zero', price: 0 },
    { id: 'fanta', name: 'Fanta', price: 0 },
    { id: 'sprite', name: 'Sprite', price: 0 }
  ];

  const handleSauceSelect = (sauceId: string) => {
    setSelections(prev => ({ ...prev, sauce: sauceId }));
  };

  const [toppingQuantities, setToppingQuantities] = useState<{ [key: string]: number }>({});

  const handleToppingToggle = (toppingId: string) => {
    setSelections(prev => {
      const currentToppings = prev.toppings;
      const totalToppings = Object.values(toppingQuantities).reduce((sum, qty) => sum + qty, 0);
      
      if (currentToppings.includes(toppingId)) {
        // Remove topping
        const newQuantities = { ...toppingQuantities };
        delete newQuantities[toppingId];
        setToppingQuantities(newQuantities);
        return { ...prev, toppings: currentToppings.filter(id => id !== toppingId) };
      } else if (totalToppings < 2) {
        // Add topping with quantity 1
        setToppingQuantities(prev => ({ ...prev, [toppingId]: 1 }));
        return { ...prev, toppings: [...currentToppings, toppingId] };
      }
      return prev;
    });
  };

  const adjustToppingQuantity = (toppingId: string, delta: number) => {
    setToppingQuantities(prev => {
      const currentQty = prev[toppingId] || 0;
      const newQty = Math.max(0, Math.min(2, currentQty + delta));
      const totalToppings = Object.values(prev).reduce((sum, qty) => sum + qty, 0) - currentQty + newQty;
      
      if (newQty === 0) {
        const newQuantities = { ...prev };
        delete newQuantities[toppingId];
        setSelections(prevSel => ({ 
          ...prevSel, 
          toppings: prevSel.toppings.filter(id => id !== toppingId)
        }));
        return newQuantities;
      } else if (totalToppings <= 2) {
        return { ...prev, [toppingId]: newQty };
      }
      return prev;
    });
  };

  const handlePremiumToppingToggle = (toppingId: string) => {
    setSelections(prev => {
      const currentPremiumToppings = prev.premiumToppings;
      if (currentPremiumToppings.includes(toppingId)) {
        return { ...prev, premiumToppings: currentPremiumToppings.filter(id => id !== toppingId) };
      } else {
        return { ...prev, premiumToppings: [...currentPremiumToppings, toppingId] };
      }
    });
  };

  const handleFriesSelect = (friesId: string) => {
    setSelections(prev => ({ ...prev, fries: friesId }));
  };

  const handleDrinkSelect = (drinkId: string) => {
    setSelections(prev => ({ ...prev, drink: drinkId }));
  };

  const calculateTotalPrice = () => {
    if (!comboItem) return 0;
    
    let total = comboItem.price;
    
    // Add premium toppings cost
    selections.premiumToppings.forEach(toppingId => {
      const topping = premiumToppings.find(t => t.id === toppingId);
      if (topping) total += topping.price;
    });

    // Add fries upgrade cost
    const selectedFries = friesOptions.find(f => f.id === selections.fries);
    if (selectedFries) total += selectedFries.price;

    // Add drink cost
    const selectedDrink = drinkOptions.find(d => d.id === selections.drink);
    if (selectedDrink) total += selectedDrink.price;

    return total;
  };

  const isValid = () => {
    return selections.sauce && selections.fries && selections.drink;
  };

  const handleAddToCart = () => {
    if (!comboItem || !isValid()) return;

    // Build customization details
    const selectedSauceName = sauces.find(s => s.id === selections.sauce)?.name;
    const selectedToppingNames = selections.toppings.map(toppingId => {
      const topping = toppings.find(t => t.id === toppingId);
      const qty = toppingQuantities[toppingId] || 1;
      return qty > 1 ? `${topping?.name} (${qty})` : topping?.name;
    }).filter(Boolean);
    const selectedPremiumToppingNames = selections.premiumToppings.map(toppingId => {
      const topping = premiumToppings.find(t => t.id === toppingId);
      return topping?.name;
    }).filter(Boolean);
    const selectedFriesName = friesOptions.find(f => f.id === selections.fries)?.name;
    const selectedDrinkName = drinkOptions.find(d => d.id === selections.drink)?.name;

    const customizations = [
      selectedSauceName,
      ...selectedToppingNames,
      ...selectedPremiumToppingNames,
      selectedFriesName,
      selectedDrinkName
    ].filter(Boolean);

    const customizedName = `${comboItem.name} (${customizations.join(', ')})`;
    const totalPrice = calculateTotalPrice();

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `${comboItem.id}-custom-${Date.now()}`,
        name: customizedName,
        price: totalPrice,
        image: comboItem.image,
      }
    });

    toast({
      title: "Added to cart!",
      description: `${customizedName} has been added to your cart.`,
    });

    onClose();
    setSelections({
      sauce: '',
      toppings: [],
      premiumToppings: [],
      fries: '',
      drink: ''
    });
    setToppingQuantities({});
  };

  if (!comboItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Customize Your {comboItem.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Sauce Choice */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Sauce Choice <span className="text-red-500">*</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {sauces.map(sauce => (
                <Button
                  key={sauce.id}
                  variant={selections.sauce === sauce.id ? "default" : "outline"}
                  className="h-auto p-3 text-left justify-start"
                  onClick={() => handleSauceSelect(sauce.id)}
                >
                  <div>
                    <div className="font-medium text-sm">{sauce.name}</div>
                    <div className="text-xs text-muted-foreground">+GH₵{sauce.price.toFixed(2)}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Toppings Choice */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Toppings Choice <span className="text-sm text-muted-foreground">(Max 2)</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {toppings.map(topping => {
                const isSelected = selections.toppings.includes(topping.id);
                const quantity = toppingQuantities[topping.id] || 0;
                const totalToppings = Object.values(toppingQuantities).reduce((sum, qty) => sum + qty, 0);
                
                return (
                  <div key={topping.id} className="space-y-2">
                    <Button
                      variant={isSelected ? "default" : "outline"}
                      className="h-auto p-3 text-left justify-start w-full"
                      onClick={() => handleToppingToggle(topping.id)}
                      disabled={!isSelected && totalToppings >= 2}
                    >
                      <div>
                        <div className="font-medium text-sm">{topping.name}</div>
                        <div className="text-xs text-muted-foreground">+GH₵{topping.price.toFixed(2)}</div>
                      </div>
                    </Button>
                    {isSelected && (
                      <div className="flex items-center justify-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => adjustToppingQuantity(topping.id, -1)}
                          disabled={quantity <= 1}
                          className="h-6 w-6 p-0"
                        >
                          -
                        </Button>
                        <span className="text-sm font-medium">{quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => adjustToppingQuantity(topping.id, 1)}
                          disabled={quantity >= 2 || totalToppings >= 2}
                          className="h-6 w-6 p-0"
                        >
                          +
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Selected: {Object.values(toppingQuantities).reduce((sum, qty) => sum + qty, 0)}/2
            </p>
          </div>

          {/* Premium & Extra Toppings */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Premium & Extra Toppings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {premiumToppings.map(topping => (
                <Button
                  key={topping.id}
                  variant={selections.premiumToppings.includes(topping.id) ? "default" : "outline"}
                  className="h-auto p-3 text-left justify-start"
                  onClick={() => handlePremiumToppingToggle(topping.id)}
                >
                  <div>
                    <div className="font-medium text-sm">{topping.name}</div>
                    <div className="text-xs text-muted-foreground">+GH₵{topping.price.toFixed(2)}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Fries */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Fries <span className="text-red-500">*</span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {friesOptions.map(fries => (
                <Button
                  key={fries.id}
                  variant={selections.fries === fries.id ? "default" : "outline"}
                  className="h-auto p-3 text-left justify-start"
                  onClick={() => handleFriesSelect(fries.id)}
                >
                  <div>
                    <div className="font-medium text-sm">{fries.name}</div>
                    <div className="text-xs text-muted-foreground">+GH₵{fries.price.toFixed(2)}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Drinks */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Drinks <span className="text-red-500">*</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {drinkOptions.map(drink => (
                <Button
                  key={drink.id}
                  variant={selections.drink === drink.id ? "default" : "outline"}
                  className="h-auto p-3 text-left justify-start"
                  onClick={() => handleDrinkSelect(drink.id)}
                >
                  <div>
                    <div className="font-medium text-sm">{drink.name}</div>
                    <div className="text-xs text-muted-foreground">+GH₵{drink.price.toFixed(2)}</div>
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
            disabled={!isValid()}
            className="bg-gradient-primary"
          >
            Add to Cart - GH₵{calculateTotalPrice().toFixed(2)}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ComboCustomizationModal;