import React from "react";
import { Link } from "react-router-dom";

// Portfolio categories data
const portfolioCategories = [
  {
    id: 1,
    name: "Baby Gallery",
    category: "Babygallery",
    image:
      "Cover/Babycover.jpg",
    description: "Tiny moments, forever held close",
  },
  {
    id: 2,
    name: "Brahmin Wedding",
    category: "Brahminwedding",
    image:
      "Cover/Brahmincover.jpg",
    description: "Sacred vows, chants, divine grace.",
  },
  {
    id: 3,
    name: "Christian Wedding",
    category: "Christianwedding",
    image:
      "Cover/Christiancover.jpg",
    description: "Faithful hearts, bound in grace",
  },
  {
    id: 4,
    name: "Hindu Wedding",
    category: "Hinduwedding",
    image:
      "Cover/Hinducover.jpg",
    description: "Tradition, color, love, eternal rituals.",
  },
  {
    id: 5,
    name: "Maternity",
    category: "Maternity",
    image:
      "Cover/Maternitycover.jpg",
    description: "Before birth, beauty quietly blooms",
  },
  {
    id: 6,
    name: "PreWedding",
    category: "PreWedding",
    image:
      "Cover/Preweddingcover.jpg",
    description: "Whispers of love, before vows",
  },
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-6xl font-moda text-[#d4a373]  mb-6">
            Our Portfolio
          </h2>
        </div>

        {/* Portfolio Grid - 6 items in 2 columns (2 in a row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-screen mx-auto">
          {portfolioCategories.map((category) => (
            <Link
              key={category.id}
              to={`/gallery/${category.category}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.00]"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-3xl font-moda mb-2 group-hover:text-[#d4a373] transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm tex-playfair opacity-70 group-hover:opacity-100 transition-opacity duration-300 mb-3">
                    {category.description}
                  </p>

                  {/* View Gallery Button */}
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm  font-lora text-white/80">
                      View Gallery
                    </span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
};

export default Portfolio;


