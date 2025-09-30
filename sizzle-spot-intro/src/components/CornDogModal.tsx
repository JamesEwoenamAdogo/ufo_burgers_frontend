import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface CornDogModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

export function CornDogModal({ isOpen, onClose, item }: CornDogModalProps) {
  const [selectedSauce, setSelectedSauce] = useState<string>('mustard');
  const { dispatch } = useCart();

  const sauces = [
    { id: 'mustard', name: 'Mustard', price: 0 },
    { id: 'mayo', name: 'Mayo', price: 0 },
    { id: 'ketchup', name: 'Ketchup', price: 0 },
    { id: 'shito', name: 'Shito', price: 0 },
  ];

  const handleAddToCart = () => {
    const selectedSauceObj = sauces.find(sauce => sauce.id === selectedSauce);
    const totalPrice = item.price + (selectedSauceObj?.price || 0);
    
    const customizedItem = {
      id: `${item.id}-${selectedSauce}-${Date.now()}`,
      name: `${item.name} with ${selectedSauceObj?.name}`,
      price: totalPrice,
      image: item.image,
    };

    dispatch({ type: 'ADD_ITEM', payload: customizedItem });
    toast.success(`${customizedItem.name} added to cart!`);
    onClose();
    setSelectedSauce('mustard');
  };

  const calculateTotalPrice = () => {
    const selectedSauceObj = sauces.find(sauce => sauce.id === selectedSauce);
    return item.price + (selectedSauceObj?.price || 0);
  };

  if (!item) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle>{item.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-red-600">Sides & Bites Sauce Choice</h3>
            <p className="text-sm text-gray-600 mb-3">Required</p>
            <RadioGroup value={selectedSauce} onValueChange={setSelectedSauce}>
              {sauces.map((sauce) => (
                <div key={sauce.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={sauce.id} id={sauce.id} />
                    <Label htmlFor={sauce.id} className="font-normal">
                      {sauce.name}
                    </Label>
                  </div>
                  <span className="text-sm font-medium">
                    +GH₵{sauce.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <span className="font-semibold">Total: GH₵{calculateTotalPrice().toFixed(2)}</span>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleAddToCart} className="flex-1">
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}