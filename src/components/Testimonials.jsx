import { motion } from "framer-motion";
import testimonial1 from "../assets/images/high-end-embroidery-patches-los-angeles.webp";
import testimonial2 from "../assets/images/high-volume-patches-los-angeles.webp";
import testimonial3 from "../assets/images/fashion-embroidery-patches-los-angeles-1.webp";

const testimonialsData = [
  {
    heading: "Unlimited Potential",
    content:
      "Our core embellishment techniques, in one house, can be combined to create stunning results!",
    image: testimonial1,
  },
  {
    heading: "High Quality",
    content:
      "With over 30 years of experience in the fashion industry, we are ready to take on any project that you can imagine.",
    image: testimonial2,
  },
  {
    heading: "High Volume",
    content:
      "From simple samples to full-fledged production of 15,000 + units.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-10 lg:pt-16 lg:mb-32 bg-black relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="main-border-gray-darker rounded-xl bg-black flex flex-col px-4 py-6 md:px-6 md:py-8 items-center text-center h-full shadow-md"
              key={`${testimonial.heading}-${index}`}
            >
              {/* Render image above heading */}
              <div className="flex justify-center mb-3 md:mb-4">
                <img
                  src={testimonial.image.src}
                  alt="Customer avatar"
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover"
                  aria-label={testimonial.heading}
                  loading="lazy"
                />
              </div>

              {/* Render dynamic heading */}
              <h2 className="text-white text-lg sm:text-xl md:text-base font-bold mb-3 md:mb-4">
                {testimonial.heading}
              </h2>

              {/* Center content */}
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-4">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
