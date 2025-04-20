"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-alta-blue text-2xl font-bold">
          Alta<span className="text-alta-blue-light">Nettsider</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-alta-dark hover:text-alta-blue transition-colors"
          >
            Hjem
          </a>
          <a
            href="#about"
            className="text-alta-dark hover:text-alta-blue transition-colors"
          >
            Om Oss
          </a>
          <a
            href="#services"
            className="text-alta-dark hover:text-alta-blue transition-colors"
          >
            Tjenester
          </a>
          <a
            href="#portfolio"
            className="text-alta-dark hover:text-alta-blue transition-colors"
          >
            Portefølje
          </a>
          <a
            href="#contact"
            className="text-alta-dark hover:text-alta-blue transition-colors"
          >
            Kontakt
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-alta-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a
              href="#"
              className="text-alta-dark hover:text-alta-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hjem
            </a>
            <a
              href="#about"
              className="text-alta-dark hover:text-alta-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Om Oss
            </a>
            <a
              href="#services"
              className="text-alta-dark hover:text-alta-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tjenester
            </a>
            <a
              href="#portfolio"
              className="text-alta-dark hover:text-alta-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portefølje
            </a>
            <a
              href="#contact"
              className="text-alta-dark hover:text-alta-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
