import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavItem } from "~/components/NavItem";
import {
  href,
  Link,
  NavLink,
} from "react-router";

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
  }, [activeSection]);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl shadow-xs z-50"
    >
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to={"/#"}
            className="text-2xl font-bold text-gray-900 font-shadow-into-light"
          >
            Tsirimaholy
          </Link>

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
            {["hero", "about", "skills", "projects", "contact"].map(
              (section) => (
                <NavItem
                  key={section}
                  section={section}
                  to={`${href("/")}#${section}`}
                  isActive={section === activeSection}
                />
              )
            )}
            <NavItem
              key={"blog"}
              section={"Blog"}
              to={href("/blog")}
              isActive={false}
            />
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col pt-4 pb-2 border-t mt-4">
            {["hero", "about", "skills", "projects", "contact"].map(
              (section) => (
                <li key={section} className="py-2">
                  <NavLink
                    to={`${href("/")}#${section}`}
                    className={({isActive: isActivePage})=>`block px-2 py-2 transition duration-300 ${
                        (isActivePage && activeSection===section)
                        ? "text-primary font-medium bg-primary/10 rounded border-l-4 border-primary"
                        : "text-gray-700 hover:text-primary hover:bg-gray-100 rounded"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </NavLink>
                </li>
              )
            )}
            <li key={"blog"} className="py-2">
              <NavLink
                to={href("/blog")}
                className={({ isActive }) =>
                  `block px-2 py-2 transition duration-300 ${
                    isActive || activeSection === "blog"
                      ? "text-primary font-medium bg-primary/10 rounded border-l-4 border-primary"
                      : "text-gray-700 hover:text-primary hover:bg-gray-100 rounded"
                  }`
                }
                onClick={() => {
                  setActiveSection("blog");
                  setIsMenuOpen(false);
                }}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
