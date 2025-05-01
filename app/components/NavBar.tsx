import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Update underline position and width based on the active link
    const activeLink = document.querySelector(`a[href="#${activeSection}"]`);
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      setUnderlineStyle({
        left: rect.left - 12, // Adjust for padding
        width: rect.width,
      });
    }
  }, [activeSection]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 relative">
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

        {/* Navigation Links */}
        <ul
          className={`fixed top-16 left-0 w-full bg-white shadow-md md:shadow-none md:static md:flex md:items-center md:gap-6 md:w-auto transition-transform duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
          }`}
        >
          {["hero", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section} className="border-b md:border-none">
              <a
                href={`#${section}`}
                className={`block py-4 px-6 md:py-0 md:px-0 text-gray-700 hover:text-primary transition relative group`}
                onClick={() => setIsMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {/* Hover underline */}
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Animated Underline */}
        <span
          className="absolute bottom-0 h-[3px] rounded-full transition-all duration-300"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
            background: "linear-gradient(90deg, #ff7eb3, #ff758c)", // Gradient color
            boxShadow: "0px 8px 15px rgba(255, 117, 140, 0.5)", // Blurry shadow
          }}
        ></span>
      </nav>
    </header>
  );
}
