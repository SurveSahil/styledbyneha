import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import certificate from '../assets/certificate.jpeg';
import certificate3 from '../assets/certificate3.jpg';
import certificate4 from '../assets/certificate4.jpg';
import certification1 from '../assets/certification1.jpg';
import certification2 from '../assets/certification2.jpg';

const certificateImages = [
  { src: certificate, alt: 'Certificate 1' },
  { src: certificate3, alt: 'Certificate 3' },
  { src: certificate4, alt: 'Certificate 4' },
  { src: certification1, alt: 'Certification 1' },
  { src: certification2, alt: 'Certification 2' },
];

const About = () => (
  <section id="about" className="relative py-32 overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-black"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(255,182,193,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
    <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-[radial-gradient(circle_at_80%_80%,rgba(173,216,230,0.08),transparent_70%)] dark:bg-none"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
          <span className="bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Meet Neha
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-3xl mx-auto">
          Where passion meets precision in every brushstroke
        </p>
      </div>
      {/* Main content grid */}
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image section with Swiper */}
        <div className="relative flex justify-center">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-pink-100 dark:border-white/10 w-full max-w-[400px] md:max-w-[500px] lg:max-w-[500px] mx-auto">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.cert-swiper-next',
                prevEl: '.cert-swiper-prev',
              }}
              slidesPerView={1}
              centeredSlides={true}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
              style={{ minHeight: 220 }}
            >
              {certificateImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative flex justify-center items-center w-full h-[300px] sm:h-[400px] md:h-[500px]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="rounded-3xl shadow-xl border border-pink-100 dark:border-white/10 bg-white/10 w-full h-full object-cover object-center"
                      style={{ objectFit: 'cover', maxHeight: '100%', maxWidth: '100%' }}
                    />
                    {/* Left arrow */}
                    <button
                      className="cert-swiper-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 dark:bg-black/40 hover:bg-pink-100 dark:hover:bg-black/60 flex items-center justify-center text-pink-500 dark:text-white text-xl sm:text-2xl shadow-lg transition"
                      aria-label="Previous certificate"
                    >
                      &#8592;
                    </button>
                    {/* Right arrow */}
                    <button
                      className="cert-swiper-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 dark:bg-black/40 hover:bg-pink-100 dark:hover:bg-black/60 flex items-center justify-center text-pink-500 dark:text-white text-xl sm:text-2xl shadow-lg transition"
                      aria-label="Next certificate"
                    >
                      &#8594;
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute inset-0 bg-gradient-to-t from-pink-100/30 via-transparent to-transparent pointer-events-none rounded-3xl"></div>
          </div>
          {/* Floating stats */}
          <div className="absolute -bottom-6 -right-6 bg-white/90 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-pink-100 dark:border-white/20 z-20 shadow-xl">
            <div className="text-center">
              <div className="text-3xl font-light text-pink-500 dark:text-white mb-1">5+</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
        {/* Text content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-light text-black dark:text-white">
              Your Beauty Transformation Specialist
            </h3>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              With over 5 years of dedicated experience in the beauty industry, I specialize in creating 
              transformative looks that enhance your natural beauty and boost your confidence.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              From bridal elegance to party glamour, fashion editorials to everyday beauty, 
              every service is crafted with precision and passion.
            </p>
          </div>
          {/* Specialties */}
          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="text-center p-6 bg-white/90 dark:bg-white/5 rounded-2xl border border-pink-100 dark:border-white/10 backdrop-blur-sm shadow-md">
              <div className="text-2xl font-light text-pink-500 dark:text-white mb-2">Bridal</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Makeup & Styling</div>
            </div>
            <div className="text-center p-6 bg-white/90 dark:bg-white/5 rounded-2xl border border-pink-100 dark:border-white/10 backdrop-blur-sm shadow-md">
              <div className="text-2xl font-light text-pink-500 dark:text-white mb-2">Party</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Glamour Looks</div>
            </div>
            <div className="text-center p-6 bg-white/90 dark:bg-white/5 rounded-2xl border border-pink-100 dark:border-white/10 backdrop-blur-sm shadow-md">
              <div className="text-2xl font-light text-pink-500 dark:text-white mb-2">Fashion</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Editorial Style</div>
            </div>
            <div className="text-center p-6 bg-white/90 dark:bg-white/5 rounded-2xl border border-pink-100 dark:border-white/10 backdrop-blur-sm shadow-md">
              <div className="text-2xl font-light text-pink-500 dark:text-white mb-2">Hair</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Styling & Care</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About; 