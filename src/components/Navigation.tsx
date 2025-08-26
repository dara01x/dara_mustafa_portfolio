import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-b border-border shadow-elegant" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* HTML Tag Style Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="group flex items-center font-mono text-lg sm:text-xl font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="text-accent group-hover:text-accent/80 transition-colors duration-300">&lt;</span>
            <span className="text-foreground group-hover:text-primary transition-colors duration-300 mx-1">DaraMustafa</span>
            <span className="text-accent group-hover:text-accent/80 transition-colors duration-300">/&gt;</span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  activeSection === item.href.slice(1) 
                    ? "text-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Contact Button */}
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="hidden sm:flex bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-sm"
              size="sm"
            >
              Get In Touch
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden transition-colors duration-300">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Navigation
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={`text-left py-2 px-3 rounded-lg transition-colors duration-300 hover:bg-accent/10 hover:text-primary ${
                          activeSection === item.href.slice(1) 
                            ? "text-primary bg-primary/10" 
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <Button 
                      onClick={() => scrollToSection("#contact")}
                      className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                      size="sm"
                    >
                      Get In Touch
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};