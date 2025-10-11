'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const ochreOrange = '#E1912F';
  const black = '#000000';

  const address =
    'Greystone Automotive Engineers Ltd, 3 Bryta Works, Little London Rd, Woodseats, Sheffield S8 0UJ, UK';
  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address);

  // Animation refs
  const footerRef = useRef(null);
  const sectionsRef = useRef([]);
  const bottomRef = useRef(null);
  sectionsRef.current = [];

  const addToSectionsRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    sectionsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        }
      );
    });

    if (bottomRef.current) {
      gsap.fromTo(
        bottomRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
          },
        }
      );
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{ backgroundColor: ochreOrange }}
      className="text-white pt-12 pb-6 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2" ref={addToSectionsRef}>
            <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: black }}>
              Greystone Automotive
            </h3>
            <p className="text-white/90 mb-4 leading-relaxed text-sm">
              Your trusted automotive service provider with over 20 years of experience. We're
              committed to keeping your vehicle safe, reliable, and running smoothly.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white" />
                <a
                  href="tel:+447545213989"
                  className="hover:underline underline-offset-4 text-white/90"
                >
                  +44 7545 213989
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white" />
                <a
                  href="mailto:justin.day@live.co.uk"
                  className="hover:underline underline-offset-4 text-white/90"
                >
                  justin.day@live.co.uk
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white" />
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4 text-white/90"
                  title="Open in Google Maps"
                >
                  3 Bryta Works, Little London Rd, Woodseats, Sheffield S8 0UJ, UK
                </a>
              </div>
              <div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-xs text-white/80 hover:text-black transition-colors underline underline-offset-4"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div ref={addToSectionsRef}>
            <h4 className="font-serif font-semibold text-lg mb-4" style={{ color: black }}>
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-white/90">
              {[
                'MOT Testing',
                'Car Servicing',
                'Brake Repairs',
                'Clutch Replacement',
                'Air Conditioning',
                'Diagnostics',
                'Suspension Work',
                'Mechanical Repairs',
              ].map((service, i) => (
                <li key={i}>
                  <a href="#services" className="hover:text-black transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div ref={addToSectionsRef}>
            <h4 className="font-serif font-semibold text-lg mb-4" style={{ color: black }}>
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm text-white/90">
              <div className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>8AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>8AM - 4PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          ref={bottomRef}
          className="mt-10 pt-6 border-t border-white/30 text-center text-sm text-white/90 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p>
            © 2025 Greystone Automotive. All rights reserved. | Professional automotive services you
            can trust.
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="/privacy-policy"
              className="hover:text-black underline underline-offset-4 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="opacity-70">|</span>
            <a
              href="/terms-and-conditions"
              className="hover:text-black underline underline-offset-4 transition-colors"
            >
              Terms & Conditions
            </a>
            <span className="opacity-70">|</span>
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black underline underline-offset-4 transition-colors"
            >
              Powered by Ansely
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
