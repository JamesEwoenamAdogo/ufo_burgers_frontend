import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "Menu", href: "#menu" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Order Online", href: "#" },
    { name: "Catering", href: "#" },
    { name: "Careers", href: "#" },
  ];

  return (
    <footer className="bg-burger-dark text-burger-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">🛸</span>
              </div>
              <span className="font-heading font-bold text-xl">UFO Burgers</span>
            </div>
            <p className="text-burger-cream/80 leading-relaxed">
              Serving cosmic burgers since 2015. Made with love from across the galaxy, 
              served with pride, enjoyed with earthlings and aliens alike.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-burger-cream/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-burger-gold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-burger-cream/80 hover:text-burger-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-burger-gold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-burger-gold flex-shrink-0" />
                <span className="text-burger-cream/80">123 Burger Street, New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-burger-gold flex-shrink-0" />
                <span className="text-burger-cream/80">(555) 123-BURG</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-burger-gold flex-shrink-0" />
                <span className="text-burger-cream/80">hello@ufoburgers.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-burger-gold">Opening Hours</h3>
            <div className="space-y-2 text-burger-cream/80">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>11AM - 10PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>11AM - 11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>12PM - 9PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-burger-cream/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-burger-cream/60 text-sm">
            © 2024 UFO Burgers. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-burger-cream/60 hover:text-burger-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-burger-cream/60 hover:text-burger-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-burger-cream/60 hover:text-burger-gold transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;