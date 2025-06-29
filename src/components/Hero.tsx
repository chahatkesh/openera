export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            OpenERA
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
          AI + Finance Hackathon
        </p>
        
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800 mb-12">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
          <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
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
