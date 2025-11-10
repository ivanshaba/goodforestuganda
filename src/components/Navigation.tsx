import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollPosition } from "@/hooks/useScrollReveal";

const navigationItems = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "ABOUT US",
    href: "/about",
    submenu: [
      { label: "Our Story", href: "/about/story" },
      { label: "Our Vision / Mission", href: "/about/vision" },
      { label: "Our Team", href: "/about/team" },
      { label: "Why Good Forests", href: "/why-good-forests" },
      { label: "Partners", href: "/about/partners" },
    ],
  },
  {
    label: "OUR WORK",
    href: "/work",
    submenu: [
      { label: "Tree Planting", href: "/work/conservation" },
      { label: "Jubiya Project", href: "/work/jubia" },
      { label: "Cocoa Pilot", href: "/work/cocoa" },
      { label: "Operational Areas", href: "/work/areas" },
      { label: "Tree0", href: "/work/tree0" },
      { label: "FAQs", href: "/work/faqs" },
    ],
  },
  {
    label: "RESOURCES",
    href: "/resources",
    submenu: [
      { label: "Reports & Publications", href: "/resources/reports" },
      { label: "Educational Materials", href: "/resources/education" },
    ],
  },
  {
    label: "WORK WITH US",
    href: "/partners",
    submenu: [
      { label: "Donate", href: "/partners/donate" },
      { label: "Opportunities", href: "/partners/opportunities" },
      { label: "Corporate Partnerships", href: "/partners/corporate" },
    ],
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

export const Navigation = () => {
  const scrollY = useScrollPosition();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);

  const isHidden = scrollY > window.innerHeight * 0.8;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setExpandedSubmenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setExpandedSubmenu(expandedSubmenu === label ? null : label);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200 transition-all duration-700 ease-in-out ${
        isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className={`flex items-center space-x-3 transition-all duration-700 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            <Link to="/">
              <img
                style={{ width: "170px", height: "60px" }}
                src="/logo.png"
                alt="Good Forests Logo"
              />
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`w-6 h-0.5 bg-[#1B4332] transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-[#1B4332] transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-[#1B4332] transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div
                key={item.label}
                className={`transition-all duration-700 ease-out ${
                  isLoaded ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {item.submenu ? (
                  <div className="group relative">
                    <Button
                      variant="ghost"
                      className="text-sm font-medium text-[#1B4332] hover:text-[#40916C] flex items-center gap-1 hover:bg-[#D8F3DC] px-4 py-2 rounded-lg transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180 text-[#1B4332]" />
                    </Button>

                    {/* Fixed Dropdown Menu */}
                    <div
                      className="absolute top-full left-0 w-56 bg-[#F1FAEE] border border-gray-300 shadow-xl rounded-xl
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
                      z-[9999]"
                    >
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-3 text-sm text-[#1B4332] hover:text-[#40916C] hover:bg-[#D8F3DC] rounded-lg mx-2 transition-all duration-200"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm font-medium text-[#1B4332] hover:text-[#40916C] hover:bg-[#D8F3DC] px-3 py-2 rounded-lg relative overflow-hidden group transition-colors"
                  >
                    {item.label}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D8F3DC]/40 to-[#95D5B2]/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                  </Link>
                )}
              </div>
            ))}

            {/* Desktop Donate Button */}
            <div
              className={`transition-all duration-700 ease-out ${
                isLoaded ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${(navigationItems.length + 1) * 100}ms` }}
            >
              <Button
                asChild
                variant="outline"
                className="ml-8 px-6 py-2 font-bold text-sm tracking-wider border-accent text-accent hover:bg-accent hover:text-forest-dark"
              >
                <Link to="/partners/donate">DONATE</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={toggleMobileMenu}
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl border-l border-gray-200 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-[#D8F3DC] transition-colors duration-200"
              >
                <X className="w-6 h-6 text-[#1B4332]" />
              </button>
            </div>

            {/* Mobile Items */}
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label} className="border-b border-gray-200 last:border-b-0">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="w-full flex items-center justify-between py-4 text-left text-[#1B4332] font-medium hover:text-[#40916C] transition-colors duration-200"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedSubmenu === item.label ? "rotate-180 text-[#40916C]" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedSubmenu === item.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-4 pb-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block py-2 text-sm text-[#1B4332] hover:text-[#40916C] hover:bg-[#D8F3DC] rounded-lg transition-colors duration-200"
                              onClick={toggleMobileMenu}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-4 text-[#1B4332] font-medium hover:text-[#40916C] hover:bg-[#D8F3DC] rounded-lg transition-colors duration-200"
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Donate */}
              <div className="pt-6">
                <Button
                  asChild
                  variant="outline"
                  className="w-full py-3 font-bold text-sm tracking-wider border-[#40916C] text-[#40916C] hover:bg-[#D8F3DC] hover:text-[#1B4332]"
                >
                  <Link to="/partners/donate">DONATE</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
