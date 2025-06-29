export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6">
          OpenERA
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
          AI + Finance Hackathon
        </p>
        
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-12">
          <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-3 animate-pulse"></div>
          <span className="text-sm sm:text-base font-semibold text-black dark:text-white">
            Coming Soon
          </span>
        </div>
        
        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Join the future of finance where artificial intelligence meets innovation. 
          Build, compete, and shape the next generation of financial technology.
        </p>

      </div>
    </section>
  );
}
