const services = [
  {
    name: 'Bridal Makeup',
    icon: '💄',
    gradient: 'from-pink-200 to-rose-200 dark:from-pink-500 dark:to-rose-500',
    price: '₹8,000+',
    desc: 'Your dream wedding look with flawless, long-lasting makeup that photographs beautifully.',
    features: ['Long-lasting', 'Photography ready', 'Trial session', 'Touch-up kit']
  },
  {
    name: 'Party Glam',
    icon: '💃',
    gradient: 'from-purple-200 to-pink-200 dark:from-purple-500 dark:to-pink-500',
    price: '₹3,500+',
    desc: 'Stand out at every celebration with stunning party looks that turn heads.',
    features: ['Glamorous finish', 'Quick application', 'Party-ready', 'Touch-ups included']
  },
  {
    name: 'Hair Styling',
    icon: '💇‍♀️',
    gradient: 'from-blue-200 to-cyan-200 dark:from-blue-500 dark:to-cyan-500',
    price: '₹2,500+',
    desc: 'Professional hair styling that complements your look perfectly.',
    features: ['Professional tools', 'Heat protection', 'Long-lasting hold', 'Consultation']
  },
  {
    name: '3D Makeup',
    icon: '✨',
    gradient: 'from-yellow-200 to-orange-200 dark:from-yellow-500 dark:to-orange-500',
    price: '₹15,000+',
    desc: 'Innovative 3D makeup techniques for a flawless, sculpted look that pops.',
    features: ['Advanced techniques', 'Sculpting', 'Contouring', 'Premium products']
  },
  {
    name: 'Photoshoot',
    icon: '📸',
    gradient: 'from-green-200 to-emerald-200 dark:from-green-500 dark:to-emerald-500',
    price: '₹4,000+',
    desc: 'Camera-ready makeup for professional shoots and portfolios.',
    features: ['HD ready', 'Studio lighting', 'Retouching', 'Portfolio shots']
  },
  {
    name: 'Complete Makeover',
    icon: '✨',
    gradient: 'from-indigo-200 to-purple-200 dark:from-indigo-500 dark:to-purple-500',
    price: '₹10,000+',
    desc: 'Full transformation package including makeup, hair, and styling.',
    features: ['Full package', 'Wardrobe consultation', 'Photography', 'Before/after']
  },
];

const Services = () => (
  <section id="services" className="relative py-32 overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-black"></div>
    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,182,193,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>
    <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-[radial-gradient(circle_at_20%_80%,rgba(173,216,230,0.08),transparent_70%)] dark:bg-none"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
          <span className="bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Signature Services
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-3xl mx-auto">
          Crafted with precision, designed for transformation
        </p>
      </div>
      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white/90 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-pink-100 dark:border-white/10 hover:border-pink-200 dark:hover:border-white/20 transition-all duration-500 hover:scale-105 shadow-xl"
          >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
            <div className="relative z-10">
              {/* Icon */}
              <div className="text-6xl mb-6 flex justify-center">
                {service.icon}
              </div>
              {/* Service name */}
              <h3 className="text-2xl md:text-3xl font-light text-pink-500 dark:text-white mb-4 text-center">
                {service.name}
              </h3>
              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-center leading-relaxed">
                {service.desc}
              </p>
              {/* Price */}
              <div className="text-center mb-6">
                <span className="inline-block bg-pink-100/40 dark:bg-white/10 backdrop-blur-sm text-pink-500 dark:text-white px-6 py-3 rounded-full font-medium text-lg border border-pink-100 dark:border-white/20">
                  {service.price}
                </span>
              </div>
              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300 dark:from-pink-400 dark:to-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              {/* CTA Button */}
              <div className="mt-8 text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-500 dark:to-purple-500 text-pink-500 dark:text-white rounded-full border border-pink-100 dark:border-white/20 hover:from-pink-200 hover:to-purple-200 dark:hover:from-pink-600 dark:hover:to-purple-600 transition-all duration-300 text-sm font-medium shadow">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services; 