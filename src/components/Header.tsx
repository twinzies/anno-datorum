
const Header = () => {
  return (
    <div className="pt-6 px-6">
      <header className="max-w-4xl mx-auto bg-stone-100 rounded-lg border border-gray-300 shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-black font-inter">
                Anno Datorum
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a 
                href="#" 
                className="text-gray-700 hover:text-black transition-colors font-medium text-sm"
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-black transition-colors font-medium text-sm"
              >
                About
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-black transition-colors font-medium text-sm"
              >
                Archive
              </a>
            </nav>
          </div>
          <p className="mt-3 text-gray-700 text-base max-w-2xl">
            A professional blog exploring ideas, insights, and observations on technology, design, and life.
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
