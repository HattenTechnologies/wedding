import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white text-[#0a1426] pt-12 pb-16 px-6 md:px-10 lg:px-20 font-serif">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Logo + Navigation */}

        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-5xl font-[Great_Vibes] text-[#d4a373] mb-4">
            Contact Details
          </h2>
          <p className=" text-gray-500 font-playfair md:text-lg max-w-screen mx-auto">
            Let's create something beautiful together — reach out and let's talk
            magic
          </p>
        </div>

        {/* Info + Map Grid */}
        <div className="grid lg:grid-cols-2 gap-2 items-start">
          {/* Left: Info */}
          <div className="space-y-8 text-base md:text-lg leading-relaxed">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-[#d4a373] mt-1" />
              <span>
                <span className="font-playfair text-[#d4a373]">Email:</span>{" "}
                <a
                  href="mailto:info@lifeshotsphotography.com"
                  className="hover:underline  text-gray-700 font-lora "
                >
                  info@lifeshotsphotography.com
                </a>
              </span>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-[#d4a373] mt-1" />
              <span>
                <span className="font-playfai text-[#d4a373]">Phone:</span>{" "}
                <a
                  href="tel:+919840963136"
                  className="hover:underline  text-gray-700 font-lora "
                >
                  +91 9840963136
                </a>
              </span>
            </div>

            <p>
              <span className="font-playfair text-[#d4a373]">Address:</span> 456
              Eternal Moments Avenue,
              <br />
              Chennai, Tamil Nadu, India
            </p>
          </div>

          {/* Right: Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#d4a37350] h-80 md:h-[400px]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Chennai&output=embed"
              className="w-full h-full border-none"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-28 text-center border-t border-[#d4a37340] pt-10">
        <p className="text-3xl font-[Great_Vibes] text-[#d4a373] mb-4">
          Lifeshots Photography
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#d4a373] hover:text-[#b8860b] transition"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#d4a373] hover:text-[#b8860b] transition"
          >
            <FaFacebookF size={22} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#d4a373] hover:text-[#b8860b] transition"
          >
            <FaYoutube size={22} />
          </a>
        </div>
        <div className="flex justify-center items-center gap-6 border-b border-[#d4a37340] pb-6">
          <nav className="flex gap-6 text-sm md:text-base  text-gray-500 font-medium">
            <a href="/" className="hover:text-[#d4a373] transition">
              Home
            </a>
            <a href="#testimonials" className="hover:text-[#d4a373] transition">
              Testimonials
            </a>
            <a href="#portfolio" className="hover:text-[#d4a373] transition">
              Portfolio
            </a>
          </nav>
        </div>

        <p className="text-sm text-gray-500 pt-5 font-lora">
          © {new Date().getFullYear()} Lifeshots Photography. All rights
          reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
