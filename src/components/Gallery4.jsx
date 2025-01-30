import React, { useState } from 'react';

export const Gallery4 = () => {
    const categories = [
        "Embroidery",
        "Patches",
        "Sublimation",
        "Photographic Embroidery",
        "DTG",
        "Screen Printing",
        "Heat Transfer",
        "All",
    ];

    const images = [
        { src: "/embroidery/custom-embroidery-los-angeles.webp", album: "Embroidery" },
        { src: "/embroidery/custom-hat-embroidery.webp", album: "Embroidery" },
        { src: "/embroidery/custom-bomber-jacket-embroidery.webp", album: "Embroidery" },
        { src: "/embroidery/high-volume-embroidery.webp", album: "Embroidery" },
        { src: "/embroidery/custom-towel-embroidery.webp", album: "Embroidery" },
        { src: "/embroidery/wholesale-custom-hat-embroidery.webp", album: "Embroidery" },
        { src: "/embroidery/high-volume-custom-hat-embroidery..webp", album: "Embroidery" },
        { src: "/embroidery/custom-embroidery-services-los-angeles.webp", album: "Embroidery" },
        { src: "/embroidery/wholesale-custom-embroidered-hats.webp", album: "Embroidery" },
        { src: "/embroidery/wilson-custom-embroidery.webp", album: "Embroidery" },
        { src: "/embroidery/google-cloud-custom-embroidery-logo.webp", album: "Embroidery" },
        { src: "/embroidery/high-end-custom-embroidery-los-angeles.webp", album: "Embroidery" },
        { src: "/embroidery/los-angeles-custom-embroidery-selena-gomez-custom-selebrity-jacket.webp", album: "Embroidery" },
        { src: "/embroidery/dtla-los-angeles-custom-adaptation-clothing-fashion-embroidery-design-embroidered-buttoned-long-shirt-red-flowers.webp", album: "Embroidery" },
        { src: "/embroidery/los-angeles-custom-fashion-embroidery-frame-denim-jacket-by-sasha-designer-clothes.webp", album: "Embroidery" },
        { src: "/embroidery/los-angeles-embroidery-fashion-frame-denim-jacket-by-sasha-designer-apparel.webp", album: "Embroidery" },
        { src: "/embroidery/los-angeles-embroidery-fashion-frame-denim-jeans-by-sasha-designer-clothes-custom-artwork.webp", album: "Embroidery" },
        { src: "/embroidery/los-angeles-embroidery-fashion-frame-denim-jeans-by-sasha-designer-clothes-custom-patches.webp", album: "Embroidery" },
        { src: "/patches/DTLA-Downtown-LA-Los-Angeles-Custom-Patches-3d-puff-embroidery-Sequins-embroidery-ADAP.webp", album: "Embroidery" },
        { src: "/patches/dtla-los-angeles-custom-embroidery-travis-scott-custom-selebrity-jacket.webp", album: "Embroidery" },
        { src: "/patches/dtla-los-angeles-custom-embroidery-travis-scott-custom-selebrity-hat-cap-snap-back-rodeo.webp", album: "Embroidery" },
        { src: "/patches/dtla-los-angeles-custom-embroidery-travis-theweekend-the-weekend-selebrity-jacket.webp", album: "Embroidery" },
        { src: "/patches/Los-angeles-embroidery-and-print-best-color-matching-sublimation-vibrancy-and-detail-minneapolis.webp", album: "Embroidery" },
        { src: "/patches/custom-high-quality-patches-los-angeles-la-justin-bieber-military-jacket-purpose-tour.webp", album: "Embroidery" },
        { src: "/patches/los-angeles-patches-la-sublimation-and-embroidery-guns-n-roses.webp", album: "Patches" },
        { src: "/patches/high-quality-custom-patches-los-angeles-beastie-fiery-lion-black-and-white-jacket.webp", album: "Patches" },
        { src: "/patches/high-fashion-patches-los-angeles-la-frame-denim-black-leather-jacket.webp", album: "Patches" },
        { src: "/patches/best-custom-patches-los-angeles-la-red-jacket-cactus.webp", album: "Patches" },
        { src: "/patches/custom-high-quality-patches-los-angeles-la-justin-bieber-military-jacket-purpose-tour.webp", album: "Patches" },
        { src: "/patches/Los-angeles-embroidery-and-print-best-color-matching-sublimation-vibrancy-and-detail-minneapolis.webp", album: "Patches" },
        { src: "/patches/DTLA-Downtown-LA-Los-Angeles-Custom-Patches-3d-puff-embroidery-Sequins-embroidery-ADAP.webp", album: "Patches" },
        { src: "/sublimation/digital-sumlimation-hat-los-angeles.webp", album: "Sublimation" },
        { src: "/sublimation/los-angeles-digital-sublimation-fabric-printing-clothing-animal-print-shorts-black-milk-matching-pannels.webp", album: "Sublimation" },
        { src: "/sublimation/los-angeles-digital-sublimation-fabric-printing-clothing-feathers-printed-skirt-black-milk-matching-pannels.webp", album: "Sublimation" },
        { src: "/sublimation/los-angeles-digital-sublimation-fabric-printing-clothing-floral-printed-overalls-black-milk-matching-pannels.webp", album: "Sublimation" },
        { src: "/sublimation/los-angeles-digital-sublimation-fabric-printing-clothing-printede-blue-nature-trees-leggins-black-milk-matching-pannels.webp", album: "Sublimation" },
        { src: "/sublimation/los-angeles-digital-sublimation-fabric-printing-clothing-printede-gyptian-skirt-black-milk-matching-pannels.webp", album: "Sublimation" },
        { src: "/sublimation/DTLA-Downtown-LA-Los-Angeles-Custom-Photographic-embroidery-high-details-quality.webp", album: "Sublimation" },
        { src: "/photographic-embroidery/custom-photographic-embroidery-los-angeles.webp", album: "Photographic Embroidery" },
        { src: "/dtg/custom-DIRECT-TO-GARMENT-DIGITAL-PRINTING-services-LOS-ANGELES.webp", album: "DTG" },
        { src: "/screen-printing/screen-printing-services-la.webp", album: "Screen Printing" },
        { src: "/screen-printing/tank-top-screen-printing-services-la.webp", album: "Screen Printing" },
        { src: "/screen-printing/hoodie-screen-printing-services.webp", album: "Screen Printing" },
        { src: "/screen-printing/detailed-screen-printing-services-la.webp", album: "Screen Printing" },
        { src: "/screen-printing/shirt-screen-printing-services-la.webp", album: "Screen Printing" },
        { src: "/screen-printing/dtla-los-angeles-custom-fashion-screen-printing-black-t-shirt-skull-mason-joe-perez-Resurrection-collection-back.webp", album: "Screen Printing" },
        { src: "/screen-printing/dtla-los-angeles-custom-fashion-screen-printing-black-t-shirt-snake-mason-joe-perez-Resurrection-collection-back.webp", album: "Screen Printing" },
        { src: "/screen-printing/best-screen-printing-los-angeles.webp", album: "Screen Printing" },
        { src: "/screen-printing/custom-screen-printing-los-angeles.webp", album: "Screen Printing" },
        { src: "/heat-transfer/hat-heat-transfer-services.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/t-shirt-heat-transfer-services.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/sleeping-masks-heat-transfer-services.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/heat-transfer-services-on-hats.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/hat-heat-transfer-services.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/custom-heat-transfer-on-t-shirts-los-angeles.webp", album: "Heat Transfer" },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [lightboxImage, setLightboxImage] = useState(null);

    const filteredImages = selectedCategory === "All"
        ? images
        : images.filter((image) => image.album === selectedCategory);

    return (
        <div className="min-h-screen p-6 bg-black text-white">
           
                <h1>Gallery</h1>
           <p>Our diverse embellishment techniques are done in one house and can be combined to create stunning results! See the examples of our work below.</p>
<p>From simple samples to full-fledged production of 15,000 + units, we are ready to take on any project.</p>

            <main className="p-4">
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-md font-bold shadow-md ${
                                selectedCategory === category
                                    ? "bg-gray-600 text-white"
                                    : "bg-gray-400 hover:bg-red-800 text-white"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredImages.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.album}
                            loading="lazy"
                            className="h-96 rounded shadow-md object-cover w-full transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
                            onClick={() => setLightboxImage(image)}
                        />
                    ))}
                </div>

                {lightboxImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="relative">
                            <img
                                src={lightboxImage.src}
                                alt={lightboxImage.album}
                                className="max-w-3xl rounded shadow-lg"
                            />
                            <button
                                onClick={() => setLightboxImage(null)}
                                className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full"
                            >
                                ✖
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Gallery4;
