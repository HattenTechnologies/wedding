import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
// Portfolio categories data (for finding category names)
const portfolioCategories = [
  { id: 1, name: "Baby Gallery", category: "Babygallery" },
  { id: 2, name: "Brahmin Wedding", category: "Brahminwedding" },
  { id: 3, name: "Christian Wedding", category: "Christianwedding" },
  { id: 4, name: "Hindu Wedding", category: "Hinduwedding" },
  { id: 5, name: "Maternity", category: "Maternity" },
  { id: 6, name: "PreWedding", category: "PreWedding" },
];

// Gallery images data for each category
const galleryData = {
  Babygallery: [
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1534661741053-ae93bda4cefb?w=800&h=900&fit=crop",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=550&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=700&fit=crop",
    "https://images.unsplash.com/photo-1551522435-a13afa10f103?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=850&fit=crop",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=750&fit=crop",
  ],
  Brahminwedding: [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=700&fit=crop",
    "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&h=900&fit=crop",
    "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1525160354320-d8e92641c563?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=550&fit=crop",
    "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=750&fit=crop",
    "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&h=650&fit=crop",
    "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=850&fit=crop",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&h=700&fit=crop",
  ],
  Christianwedding: [
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=700&fit=crop",
    "https://images.unsplash.com/photo-1620839966109-b5d5b7b97ff3?w=800&h=900&fit=crop",
    "https://images.unsplash.com/photo-1610464687310-3332d34adf0c?w=800&h=550&fit=crop",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=750&fit=crop",
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=650&fit=crop",
    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&h=600&fit=crop",
  ],
  Hinduwedding: [
    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=700&fit=crop",
    "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1606016159348-d0beb1d665b2?w=800&h=850&fit=crop",
    "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=750&fit=crop",
    "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=650&fit=crop",
    "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=700&fit=crop",
  ],
  Maternity: [
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=900&fit=crop",
    "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=750&fit=crop",
    "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&h=650&fit=crop",
    "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=850&fit=crop",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=700&fit=crop",
    "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=850&fit=crop",
    "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=850&fit=crop",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=700&fit=crop",
    "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=850&fit=crop",
  ],
  PreWedding: [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1520637836862-4d197d17c12a?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&h=700&fit=crop",
    "https://images.unsplash.com/photo-1459439498098-324006f0f72e?w=800&h=900&fit=crop",
    "https://images.unsplash.com/photo-1604422886808-2a9b02e5e7c7?w=800&h=650&fit=crop",
    "https://images.unsplash.com/photo-1583992981222-4ebeb1708d6a?w=800&h=750&fit=crop",
    "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop",
  ],
};

// Define different grid sizes for variety
const gridSizes = [
  "col-span-1 row-span-1", // small
  "col-span-2 row-span-1", // wide
  "col-span-1 row-span-2", // tall
  "col-span-2 row-span-2", // large
];

const GalleryPage = () => {
  const { category } = useParams();
  const images = galleryData[category] || [];
  const categoryName =
    portfolioCategories.find((cat) => cat.category === category)?.name ||
    category;

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate random grid sizes for images
  const getRandomSize = (index) => {
    // Make every 4th image large, every 3rd tall, some wide, rest small

    if (index % 6 === 0) return gridSizes[3]; // large
    if (index % 4 === 0) return gridSizes[2]; // tall
    if (index % 5 === 0) return gridSizes[2]; // wide

    if (index % 3 === 0) return gridSizes[1]; // wide

    return gridSizes[0]; // small
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, currentIndex]);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-moda text-[#d4a373] mb-4 capitalize">
            {categoryName} Gallery
          </h1>
          <p className="text-lg text-gray-600 font-playfair">
            Browse our collection of {categoryName.toLowerCase()}
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[200px] gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${getRandomSize(
                index
              )}`}
              onClick={() => openLightbox(image, index)}
            >
              <div className="w-full h-full overflow-hidden bg-gray-200">
                <img
                  src={image}
                  alt={`${categoryName} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                    <div className="w-16 h-16   rounded-full flex items-center justify-center bg-[#d4a373]  bg-opacity-20 backdrop-blur-sm">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image number indicator */}
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="text-center pt-16 space-x-4">
          <Link
            to="/"
            className="inline-block px-8 py-3 text-2xl text-[#d4a373] font-playfair rounded-full hover:bg-[#d4a373] hover:text-white transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-[#d4a373]  bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 z-10"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#d4a373] bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 z-10"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#d4a373]  bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 z-10"
          >
            <svg
              className="w-6 h-6 text-white"
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
          </button>

          {/* Image container */}
          <div className="max-w-5xl max-h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt={`${categoryName} ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#d4a373]  bg-opacity-50 text-white px-4 py-2 rounded-full">
            {currentIndex + 1} of {images.length}
          </div>

          {/* Keyboard hints */}
        </div>
      )}
      <footer className="mt-28 text-center border-t border-[#d4a37340] pt-5">
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
          <nav className="flex gap-6 text-sm md:text-base font-playfair text-gray-500 font-light">
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

        <p className="text-sm text-gray-500 font-lora pb-6 pt-2">
          © {new Date().getFullYear()} Lifeshots Photography. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default GalleryPage;


