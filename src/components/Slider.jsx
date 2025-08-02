import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  // Portrait wedding gallery images
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=400&fit=crop",
      title: "Wedding Portrait",
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=400&fit=crop",
      title: "Couple Portrait",
    },
    {
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=400&fit=crop",
      title: "Bridal Portrait",
    },
    {
      src: "https://images.unsplash.com/photo-1594736797933-d0a9ba23dbb4?w=300&h=400&fit=crop",
      title: "Wedding Ceremony",
    },
    {
      src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=300&h=400&fit=crop",
      title: "Pre-Wedding",
    },
    {
      src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=300&h=400&fit=crop",
      title: "Wedding Moments",
    },
    {
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=400&fit=crop",
      title: "Traditional Wedding",
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=400&fit=crop",
      title: "Hindu Wedding",
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=400&fit=crop",
      title: "Muslim Wedding",
    },
    {
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=400&fit=crop",
      title: "Brahmin Wedding",
    },
    {
      src: "https://images.unsplash.com/photo-1594736797933-d0a9ba23dbb4?w=300&h=400&fit=crop",
      title: "Wedding Photography",
    },
    {
      src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=300&h=400&fit=crop",
      title: "Love Story",
    },
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <footer className="bg-gray-50 py-8 overflow-hidden">
      {/* Follow Us Header */}
      <div className="text-center mb-6">
        <h3
          className="text-sm font-light text-gray-500 tracking-widest font-playfair"
          style={{
            fontSize: "0.875rem",
            fontWeight: "300",
            letterSpacing: "0.2em",
            color: "#999999",
            textTransform: "uppercase",
          }}
        >
          Some of our works
        </h3>
      </div>

      {/* Single Scrolling Row */}
      <div className="w-full overflow-hidden mb-6">
        <div
          className="flex gap-2 animate-scroll-right"
          style={{
            width: "max-content",
            animationDuration: "60s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`footer-${index}`}
              className="relative w-60 h-90 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-100 hover:z-10  shadow-md hover:shadow-lg flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-all duration-300 brightness-95 hover:brightness-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-2 text-white transform translate-y-full hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs font-medium">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
