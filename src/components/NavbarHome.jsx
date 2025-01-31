import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TiktokIcon } from "../assets/icons/TiktokIcon";
import { TailcastLogo } from '../assets/logos/TailcastLogo';
import { PhoneIcon } from "../assets/icons/PhoneIcon";
import { GithubIcon } from '../assets/icons/GithubIcon';

const navbarLinks = [
  { label: 'Home', href: '/#home', ariaLabel: 'Home' },
  {
    label: 'Services', 
    href: '#',
    ariaLabel: 'Services',
    children: [
      { label: 'Embroidery', href: '/custom-embroidery-services-high-volume/', ariaLabel: 'Sub-feature 3' },
      { label: 'Screen Printing', href: '/screen-printing-dirrect-to-guarment/', ariaLabel: 'Sub-feature 4' },
      { label: 'DTG', href: '/los-angeles-screen-printing-direct-to-garment-dtg/', ariaLabel: 'Sub-feature 5'},
      { label: 'Digital Sublimation', href: '/los-angeles-digital-sublimation-printing/', ariaLabel: 'Sub-feature 6'},
      { label: 'Heat Transfer', href: '/los-angeles-heat-transfer/', ariaLabel: 'Sub-feature 7'},
      { label: 'Cut & Saw', href: '/cut-and-sew/', ariaLabel: 'Sub-feature 6'},
    ],
  },
  { label: 'Galley', href: '../custom-embroidery-services', ariaLabel: 'Galley' },
  { label: 'Events', href: '/onsite-live-embroidery-events-los-angeles/', ariaLabel: 'Events' },
  { label: 'Free Quote', href: '/free-quote/', ariaLabel: 'Free Quote' },
  { label: 'About Us', href: '/about-us/', ariaLabel: 'About Us' },
  { label: 'Contact', href: '/contact-us/', ariaLabel: 'Contact' },
];

export const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const h1Element = document.querySelector("h1");
      if (h1Element) {
        const h1Position = h1Element.getBoundingClientRect().top;
        setShowLogo(h1Position < 100); // Show logo when <h1> is near top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full h-20 flex justify-center items-center fixed bg-black lg:bg-blackTransparent z-40 lg:backdrop-blur-xl bg-opacity-70" aria-label="Main navigation">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">

        {/* ✅ Tailcast Logo - Only Appears When Scrolling to <h1> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showLogo ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center">
            <a href="/" aria-label="Tailcast Home">
              <TailcastLogo className="h-10 w-auto mr-6" />
            </a>
          </div>
        </motion.div>

        {/* ✅ Full Desktop Menu (Unchanged) */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
          <div className="hidden lg:flex h-full pl-4 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel, children }) => (
              <div key={label} className="relative" onMouseEnter={() => children && setSubMenuOpen(true)} onMouseLeave={() => children && setSubMenuOpen(false)}>
                <a className="text-white lg:text-base text-2xl leading-6 mr-2 ml-2 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2 flex items-center"
                  href={href}
                  aria-label={ariaLabel}
                  onClick={children ? () => setSubMenuOpen(!subMenuOpen) : null}
                >
                  {label}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ✅ Phone Number & Social Icons (DESKTOP ONLY) */}
        <motion.div className="hidden lg:flex items-center space-x-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
          {/* Phone Number */}
          <a className="text-white flex items-center bg-bgDark2 hover:bg-bgDark3 border border-gray-700 rounded-xl px-4 py-2 text-sm" href="tel:+13235843000" aria-label="Call us">
            <PhoneIcon className="w-5 h-5 mr-2" />
            (323) 584-3000
          </a>
          {/* Social Icons */}
          <div className="flex space-x-3">
            <a href="#" aria-label="TikTok" className="text-white hover:opacity-80">
              <TiktokIcon className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:opacity-80">
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* ✅ Mobile Hamburger Menu */}
        <div className="lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500"></div>
        </div>
      </div>

      {/* ✅ Mobile Navbar (Phone Number ONLY in Menu) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
            <div className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-bgDark1 z-50 w-full items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10">
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a key={label} href={href} className="text-white text-xl leading-6 font-medium hover:scale-110 transition duration-300" aria-label={ariaLabel}>
                  {label}
                </a>
              ))}
              {/* ✅ Mobile Phone Number inside Menu */}
              <a className="text-white flex items-center bg-bgDark2 hover:bg-bgDark3 border border-gray-700 rounded-xl px-4 py-2 text-sm" href="tel:+13235843000">
                <PhoneIcon className="w-5 h-5 mr-2" />
                (323) 584-3000
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
