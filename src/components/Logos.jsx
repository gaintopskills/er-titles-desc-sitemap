import React from 'react';

const logos = [
  
  { src: '/brands/adcolor.webp', alt: 'AD Color Logo', width: 173, height: 20 },
  { src: '/brands/nfl.webp', alt: 'NFL Logo', width: 173, height: 20 },
  { src: '/brands/urban-native.webp', alt: 'Urban Native Logo', width: 173, height: 20 },
 

  { src: '/brands/eckhaus-latta.webp', alt: 'Eckhaus Latta Logo', width: 173, height: 20 },
  { src: '/brands/frankies-bikinis.webp', alt: 'Frankies Bikinis Logo', width: 173, height: 20 },
  { src: '/brands/rare-beauty.webp', alt: 'Rare Beauty Logo', width: 173, height: 20 },

  { src: '/brands/beyong-yoga.webp', alt: 'Beyond Yoga Logo', width: 173, height: 20 },
  { src: '/brands/google-cloud.webp', alt: 'Google Cloud Logo', width: 173, height: 20 },
  { src: '/brands/caa.webp', alt: 'CAA Logo', width: 173, height: 20 },
  { src: '/brands/wilson-logo.webp', alt: 'Wilson Logo', width: 173, height: 20 },
  
  { src: '/brands/coney-island-picnic.webp', alt: 'Coney Island Picnic Logo', width: 173, height: 20 },
  { src: '/brands/miramar.webp', alt: 'Miramar Logo', width: 173, height: 20 },
  { src: '/brands/aether.webp', alt: 'Aether Logo', width: 173, height: 20 },
  { src: '/brands/us-bank-logo.webp', alt: 'US Bank Logo', width: 173, height: 20 },
  { src: '/brands/veronica-beard.webp', alt: '30 seconds to mars', width: 189, height: 20 },
  { src: '/brands/crate-and-barrel.webp', alt: '30 seconds to mars', width: 205, height: 30 },
  { src: '/brands/tory-burch.webp', alt: '30 seconds to mars', width: 317, height: 30 },
  { src: '/brands/share.webp', alt: '30 seconds to mars', width: 52, height: 20 },
  { src: '/brands/30-seconds-to-mars.webp', alt: '30 seconds to mars', width: 78, height: 30 },
  { src: '/brands/frame-denim.webp', alt: 'Frame Demin logo', width: 263, height: 30 },
  { src: '/brands/joes.webp', alt: 'Joes', width: 130, height: 30 },
  { src: '/brands/levis.webp', alt: 'Logo Levis logo', width: 136, height: 30 },
  { src: '/brands/complex.webp', alt: 'Complex', width: 137, height: 30 },
  { src: '/brands/petite-plume.webp', alt: 'NTWRK', width: 421, height: 30 },
  { src: '/brands/todd-snyder.webp', alt: 'NTWRK', width: 135, height: 30 },
  { src: '/brands/ralph-lauren.webp', alt: 'NTWRK', width: 390, height: 30 },
  { src: '/brands/adidas.webp', alt: 'NTWRK', width: 44, height: 30 },
  { src: '/brands/hmdo.webp', alt: 'NTWRK', width: 77, height: 30 },
  { src: '/brands/nfl.webp', alt: 'nfl logo', width: 77, height: 30 },
];

export const Logos = () => {
  const styles = {
    logoScrollContainer: {
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      height: '17px', // Match container height to logo height
    },
    logoTrack: {
      display: 'flex',
      gap: '40px',
      animation: 'scroll 15s linear infinite',
      whiteSpace: 'nowrap',
    },
    logoImage: {
      height: '17px', // Set height to 20px
      width: 'auto',  // Maintain aspect ratio
      display: 'inline-block',
    },
    '@keyframes scroll': {
      from: { transform: 'translateX(0)' },
      to: { transform: 'translateX(-100%)' },
    },
  };

  return (
    <div style={styles.logoScrollContainer}>
      <div style={styles.logoTrack}>
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            loading="lazy" // Add lazy loading attribute
            style={styles.logoImage}
          />
        ))}
      </div>
    </div>
  );
};
