
const Header = () => {
  return (
    <div className="pt-6">
      <header className="w-full bg-gray-900 border border-gray-700 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-6">
              <div className="flex flex-col">
                <h1 className="font-bold text-white font-inter text-4xl md:text-5xl">
                  Anno Datorum
                </h1>
              </div>
              <div className="rounded-lg p-3 bg-gray-800 border border-gray-600">
                <p className="text-sm leading-relaxed text-red-400">
                  Modeling the collective experience in the era of information with AI
                </p>
              </div>
            </div>
            <nav className="flex justify-center">
              <div className="flex space-x-8 py-2">
                <a href="/" className="text-gray-300 hover:text-white transition-colors font-medium text-lg">
                  Home
                </a>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors font-medium text-lg">
                  About
                </a>
                <a href="/archive" className="text-gray-300 hover:text-white transition-colors font-medium text-lg">
                  Archive
                </a>
                <a href="/gallery" className="text-gray-300 hover:text-white transition-colors font-medium text-lg">
                  Gallery
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
