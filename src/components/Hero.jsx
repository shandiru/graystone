"use client";

import React, { useEffect } from "react";
import { Wrench, Shield, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const brandOrange = "#E1912F";
  const brandBlack = "#000000";
  const brandWhite = "#FFFFFF";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section
      id="home"
      className="relative py-20 overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-bg.mp4" // ✅ your video in public folder (e.g., public/hero-bg.mp4)
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔳 Overlay for contrast */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1spx]"></div>

      {/* 💡 Hero Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="hero-title text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6"
            data-aos="fade-up"
          >
            Expert Automotive Services
            <br className="hidden md:block" />
            <span style={{ color: brandOrange }}>You Can Trust</span>
          </h2>

          <p
            className="hero-description text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Professional car servicing, MOT testing, and mechanical repairs with
            over 20 years of experience. Your vehicle deserves the best care.
          </p>

          {/* Buttons */}
          <div
            className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 font-medium text-white shadow-xs h-12 rounded-md text-lg px-8 py-3 transition-colors"
              style={{ backgroundColor: brandOrange }}
            >
              Book Your Service
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 font-medium border h-12 rounded-md text-lg px-8 py-3 bg-transparent transition-all duration-200"
              style={{
                color: brandBlack,
                borderColor: brandBlack,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = brandOrange;
                e.currentTarget.style.borderColor = brandOrange;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = brandBlack;
                e.currentTarget.style.borderColor = brandBlack;
              }}
            >
              Get Quote
            </a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Card 1 */}
            <div
              className="hero-card flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: `${brandOrange}1A` }}
              >
                <Wrench className="h-8 w-8" style={{ color: brandOrange }} />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2 text-gray-900">
                Expert Technicians
              </h3>
              <p className="text-gray-600">
                Certified mechanics with decades of experience
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="hero-card flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: `${brandOrange}1A` }}
              >
                <Shield className="h-8 w-8" style={{ color: brandOrange }} />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2 text-gray-900">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                All work backed by our comprehensive warranty
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="hero-card flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: `${brandOrange}1A` }}
              >
                <Clock className="h-8 w-8" style={{ color: brandOrange }} />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2 text-gray-900">
                Fast Service
              </h3>
              <p className="text-gray-600">
                Quick turnaround times without compromising quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
