const Header = () => {
  return <div className="pt-6">
      <header className="w-full bg-stone-100 border border-gray-300 shadow-sm">
        <div className="max-w-full py-0 px-[7px] mx-[77px]">
          <div className="flex flex-col">
            <div className="flex items-start space-x-6 mb-4">
              <div className="flex flex-col">
                <h1 className="font-bold text-black font-inter my-[8px] text-5xl">Anno 
Datorum</h1>
              </div>
              <div className="rounded-lg p-3 mt-1 bg-inherit">
                <p className="text-sm leading-relaxed whitespace-nowrap text-red-600">Modeling the collective experience with AI.</p>
              </div>
            </div>
            <nav className="flex justify-center">
              <div className="flex space-x-8 justify-center mx-0 my-[2px] py-[2px] px-[115px]">
                <a href="/" className="text-gray-700 hover:text-black transition-colors font-medium text-xl">
                  Home
                </a>
                <a href="/about" className="text-gray-700 hover:text-black transition-colors font-medium text-xl">
                  About
                </a>
                <a href="/archive" className="text-gray-700 hover:text-black transition-colors font-medium text-xl">
                  Archive
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>;
};
export default Header;