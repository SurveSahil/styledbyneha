import { useState } from 'react';
// Bridal
import BridalA from '../assets/Bridal_A_desktop.JPG';
import BridalA1 from '../assets/Bridal_A1_desktop.JPG';
import BridalA2 from '../assets/Bridal_A2_desktop.JPG';
import BridalA3 from '../assets/Bridal_A3_desktop.JPG';
import BridalB from '../assets/Bridal_B.jpg';
import BridalB1 from '../assets/Bridal_B1.jpg';
import BridalB2 from '../assets/Bridal_B2_desktop.jpg';
import BridalC from '../assets/Bridal_C_desktop.JPG';
import BridalC1 from '../assets/Bridal_C1_desktop.JPG';
// Party
import Party from '../assets/Party_desktop.jpg';
import Party1 from '../assets/Party1_desktop.jpg';
import Party2 from '../assets/Party2_desktop.jpg';
import Party3 from '../assets/Party3_desktop.JPG';
import Party4 from '../assets/Party4_desktop.JPG';
// Fashion
import Fashion from '../assets/Fashion_desktop.jpg';
import Fashion1 from '../assets/Fashion1_desktop.jpg';
import Fashion2 from '../assets/Fashion2_desktop.JPG';
import Fashion3 from '../assets/Fashion3_desktop.jpg';
import Fashion4 from '../assets/Fashion4_desktop.jpg';
import Fashion5 from '../assets/Fashion5_desktop.jpeg';
// Hair
import Hair1 from '../assets/hair1_desktop.jpg';
import Hair2 from '../assets/hair2_desktop.jpg';
import Hair3 from '../assets/hair3_desktop.jpg';
import Hair4 from '../assets/hair4_desktop.jpg';
import Hair5 from '../assets/hair5_desktop.JPG';
import Hair6 from '../assets/hair6_desktop.jpg';
// Mobile
import BridalAMobile from '../assets/Bridal_A_mobile.JPG';
import BridalA1Mobile from '../assets/Bridal_A1_mobile.JPG';
import BridalA2Mobile from '../assets/Bridal_A2_mobile.JPG';
import BridalA3Mobile from '../assets/Bridal_A3_mobile.JPG';
import BridalB2Mobile from '../assets/Bridal_B2_mobile.jpg';
import BridalCMobile from '../assets/Bridal_C_mobile.JPG';
import BridalC1Mobile from '../assets/Bridal_C1_mobile.JPG';
import PartyMobile from '../assets/Party_mobile.jpg';
import Party1Mobile from '../assets/Party1_mobile.jpg';
import Party2Mobile from '../assets/Party2_mobile.jpg';
import Party3Mobile from '../assets/Party3_mobile.JPG';
import Party4Mobile from '../assets/Party4_mobile.JPG';
import FashionMobile from '../assets/Fashion_mobile.jpg';
import Fashion1Mobile from '../assets/Fashion1_mobile.jpg';
import Fashion2Mobile from '../assets/Fashion2_mobile.JPG';
import Fashion3Mobile from '../assets/Fashion3_mobile.jpg';
import Fashion4Mobile from '../assets/Fashion4_mobile.jpg';
import Fashion5Mobile from '../assets/Fashion5_mobile.jpeg';
import Hair1Mobile from '../assets/hair1_mobile.jpg';
import Hair2Mobile from '../assets/hair2_mobile.jpg';
import Hair3Mobile from '../assets/hair3_mobile.jpg';
import Hair4Mobile from '../assets/hair4_mobile.jpg';
import Hair5Mobile from '../assets/hair5_mobile.JPG';
import Hair6Mobile from '../assets/hair6_mobile.jpg';

const categories = [
  'All', 'Bridal', 'Party', 'Fashion', 'Hair'
];

