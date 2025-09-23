import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, Flame } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import ufoBeefImage from "@/assets/ufo-beef-burger.jpg";
import galaxyChickenImage from "@/assets/galaxy-chicken-burger.jpg";
import ufoWagyuImage from "@/assets/ufo-wagyu-burger.jpg";
import galaxyChickenBitesImage from "@/assets/galaxy-chicken-bites.jpg";
import galaxyChickenWingsImage from "@/assets/galaxy-chicken-wings.jpg";
import galaxyChickenSandwichImage from "@/assets/galaxy-chicken-sandwich.jpg";
import hotdogBiteImage from "@/assets/hotdog-bite.jpg";
import eggBurgerImage from "@/assets/egg-burger.jpg";
import ufoSauceImage from "@/assets/ufo-sauce.jpg";
import galaxySauceImage from "@/assets/galaxy-sauce.jpg";
import honeyMustardImage from "@/assets/honey-mustard.jpg";
import barbecueSauceImage from "@/assets/barbecue-sauce.jpg";
import buffaloSauceImage from "@/assets/buffalo-sauce.jpg";
import mayoImage from "@/assets/mayo.jpg";
import ketchupImage from "@/assets/ketchup.jpg";
import mustardImage from "@/assets/mustard.jpg";
import shitoSauceImage from "@/assets/shito-sauce.jpg";
import flakesCornDogImage from "@/assets/flakes-corn-dog.jpg";
import indomieCornDogImage from "@/assets/indomie-corn-dog.jpg";
import cheesySausageDogImage from "@/assets/cheesy-sausage-dog.jpg";
import cheeseFlakesCornDogImage from "@/assets/cheese-flakes-corn-dog.jpg";
import cheeseIndomieCornDogImage from "@/assets/cheese-indomie-corn-dog.jpg";
import picklesImage from "@/assets/pickles.jpg";
import jalapenoImage from "@/assets/jalapeno-peppers.jpg";
import cabbageImage from "@/assets/cabbage.jpg";
import dicedOnionsImage from "@/assets/diced-onions.jpg";
import caramelizedOnionsImage from "@/assets/caramelized-onions.jpg";
import friedEggImage from "@/assets/fried-egg.jpg";
import americanCheeseImage from "@/assets/american-cheese.jpg";
import baconImage from "@/assets/bacon.jpg";
import extraBeefPattyImage from "@/assets/extra-beef-patty.jpg";
import extraWagyuPattyImage from "@/assets/extra-wagyu-patty.jpg";
import extraGalaxyChickenImage from "@/assets/extra-galaxy-chicken.jpg";
import cornDogsToppingImage from "@/assets/corn-dogs-topping.jpg";
import friesImage from "@/assets/fries.jpg";
import yamImage from "@/assets/yam.jpg";
import sweetPotatoesImage from "@/assets/sweet-potatoes.jpg";
import sweetBurgersImage from "@/assets/sweet-burgers.jpg";
import nutellaBurgerImage from "@/assets/nutella-burger.jpg";
import peanutBurgerImage from "@/assets/peanut-burger.jpg";
import waterImage from "@/assets/water.jpg";
import softDrinksImage from "@/assets/soft-drinks.jpg";
import juiceImage from "@/assets/juice.jpg";
import beerImage from "@/assets/beer.jpg";
import milkshakeImage from "@/assets/milkshake.jpg";

