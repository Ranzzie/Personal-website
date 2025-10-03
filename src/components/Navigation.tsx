import { useState, useEffect, useCallback, type MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigationClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) {
        return;
      }

      const element = document.querySelector(href);
      if (element) {
        event.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    },
    [setIsMobileMenuOpen]
  );

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            onClick={(event) => handleNavigationClick(event, "#hero")}
          >
            Rifat Raditya
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleNavigationClick(event, item.href)}
                className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" asChild>
              <a href="#contact" onClick={(event) => handleNavigationClick(event, "#contact")}>
                Let's Talk
              </a>
            </Button>
          </nav>

          <button
            className="md:hidden text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Mobile primary"
          className="md:hidden"
        >
          {isMobileMenuOpen && (
            <div className="py-4 space-y-4 bg-background border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleNavigationClick(event, item.href)}
                  className="block w-full px-4 py-2 text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4">
                <Button className="w-full" asChild>
                  <a href="#contact" onClick={(event) => handleNavigationClick(event, "#contact")}>
                    Let's Talk
                  </a>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
