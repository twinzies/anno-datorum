


const Header = () => {
  return (
    <div className="pt-6">
      <header className="w-full bg-stone-100 border border-gray-300 shadow-sm">
        <div className="max-w-full mx-auto px-6 py-4">
          <div className="flex flex-col">
            <div className="flex items-start space-x-6 mb-4">
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-black font-inter">
                  Anno Datorum
                </h1>
              </div>
              <div className="bg-stone-100 rounded-lg p-3 mt-1">
                <p className="text-gray-700 text-sm leading-relaxed whitespace-nowrap">
                  Modeling the collective experience in the era of information with AI
                </p>
              </div>
            </div>
            <nav className="flex justify-center">
              <div className="flex space-x-8 justify-center">
                <a 
                  href="/" 
                  className="text-gray-700 hover:text-black transition-colors font-medium text-xl"
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="text-gray-700 hover:text-black transition-colors font-medium text-xl"
                >
                  About
                </a>
                <a 
                  href="/archive" 
                  className="text-gray-700 hover:text-black transition-colors font-medium text-xl"
                >
                  Archive
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


