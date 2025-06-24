const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bride',
    rating: 5,
    review: 'Neha made me feel like a princess on my wedding day! Her attention to detail and artistic skills are incredible. I received so many compliments!',
    service: 'Bridal Makeup'
  },
  {
    name: 'Kavya Patel',
    role: 'Party Guest',
    rating: 5,
    review: 'I was amazed by the transformation! Neha understood exactly what I wanted and delivered beyond my expectations. Highly recommend for any special occasion.',
    service: 'Party Glam'
  },
  {
    name: 'Sneha Gupta',
    role: 'Fashion Model',
    rating: 5,
    review: 'Professional, punctual, and incredibly talented! Neha\'s work is flawless and she makes you feel so comfortable throughout the process.',
    service: 'Photoshoot'
  },
  {
    name: 'Riya Singh',
    role: 'Celebrity',
    rating: 5,
    review: 'The best makeup artist in town! My party look was absolutely stunning. Thank you Neha for making me feel so confident and beautiful.',
    service: 'Party Glam'
  },
  {
    name: 'Anita Joshi',
    role: 'Bride',
    rating: 5,
    review: 'Neha\'s hair styling skills are exceptional! She created the most beautiful hairstyle for my sangeet ceremony. Everyone loved it!',
    service: 'Hair Styling'
  },
  {
    name: 'Meera Shah',
    role: 'Model',
    rating: 5,
    review: 'Perfect for photoshoots! Neha knows exactly how to create looks that photograph beautifully. My portfolio shots turned out amazing!',
    service: 'Photoshoot'
  },
];

const Testimonials = () => (
  <section id="testimonials" className="relative py-32 overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-black"></div>
    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,182,193,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
    <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-[radial-gradient(circle_at_20%_80%,rgba(173,216,230,0.08),transparent_70%)] dark:bg-none"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
          <span className="bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Client Love
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-3xl mx-auto">
          Stories of transformation and confidence
        </p>
      </div>
      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white/90 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-pink-100 dark:border-white/10 hover:border-pink-200 dark:hover:border-white/20 transition-all duration-500 hover:scale-105 shadow-xl"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 text-4xl text-pink-100 dark:text-white/20">"</div>
            {/* Rating */}
            <div className="flex mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            {/* Review text */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
              "{testimonial.review}"
            </p>
            {/* Service badge */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100/40 to-purple-100/40 dark:from-pink-500/20 dark:to-purple-500/20 text-pink-500 dark:text-pink-300 text-sm rounded-full border border-pink-100/30 dark:border-pink-500/30">
                {testimonial.service}
              </span>
            </div>
            {/* Client info */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-500 dark:to-purple-500 rounded-full flex items-center justify-center text-pink-500 dark:text-white font-medium text-lg mr-4">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-pink-500 dark:text-white font-medium">{testimonial.name}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 