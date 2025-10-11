import { useEffect, useState } from "react";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(null);
  const [showIcon, setShowIcon] = useState(false);

  const brandOrange = "#E1912F";
  const brandBlack = "#000000";
  const brandWhite = "#FFFFFF";

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = () => {
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* 🍪 Cookie Banner */}
      {visible && (
        <div
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:right-6 md:left-auto max-w-full md:max-w-sm 
                     p-5 rounded-xl shadow-lg text-center z-50 transition-all duration-300 border border-[#00000022]"
          style={{ backgroundColor: brandBlack, color: brandWhite }}
        >
          <p className="text-sm mb-3 leading-relaxed">
            We use cookies to improve your experience on our website.{" "}
          </p>
          <p className="mb-4 text-sm">
            <a
              href="/privacy-policy"
              className="underline text-[#E1912F] hover:text-white transition-colors"
            >
              See our Privacy Policy
            </a>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleReject}
              className="px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 
                         border border-[#E1912F] text-[#E1912F] hover:bg-[#E1912F] hover:text-white"
            >
              Reject
            </button>

            <button
              onClick={handleAccept}
              className="px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 
                         bg-[#E1912F] text-white hover:bg-[#c47b1f]"
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* 🍪 Cookie Revisit Icon */}
      {showIcon && !visible && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <button
            onClick={handleIconClick}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-lg border border-[#ffffff66] 
                       flex items-center justify-center bg-[#E1912F] hover:bg-[#c47b1f] 
                       hover:scale-105 transition-all cursor-pointer"
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg"
              alt="Cookie Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain filter brightness-0 invert"
            />
          </button>
        </div>
      )}
    </>
  );
}
