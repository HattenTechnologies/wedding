import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const gridImages = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=600&fit=crop",
      title: "Wedding Elegance",
      size: "large",
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop",
      title: "Precious Moments",
      size: "medium",
    },
    {
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=500&fit=crop",
      title: "Love Stories",
      size: "tall",
    },
    {
      src: "https://images.unsplash.com/photo-1594736797933-d0a9ba23dbb4?w=400&h=300&fit=crop",
      title: "Intimate Celebrations",
      size: "medium",
    },
    {
      src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=350&h=400&fit=crop",
      title: "Timeless Beauty",
      size: "medium",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-white pt-30 pb-10 overflow-hidden"
      ref={aboutRef}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-6xl text-[#d4a373]  tracking-wide font-moda font-extralight">
            About Us
          </h2>
        </div>

        {/* Main Content - Left Image & Right Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Side - Animated Image */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent rounded-2xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-700"></div>

              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=700&fit=crop"
                alt="Photography Story"
                className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 filter brightness-95 contrast-110 group-hover:brightness-110 group-hover:contrast-120"
              />

              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Right Side - Story Content */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <p
                className="text-lg leading-relaxed text-gray-600"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1rem",
                  lineHeight: "1.8",
                }}
              >
                At Lifeshot Photography, we believe every moment tells a story.
                Founded with a passion for preserving life's most precious
                memories, we specialize in capturing the authentic emotions,
                spontaneous laughter, and intimate connections that make each
                celebration unique.
              </p>

              <p
                className="text-lg leading-relaxed text-gray-600"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1rem",
                  lineHeight: "1.8",
                }}
              >
                Our journey began with a simple philosophy: photography is not
                just about taking pictures, but about freezing time itself. We
                approach each wedding, each couple, and each family with fresh
                eyes, seeking to discover and document the magic that exists in
                genuine human connections.
              </p>

              <p
                className="text-lg leading-relaxed text-gray-600"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1rem",
                  lineHeight: "1.8",
                }}
              >
                With years of experience and an artistic vision rooted in
                storytelling, we create timeless imagery that transcends trends.
                Every photograph we capture is a piece of your legacy, carefully
                crafted to evoke the same emotions decades from now as they do
                today.
              </p>

              <div className="pt-4">
                <div className="inline-block">
                  <span className="text-xl text-[#d4a373] pb-1 font-playfair">
                    Preserving Memories, Creating Art
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
