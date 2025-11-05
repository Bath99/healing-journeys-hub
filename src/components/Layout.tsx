import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-light tracking-wide text-foreground hover:text-primary transition-colors"
            >
              Angad Toor
            </button>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
              >
                Specialties
              </button>
              <button
                onClick={() => scrollToSection("approach")}
                className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
              >
                Approach
              </button>
              <button
                onClick={() => scrollToSection("availability")}
                className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
              >
                Availability
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-5 py-2 bg-primary text-primary-foreground text-sm font-light rounded-full hover:opacity-90 transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-light">
              © {new Date().getFullYear()} Angad Toor - Registered Psychotherapist (Qualifying)
            </p>
            <p className="text-xs text-muted-foreground mt-2 font-light">
              Confidential • Professional • Compassionate
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
