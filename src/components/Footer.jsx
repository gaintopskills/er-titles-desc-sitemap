import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { TiktokIcon } from "../assets/icons/TiktokIcon";

const footerData = [
  {
    title: "Services", href: "/fashion-industry/",
    items: [
      { label: "Embroidery", href: "/custom-patches-los-angeles/", title: "Explore our embroidery services" },
      { label: "Screen Printing", href: "/screen-printing-dirrect-to-guarment/", title: "Learn about screen printing" },
      { label: "DTG", href: "/los-angeles-screen-printing-direct-to-garment-dtg/", title: "Discover Direct to Garment (DTG) printing" },
      { label: "Digital Sublimation", href: "/los-angeles-digital-sublimation-printing/", title: "View our sublimation printing options" },
      { label: "Heat Transfer", href: "/los-angeles-heat-transfer/", title: "Find out more about heat transfer printing" },
      { label: "Cut & Sew", href: "/cut-and-sew/", title: "Get custom cut & sew manufacturing" },
      { label: "Blank Apparel", href: "/blank-apparel/", title: "Browse our blank apparel collection" },
      { label: "Events", href: "/onsite-live-embroidery-events-los-angeles/", title: "Browse our blank apparel collection" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about-us/", title: "Learn more about our company" },
      { label: "Contact Us", href: "/contact-us/", title: "Get in touch with us" },
      { label: "Privacy Policy", href: "/privacy-policy/", title: "Read our privacy policy" },
     
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "3000 S. Santa Fe. Ave Unit B" },
    { label: "Vernon, CA 90058" },
      { label: "info@eandrunlimited.com", },
      { label: "Call Us: (323)584-3000", href: "tel:+13235843000", title: "Call us now" },
      { label: "Fax:(323)580-6848 " },
      {
        type: "map",
        content: (
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.408420352062!2d-118.23258982341378!3d34.00772592317397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c8954d3aac83%3A0xabb842d065790870!2sE%26R%20Unlimited%20Embroidery!5e0!3m2!1sen!2sus!4v1736545461770!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ),
      },
      { label: "Sitemap", href: "/sitemap.xml", title: "View our sitemap" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10 lg:pt-20 lg:pb-16 bg-black radius-for-skewed">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <TailcastLogo />
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Where Quality And Innovation Matter
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="https://www.tiktok.com/@eandrunlimited"
                  aria-label="TiktokIcon" target="_blank"
                >
                  <TiktokIcon />
                </a>
                <a
                  className="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="https://www.instagram.com/eandrunlimited/" target="_blank"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>

            <div className="w-full lg:w-2/3 lg:pl-16 hidden lg:flex flex-wrap justify-between">
              {footerData.map((section, index) => (
                <div key={index} className="w-full md:w-1/3  mb-16 md:mb-0">
                  <h3 className="mb-6 text-2xl font-bold text-primaryText">
                    {section.title}
                  </h3>
                  <ul>
                    {section.items.map((item, idx) => {
                      if (typeof item === "object" && item.type === "map") {
                        return (
                          <li key={`map-${idx}`}>
                            {item.content}
                          </li>
                        );
                      }
                      return (
                        <li key={`link-${idx}`} className="mb-0">
                          <a
                            className="text-gray-400 hover:text-gray-300 text-sm"
                            href={item.href}
                            title={item.title}
                            aria-label={item.label}
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};