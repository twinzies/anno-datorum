
import { Link } from "react-router-dom";

const Header = () => {
  return <div className="pt-6">
      <header className="w-full bg-gray-900 border border-gray-700 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-6 bg-neutral-200">
          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-6">
              <div className="flex flex-col">
                <h1 className="font-bold font-inter text-4xl md:text-5xl text-black">
                  Anno Datorum
                </h1>
              </div>
              <div className="p-3 rounded-none rounded-none bg-transparent ">
                <p className="text-sm leading-relaxed text-red-400">Experiences of a modeler in the era of information.</p>
              </div>
            </div>
          </div>
        </div>
        <nav className="w-full bg-neutral-200">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-center">
              <div className="flex space-x-8">
                <Link to="/" className="text-black hover:text-red-500 transition-colors font-medium text-lg">
                  Home
                </Link>
                <Link to="/about" className="text-black hover:text-red-500 transition-colors font-medium text-lg">
                  About
                </Link>
                <Link to="/archive" className="text-black hover:text-red-500 transition-colors font-medium text-lg">
                  Archive
                </Link>
                <Link to="/gallery" className="text-black hover:text-red-500 transition-colors font-medium text-lg">
                  Gallery
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>;
};
export default Header;
