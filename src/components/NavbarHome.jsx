import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TiktokIcon } from "../assets/icons/TiktokIcon";
import { PhoneIcon } from "../assets/icons/PhoneIcon";


import { TailcastLogo } from '../assets/logos/TailcastLogo';
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

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-black lg:bg-blackTransparent z-40 lg:backdrop-blur-xl bg-opacity-70" aria-label="Main navigation">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
          
        </motion.div>

        {/* Desktop Main menu links */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
          <div className="hidden lg:flex h-full pl-4 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel, children }) => (
              <div key={label} className="relative" onMouseEnter={() => children && setSubMenuOpen(true)} onMouseLeave={() => children && setSubMenuOpen(false)}>
                <a
                  className="text-white lg:text-base text-2xl leading-6 mr-2 ml-2 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2 flex items-center"
                  href={href}
                  aria-label={ariaLabel}
                  onClick={children ? toggleSubMenu : null}
                >
                  {label}
                  {children && (
                    <span className="ml-1">
                      {subMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  )}
                </a>

                {/* Mega Menu for "Features" */}
                {children && (
  <AnimatePresence>
    {subMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        className="absolute mt-2 w-48 shadow-lg rounded-lg py-2 z-20 flex flex-col bg-black" // Updated to flex-col for column layout
        style={{ left: '-40px' }}
      >
        {children.map((child) => (
          <div key={child.label} className="px-4 py-2">
            <a
              href={child.href}
              className="text-white text-lg hover:bg-gray-700 transition duration-300 rounded-md block text-center"
            >
              {child.label}
            </a>
          </div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
)}
              </div>
            ))}
          </div>
        </motion.div>

        {/* GitHub link */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
          <div className="grow basis-0 justify-end hidden lg:flex">
            {/* Phone Number with PNG Icon */}
<a
  className="text-white main-border-gray rounded-xl bg-bgDark2 hover:bg-bgDark3 border-gray-700 pl-4 pr-6 pt-2 pb-2 text-sm flex items-center"
  href="tel:+13235843000"
  aria-label="Call us"
>
<PhoneIcon />
  (323) 584-3000
</a>
            <div className="w-36 mx-auto lg:mx-0">
            <a
                  className="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="#"
                  aria-label="Twitter"
                >
                  <TiktokIcon />
                </a>
                <a
                  className="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="#"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
           </div>
          </div>
        </motion.div>

        {/* Mobile hamburger menu */}
        <div className="lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500" ></div>
        </div>
      </div>

      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
            <div className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-bgDark1 z-50 w-full items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10">
              {navbarLinks.map(({ label, href, ariaLabel, children }) => (
                <div key={label} className="relative">
                  <a
                    href={href}
                    className="text-white lg:text-base text-2xl leading-6 mr-2 ml-2 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2 flex items-center"
                    onClick={children && label === 'Services' ? toggleSubMenu : () => setIsOpen(false)}
                    aria-label={ariaLabel}
                  >
                    {label}
                    {children && (
                      <span className="ml-1">
                        {subMenuOpen ? (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M5 15l7-7 7 7" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </span>
                    )}
                  </a>

                  {children && subMenuOpen && (
                    <ul className="pl-2">
                      {children.map((child) => (
                        <li key={child.label}>
                          <a href={child.href} className="text-white text-lg py-1 block hover:scale-110 transition duration-300" onClick={() => setIsOpen(false)}>
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
             <a
  className="text-white main-border-gray rounded-xl bg-bgDark2 hover:bg-bgDark3 border-gray-700 pl-4 pr-6 pt-2 pb-2 text-sm flex items-center"
  href="tel:+13235843000"
  aria-label="Call us"
>
<PhoneIcon />
  (323) 584-3000
</a>
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};