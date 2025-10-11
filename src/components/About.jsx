"use client";

import React, { useEffect } from "react";
import { Award, Users, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  const brandOrange = "#E1912F";
  const brandBlack = "#000000";
  const brandWhite = "#FFFFFF";

  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "5000+", label: "Happy Customers" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "100%", label: "Certified Technicians" },
  ];

  const features = [
    {
      icon: <Award className="h-6 w-6" style={{ color: brandOrange }} />,
      title: "Certified Excellence",
      desc: "Our technicians are fully certified and continuously trained on the latest automotive technologies and repair techniques.",
    },
    {
      icon: <Users className="h-6 w-6" style={{ color: brandOrange }} />,
      title: "Customer First",
      desc: "We believe in transparent communication and honest pricing. No hidden fees, no unnecessary work - just quality service you can trust.",
    },
    {
      icon: <Star className="h-6 w-6" style={{ color: brandOrange }} />,
      title: "Quality Guarantee",
      desc: "All our work comes with a comprehensive warranty, giving you peace of mind and confidence in our services.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true, // animate both scroll up & down
    });
  }, []);

  return (
    <section id="about" className="py-20" style={{ backgroundColor: "#F3F4F6" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left column: Copy + Stats */}
          <div
            className="mx-auto max-w-xl"
            data-aos="fade-up"
          >
            <h2
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
              style={{ color: brandBlack }}
            >
              Why Choose <span style={{ color: brandOrange }}>Grey Stone Automotive?</span>
            </h2>

            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: "#4B5563" }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              With over two decades of experience in the automotive industry,
              Grey Stone Automotive has built a reputation for excellence,
              reliability, and honest service. Our team of certified technicians
              uses the latest diagnostic equipment and quality parts to ensure
              your vehicle receives the best possible care.
            </p>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "#4B5563" }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              We understand that your vehicle is essential to your daily life,
              which is why we're committed to providing fast, efficient service
              without compromising on quality. From routine maintenance to
              complex repairs, we treat every vehicle with the same level of
              care and attention to detail.
            </p>

            <div className="grid grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="600">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-serif font-bold mb-2" style={{ color: brandOrange }}>
                    {s.value}
                  </div>
                  <div className="text-sm" style={{ color: brandBlack }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Feature cards */}
          <div className="space-y-6 mx-auto max-w-xl">
            {features.map((f, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="flex flex-col gap-6 rounded-xl py-6 px-6 bg-white 
                           border border-gray-200 shadow-md
                           transition-all duration-300 ease-out
                           hover:scale-[1.03] md:hover:shadow-[0_8px_24px_rgba(225,145,47,0.6)]
                           active:scale-[0.98] active:shadow-[0_6px_16px_rgba(225,145,47,0.7)]"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: `${brandOrange}1A` }}>
                    {f.icon}
                  </div>
                  <div>
                    <h3
                      className="font-serif font-semibold text-lg mb-2"
                      style={{ color: brandBlack }}
                    >
                      {f.title}
                    </h3>
                    <p style={{ color: "#4B5563" }}>{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
