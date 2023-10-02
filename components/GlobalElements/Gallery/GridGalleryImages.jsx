import React from 'react';

function GridGalleryImages() {
    const images = [
        '/images/image1.jpg', // Replace with the actual paths to your images
        '/images/image2.jpg',
        '/images/image3.jpg'
        // Add more image paths as needed
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
                <div key={index} className="relative group cursor-pointer">
                    <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-md transition duration-300 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-lg font-semibold">
                            Image {index + 1}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GridGalleryImages;