const allImages = [
  // Bridal (some large, some normal)
  { desktop: BridalA, mobile: BridalAMobile, alt: 'Bridal A', category: 'Bridal', size: 'large' },
  { desktop: BridalA1, mobile: BridalA1Mobile, alt: 'Bridal A1', category: 'Bridal', size: 'normal' },
  { desktop: BridalA2, mobile: BridalA2Mobile, alt: 'Bridal A2', category: 'Bridal', size: 'normal' },
  { desktop: BridalA3, mobile: BridalA3Mobile, alt: 'Bridal A3', category: 'Bridal', size: 'large' },
  { desktop: BridalB, mobile: BridalB2Mobile, alt: 'Bridal B', category: 'Bridal', size: 'normal' },
  { desktop: BridalB1, mobile: BridalB2Mobile, alt: 'Bridal B1', category: 'Bridal', size: 'normal' },
  { desktop: BridalB2, mobile: BridalB2Mobile, alt: 'Bridal B2', category: 'Bridal', size: 'normal' },
  { desktop: BridalC, mobile: BridalCMobile, alt: 'Bridal C', category: 'Bridal', size: 'large' },
  { desktop: BridalC1, mobile: BridalC1Mobile, alt: 'Bridal C1', category: 'Bridal', size: 'normal' },
  // Party
  { desktop: Party, mobile: PartyMobile, alt: 'Party', category: 'Party', size: 'large' },
  { desktop: Party1, mobile: Party1Mobile, alt: 'Party 1', category: 'Party', size: 'normal' },
  { desktop: Party2, mobile: Party2Mobile, alt: 'Party 2', category: 'Party', size: 'normal' },
  { desktop: Party3, mobile: Party3Mobile, alt: 'Party 3', category: 'Party', size: 'large' },
  { desktop: Party4, mobile: Party4Mobile, alt: 'Party 4', category: 'Party', size: 'normal' },
  // Fashion
  { desktop: Fashion, mobile: FashionMobile, alt: 'Fashion', category: 'Fashion', size: 'large' },
  { desktop: Fashion1, mobile: Fashion1Mobile, alt: 'Fashion 1', category: 'Fashion', size: 'normal' },
  { desktop: Fashion2, mobile: Fashion2Mobile, alt: 'Fashion 2', category: 'Fashion', size: 'normal' },
  { desktop: Fashion3, mobile: Fashion3Mobile, alt: 'Fashion 3', category: 'Fashion', size: 'large' },
  { desktop: Fashion4, mobile: Fashion4Mobile, alt: 'Fashion 4', category: 'Fashion', size: 'normal' },
  { desktop: Fashion5, mobile: Fashion5Mobile, alt: 'Fashion 5', category: 'Fashion', size: 'normal' },
  // Hair
  { desktop: Hair1, mobile: Hair1Mobile, alt: 'Hair 1', category: 'Hair', size: 'large' },
  { desktop: Hair2, mobile: Hair2Mobile, alt: 'Hair 2', category: 'Hair', size: 'normal' },
  { desktop: Hair3, mobile: Hair3Mobile, alt: 'Hair 3', category: 'Hair', size: 'normal' },
  { desktop: Hair4, mobile: Hair4Mobile, alt: 'Hair 4', category: 'Hair', size: 'large' },
  { desktop: Hair5, mobile: Hair5Mobile, alt: 'Hair 5', category: 'Hair', size: 'normal' },
  { desktop: Hair6, mobile: Hair6Mobile, alt: 'Hair 6', category: 'Hair', size: 'normal' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredImages = selectedCategory === 'All'
    ? allImages
    : allImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-black"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-[radial-gradient(circle_at_80%_80%,rgba(173,216,230,0.08),transparent_70%)] dark:bg-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            <span className="bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Portfolio Showcase
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-3xl mx-auto">
            Every look tells a story of transformation
          </p>
        </div>
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full border border-pink-100 dark:border-white/10 text-pink-500 dark:text-white text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50 ${
                selectedCategory === category
                  ? 'bg-pink-100/40 dark:bg-white/10 shadow-lg border-pink-200 dark:border-white/20'
                  : 'bg-white/90 dark:bg-white/5 hover:bg-pink-50 dark:hover:bg-white/10'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Gallery grid */}
        <div className={`grid gap-6 ${selectedCategory === 'All' ? 'grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px]' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl bg-white/90 dark:bg-white/5 backdrop-blur-sm border border-pink-100 dark:border-white/10 hover:border-pink-200 dark:hover:border-white/20 transition-all duration-500 hover:scale-105 shadow-xl ${
                selectedCategory === 'All' && img.size === 'large' ? 'col-span-2 row-span-2' : ''
              }`}
              style={selectedCategory === 'All' ? { minHeight: 0 } : {}}
            >
              <div className="relative w-full h-full aspect-[3/4] overflow-hidden">
                <picture>
                  <source media="(max-width: 768px)" srcSet={img.mobile} />
                  <img src={img.desktop} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-100/30 via-transparent to-transparent dark:from-black/80 dark:via-black/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-pink-500 dark:text-white">
                    <h4 className="text-lg font-light mb-2">{img.alt}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">{img.category}</p>
                  </div>
                </div>
              </div>
        </div>
      ))}
        </div>
    </div>
  </section>
);
};

export default Gallery; 