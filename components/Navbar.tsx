"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
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
        <Link href="/" className="text-alta-blue text-2xl font-bold">
          Alta<span className="text-alta-blue-light">Nettsider</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-alta-dark hover:text-alta-blue transition-colors"
          >
            Hjem
          </Link>
          <Link
            href="/om"
            className="text-alta-dark hover:text-alta-blue transition-colors"
          >
            Om
          </Link>
          <Link
            href="/tjenester"
            className="text-alta-dark hover:text-alta-blue transition-colors"
          >
            Tjenester
          </Link>
          <Link
            href="/eksempler"
            className="text-alta-dark hover:text-alta-blue transition-colors"
          >
            Eksempler
          </Link>
          <Link
            href="/kontakt"
            className="text-alta-dark hover:text-alta-blue transition-colors"
          >
            Kontakt
          </Link>
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
            {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-alta-dark hover:text-alta-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hjem
            </Link>
            <Link
              href="/om"
              className="text-alta-dark hover:text-alta-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Om
            </Link>
            <Link
              href="/tjenester"
              className="text-alta-dark hover:text-alta-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tjenester
            </Link>
            <Link
              href="/eksempler"
              className="text-alta-dark hover:text-alta-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Eksempler
            </Link>
            <Link
              href="/kontakt"
              className="text-alta-dark hover:text-alta-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
