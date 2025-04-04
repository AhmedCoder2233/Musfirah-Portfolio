"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHashLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      // If we're already on the home page, just scroll to the section
      if (pathname === "/") {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
      } else {
        // If we're on another page, navigate to home first then scroll
        router.push(`/${href}`);
      }
    } else {
      // Regular link
      setIsOpen(false);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="w-full fixed top-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-pink-100 transition-colors"
            >
              Musfirah Tabassum
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden z-50 md:z-50 md:block">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex space-x-6"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <button
                    onClick={() => handleHashLinkClick(link.href)}
                    className="text-white hover:text-pink-100 font-medium transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 flex flex-col items-end space-y-1.5">
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 8 : 0,
                    width: isOpen ? "100%" : "100%",
                  }}
                  className="block h-0.5 bg-white rounded-full"
                  style={{ originX: 0 }}
                ></motion.span>
                <motion.span
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    width: isOpen ? 0 : "80%",
                  }}
                  className="block h-0.5 bg-white rounded-full"
                ></motion.span>
                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -8 : 0,
                    width: isOpen ? "100%" : "60%",
                  }}
                  className="block h-0.5 bg-white rounded-full"
                  style={{ originX: 0 }}
                ></motion.span>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.ul
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.2 }}
                className="py-4 space-y-4"
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <button
                      onClick={() => handleHashLinkClick(link.href)}
                      className="block text-white hover:text-pink-100 font-medium py-2 px-4 rounded transition-colors w-full text-left"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
