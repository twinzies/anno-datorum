import { useState } from "react";
import Header from "@/components/Header";
import { ChevronLeft, ChevronRight } from "lucide-react";
const PhotoGallery = () => {
  const photos = [{
    id: 1,
    url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    alt: "Woman sitting on a bed using a laptop"
  }, {
    id: 2,
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Turned on gray laptop computer"
  }, {
    id: 3,
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "Macro photography of black circuit board"
  }, {
    id: 4,
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    alt: "Monitor showing Java programming"
  }, {
    id: 5,
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    alt: "Person using MacBook Pro"
  }, {
    id: 6,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    alt: "Woman in white long sleeve shirt using black laptop computer"
  }, {
    id: 7,
    url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    alt: "White robot near brown wall"
  }, {
    id: 8,
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    alt: "Matrix movie still"
  }, {
    id: 9,
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    alt: "Gray and black laptop computer on surface"
  }, {
    id: 10,
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    alt: "Colorful software or web code on a computer monitor"
  }];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentImageIndex(prevIndex => prevIndex === 0 ? photos.length - 1 : prevIndex - 1);
  };
  const goToNext = () => {
    setCurrentImageIndex(prevIndex => prevIndex === photos.length - 1 ? 0 : prevIndex + 1);
  };
  const currentPhoto = photos[currentImageIndex];
  return <div className="min-h-screen bg-black text-white font-inter">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">A picture is worth a thousand words.</h1>
          <p className="text-gray-300 text-lg">
        </p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button onClick={goToPrevious} className="absolute left-4 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors" aria-label="Previous image">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Image Display */}
          <div className="max-w-4xl w-full">
            <img src={currentPhoto.url} alt={currentPhoto.alt} className="w-full h-[60vh] object-cover rounded-lg" />
          </div>

          {/* Next Button */}
          <button onClick={goToNext} className="absolute right-4 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors" aria-label="Next image">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Image Counter */}
        <div className="text-center mt-6">
          <span className="text-gray-400">
            {currentImageIndex + 1} of {photos.length}
          </span>
        </div>

        {/* Image Description */}
        <div className="text-center mt-4">
          <p className="text-gray-300">{currentPhoto.alt}</p>
        </div>
      </main>
    </div>;
};
export default PhotoGallery;