import React from "react";

const testimonials = [
  {
    videoUrl: "https://www.youtube.com/embed/LpF_QXJeNC8",
    quote:
      "Lifeshots Photography captured our Tamil wedding with unmatched artistry. The vibrant colors and intricate details in every photo brought our traditions to life. Their team’s professionalism and warmth made the experience unforgettable.",
    author: "Lakshmi & Arjun",
    role: "Newlyweds",
  },
  {
    videoUrl: "https://www.youtube.com/embed/S7f2ysElSlY",
    quote:
      "The elegance and precision of Lifeshots Photography transformed our engagement into a visual masterpiece. Their attention to cultural nuances made every moment shine. We couldn’t be happier with the memories they’ve preserved.",
    author: "Priya & Vignesh",
    role: "Engaged Couple",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-[#f7f4ee] py-20 text-[#d4a373]" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-light font-moda mb-4">Testimonials</h2>
          <p className="text-gray-600 max-w-md mx-auto font-playfair text-base">
            Words from our cherished clients
          </p>
        </div>

        <div className="space-y-20">
          {testimonials.map((t, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
              {/* Video */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-[#d4a37350]">
                <iframe
                  src={t.videoUrl}
                  className="w-full h-full"
                  title={`Client Testimonial ${i + 1}`}
                  allowFullScreen
                ></iframe>
              </div>

              {/* Review */}
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#d4a373] hover:shadow-xl transition-transform transform hover:-translate-y-1">
                <p className="text-gray-700 text-lg font-playfair relative leading-relaxed">
                  <span className="absolute -top-6 -left-3 text-[#d4a373] text-4xl font-playfair">
                    “
                  </span>
                  {t.quote}
                  <span className="absolute -bottom-6 -right-3 text-[#d4a373] text-4xl  font-playfair">
                    ”
                  </span>
                </p>
                <div className="mt-6">
                  <p className="text-2xl text-[#0a1426] font-[Great_Vibes]">
                    {t.author}
                  </p>
                  <p className="text-sm text-gray-500 italic">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
