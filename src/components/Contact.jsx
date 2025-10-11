'use client';

import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const brandOrange = '#E1912F';
  const brandBlack = '#000000';
  const brandWhite = '#FFFFFF';

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
    });
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" style={{ color: brandOrange }} />,
      title: 'Phone',
      value: (
        <a href="tel:01142587911" className="hover:underline" style={{ color: brandOrange }}>
          +44 7545 213989
        </a>
      ),
      note: 'Call us for immediate assistance',
    },
    {
      icon: <Mail className="h-5 w-5" style={{ color: brandOrange }} />,
      title: 'Email',
      value: (
        <a href="mailto:justin.day@live.co.uk" className="hover:underline" style={{ color: brandOrange }}>
          justin.day@live.co.uk
        </a>
      ),
      note: 'Send us your questions anytime',
    },
    {
      icon: <MapPin className="h-5 w-5" style={{ color: brandOrange }} />,
      title: 'Address',
      value: (
        <a
          href="https://www.google.com/maps/place/Greystone+Automotive+Engineers+Ltd,+3+Bryta+Works,+Little+London+Rd,+Woodseats,+Sheffield+S8+0UJ,+UK"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          style={{ color: brandOrange }}
        >
          3 Bryta Works, Little London Rd, Sheffield S8 0UJ, UK
        </a>
      ),
      note: 'Find us easily with free parking onsite',
    },
    {
      icon: <Clock className="h-5 w-5" style={{ color: brandOrange }} />,
      title: 'Opening Hours',
      value: (
        <>
          <p>Monday - Friday: 8:00 AM - 5:30 PM</p>
          <p>Saturday: 8:00 AM - 1:00 PM</p>
          <p>Sunday: Closed</p>
        </>
      ),
    },
  ];

  // 🔹 EmailJS handler
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm(
        'service_404lxe7',     // <-- replace with your EmailJS service ID
        'template_bhx7ho8',    // <-- replace with your EmailJS template ID
        formRef.current,
        'tmUgtXKf_TwGrV1iE'      // <-- replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSuccess(true);
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: brandWhite }}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            style={{ color: brandBlack }}
          >
            Get In <span style={{ color: brandOrange }}>Touch</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
            Ready to book your service or have questions about your vehicle?
            Contact us today for expert advice and professional service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Contact Info */}
          <div data-aos="fade-right" className="space-y-8">
            <h3 className="text-2xl font-serif font-semibold mb-4" style={{ color: brandBlack }}>
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: `${brandOrange}1A` }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: brandBlack }}>
                      {item.title}
                    </h4>
                    <div className="text-gray-700 space-y-1">{item.value}</div>
                    {item.note && <p className="text-sm text-gray-500">{item.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            data-aos="fade-left"
            className="flex flex-col gap-6 rounded-xl shadow-md max-w-lg mx-auto w-full p-6"
            style={{ backgroundColor: brandWhite }}
          >
            <h3 className="leading-none font-semibold font-serif text-lg mb-4" style={{ color: brandBlack }}>
              Send Us a Message
            </h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2" style={{ color: brandBlack }}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    required
                    className="border border-gray-200 rounded-md w-full px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2" style={{ color: brandBlack }}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    required
                    className="border border-gray-200 rounded-md w-full px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: brandBlack }}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="border border-gray-200 rounded-md w-full px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: brandBlack }}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="0114 258 7911"
                  className="border border-gray-200 rounded-md w-full px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2" style={{ color: brandBlack }}>
                  Service Required
                </label>
                <input
                  id="service"
                  name="service"
                  placeholder="e.g., MOT, Diagnostics, Brake Repair"
                  className="border border-gray-200 rounded-md w-full px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: brandBlack }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your vehicle and what service you need..."
                  required
                  className="border border-gray-200 rounded-md w-full px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 rounded-md text-sm font-medium transition-colors shadow-sm hover:opacity-90"
                style={{ backgroundColor: brandOrange, color: brandWhite }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {success === true && (
                <p className="text-green-600 text-sm mt-2 text-center">Message sent successfully!</p>
              )}
              {success === false && (
                <p className="text-red-600 text-sm mt-2 text-center">Failed to send message. Try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
