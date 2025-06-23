
import Header from "@/components/Header";

const DigitalWellnessInModernLife = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Digital Wellness in Modern Life</h1>
          <p className="text-gray-400">December 8, 2024 • 5 min read</p>
        </div>
        
        <article className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Finding balance between our connected lives and mental well-being through mindful technology use and digital boundaries.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            As technology becomes increasingly integrated into every aspect of our lives, the need for digital wellness has never been more important. Finding the right balance between staying connected and maintaining our mental health requires intentional strategies.
          </p>
        </article>
      </main>
    </div>
  );
};

export default DigitalWellnessInModernLife;
