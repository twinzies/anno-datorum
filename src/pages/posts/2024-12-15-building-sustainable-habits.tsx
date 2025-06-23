
import Header from "@/components/Header";

const BuildingSustainableHabits = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Building Sustainable Habits</h1>
          <p className="text-gray-400">December 15, 2024 • 4 min read</p>
        </div>
        
        <article className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            A practical guide to developing routines that stick and create meaningful change in both personal and professional contexts.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            Building lasting habits isn't about willpower—it's about understanding the psychology of behavior change and creating systems that make success inevitable.
          </p>
        </article>
      </main>
    </div>
  );
};

export default BuildingSustainableHabits;
