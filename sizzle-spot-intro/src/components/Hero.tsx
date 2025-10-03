import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-burger.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Gourmet burger hero"
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/10 to-primary/20"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-burger-gold/60 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-burger-gold/30 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-burger-gold/40 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-burger-gold/20 to-primary/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 animate-scale-in border border-burger-gold/30 shadow-2xl">
            <Star className="w-5 h-5 text-burger-gold fill-current animate-pulse" />
            <span className="text-burger-cream font-semibold text-lg tracking-wide">Out of This World</span>
            <Star className="w-5 h-5 text-burger-gold fill-current animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>

          {/* Enhanced Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-burger-cream mb-8 leading-none tracking-tight drop-shadow-2xl">
            <span className="block animate-fade-in">Cosmic</span>
            <span className="block text-gradient bg-gradient-to-r from-burger-gold via-primary via-burger-gold to-primary bg-clip-text text-transparent animate-fade-in drop-shadow-lg" style={{ animationDelay: "0.3s" }}>
              Burgers
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-burger-cream/90 mt-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              From Space
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-burger-cream/95 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in backdrop-blur-sm" style={{ animationDelay: "0.9s" }}>
            Extraterrestrial flavors meet earthly satisfaction. Our cosmic burgers are 
            crafted with <span className="text-burger-gold font-medium">ingredients from across the galaxy</span> for an otherworldly dining experience.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex justify-center mb-16 animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-burger-gold to-primary hover:from-primary hover:to-burger-gold transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-glow text-xl px-12 py-6 group border-2 border-burger-gold/50 hover:border-burger-cream/50 font-bold tracking-wide"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Order Now</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-burger-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-burger-cream/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;