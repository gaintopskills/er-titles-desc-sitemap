import React, { useState } from 'react';


export const EventsGallery = () => {
   const categories = [
     
        "Embroidery",
       "Heat Press",
       "Screen Printing",
       "All",
     
   ];


   const images = [
       { src: "/events-gallery/embroidery/on-site-embroidery-events-los-angeles.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/high-end-live-embroidery-events.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/big-live-embroidery-events.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/custom-design-onsite-embroidery-evets.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/on-site-embroidery-events.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/custom-on-site-embroidery-events.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/on-site-embroidery-services.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/promotional-embroidery-events.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/on-site-embroidery-events-custom-design.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/on-site-embroidery-events-at-my-venue.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/live-embroidery-events-in-los-angeles.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/onsite-embroidery-ebents-high-volume-production.webp", album: "Embroidery" },

       { src: "/events-gallery/embroidery/onsite-custom-embroidery-on-bags.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/live-embroydery-events-initials-on-towels.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/onsite-promotional-embroydery.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/high-end-onsite-embroidey-events.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/onsite-embroydery-high-volume-production.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/onsite-embroydery-for-promotional-events.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/onsite-embroydery-events-for-branding.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/onsite-embroydery-events-initials.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/onsite-embroydery-setup.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/onsite-embroydery-on-socks.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/onsite-embroydery-on-scarfs.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/custon-embroydery-on-scarfs.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/custom-onsite-embroidery-events-for-guests.webp", album: "Embroidery" },
       { src: "/events-gallery/embroidery/onsite-emboidery-events-la.webp", album: "Embroidery" },
     
       { src: "/events-gallery/heat-press/on-site-heat-press-services.webp", album: "Heat Press" },
       { src: "/events-gallery/heat-press/custom-on-site-heat-press-events.webp", album: "Heat Press" },
       { src: "/events-gallery/heat-press/on-site-heat-press-events-custom.webp", album: "Heat Press" },
       { src: "/events-gallery/heat-press/on-site-heat-press-custom-design.webp", album: "Heat Press" },
       { src: "/events-gallery/heat-press/on-site-heat-press-on-tote-bags.webp", album: "Heat Press" },
       { src: "/events-gallery/heat-press/on-site-heat-press-events-los-angeles.webp", album: "Heat Press" },

       { src: "/events-gallery/heat-press/screen-printing-custom-events.webp", album: "Screen Printing" },
       { src: "/events-gallery/heat-press/screen-printing-onsite.webp", album: "Screen Printing" },
       { src: "/events-gallery/heat-press/screen-printing.webp", album: "Screen Printing" },
      
   ];


   const [selectedCategory, setSelectedCategory] = useState("Embroidery");
   const [lightboxImage, setLightboxImage] = useState(null);


   const filteredImages = selectedCategory === "All"
       ? images
       : images.filter((image) => image.album === selectedCategory);


   return (
       <div className="min-h-screen p-6 bg-black text-white">
         
               <h1>Gallery</h1>
           <main className="p-4">
           <div className="flex flex-wrap gap-2 mb-6">
   {categories.map((category, index) => (
       <div key={category} className="flex items-center">
           {index !== 0 && <div className="h-5 w-[1px] bg-gray-400 mx-0"></div>} {/* Vertical Line */}
           <button
               onClick={() => setSelectedCategory(category)}
               className={`px-4 py-2 rounded-md font-bold relative transition duration-300 ${
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


export default EventsGallery;



