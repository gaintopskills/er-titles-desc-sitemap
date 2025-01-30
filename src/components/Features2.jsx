import { motion } from "framer-motion";

export const Features2 = () => (
  <section className="w-full bg-black mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Column 1 */}
        <div className="space-y-12">
          {/* Section 1 */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left bg-gray-800 p-6 rounded-md min-h-[350px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">Embroidery</h2>
            <img
              src="https://via.placeholder.com/300"
              alt="Embroidery"
              className="w-full max-w-xs rounded-md mb-4"
            />
            <p className="text-secondaryText leading-loose">
              High-end embroidery services for custom apparel, uniforms, and promotional products. Perfect for a high-quality finish on your garments.
            </p>
          </div>
          {/* Section 2 */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left bg-gray-800 p-6 rounded-md min-h-[350px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">Screen Printing</h2>
            <img
              src="https://via.placeholder.com/300"
              alt="Screen Printing"
              className="w-full max-w-xs rounded-md mb-4"
            />
            <p className="text-secondaryText leading-loose">
              Expert screen printing services for bold, long-lasting designs on apparel and promotional products.
            </p>
          </div>
          {/* Section 3 */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left bg-gray-800 p-6 rounded-md min-h-[350px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">DTG Printing</h2>
            <img
              src="https://via.placeholder.com/300"
              alt="DTG Printing"
              className="w-full max-w-xs rounded-md mb-4"
            />
            <p className="text-secondaryText leading-loose">
              Precision DTG printing for custom clothing brands, fashion events, and promotional products.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-12">
          {/* Section 4 */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left bg-gray-800 p-6 rounded-md min-h-[350px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">Cut & Sew</h2>
            <img
              src="https://via.placeholder.com/300"
              alt="Cut & Sew"
              className="w-full max-w-xs rounded-md mb-4"
            />
            <p className="text-secondaryText leading-loose">
              Professional cut-and-sew services to bring your creative vision to life with precision and style.
            </p>
          </div>
          {/* Section 5 */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left bg-gray-800 p-6 rounded-md min-h-[350px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">Blank Apparel</h2>
            <img
              src="https://via.placeholder.com/300"
              alt="Blank Apparel"
              className="w-full max-w-xs rounded-md mb-4"
            />
            <p className="text-secondaryText leading-loose">
              High-quality blank apparel for screen printing, embroidery, and DTG printing projects.
            </p>
          </div>
          {/* Section 6 */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left bg-gray-800 p-6 rounded-md min-h-[350px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">Branding Solutions</h2>
            <img
              src="https://via.placeholder.com/300"
              alt="Branding Solutions"
              className="w-full max-w-xs rounded-md mb-4"
            />
            <p className="text-secondaryText leading-loose">
              Comprehensive branding solutions for custom merchandise and apparel.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
