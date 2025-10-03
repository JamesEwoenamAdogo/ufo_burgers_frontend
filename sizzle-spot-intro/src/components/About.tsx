import { Card, CardContent } from "@/components/ui/card";
import { Beef, Clock, Award, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Beef,
      title: "Premium Ingredients",
      description: "We source only the finest, locally-sourced beef and fresh vegetables for our burgers.",
    },
    {
      icon: Clock,
      title: "Fresh Made Daily",
      description: "Each burger is crafted with premium ingredients to perfection.",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized as the city's best burger joint three years running.",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Our passionate chefs put their heart into every burger they create.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient">UFO Burgers</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Since 2024, we've been bringing cosmic flavors to Earth with passion, quality, and 
              a commitment to serving our community the most otherworldly dining experience possible.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="text-center group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Story Section */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-warm animate-scale-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Our Story
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    What started as a UFO sighting turned into the galaxy's most beloved burger destination. 
                    Our founder, Chef Zara Cosmic, began experimenting with intergalactic burger recipes after a close encounter.
                  </p>
                  <p>
                    Today, we're proud to serve over 500 earthlings daily, each receiving the same attention to cosmic quality 
                    and stellar flavor that made our first burger truly out of this world.
                  </p>
                  <p>
                    Every burger tells a story of cosmic adventure, stellar quality, and universal community - values we hold dear as we 
                    continue to expand our mission across the galaxy.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-gradient-primary p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-primary-foreground">8+</div>
                      <div className="text-primary-foreground/80 text-sm">Years of Excellence</div>
                    </div>
                    <div className="bg-gradient-gold p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-burger-dark">500+</div>
                      <div className="text-burger-dark/80 text-sm">Daily Customers</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-accent p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-accent-foreground">4.9★</div>
                      <div className="text-accent-foreground/80 text-sm">Customer Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;