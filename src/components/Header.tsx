
import { PenTool } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <PenTool className="h-8 w-8 text-black" />
            <h1 className="text-3xl font-bold text-black font-inter">
              Annodatorum
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#" 
              className="text-gray-600 hover:text-black transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-black transition-colors font-medium"
            >
              About
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-black transition-colors font-medium"
            >
              Archive
            </a>
          </nav>
        </div>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl">
          A professional blog exploring ideas, insights, and observations on technology, design, and life.
        </p>
      </div>
    </header>
  );
};

export default Header;
