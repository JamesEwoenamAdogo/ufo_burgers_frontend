import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface WingsCustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  wingsItem: any;
}

const WingsCustomizationModal: React.FC<WingsCustomizationModalProps> = ({
  isOpen,
  onClose,
  wingsItem
}) => {
  const { dispatch } = useCart();
  const { toast } = useToast();

  // State for selections
  const [selectedSauce, setSelectedSauce] = useState<string>('');
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Wings sauce options
  const wingsSauceOptions = [
    { id: 'honey-mustard', name: 'Honey mustard', price: 0 },
    { id: 'buffalo', name: 'Buffalo', price: 0 },
    { id: 'ufo-sauce', name: 'Ufo Sauce (Mild Spicy)', price: 0 },
    { id: 'barbecue', name: 'Barbecue', price: 0 },
    { id: 'galaxy-sauce', name: 'Galaxy Sauce (Sweet)', price: 0 },
    { id: 'plain', name: 'Plain (No sauce)', price: 0 },
    { id: 'chili-powder', name: 'Chili (powder)', price: 0 },
  ];

  // Update total price whenever selections change
  useEffect(() => {
    if (!wingsItem) return;
    setTotalPrice(wingsItem.price);
  }, [selectedSauce, wingsItem]);

  const handleAddToCart = () => {
    if (!selectedSauce) {
      toast({
        title: "Please select a sauce",
        description: "Wings sauce selection is required.",
        variant: "destructive",
      });
      return;
    }

    // Create detailed item description
    const selectedSauceName = wingsSauceOptions.find(s => s.id === selectedSauce)?.name || '';

    const description = `${wingsItem.name} with ${selectedSauceName}`;

    const customizedItem = {
      id: `${wingsItem.id}-${Date.now()}`,
      name: description,
      price: totalPrice,
      image: wingsItem.image,
    };

    dispatch({
      type: 'ADD_ITEM',
      payload: customizedItem
    });

    toast({
      title: "Added to cart!",
      description: `Customized ${wingsItem.name} has been added to your cart.`,
    });

    // Reset selections and close modal
    setSelectedSauce('');
    onClose();
  };

  if (!wingsItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Customize Your {wingsItem.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Wings Sauce Choice */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              Wings Sauce Choice
              <Badge variant="destructive" className="ml-2">Required</Badge>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {wingsSauceOptions.map((sauce) => (
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

export default WingsCustomizationModal;