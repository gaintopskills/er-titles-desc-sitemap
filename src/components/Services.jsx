import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Cut and Sew",
    description:
      "Our Cut and Sew services provide complete customization offering full package options. Whether it's unique apparel, athletic wear, custom t-shirts, or custom hoodies, we ensure precision, quality, and attention to detail in every stitch.",
    image: "/icons/cut-and-sew.webp",
    link: "/cut-and-sew/",
  },
  {
    title: "Embroidery",
    description:
      "We offer high-quality embroidery from custom patches to intricate applications for shirts, jackets, caps, workwear, and company apparel.",
    image: "/icons/embroidery-services.webp",
    link: "/custom-embroidery-services-high-volume/",
  },
  {
    title: "Screen Printing",
    description:
      "We deliver best and competative screen printing products. Our expirienced team gaurantees the highest quality offering a variety of unique tecniques such as plastisol, water base, high density, or puff prints.",
    image: "/icons/bulk-screen-printing-services.webp",
    link: "/screen-printing-dirrect-to-guarment/",
  },
  {
    title: "DTG - Direct To Garment",
    description:
      "We specialize in delivering high-quality DTG (Direct To Garment) printing, offering vibrant and durable designs with a smooth finish. Perfect for no hand feel, fashion events, or custom clothing lines, we ensure exceptional detail and color accuracy on every garment.",
    image: "/icons/direct-to-garment-services.webp",
    link: "/los-angeles-screen-printing-direct-to-garment-dtg/",
  },
  {
    title: "Digital Sublimation",
    description:
      "We utilize state-of-the-art Mimaki and Italian Monti Antonio machines to deliver top-quality digital sublimation services. All production is done in-house, ensuring exceptional results with speed and precision!",
      image: "/icons/digital-sublimation-services.webp",
      link: "/los-angeles-digital-sublimation-printing/",
  },
  {
    title: "Heat Transfer",
    description:
      "Premium full-color heat transfer services tailored for businesses, sports teams, fashion, and special events. Enjoy competitive pricing, quick turnaround times, and exceptional customer service.",
    image: "/icons/heat-tranfer.webp",
    link: "los-angeles-heat-transfer/",
  },
];
export const ServicesSection = () => {
  return (
    <section className="container mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden min-h-screen">
    {services.map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0 }} // Start with opacity 0
        whileInView={{ opacity: 1 }} // Fade in when in view
        viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
        transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animations
        className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 p-4 rounded-md transition duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-102 transform"
      >
        <figure className="w-full md:w-auto flex-shrink-0 overflow-hidden rounded-md">
          <a href={service.link}>
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="w-24 h-24 object-cover mx-auto transition duration-300 transform hover:scale-110"
            />
          </a>
        </figure>
        <div className="text-center md:text-left">
  <h3 className="text-2xl font-bold">
    {/* Title as a clickable link */}
    <a
      href={service.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-400 transition-colors"
    >
      {service.title}
    </a>
  </h3>
  <p className="text-gray-400">{service.description}</p>
</div>

      </motion.div>
    ))}
  </section>
  
  );
};
