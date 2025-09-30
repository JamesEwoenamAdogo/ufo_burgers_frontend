import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, Flame } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import ComboCustomizationModal from "./ComboCustomizationModal";
import SpecialFriesModal from "./SpecialFriesModal";
import WingsComboModal from "./WingsComboModal";
import BurgerCustomizationModal from "./BurgerCustomizationModal";
import WingsCustomizationModal from "./WingsCustomization";
import { CornDogModal } from "./CornDogModal";
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
  const [comboModalOpen, setComboModalOpen] = useState(false);
  const [selectedComboItem, setSelectedComboItem] = useState<any>(null);
  const [specialFriesModalOpen, setSpecialFriesModalOpen] = useState(false);
  const [selectedSpecialFriesItem, setSelectedSpecialFriesItem] = useState<any>(null);
  const [wingsComboModalOpen, setWingsComboModalOpen] = useState(false);
  const [selectedWingsComboItem, setSelectedWingsComboItem] = useState<any>(null);
  const [burgerModalOpen, setBurgerModalOpen] = useState(false);
  const [selectedBurgerItem, setSelectedBurgerItem] = useState<any>(null);
  const [wingsModalOpen, setWingsModalOpen] = useState(false);
  const [selectedWingsItem, setSelectedWingsItem] = useState<any>(null);
  const [cornDogModalOpen, setCornDogModalOpen] = useState(false);
  const [selectedCornDogItem, setSelectedCornDogItem] = useState<any>(null);

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
      id: 'golden-fried-rice',
      name: "GOLDEN FRIED RICE",
      description: "Fluffy rice stir-fried with egg",
      price: 50.00,
      rating: 4.6,
      time: "8min",
      isSpicy: false,
      popular: true,
      image: friesImage, // Using fries image as placeholder
    },
    {
      id: 'french-fries',
      name: "FRENCH FRIES",
      description: "Crispy, golden-brown potato fries, a classic side dish or snack",
      price: 40.00,
      rating: 4.5,
      time: "5min",
      isSpicy: false,
      popular: true,
      image: friesImage,
    },
    {
      id: 'sweet-potato-fries',
      name: "SWEET POTATO FRIES",
      description: "Crispy and golden, our sweet potato fries offer a delightful blend of sweetness and savory flavor",
      price: 45.00,
      rating: 4.6,
      time: "6min",
      isSpicy: false,
      popular: true,
      image: sweetPotatoesImage,
    },
    {
      id: 'yam-chips',
      name: "YAM CHIPS",
      description: "Golden and crispy yam fries seasoned to perfection and make a fantastic side dish for your favorite burger!",
      price: 30.00,
      rating: 4.4,
      time: "6min",
      isSpicy: false,
      popular: false,
      image: yamImage,
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

  const newItems = [
    {
      id: 'ufo-special-fries',
      name: "UFO SPECIAL FRIES",
      description: "Crispy golden fries loaded with tender Galaxy chicken, marinated in cosmic spices and glazed with UFO secret sauce, topped with melted cheese.",
      price: 170.00,
      rating: 4.9,
      time: "15min",
      isSpicy: false,
      popular: true,
      image: friesImage,
    },
    {
      id: 'golden-fried-rice',
      name: "GOLDEN FRIED RICE",
      description: "Fluffy rice stir-fried with egg",
      price: 50.00,
      rating: 4.6,
      time: "12min",
      isSpicy: false,
      popular: false,
      image: friesImage, // Using fries image as placeholder
    },
    {
      id: 'galaxy-wings-combo2',
      name: "GALAXY CHICKEN WINGS COMBO2",
      description: "6pcs of galaxy wings with ufo golden fried rice and your choice of drink",
      price: 150.00,
      rating: 4.8,
      time: "18min",
      isSpicy: false,
      popular: true,
      image: galaxyChickenWingsImage,
    },
    {
      id: 'ufo-beef-wing-combo',
      name: "UFO BEEF BURGER & WING COMBO",
      description: "Your favorite UFO beef burger with a side of french fries, Drink and additional 2PCS. of Galaxy wings",
      price: 170.00,
      rating: 4.9,
      time: "20min",
      isSpicy: false,
      popular: true,
      image: ufoBeefImage,
    },
    {
      id: 'galaxy-chicken-wing-combo',
      name: "GALAXY CHICKEN BURGER & WING COMBO",
      description: "Your favorite Galaxy chicken burger with a side of french fries, Drink and additional 2PCS. of Galaxy wings",
      price: 160.00,
      rating: 4.8,
      time: "20min",
      isSpicy: false,
      popular: true,
      image: galaxyChickenImage,
    },
    {
      id: 'ufo-wagyu-wing-combo',
      name: "UFO WAGYU BEEF BURGER & WING COMBO",
      description: "Your favorite UFO Wagyu beef burger with a side of french fries, Drink and additional 2PCS. of Galaxy wings",
      price: 220.00,
      rating: 5.0,
      time: "22min",
      isSpicy: false,
      popular: true,
      image: ufoWagyuImage,
    },
  ];

  const comboItems = [
    {
      id: 'ufo-beef-combo',
      name: "UFO BEEF BURGER COMBO",
      description: "UFO Beef Burger + Fries + Drink",
      price: 150.00,
      rating: 4.8,
      time: "15min",
      isSpicy: false,
      popular: true,
      image: ufoBeefImage,
    },
    {
      id: 'ufo-wagyu-combo',
      name: "UFO WAGYU BEEF BURGER COMBO",
      description: "UFO Wagyu Beef Burger + Fries + Drink",
      price: 200.00,
      rating: 4.9,
      time: "18min",
      isSpicy: false,
      popular: true,
      image: ufoWagyuImage,
    },
    {
      id: 'galaxy-chicken-combo',
      name: "GALAXY CHICKEN BURGER COMBO",
      description: "Galaxy Chicken Burger + Fries + Drink",
      price: 140.00,
      rating: 4.7,
      time: "15min",
      isSpicy: false,
      popular: true,
      image: galaxyChickenImage,
    },
    {
      id: 'galaxy-wings-combo',
      name: "GALAXY CHICKEN WINGS COMBO",
      description: "Galaxy chicken wings + yam + drink",
      price: 130.00,
      rating: 4.6,
      time: "12min",
      isSpicy: false,
      popular: false,
      image: galaxyChickenWingsImage,
    },
    {
      id: 'galaxy-wings-combo2-combo',
      name: "GALAXY CHICKEN WINGS COMBO2",
      description: "6pcs of galaxy wings with ufo golden fried rice and your choice of drink",
      price: 150.00,
      rating: 4.8,
      time: "18min",
      isSpicy: false,
      popular: true,
      image: galaxyChickenWingsImage,
    },
    {
      id: 'galaxy-bites-combo',
      name: "GALAXY CHICKEN BITES COMBO",
      description: "Galaxy chicken bites + fries + Drink",
      price: 140.00,
      rating: 4.5,
      time: "10min",
      isSpicy: false,
      popular: false,
      image: galaxyChickenBitesImage,
    },
    {
      id: 'ufo-beef-wing-combo-combo',
      name: "UFO BEEF BURGER & WING COMBO",
      description: "Your favorite UFO beef burger with a side of french fries, Drink and additional 2PCS. of Galaxy wings",
      price: 170.00,
      rating: 4.9,
      time: "20min",
      isSpicy: false,
      popular: true,
      image: ufoBeefImage,
    },
    {
      id: 'galaxy-chicken-wing-combo-combo',
      name: "GALAXY CHICKEN BURGER & WING COMBO",
      description: "Your favorite Galaxy chicken burger with a side of french fries, Drink and additional 2PCS. of Galaxy wings",
      price: 160.00,
      rating: 4.8,
      time: "20min",
      isSpicy: false,
      popular: true,
      image: galaxyChickenImage,
    },
    {
      id: 'ufo-wagyu-wing-combo-combo',
      name: "UFO WAGYU BEEF BURGER & WING COMBO",
      description: "Your favorite UFO Wagyu beef burger with a side of french fries, Drink and additional 2PCS. of Galaxy wings",
      price: 220.00,
      rating: 5.0,
      time: "22min",
      isSpicy: false,
      popular: true,
      image: ufoWagyuImage,
    },
  ];

  const burgersAndWingsItems = [
    {
      id: 'ufo-wagyu-beef-burger',
      name: "UFO WAGYU BEEF BURGER",
      description: "Grilled wagyu beef patty. American cheese, your choice of sauce, and two toppings, in a crispy brioche bun.",
      price: 180.00,
      rating: 4.9,
      time: "15min",
      isSpicy: false,
      popular: true,
      image: ufoWagyuImage,
    },
    {
      id: 'ufo-beef-burger-burgers-wings',
      name: "UFO BEEF BURGER",
      description: "Grilled beef patty, american cheese, your choice of sauce, and two toppings. In a crispy brioche bun.",
      price: 130.00,
      rating: 4.8,
      time: "12min",
      isSpicy: false,
      popular: true,
      image: ufoBeefImage,
    },
    {
      id: 'galaxy-chicken-burger-burgers-wings',
      name: "GALAXY CHICKEN BURGER",
      description: "Fried chicken breast, american cheese, your choice of sauce, and two toppings. In a crispy brioche bun.",
      price: 120.00,
      rating: 4.7,
      time: "12min",
      isSpicy: false,
      popular: true,
      image: galaxyChickenImage,
    },
    {
      id: 'ufo-egg-burger',
      name: "UFO EGG BURGER",
      description: "Egg, American Cheese, your choice of sauce, and two toppings, in a crispy brioche bun",
      price: 70.00,
      rating: 4.3,
      time: "7min",
      isSpicy: false,
      popular: false,
      image: eggBurgerImage,
    },
    {
      id: 'galaxy-chicken-wings-burgers-wings',
      name: "GALAXY CHICKEN WINGS",
      description: "Crispy, tender chicken wings tossed in your choice of sauce (6PCs).",
      price: 90.00,
      rating: 4.6,
      time: "10min",
      isSpicy: false,
      popular: true,
      image: galaxyChickenWingsImage,
    },
  ];

  const bitesItems = [
    {
      id: 'ufo-special-fries-bites',
      name: "UFO SPECIAL FRIES",
      description: "Crispy golden fries loaded with tender Galaxy chicken, marinated in cosmic spices and glazed with UFO secret sauce, topped with melted cheese.",
      price: 170.00,
      rating: 4.9,
      time: "15min",
      isSpicy: false,
      popular: true,
      image: friesImage,
    },
    {
      id: 'galaxy-chicken-bites-bites',
      name: "GALAXY CHICKEN BITES",
      description: "Crispy, tender chicken bites coated in crunchy corn flakes with your choice of sauce.",
      price: 130.00,
      rating: 4.7,
      time: "8min",
      isSpicy: false,
      popular: true,
      image: galaxyChickenBitesImage,
    },
    {
      id: 'galaxy-chicken-sandwich-bites',
      name: "GALAXY CHICKEN SANDWICH",
      description: "Crispy tender fried chicken breast, cabbage, your choice of sauce, and two toppings, in a soft bun.",
      price: 70.00,
      rating: 4.5,
      time: "8min",
      isSpicy: false,
      popular: false,
      image: galaxyChickenSandwichImage,
    },
    {
      id: 'corndog-bite-bites',
      name: "CORNDOG BITE",
      description: "Crispy hotdog coated in flakes, cabbage, your choice of sauce, and two toppings, in a soft bun.",
      price: 45.00,
      rating: 4.4,
      time: "6min",
      isSpicy: false,
      popular: false,
      image: flakesCornDogImage,
    },
    {
      id: 'hotdog-bite-bites',
      name: "HOTDOG BITE",
      description: "Chicken hotdog, cabbage, your choice of sauce. and two toppings, in a soft bun.",
      price: 45.00,
      rating: 4.4,
      time: "6min",
      isSpicy: false,
      popular: false,
      image: hotdogBiteImage,
    },
  ];

  const addToCart = (item: typeof menuItems[0] | typeof sauceItems[0] | typeof cornDogItems[0] | typeof premiumToppingsItems[0] | typeof sidesItems[0] | typeof drinksItems[0] | typeof newItems[0] | typeof comboItems[0] | typeof burgersAndWingsItems[0] | typeof bitesItems[0]) => {
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

  const handleComboClick = (item: any) => {
    setSelectedComboItem(item);
    setComboModalOpen(true);
  };

  const handleSpecialFriesClick = (item: any) => {
    setSelectedSpecialFriesItem(item);
    setSpecialFriesModalOpen(true);
  };

  const handleWingsComboClick = (item: any) => {
    setSelectedWingsComboItem(item);
    setWingsComboModalOpen(true);
  };

  const handleBurgerClick = (item: any) => {
    setSelectedBurgerItem(item);
    setBurgerModalOpen(true);
  };

  const handleWingsClick = (item: any) => {
    setSelectedWingsItem(item);
    setWingsModalOpen(true);
  };

  const handleCornDogClick = (item: any) => {
    setSelectedCornDogItem(item);
    setCornDogModalOpen(true);
  };

  const handleItemClick = (item: any) => {
    // Check if it's UFO special fries
    if (item.id === 'ufo-special-fries' || item.id === 'ufo-special-fries-bites') {
      handleSpecialFriesClick(item);
    }
    // Check if it's Galaxy Chicken Bites (bites category)
    else if (item.id === 'galaxy-chicken-bites-bites') {
      handleWingsClick(item);
    }
    // Check if it's Galaxy Chicken Sandwich (bites category)
    else if (item.id === 'galaxy-chicken-sandwich-bites') {
      handleBurgerClick(item);
    }
    // Check if it's corn dog bite or hot dog bite (bites category)
    else if (item.id === 'corndog-bite-bites' || item.id === 'hotdog-bite-bites') {
      handleBurgerClick(item);
    }
    // Check if it's Galaxy Chicken wings combos
    else if (item.id === 'galaxy-wings-combo' || item.id === 'galaxy-wings-combo2' || item.id === 'galaxy-wings-combo2-combo') {
      handleWingsComboClick(item);
    }
    // Check if it's burger & wing combos that need full customization
    else if (item.id.includes('wing-combo') && (item.id.includes('ufo-beef') || item.id.includes('galaxy-chicken') || item.id.includes('ufo-wagyu'))) {
      handleComboClick(item);
    }
    // Check if it's individual burgers that need customization
    else if (item.id === 'ufo-beef' || item.id === 'ufo-wagyu' || item.id === 'ufo-wagyu-beef-burger' || item.id === 'ufo-beef-burger-burgers-wings' || item.id === 'galaxy-chicken-burger-burgers-wings' || item.id === 'ufo-egg-burger') {
      handleBurgerClick(item);
    }
    // Check if it's galaxy chicken wings that need wings customization
    else if (item.id === 'galaxy-chicken-wings-burgers-wings') {
      handleWingsClick(item);
    }
    // Check if it's any corn dog item that needs corn dog customization
    else if (cornDogItems.some(cornDogItem => cornDogItem.id === item.id)) {
      handleCornDogClick(item);
    }
    // Regular add to cart
    else {
      addToCart(item);
    }
  };

  const renderMenuItems = (items: any[], title: string, isCombo: boolean = false, isSpecialHandling: boolean = false) => (
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
                onClick={() => isCombo ? handleComboClick(item) : isSpecialHandling ? handleItemClick(item) : addToCart(item)}
              >
                {(isCombo || isSpecialHandling) ? "Customize" : "Add to Cart"} - ₵{item.price.toFixed(2)}
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
        <Tabs defaultValue="new" className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 mb-8">
            <TabsTrigger value="new" className="text-sm">New</TabsTrigger>
            <TabsTrigger value="combo" className="text-sm">Combo</TabsTrigger>
            <TabsTrigger value="burgers-wings" className="text-sm">Burgers & Wings</TabsTrigger>
            <TabsTrigger value="bites" className="text-sm">Bites</TabsTrigger>
            <TabsTrigger value="main-menu" className="text-sm">Main Menu</TabsTrigger>
            <TabsTrigger value="corn-dogs" className="text-sm">Corn Dogs</TabsTrigger>
            <TabsTrigger value="premium-toppings" className="text-sm">Premium Toppings</TabsTrigger>
            <TabsTrigger value="sauces" className="text-sm">Sauces</TabsTrigger>
            <TabsTrigger value="sides" className="text-sm">Sides</TabsTrigger>
            <TabsTrigger value="drinks" className="text-sm">Drinks</TabsTrigger>
          </TabsList>

          <TabsContent value="new" className="mt-6">
            {renderMenuItems(newItems, "New", false, true)}
          </TabsContent>

          <TabsContent value="combo" className="mt-6">
            {renderMenuItems(comboItems, "Combo", true)}
          </TabsContent>

          <TabsContent value="burgers-wings" className="mt-6">
            {renderMenuItems(burgersAndWingsItems, "Burgers & Wings", false, true)}
          </TabsContent>

          <TabsContent value="bites" className="mt-6">
            {renderMenuItems(bitesItems, "Bites", false, true)}
          </TabsContent>

          <TabsContent value="main-menu" className="mt-6">
            {renderMenuItems(menuItems, "Main Menu", false, true)}
          </TabsContent>

          <TabsContent value="corn-dogs" className="mt-6">
            {renderMenuItems(cornDogItems, "Corn Dogs", false, true)}
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

          <TabsContent value="drinks" className="mt-6">
            {renderMenuItems(drinksItems, "Drinks")}
          </TabsContent>
        </Tabs>

        <ComboCustomizationModal
          isOpen={comboModalOpen}
          onClose={() => setComboModalOpen(false)}
          comboItem={selectedComboItem}
        />
        
        <SpecialFriesModal
          isOpen={specialFriesModalOpen}
          onClose={() => setSpecialFriesModalOpen(false)}
          item={selectedSpecialFriesItem}
        />
        
        <WingsComboModal
          isOpen={wingsComboModalOpen}
          onClose={() => setWingsComboModalOpen(false)}
          item={selectedWingsComboItem}
        />
        
        <BurgerCustomizationModal
          isOpen={burgerModalOpen}
          onClose={() => setBurgerModalOpen(false)}
          burgerItem={selectedBurgerItem}
        />
        
        <WingsCustomizationModal
          isOpen={wingsModalOpen}
          onClose={() => setWingsModalOpen(false)}
          wingsItem={selectedWingsItem}
        />
        
        <CornDogModal
          isOpen={cornDogModalOpen}
          onClose={() => setCornDogModalOpen(false)}
          item={selectedCornDogItem}
        />
      </div>
    </section>
  );
};

export default Menu;