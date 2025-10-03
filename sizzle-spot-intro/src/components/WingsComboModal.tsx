import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface WingsComboModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: { id: string; name: string; price: number; image: string } | null;
}

interface WingsComboOptions {
  sauce: string;
  drink: string;
}

const WingsComboModal: React.FC<WingsComboModalProps> = ({
  isOpen,
  onClose,
  item
}) => {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const [selections, setSelections] = useState<WingsComboOptions>({
    sauce: '',
    drink: ''
  });

  const sauces = [
    { id: 'honey-mustard', name: 'Honey mustard', price: 0 },
    { id: 'buffalo', name: 'Buffalo', price: 0 },
    { id: 'ufo-sauce', name: 'Ufo Sauce (Mild Spicy)', price: 0 },
    { id: 'barbecue', name: 'Barbecue', price: 0 },
    { id: 'galaxy-sauce', name: 'Galaxy Sauce (Sweet)', price: 0 },
    { id: 'plain', name: 'Plain (No sauce)', price: 0 },
    { id: 'chili', name: 'Chili (powder)', price: 0 }
  ];

  const drinkOptions = [
    { id: 'strawberry-milkshake', name: 'Strawberry Milkshake', price: 28 },
    { id: 'chocolate-milkshake', name: 'Chocolate Milkshake', price: 28 },
    { id: 'vanilla-milkshake', name: 'Vanilla Milkshake', price: 28 },
    { id: 'coke', name: 'Coke', price: 0 },
    { id: 'coke-zero', name: 'Coke Zero', price: 0 },
    { id: 'fanta', name: 'Fanta', price: 0 },
    { id: 'sprite', name: 'Sprite', price: 0 }
  ];

  const handleSauceSelect = (sauceId: string) => {
    setSelections(prev => ({ ...prev, sauce: sauceId }));
  };

  const handleDrinkSelect = (drinkId: string) => {
    setSelections(prev => ({ ...prev, drink: drinkId }));
  };

  const calculateTotalPrice = () => {
    if (!item) return 0;
    
    let total = item.price;
    
    const selectedDrink = drinkOptions.find(d => d.id === selections.drink);
    if (selectedDrink) total += selectedDrink.price;

    return total;
  };

  const isValid = () => {
    return selections.sauce && selections.drink;
  };

  const handleAddToCart = () => {
    if (!item || !isValid()) return;

    const selectedSauceName = sauces.find(s => s.id === selections.sauce)?.name;
    const selectedDrinkName = drinkOptions.find(d => d.id === selections.drink)?.name;

    const customizedName = `${item.name} (${selectedSauceName}, ${selectedDrinkName})`;
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
    setSelections({ sauce: '', drink: '' });
  };

  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Customize Your {item.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Wings Sauce Choice */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Wings Sauce Choice <span className="text-red-500">*</span>
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

export default WingsComboModal;