
import Header from "@/components/Header";

const MinimalistDesignPrinciples = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Minimalist Design Principles</h1>
          <p className="text-gray-400">December 18, 2024 • 3 min read</p>
        </div>
        
        <article className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Less is more: understanding how simplicity creates powerful user experiences and lasting impressions in our digital world.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            Minimalist design isn't about removing everything—it's about removing the unnecessary to highlight what truly matters. In our information-saturated world, clean, focused design has become more important than ever.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Power of White Space</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            White space, or negative space, is not empty space—it's a powerful design element that gives content room to breathe and helps users focus on what's important.
          </p>
        </article>
      </main>
    </div>
  );
};

export default MinimalistDesignPrinciples;
