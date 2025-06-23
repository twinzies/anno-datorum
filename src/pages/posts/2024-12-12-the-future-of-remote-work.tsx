
import Header from "@/components/Header";

const TheFutureOfRemoteWork = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">The Future of Remote Work</h1>
          <p className="text-gray-400">December 12, 2024 • 6 min read</p>
        </div>
        
        <article className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            How distributed teams are reshaping the workplace and what it means for productivity, creativity, and collaboration.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            The shift to remote work has fundamentally changed how we think about productivity, collaboration, and work-life balance. As we look to the future, it's clear that this transformation is here to stay.
          </p>
        </article>
      </main>
    </div>
  );
};

export default TheFutureOfRemoteWork;
