import React from "react";

const images = [
  "https://source.unsplash.com/400x300/?gujarati,food",
  "https://source.unsplash.com/400x300/?restaurant,meal",
  "https://source.unsplash.com/400x300/?indian,food",
  "https://source.unsplash.com/400x300/?curry",
  "https://source.unsplash.com/400x300/?dosa",
  "https://source.unsplash.com/400x300/?dessert",
];

function Gallery() {
  return (
    <section id="gallery" className="p-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Gallery / ગેલેરી</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Food"
            className="w-full h-60 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;