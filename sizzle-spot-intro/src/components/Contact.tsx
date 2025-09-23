import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Burger Street", "Downtown District", "New York, NY 10001"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-BURG", "(555) 123-2874", "Call for reservations"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Thu: 11AM - 10PM", "Fri-Sat: 11AM - 11PM", "Sun: 12PM - 9PM"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@ufoburgers.com", "orders@ufoburgers.com", "We reply within 24hrs"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Visit <span className="text-gradient">UFO Burgers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Come hungry, leave cosmic! We can't wait to serve you our out-of-this-world burgers.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="text-center group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <info.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p 
                        key={detailIndex} 
                        className={`${detailIndex === 2 ? 'text-sm text-muted-foreground' : 'text-muted-foreground'}`}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map and CTA Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Map Placeholder */}
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-secondary to-muted rounded-2xl p-8 h-80 flex items-center justify-center shadow-warm">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Find Us Here</h3>
                  <p className="text-muted-foreground mb-4">
                    Located in the heart of downtown, just 2 blocks from Central Park
                  </p>
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="animate-fade-in">
              <div className="bg-gradient-primary rounded-2xl p-8 text-center shadow-glow">
                <h3 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
                  Ready to Order?
                </h3>
                <p className="text-primary-foreground/90 mb-6 text-lg">
                  Skip the wait and order online for pickup or delivery. 
                  Your favorite burger is just a click away!
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg"
                    className="w-full bg-burger-cream text-burger-dark hover:bg-burger-cream/90 transition-all duration-300 btn-glow"
                  >
                    Order Online Now
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                  >
                    Call for Pickup
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-secondary/50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-2">Special Offers</h4>
              <p className="text-muted-foreground">
                🎉 Free delivery on orders over $25 • 🍟 Free fries on Fridays • 👥 Group discounts available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;