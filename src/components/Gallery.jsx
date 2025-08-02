import React from "react";

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      alt: "Lorem ipsum dolor sit amet",
      title: "Mountains",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
      alt: "Lorem ipsum dolor sit amet",
      title: "Automobile",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1466970601638-4e5fb6556584",
      alt: "Lorem ipsum dolor sit amet",
      title: "Mountains",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Lorem ipsum dolor sit amet",
      title: "Mountains",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1485965120184-e220f721d03e",
      alt: "Lorem ipsum dolor sit amet",
      title: "Bicycle",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf",
      alt: "Lorem ipsum dolor sit amet",
      title: "Office",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1532103054090-3491f1a05d0d",
      alt: "Lorem ipsum dolor sit amet",
      title: "Office",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1599033153041-e88627ca70bb",
      alt: "Lorem ipsum dolor sit amet",
      title: "Cityscape",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1507097634215-e82e6b518529",
      alt: "Lorem ipsum dolor sit amet",
      title: "Cityscape",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      alt: "Lorem ipsum dolor sit amet",
      title: "Mountains",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1528988719300-046ff7faf8cb",
      alt: "Lorem ipsum dolor sit amet",
      title: "Mountains",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Lorem ipsum dolor sit amet",
      title: "Mountains",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      alt: "Lorem ipsum dolor sit amet",
      title: "Mountains",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Lorem ipsum dolor sit amet",
      title: "Mountains",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf",
      alt: "Lorem ipsum dolor sit amet",
      title: "Office",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1532103054090-3491f1a05d0d",
      alt: "Lorem ipsum dolor sit amet",
      title: "Office",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 17,
      src: "https://images.unsplash.com/photo-1599033153041-e88627ca70bb",
      alt: "Lorem ipsum dolor sit amet",
      title: "Cityscape",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 18,
      src: "https://images.unsplash.com/photo-1494475673543-6a6a27143fc8",
      alt: "Lorem ipsum dolor sit amet",
      title: "Cityscape",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 19,
      src: "https://images.unsplash.com/photo-1528988719300-046ff7faf8cb",
      alt: "Lorem ipsum dolor sit amet",
      title: "Mountains",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 20,
      src: "https://images.unsplash.com/photo-1466970601638-4e5fb6556584",
      alt: "Lorem ipsum dolor sit amet",
      title: "Mountains",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "system-ui, sans-serif",
        fontSize: "1rem",
        lineHeight: "1.7",
        color: "#070707",
        background: "#fff",
        padding: "1.25rem",
      }}
    >
      <h1
        style={{
          fontSize: "1.75rem",
          lineHeight: "1.5",
          marginBottom: "1rem",
        }}
      >
        CSS Grid - Photo Gallery
      </h1>

      {/* Gallery Grid */}
      <div
        className="gallery"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(12.5rem, 1fr))",
          gridAutoRows: "12.5rem",
          gridAutoFlow: "dense",
          gap: "0.75rem",
        }}
      >
        {images.map((image, index) => (
          <figure
            key={image.id}
            className={`gallery-figure ${
              index === 0
                ? "first-child"
                : (index + 1) % 4 === 1
                ? "nth-4n-plus-1"
                : (index + 1) % 4 === 2
                ? "nth-4n-plus-2"
                : ""
            }`}
            style={{
              containerType: "inline-size",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr)",
              gridTemplateRows: "minmax(0, 1fr)",
              position: "relative",
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                gridArea: "1 / 1 / -1 / -1",
                transition: "transform 0.3s ease",
              }}
              className={`gallery-img rounded-2xl ${
                index % 2 === 0 ? "img-rotate-even" : "img-rotate-odd "
              }`}
              loading="lazy"
            />
            <figcaption
              style={{
                gridArea: "1 / 1 / -1 / -1",
                alignSelf: "end",
                zIndex: 1,
                padding: "3em 15% 1em 1em",
                color: "#fff",
                fontSize: "0.875rem",
                lineHeight: "1.3",
                background:
                  "linear-gradient(transparent 25%, rgba(0, 0, 0, 0.75))",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
              className="gallery-figcaption rounded-2xl"
            >
              <h3 style={{ fontSize: "1.0625rem" }}>{image.title}</h3>
              <p
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {image.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <style jsx>{`
        .img-rotate-even:hover {
          transform: rotate(1deg);
        }

        .img-rotate-odd:hover {
          transform: rotate(-1deg);
        }

        @media (min-width: 600px) {
          .first-child {
            grid-area: span 2 / span 2 !important;
          }
          .nth-4n-plus-1 {
            grid-row: span 2 !important;
          }
          .nth-4n-plus-2 {
            grid-column: span 2 !important;
          }
        }

        @container (min-width: 20rem) {
          .gallery-figcaption {
            opacity: 1 !important;
          }
        }

        .gallery-figure:hover .gallery-figcaption {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
