import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedPhone = localStorage.getItem('phone');
    
    if (storedName && storedPhone) {
      setUserName(storedName);
      setUserPhone(storedPhone);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('phone');
    setUserName("");
    setUserPhone("");
    setIsLoggedIn(false);
  };

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="../assets/ufo-burger-logo.jpg"
              alt="UFO Burgers Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-heading font-bold text-xl text-foreground">
              UFO Burgers
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <CartDrawer />
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <span className="text-foreground font-medium">
                  Welcome, {userName}!
                </span>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.location.href = '/login'}
                >
                  Login
                </Button>
                <Button 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 btn-glow"
                  onClick={() => window.location.href = '/signup'}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="md:hidden flex items-center space-x-2">
            <CartDrawer />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4">
                {isLoggedIn ? (
                  <div className="flex flex-col space-y-3">
                    <div className="text-center">
                      <span className="text-foreground font-medium">
                        Welcome, {userName}!
                      </span>
                    </div>
                    <Button 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Button 
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.location.href = '/login'}
                    >
                      Login
                    </Button>
                    <Button 
                      className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 btn-glow"
                      onClick={() => window.location.href = '/signup'}
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;