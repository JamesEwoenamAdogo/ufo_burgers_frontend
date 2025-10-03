import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["East legon, Jungle Avenue 13", "UFO Burger"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday to Sunday", "11AM to 10PM"],
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
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

          {/* Additional Info */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-secondary/50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-2">Promotions</h4>
              <p className="text-muted-foreground">
                🍟 Free fries on Tuesday • 🍗 Wings promotion on Wednesday
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;