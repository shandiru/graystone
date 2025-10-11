'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MapSection() {
  const brandOrange = '#E1912F'; // Ochre Orange
  const brandBlack = '#000000'; // Black

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true, // ensures it triggers both on scroll down & up
    });
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-bold mb-8"
          style={{ fontFamily: 'Georgia, serif', color: brandBlack }}
        >
          Visit Us at{' '}
          <span style={{ color: brandOrange }}>Greystone Automotive</span>
        </h2>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="200"
          className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            title="Greystone Automotive Engineers Ltd"
            src="https://www.google.com/maps?q=Greystone+Automotive+Engineers+Ltd,+3+Bryta+Works,+Little+London+Rd,+Woodseats,+Sheffield+S8+0UJ,+United+Kingdom&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
