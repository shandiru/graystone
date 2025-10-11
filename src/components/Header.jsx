"use client";

import React, { useState } from "react";
import { Phone, MapPin, Clock, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const brandOrange = "#E1912F";

  const address =
    "Greystone Automotive Engineers Ltd, 3 Bryta Works, Little London Rd, Woodseats, Sheffield S8 0UJ, UK";
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address);

  // Smooth scroll or redirect to home before scrolling
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setOpen(false);

    // If already on home page
    if (window.location.pathname === "/") {
      const section = document.getElementById(targetId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Redirect to home and scroll after navigation
      window.location.href = `/#${targetId}`;
    }
  };

  return (
    <header
      className="bg-white border-b border-gray-200"
      style={{ "--brandColor": brandOrange }}
    >
      {/* Top Info Bar */}
      <div className="text-white py-2" style={{ backgroundColor: brandOrange }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            {/* Phone */}
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <a
                href="tel:+447545213989"
                className="hover:underline underline-offset-2"
              >
                +44 7545 213989
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-2"
                title="Open in Google Maps"
              >
                3 Bryta Works, Sheffield
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>Mon–Fri: 8AM–6PM | Sat: 8AM–4PM</span>
          </div>
        </div>
      </div>

      {/* Logo + Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="block">
              <img
                src="/logo-stone.png"
                alt="Greystone Logo"
                className="w-40 sm:w-48 h-auto rounded-lg"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "About", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={(e) =>
                  handleNavClick(e, label.toLowerCase() === "home" ? "top" : label.toLowerCase())
                }
                className="text-gray-900 hover:text-[var(--brandColor)] transition"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium text-white h-9 px-4 py-2 transition-colors"
            style={{ backgroundColor: brandOrange }}
          >
            Book Service
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-gray-900 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden transition-[max-height] duration-300 ease-in-out overflow-hidden border-t border-gray-200"
        style={{ maxHeight: open ? "280px" : "0px" }}
      >
        <nav className="px-4 py-3 space-y-2 bg-white">
          {["Home", "Services", "About", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={(e) =>
                handleNavClick(e, label.toLowerCase() === "home" ? "top" : label.toLowerCase())
              }
              className="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100"
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="block text-center mt-2 py-2 rounded-md text-white font-medium"
            style={{ backgroundColor: brandOrange }}
          >
            Book Service
          </a>
        </nav>
      </div>
    </header>
  );
}