const Menu = () => {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const menuItems = [
    {
      id: 'ufo-beef',
      name: "UFO BEEF BURGER",
      description: "Grilled beef patty, American cheese, your choice of sauce, and two toppings, in a crispy brioche bun",
      price: 90.00,
      rating: 4.8,
      time: "12min",
      isSpicy: false,
      popular: true,
      image: ufoBeefImage,
    },
    {
      id: 'galaxy-chicken',
      name: "GALAXY CHICKEN BURGER",
      description: "Fried chicken breast, American cheese, your choice of sauce, and two toppings, in a crispy brioche bun",
      price: 90.00,
      rating: 4.9,
      time: "12min",
      isSpicy: false,
      popular: true,
      image: galaxyChickenImage,
    },
    {
      id: 'ufo-wagyu',
      name: "UFO BEEF WAGYU BURGER",
      description: "Grilled Wagyu Beef patty, American cheese, your choice of sauce, and two toppings, in a crispy brioche bun",
      price: 150.00,
      rating: 4.9,
      time: "15min",
      isSpicy: false,
      popular: true,
      image: ufoWagyuImage,
    },
    {
      id: 'galaxy-chicken-bites',
      name: "GALAXY CHICKEN BITES",
      description: "Crispy, tender chicken bites coated in crunchy corn flakes with your choice of sauce",
      price: 90.00,
      rating: 4.7,
      time: "8min",
      isSpicy: false,
      popular: false,
      image: galaxyChickenBitesImage,
    },
    {
      id: 'galaxy-chicken-wings',
      name: "GALAXY CHICKEN WINGS X6",
      description: "Crispy, tender chicken wings tossed in your choice of sauce",
      price: 60.00,
      rating: 4.6,
      time: "10min",
      isSpicy: false,
      popular: false,
      image: galaxyChickenWingsImage,
    },
    {
      id: 'galaxy-chicken-sandwich',
      name: "GALAXY CHICKEN SANDWICH",
      description: "Crispy tender fried chicken breast, cabbage, your choice of sauce, and two toppings, in a soft bun",
      price: 50.00,
      rating: 4.5,
      time: "8min",
      isSpicy: false,
      popular: false,
      image: galaxyChickenSandwichImage,
    },
    {
      id: 'hotdog-bite',
      name: "HOTDOG BITE",
      description: "Chicken hotdog, cabbage, your choice of sauce, and two toppings, in a soft bun",
      price: 30.00,
      rating: 4.4,
      time: "6min",
      isSpicy: false,
      popular: false,
      image: hotdogBiteImage,
    },
    {
      id: 'egg-burger',
      name: "EGG BURGER",
      description: "Egg, American cheese, your choice of sauce, and two toppings, in a soft bun",
      price: 50.00,
      rating: 4.3,
      time: "7min",
      isSpicy: false,
      popular: false,
      image: eggBurgerImage,
    },
  ];

  const sauceItems = [
    {
      id: 'ufo-sauce',
      name: "UFO SAUCE",
      description: "Our signature UFO sauce blend",
      price: 5.00,
      rating: 4.8,
      time: "Available",
      isSpicy: false,
      popular: true,
      image: ufoSauceImage,
    },
    {
      id: 'galaxy-sauce',
      name: "GALAXY SAUCE",
      description: "Cosmic galaxy flavored sauce",
      price: 5.00,
      rating: 4.7,
      time: "Available",
      isSpicy: false,
      popular: true,
      image: galaxySauceImage,
    },
    {
      id: 'honey-mustard',
      name: "HONEY MUSTARD",
      description: "Sweet and tangy honey mustard",
      price: 5.00,
      rating: 4.6,
      time: "Available",
      isSpicy: false,
      popular: false,
      image: honeyMustardImage,
    },
    {
      id: 'barbecue',
      name: "BARBECUE",
      description: "Rich and smoky barbecue sauce",
      price: 5.00,
      rating: 4.5,
      time: "Available",
      isSpicy: false,
      popular: false,
      image: barbecueSauceImage,
    },
    {
      id: 'buffalo',
      name: "BUFFALO",
      description: "Spicy buffalo wing sauce",
      price: 5.00,
      rating: 4.4,
      time: "Available",
      isSpicy: true,
      popular: false,
      image: buffaloSauceImage,
    },
    {
      id: 'mayo',
      name: "MAYO",
      description: "Creamy mayonnaise",
      price: 5.00,
      rating: 4.3,
      time: "Available",
      isSpicy: false,
      popular: false,
      image: mayoImage,
    },
    {
      id: 'ketchup',
      name: "KETCHUP",
      description: "Classic tomato ketchup",
      price: 5.00,
      rating: 4.2,
      time: "Available",
      isSpicy: false,
      popular: false,
      image: ketchupImage,
    },
    {
      id: 'mustard',
      name: "MUSTARD",
      description: "Tangy yellow mustard",
      price: 5.00,
      rating: 4.1,
      time: "Available",
      isSpicy: false,
      popular: false,
      image: mustardImage,
    },
    {
      id: 'shito',
      name: "SHITO",
      description: "Spicy African pepper sauce",
      price: 5.00,
      rating: 4.9,
      time: "Available",
      isSpicy: true,
      popular: true,
      image: shitoSauceImage,
    },
  ];

  const cornDogItems = [
    {
      id: 'flakes-corn-dog',
      name: "FLAKES CORN DOG X2",
      description: "Crispy hotdog coated in crunchy corn flakes",
      price: 60.00,
      rating: 4.5,
      time: "8min",
      isSpicy: false,
      popular: false,
      image: flakesCornDogImage,
    },
    {
      id: 'indomie-corn-dog',
      name: "INDOMIE CORN DOG X2",
      description: "Crispy hotdog coated in crunchy Indomie",
      price: 60.00,
      rating: 4.6,
      time: "8min",
      isSpicy: false,
      popular: false,
      image: indomieCornDogImage,
    },
    {
      id: 'cheesy-sausage-dog',
      name: "CHEESY SAUSAGE DOG X2",
      description: "Crispy hotdog & mozzarella coated in crunchy corn flakes",
      price: 70.00,
      rating: 4.7,
      time: "10min",
      isSpicy: false,
      popular: true,
      image: cheesySausageDogImage,
    },
    {
      id: 'cheese-flakes-corn-dog',
      name: "CHEESE FLAKES CORN DOG X2",
      description: "Crispy mozzarella coated in crunchy corn flakes",
      price: 80.00,
      rating: 4.8,
      time: "10min",
      isSpicy: false,
      popular: true,
      image: cheeseFlakesCornDogImage,
    },
    {
      id: 'cheese-indomie-corn-dog',
      name: "CHEESE INDOMIE CORN DOG X2",
      description: "Crispy mozzarella coated in crunchy Indomie",
      price: 80.00,
      rating: 4.8,
      time: "10min",
      isSpicy: false,
      popular: false,
      image: cheeseIndomieCornDogImage,
    },
  ];

  const premiumToppingsItems = [
    {
      id: 'fried-egg',
      name: "EGG",
      description: "Fresh fried egg with runny yolk",
      price: 5.00,
      rating: 4.6,
      time: "Available",
      isSpicy: false,
      popular: true,
      image: friedEggImage,
    },
    {
      id: 'american-cheese-topping',
      name: "AMERICAN CHEESE",
      description: "Extra slice of melted American cheese",
      price: 10.00,
      rating: 4.5,
      time: "Available",
      isSpicy: false,
      popular: true,
      image: americanCheeseImage,
    },
    {
      id: 'bacon-topping',
      name: "BACON",
      description: "Crispy bacon strips for smoky flavor",
      price: 10.00,
      rating: 4.8,
      time: "Available",
      isSpicy: false,
      popular: true,
      image: baconImage,
    },
    {
      id: 'extra-beef-patty',
      name: "EXTRA BEEF PATTY",
      description: "Additional grilled beef patty for double the meat",
      price: 20.00,
      rating: 4.9,
      time: "Available",
      isSpicy: false,
      popular: true,
      image: extraBeefPattyImage,
    },
    {
      id: 'extra-wagyu-patty',
      name: "EXTRA WAGYU PATTY",
      description: "Premium wagyu beef patty for ultimate indulgence",
      price: 30.00,
      rating: 5.0,
      time: "Available",
      isSpicy: false,
      popular: true,
      image: extraWagyuPattyImage,
    },
    {
      id: 'extra-galaxy-chicken',
      name: "EXTRA GALAXY CHICKEN",
      description: "Additional crispy fried chicken breast",
      price: 50.00,
      rating: 4.9,
      time: "Available",
      isSpicy: false,
      popular: true,
      image: extraGalaxyChickenImage,
    },
    {
      id: 'corn-dogs-topping',
      name: "CORN DOGS",
      description: "Mini corn dogs as a unique burger topping",
      price: 30.00,
      rating: 4.4,
      time: "Available",
      isSpicy: false,
      popular: false,
      image: cornDogsToppingImage,
    },
  ];

  const sidesItems = [
    {
      id: 'fries',
      name: "FRIES",
      description: "Golden crispy french fries",
      price: 60.00,
      rating: 4.5,
      time: "5min",
      isSpicy: false,
      popular: true,
      image: friesImage,
    },
    {
      id: 'yam',
      name: "YAM",
      description: "Fresh roasted yam slices",
      price: 60.00,
      rating: 4.3,
      time: "8min",
      isSpicy: false,
      popular: false,
      image: yamImage,
    },
    {
      id: 'sweet-potatoes',
      name: "SWEET POTATOES",
      description: "Golden sweet potato fries",
      price: 70.00,
      rating: 4.6,
      time: "8min",
      isSpicy: false,
      popular: true,
      image: sweetPotatoesImage,
    },
  ];

  const sweetBurgerItems = [
    {
      id: 'nutella-burger',
      name: "NUTELLA BURGER",
      description: "Nutella, banana, and ice cream, all wrapped in a crispy brioche bun",
      price: 80.00,
      rating: 4.8,
      time: "8min",
      isSpicy: false,
      popular: true,
      image: nutellaBurgerImage,
    },
    {
      id: 'peanut-burger',
      name: "PEANUT BURGER",
      description: "Creamy peanut butter and ice cream in a crispy brioche bun",
      price: 30.00,
      rating: 4.7,
      time: "8min",
      isSpicy: false,
      popular: true,
      image: peanutBurgerImage,
    },
  ];

  const drinksItems = [
    {
      id: 'water',
      name: "WATER",
      description: "Crystal clear refreshing water",
      price: 5.00,
      rating: 4.2,
      time: "Available",
      isSpicy: false,
      popular: false,
      image: waterImage,
    },
    {
      id: 'soft-drinks',
      name: "SOFT DRINKS",
      description: "Assorted soft drinks and sodas",
      price: 5.00,
      rating: 4.3,
      time: "Available",
      isSpicy: false,
      popular: true,
      image: softDrinksImage,
    },
    {
      id: 'juice',
      name: "JUICE",
      description: "Fresh fruit juices",
      price: 15.00,
      rating: 4.5,
      time: "Available",
      isSpicy: false,
      popular: true,
      image: juiceImage,
    },
    {
      id: 'beer',
      name: "BEER",
      description: "Cold beer bottles",
      price: 30.00,
      rating: 4.6,
      time: "Available",
      isSpicy: false,
      popular: false,
      image: beerImage,
    },
    {
      id: 'milkshake',
      name: "MILKSHAKE",
      description: "Creamy milkshakes in various flavors",
      price: 40.00,
      rating: 4.8,
      time: "5min",
      isSpicy: false,
      popular: true,
      image: milkshakeImage,
    },
  ];

  const addToCart = (item: typeof menuItems[0] | typeof sauceItems[0] | typeof cornDogItems[0] | typeof premiumToppingsItems[0] | typeof sidesItems[0] | typeof sweetBurgerItems[0] | typeof drinksItems[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      }
    });

    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const renderMenuItems = (items: any[], title: string) => (
    <div className="space-y-6">
      <h3 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
        <span className="text-gradient">{title}</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card 
            key={item.name} 
            className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 relative overflow-hidden animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.popular && (
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </span>
              </div>
            )}
            
            <CardContent className="p-6">
              {/* Item Image */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <span className="text-2xl font-bold text-primary">₵{item.price.toFixed(2)}</span>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-burger-gold fill-current" />
                    <span>{item.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                  {item.isSpicy && (
                    <div className="flex items-center space-x-1">
                      <Flame className="w-4 h-4 text-burger-red" />
                      <span>Spicy</span>
                    </div>
                  )}
                </div>
              </div>
              
              <Button 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 btn-glow"
                onClick={() => addToCart(item)}
              >
                Add to Cart - ₵{item.price.toFixed(2)}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient">Signature Menu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each burger is crafted with premium ingredients and grilled to perfection
          </p>
        </div>

        {/* Tabbed Menu */}
        <Tabs defaultValue="main-menu" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
            <TabsTrigger value="main-menu" className="text-sm">Main Menu</TabsTrigger>
            <TabsTrigger value="corn-dogs" className="text-sm">Corn Dogs</TabsTrigger>
            <TabsTrigger value="premium-toppings" className="text-sm">Premium Toppings</TabsTrigger>
            <TabsTrigger value="sauces" className="text-sm">Sauces</TabsTrigger>
            <TabsTrigger value="sides" className="text-sm">Sides</TabsTrigger>
            <TabsTrigger value="sweet-burger" className="text-sm">Sweet Burger</TabsTrigger>
            <TabsTrigger value="drinks" className="text-sm">Drinks</TabsTrigger>
          </TabsList>

          <TabsContent value="main-menu" className="mt-6">
            {renderMenuItems(menuItems, "Main Menu")}
          </TabsContent>

          <TabsContent value="corn-dogs" className="mt-6">
            {renderMenuItems(cornDogItems, "Corn Dogs")}
          </TabsContent>

          <TabsContent value="premium-toppings" className="mt-6">
            {renderMenuItems(premiumToppingsItems, "Premium Toppings")}
          </TabsContent>

          <TabsContent value="sauces" className="mt-6">
            {renderMenuItems(sauceItems, "Sauces")}
          </TabsContent>

          <TabsContent value="sides" className="mt-6">
            {renderMenuItems(sidesItems, "Sides")}
          </TabsContent>

          <TabsContent value="sweet-burger" className="mt-6">
            {renderMenuItems(sweetBurgerItems, "Sweet Burger")}
          </TabsContent>

          <TabsContent value="drinks" className="mt-6">
            {renderMenuItems(drinksItems, "Drinks")}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;