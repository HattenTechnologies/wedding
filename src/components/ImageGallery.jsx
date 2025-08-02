import React, { useState } from "react";
import { X, Heart, Share2 } from "lucide-react";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      alt: "Mountain Landscape",
      title: "Alpine Glory",
      size: "large-wide", // 2x1
      color: "#8B5CF6",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop",
      alt: "Forest Path",
      title: "Forest Dreams",
      size: "tall", // 1x2
      color: "#10B981",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=500&fit=crop",
      alt: "Ocean Beach",
      title: "Ocean Waves",
      size: "square", // 1x1
      color: "#3B82F6",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1418065460487-3018a4c1d4c4?w=400&h=300&fit=crop",
      alt: "Lake Reflection",
      title: "Mirror Lake",
      size: "wide", // 1x1
      color: "#06B6D4",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=350&h=600&fit=crop",
      alt: "Desert Sunset",
      title: "Desert Magic",
      size: "large-square", // 2x2
      color: "#F59E0B",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&h=350&fit=crop",
      alt: "Autumn Forest",
      title: "Golden Hour",
      size: "wide", // 2x1
      color: "#EF4444",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1464822759353-24a3de18b865?w=400&h=400&fit=crop",
      alt: "Snow Mountains",
      title: "Winter Peak",
      size: "square", // 1x1
      color: "#6366F1",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=500&fit=crop",
      alt: "Starry Night",
      title: "Cosmic Wonder",
      size: "tall", // 1x2
      color: "#8B5CF6",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop",
      alt: "Misty Mountains",
      title: "Mystic Peaks",
      size: "square", // 1x1
      color: "#10B981",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=350&h=500&fit=crop",
      alt: "Sunflower Field",
      title: "Summer Bliss",
      size: "square", // 1x1
      color: "#F59E0B",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      alt: "Canyon View",
      title: "Red Rocks",
      size: "wide", // 2x1
      color: "#EF4444",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop",
      alt: "Lake View",
      title: "Peaceful Waters",
      size: "wide", // 1x1
      color: "#06B6D4",
    },
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case "square":
        return "col-span-1 row-span-1 h-48";
      case "wide":
        return "col-span-2 row-span-1 h-48";
      case "tall":
        return "col-span-1 row-span-2 h-100";
      case "large-wide":
        return "col-span-2 row-span-1 h-48";
      case "large-square":
        return "col-span-2 row-span-2 h-96";
      case "extra-wide":
        return "col-span-3 row-span-1 h-48 hidden lg:block";
      default:
        return "col-span-1 row-span-1 h-48";
    }
  };

  const toggleLike = (imageId, e) => {
    e.stopPropagation();
    const newLiked = new Set(likedImages);
    if (newLiked.has(imageId)) {
      newLiked.delete(imageId);
    } else {
      newLiked.add(imageId);
    }
    setLikedImages(newLiked);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Block Gallery</h1>
          <p className="text-gray-400 text-lg">
            Puzzle-style photo arrangement
          </p>
        </div>

        {/* Block-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 auto-rows-min">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`
                ${getSizeClasses(image.size)}
                relative group cursor-pointer overflow-hidden 
                transition-all duration-300 rounded-2xl hover:scale-100 hover:z-10
                border-4 border-gray-800 hover:border-white
                ${index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"}
              `}
              style={{
                backgroundColor: image.color,
                boxShadow: `0 8px 32px ${image.color}40`,
              }}
              onClick={() => openModal(image)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full rounded-2xl object-cover transition-all duration-500 group-hover:scale-100 mix-blend-overlay group-hover:mix-blend-normal "
                loading="lazy"
              />

              {/* Color Overlay */}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                {/* Top Actions */}

                {/* Bottom Info */}
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200 opacity-80">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="relative max-w-5xl max-h-full animate-in zoom-in-95 duration-300">
            <button
              onClick={closeModal}
              className="absolute -top-16 right-0 p-3 text-white hover:text-gray-300 transition-colors z-10 bg-white/10 rounded-full backdrop-blur-sm"
            >
              <X size={24} />
            </button>

            <div
              className="relative border-4 border-gray-600 overflow-hidden"
              style={{ backgroundColor: selectedImage.color }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain mix-blend-overlay"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-sm text-gray-400 mb-2">
                      Block #{selectedImage.id}
                    </div>
                    <h3 className="text-white text-3xl font-bold mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-300 text-lg">{selectedImage.alt}</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
