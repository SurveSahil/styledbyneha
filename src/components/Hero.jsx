const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-900"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,182,193,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(173,216,230,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
    
    {/* Floating elements */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-200/40 to-purple-200/40 dark:from-pink-500/20 dark:to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    
    <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
      {/* Main heading with Apple-style typography */}
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8 leading-none">
        <span className="bg-gradient-to-r from-black via-gray-700 to-black dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
          Styled
        </span>
        <br />
        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          by Neha
        </span>
      </h1>
      
      {/* Subtitle with sophisticated styling */}
      <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light mb-12 max-w-4xl mx-auto leading-relaxed">
        Where artistry meets innovation. 
        <span className="block mt-2 text-gray-400 dark:text-gray-400">
          Transforming beauty into an experience.
        </span>
      </p>
      
      {/* CTA Button with Apple-style design */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a 
          href="#contact" 
          className="group relative px-12 py-4 bg-gradient-to-r from-pink-100 to-purple-100 dark:bg-white dark:from-pink-500 dark:to-purple-500 text-black dark:text-black font-medium text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
        >
          <span className="relative z-10">Book Your Session</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
        
        <a 
          href="#gallery" 
          className="px-8 py-4 border border-black/10 dark:border-white/30 text-black dark:text-white font-medium text-lg rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/80 dark:bg-transparent shadow"
        >
          View Portfolio
        </a>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black/20 dark:border-white/30 rounded-full flex justify-center bg-white/80 dark:bg-transparent">
          <div className="w-1 h-3 bg-black/30 dark:bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero; 