
const Header = () => {
  return (
    <div className="pt-6">
      <header className="w-full bg-stone-100 border border-gray-300 shadow-sm">
        <div className="max-w-full mx-auto px-6 py-4">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-black font-inter">
                Anno Datorum
              </h1>
              <p className="mt-2 text-gray-700 text-sm max-w-xs leading-relaxed">
                Modeling the collective experience with AI in the Age of Information.
              </p>
            </div>
            <nav className="flex-1 flex justify-center">
              <div className="flex space-x-8">
                <a 
                  href="/" 
                  className="text-gray-700 hover:text-black transition-colors font-medium text-lg"
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="text-gray-700 hover:text-black transition-colors font-medium text-lg"
                >
                  About
                </a>
                <a 
                  href="/archive" 
                  className="text-gray-700 hover:text-black transition-colors font-medium text-lg"
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
