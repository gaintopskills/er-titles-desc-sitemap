import React, { useState } from 'react';

export const Gallery4 = () => {
    const categories = [
        "All",
        "Embroidery",
        "Patches",
        "Screen Printing",
        
        "DTG",
        "Heat Transfer",
        "Sublimation",
        
        "Photographic Embroidery",
    ];

    const images = [
        { src: "/embroidery/embroidery-services-los-angeles-ca.webp", album: "Embroidery" },
        { src: "/embroidery/custom-embroidered-denim-jacket-los-angeles.webp", album: "Embroidery" },
        { src: "/embroidery/custom-embroidered-denim-jacket-selina-gomes.webp", album: "Embroidery" },

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
        { src: "/embroidery/high-end-custom-embroidery-los-angeles.webp", album: "Embroidery" },
        { src: "/patches/dtla-los-angeles-custom-embroidery-travis-scott-custom-selebrity-jacket.webp", album: "Embroidery" },
        { src: "/patches/dtla-los-angeles-custom-embroidery-travis-scott-custom-selebrity-hat-cap-snap-back-rodeo.webp", album: "Embroidery" },
        { src: "/patches/dtla-los-angeles-custom-embroidery-travis-theweekend-the-weekend-selebrity-jacket.webp", album: "Embroidery" },
        { src: "/embroidery/metalic-embroidery-services-los-angeles.webp", album: "Embroidery" },
        { src: "/embroidery/unique-apparel-embroidery-services-los-angeles..webp", album: "Embroidery" },
        { src: "/embroidery/unique-embroidery-services-los-angeles.webp", album: "Embroidery" },
        { src: "/embroidery/google-cloud-custom-embroidery-logo.webp", album: "Patches" },
        
        { src: "/patches/american-flag-patches-bulk.webp", album: "Patches" },
        { src: "/patches/american-flag-patches-high-volume-production.webp", album: "Patches" },
        { src: "/patches/best-custom-patches-los-angeles-la-red-jacket-cactus.webp", album: "Patches" },
        { src: "/patches/custom-high-quality-patches-los-angeles-la-justin-bieber-military-jacket-purpose-tour.webp", album: "Patches" },
        { src: "/patches/patches-on-hats-services-los-angeles.webp", album: "Patches" },
        { src: "/patches/to-mars-custom-patches-los-angeles.webp", album: "Patches" },
        { src: "/patches/billie-be-custom-patches-los-angeles.webp", album: "Patches" },
        { src: "/patches/be-red-custom-patches-los-angeles.webp", album: "Patches" },
        { src: "/patches/be-custom-patches-los-angeles.webp", album: "Patches" },
        { src: "/patches/billie-patches-los-angeles.webp", album: "Patches" },


        { src: "/sublimation/sublimated-metalic-clothing-services-los-angeles.webp", album: "Sublimation" },
        { src: "/sublimation/hight-quality-sublimated-clothes-services-los-angeles.webp", album: "Sublimation" },
        { src: "/sublimation/sublimated-clothes-services-los-angeles.webp", album: "Sublimation" },
        { src: "/sublimation/sublimation-shirt-seercives-los-angeles.webp", album: "Sublimation" },
        { src: "/sublimation/sublimation-patches-seercives-los-angeles-snake.webp", album: "Sublimation" },
        { src: "/sublimation/high-quality-sublimated-patches-seercives-los-angeles.webp", album: "Sublimation" },
        { src: "/sublimation/bulk-sublimated-patches-seercives-los-angeles.webp", album: "Sublimation" },
        { src: "/sublimation/digital-sumlimation-hat-los-angeles.webp", album: "Sublimation" },
        { src: "/sublimation/los-angeles-digital-sublimation-fabric-printing-clothing-animal-print-shorts-black-milk-matching-pannels.webp", album: "Sublimation" },
        { src: "/sublimation/DTLA-Downtown-LA-Los-Angeles-Custom-Photographic-embroidery-high-details-quality.webp", album: "Sublimation" },
        
        
        { src: "/photographic-embroidery/custom-photographic-embroidery-los-angeles.webp", album: "Photographic Embroidery" },
        { src: "/photographic-embroidery/custom-photographic-embroidery-patches-los-angeles.webp", album: "Photographic Embroidery" },
        
        { src: "/dtg/custom-DIRECT-TO-GARMENT-DIGITAL-PRINTING-services-LOS-ANGELES.webp", album: "DTG" },
        { src: "/dtg/los-angeles-dtg-direct-to-garment-printing-the-weekend-denim-jacket-we-overdose.webp", album: "DTG" },
        { src: "/dtg/dtla-los-angeles-custom-adaptation-clothing-denim-jacket-fashion-digital-printing.webp", album: "DTG" },
        { src: "/dtg/dtg-services-in-los-angees.webp", album: "DTG" },

        { src: "/screen-printing/screen-printing-services-los-angeles.webp", album: "Screen Printing" },
        { src: "/screen-printing/high-volume-screen-printing-services-los-angeles.webp", album: "Screen Printing" },
        { src: "/screen-printing/hoodie-screen-printing-services.webp", album: "Screen Printing" },
        { src: "/screen-printing/tank-top-screen-printing-services-la.webp", album: "Screen Printing" },
       
        { src: "/screen-printing/detailed-screen-printing-services-la.webp", album: "Screen Printing" },
        { src: "/screen-printing/dtla-los-angeles-custom-fashion-screen-printing-black-t-shirt-skull-mason-joe-perez-Resurrection-collection-back.webp", album: "Screen Printing" },
       
        { src: "/screen-printing/screen-printing-on-services.webp", album: "Screen Printing" },
        { src: "/screen-printing/high-quality-screen-printing-services-on-shirts.webp", album: "Screen Printing" },
        { src: "/screen-printing/screen-printing-on-shirts-services.webp", album: "Screen Printing" },
        { src: "/screen-printing/metalic-screen-printing-services-los-angeles.webp", album: "Screen Printing" },
        { src: "/screen-printing/dtla-los-angeles-custom-fashion-screen-printing-black-t-shirt-snake-mason-joe-perez-Resurrection-collection-back.webp", album: "Screen Printing" },
        { src: "/screen-printing/best-screen-printing-los-angeles.webp", album: "Screen Printing" },
        { src: "/screen-printing/custom-screen-printing-los-angeles.webp", album: "Screen Printing" },
        { src: "/screen-printing/screen-printing-on-tote-bags-2.webp", album: "Screen Printing" },
        
        { src: "/heat-transfer/sport-team-heat-transfer-services-los-angeles.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/team-sports-heat-transfer-services-los-angeles.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/expert-heat-transfer-services-los-angeles.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/bulk-heat-transfer-services-los-angeles.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/high-quality-heat-transfer-services-los-angeles.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/heat-transfer-services-on-tshirts.webp", album: "Heat Transfer" },
 
        { src: "/heat-transfer/heat-transfer-labling-services-los-angeles.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/heat-transfer-on-hats-services-los-angeles-2.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/hat-heat-transfer-services.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/t-shirt-heat-transfer-services.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/sleeping-masks-heat-transfer-services.webp", album: "Heat Transfer" },
        { src: "/heat-transfer/heat-transfer-services-on-hats.webp", album: "Heat Transfer" },
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
           <p class="text-center">Our diverse embellishment techniques are done in one house and can be combined to create stunning results! See the examples of our work below.</p>
<p class="text-center">From simple samples to full-fledged production of 15,000 + units, we are ready to take on any project.</p>

            <main className="p-4">
            <div className="flex flex-wrap gap-2 mb-6">
    {categories.map((category, index) => (
        <div key={category} className="flex items-center">
            {index !== 0 && <div className="h-5 w-[1px] bg-gray-400 mx-0"></div>} {/* Vertical Line */}
            <button
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 rounded-md font-bold relative transition duration-300 ${
                    selectedCategory === category
                        ? "text-white after:w-full after:bg-white"
                        : "text-white after:bg-gray-500"
                } 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full`}
            >
                {category}
            </button>
        </div>
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
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-6">
        <div className="relative flex items-center justify-center w-full h-full">
            <img
                src={lightboxImage.src}
                alt={lightboxImage.album}
                className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 bg-gray-800 text-white p-3 rounded-full text-lg"
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
