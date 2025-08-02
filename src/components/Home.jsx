import React, { useState, useEffect } from "react";

const Home = () => {
  const heroImages = [
    "src/assets/home3.jpeg",
    "src/assets/home4.jpeg",
    "src/assets/home5.jpeg",
    "src/assets/home6.jpeg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const totalSlides = heroImages.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 7000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 text-slate-800 antialiased relative overflow-x-hidden">
      {/* Elite Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, rgb(245, 158, 11), rgb(251, 191, 36))`,
              animation: `eliteFloat ${
                6 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Sophisticated Background Layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-gradient-to-br from-amber-100/20 to-yellow-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] bg-gradient-to-tr from-amber-200/15 to-yellow-300/8 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-300/10 to-yellow-400/5 rounded-full blur-3xl animate-pulse animation-delay-8000"></div>
      </div>

      {/* Hero Section - Full Immersion */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 z-10"></div>

        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-3000  ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={image}
              alt={`Elite photography ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}

        {/* Elite Hero Content */}
        <div className="absolute inset-0 z-20 flex items-end justify-center">
          <div className="text-center px-6 max-w-6xl mx-auto">
            <p className="text-xl md:text-3xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed font-playfair font-extralight opacity-0 animate-fadeInUp animation-delay-1000 pb-10">
              Where light dances with shadow, and every frame captures the
              essence of timeless
            </p>
          </div>
        </div>

        {/* Minimalist Navigation */}
        <div className="absolute inset-y-0 left-0 flex items-center p-12 z-30">
          <button
            onClick={prevSlide}
            className="group p-6 backdrop-blur-sm bg-transparent hover:bg-white/20 transition-all duration-700 rounded-full text-white border border-white/20 hover:border-amber-300/50 hover:scale-110"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center p-12 z-30">
          <button
            onClick={nextSlide}
            className="group p-6 backdrop-blur-sm bg-transparent hover:bg-white/20 transition-all duration-700 rounded-full text-white border border-white/20 hover:border-amber-300/50 hover:scale-110"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Elite Slider Indicators */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-6 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "w-16 h-[2px] bg-gradient-to-r from-[#d4a373] to-[#d4a373] shadow-lg shadow-amber-400/50"
                  : "w-8 h-[2px] bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-8000 {
          animation-delay: 8s;
        }
      `}</style>
    </div>
  );
};

export default Home;
