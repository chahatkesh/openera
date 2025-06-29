export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              OpenERA
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI + Finance Hackathon
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 OpenERA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
