import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Observe sections to detect the active section
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900 font-shadow-into-light">
            Tsirimaholy
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="text-gray-700 text-2xl md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {["hero", "about", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`relative py-2 px-1 transition duration-300 ease-in-out ${
                    activeSection === section
                      ? "text-primary font-medium"
                      : "text-gray-700 hover:text-primary"
                  }`}
                > {section === "hero" ? "Home" : section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-[3px] rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #ff7eb3, #ff758c)",
                        boxShadow: "0px 4px 10px rgba(255, 123, 123, 0.3)",
                      }}
                    ></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col pt-4 pb-2 border-t mt-4">
            {["hero", "about", "skills", "projects", "contact"].map((section) => (
              <li key={section} className="py-2">
                <a
                  href={`#${section}`}
                  className={`block px-2 py-2 transition duration-300 ${
                    activeSection === section
                      ? "text-primary font-medium bg-primary/10 rounded border-l-4 border-primary"
                      : "text-gray-700 hover:text-primary hover:bg-gray-100 rounded"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
