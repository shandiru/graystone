
'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



 const TESTIMONIALS = [
    {
      quote:
        "Great service - fitted me in ASAP for air con issue. This was a second opinion and they were so honest, explained everything well to me, and saved me a lot of money compared to another garage! Friendly, genuine, and helpful. Highly recommend. Lucky for me they are local!.",
      name: 'Charlotte Williams',
      role: 'Customer',
      avatar: '/Charlotte.png',
      stars: 5,
    },
    {
      quote:
        'My clutch went on my car within a day my car was taken away and brought back with a new clutch the car has never drove as smooth. Great service and excellent communication at all times. Definitely recommend will be back for any future issues..',
      name: 'Izzy Smedley.',
      role: 'Customer',
      avatar: '/Lzzy.png',
      stars: 5,
    },
    {
      quote:
        'Car needed a new clutch while on holiday from Scotland. Contacted and new clutch fitted the following day after breakdown recovery. Excellent service. Highly recommend.',
      name: 'Jed Craik.',
      role: 'Customer',
      avatar: '/jed.png',
      stars: 5,
    },
    {
      quote:
        'Justin was recommended to me by the garage I usually use as he was busy. What a find on the back of little London Road Sheffield. I had my exhaust and clutch replaced. He gave me a quote and time scale for the work to be done by. Excellent service done when he said it would be and bonus it was cheaper than the original quote. Justin also recovered my car when it broke down without any extra charge. Very pleasant professional and approachable. Would highly recommend.',
      name: 'Trudy Noel.',
      role: 'Customer',
      avatar: '/Trudy.png',
      stars: 5,
    },
    {
      quote: `Found Justin through a Google search for a clutch problem. After a quick assessment problem was identified and quickly sorted as well as replacing part of the exhaust which was blowing.
Friendly, great service, no fuss and good value, now I've discovered them and so close too I'll use them again and confident to recommend to others..`,
      name: 'zafar1084.',
      role: 'Customer',
      avatar: '/Zafar.png',
      stars: 5,
    },
    {
      quote: `Had a new clutch fitted in my Kia.
The service I received was really good. Friendly, efficient and highly professional.
My car now drives beautifully. I am a very happy customer and I would very highly recommend.
Thank-you. 😊.`,
      name: 'S D Wilkinson.',
      role: 'Customer',
      avatar: '/SD.png',
      stars: 5,
    },
    {
      quote:
        'My wife has used Justin for a while and always had great customer service. I have now used him for my annual service now that my car is out of its warranty. He did a great job and was very polite and helpful. He recently checked my wife’s car for what seemed to be a fault. He reset the cars computer and everything cleared - no charge. Brilliant customer service and help.',
      name: 'Brian Wallace.',
      role: 'Customer',
      avatar: '/Brian.png',
      stars: 5,
    },
    {
      quote:
        'Justin and his team are absolutely amazing. I and my family have used this garage for over 5 years now (4 cars) and without doubt we have received the best service each time Justin makes sure everything is done to the highest standard. I would not dream of taking my car anywhere else now and cannot recommend highly enough.',
      name: 'Lisa Storey.',
      role: 'Customer',
      avatar: '/Lisa.png',
      stars: 5,
    },
    {
      quote:
        "Had my car recovered there after a breakdown. Great service and communication. Repair needed was done plus another couple of things I asked them to do while they had the car. Good turn round time to say it wasn't a pre booked job. Good value for money..",
      name: 'Nicola Walker.',
      role: 'Customer',
      avatar: '/Nicola.png',
      stars: 5,
    },
    {
      quote: `You know when there’s something wrong with your car and you’re stuck.. Well these guys have literally saved me this week. My car needed it’s clutch replacing. After sending an enquiry through to their website they got back to me early the next working day, arranged for my car to be collected that morning and I had it delivered back mid afternoon the following day with all the works completed! The car feels amazing to drive now and I’m so impressed with their friendliness, professionalism and fast service.
I truly am so thankful. I absolutely recommend them 100% to anyone that needs the stress taking out of having your car repaired.
Thank you for it all involved in this business, especially Justin who kept me up to date with everything. Totally deserve this 5 star review.
Positive
Punctuality, Quality, Professionalism, Value

Services
General repairs & maintenance, Service not listed.`,
      name: 'clair scammell.',
      role: 'Customer',
      avatar: '/clair.png',
      stars: 5,
    },
  ];

export default function Testimonials({ brand = 'Grey Stone Automotive', auto = true, interval = 6000 }) {
  const brandOrange = '#E1912F';
  const brandBlack = '#000000';

  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [auto, interval]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F8F8F8] py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-center text-3xl sm:text-5xl font-bold mb-12"
          style={{
            color: brandBlack,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          What Customers Say
          <br />
          About <span style={{ color: brandOrange }}>{brand}</span>
        </h2>

        {/* Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="relative mx-auto w-full max-w-4xl rounded-xl px-6 py-16 md:py-20 text-center text-white shadow-xl sm:px-10 flex items-center"
          style={{
            backgroundColor: brandOrange,
            fontFamily: "'Source Sans Pro', sans-serif",
          }}
        >
          <p className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-white whitespace-pre-line">
            “{t.quote}”
          </p>
          <div className="pointer-events-none absolute left-1/2 top-full -mt-12 md:-mt-14 -translate-x-1/2">
            <img
              src={t.avatar}
              alt={t.name}
              className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Info */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-14 flex flex-col items-center"
          style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
        >
          <div className="mb-3 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} filled={i < t.stars} />
            ))}
          </div>
          <div className="text-lg font-semibold" style={{ color: brandBlack }}>
            {t.name}
          </div>
          <div className="text-sm font-semibold" style={{ color: brandOrange }}>
            {t.role}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? 'bg-[#E1912F]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/search?q=Greystone+Automotive+Engineers+ltd+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition text-white font-semibold py-3 px-6 rounded-lg mt-4"
            style={{
              backgroundColor: brandOrange,
              fontFamily: "'Source Sans Pro', sans-serif",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = brandBlack)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = brandOrange)}
          >
            ⭐ Leave Us a Review on Google
          </a>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="group absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-700 shadow hover:bg-white"
      >
        <svg viewBox="0 0 20 20" className="h-5 w-5">
          <path
            d="M12.5 4.5 7 10l5.5 5.5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="group absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-700 shadow hover:bg-white"
      >
        <svg viewBox="0 0 20 20" className="h-5 w-5">
          <path
            d="M7.5 4.5 13 10l-5.5 5.5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );

  // ⭐ Star Component
  function Star({ filled = true }) {
    return (
      <svg
        viewBox="0 0 20 20"
        className={`h-4 w-4 ${filled ? 'fill-white' : 'fill-white/50'}`}
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.69a1 1 0 0 0 .95.69h3.879c.967 0 1.371 1.24.588 1.81l-3.138 2.279a1 1 0 0 0-.364 1.118l1.2 3.69c.3.921-.755 1.688-1.54 1.118L10.5 14.347a1 1 0 0 0-1.176 0l-3.246 2.975c-.785.57-1.84-.197-1.54-1.118l1.2-3.69a1 1 0 0 0-.364-1.118L2.236 9.117c-.783-.57-.379-1.81.588-1.81h3.88a1 1 0 0 0 .949-.69l1.396-3.69Z" />
      </svg>
    );
  }
}


