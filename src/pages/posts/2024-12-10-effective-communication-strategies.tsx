
import Header from "@/components/Header";

const EffectiveCommunicationStrategies = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Effective Communication Strategies</h1>
          <p className="text-gray-400">December 10, 2024 • 4 min read</p>
        </div>
        
        <article className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Mastering the art of clear, concise communication in an age of information overload and shortened attention spans.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            In our fast-paced digital world, the ability to communicate effectively has become more crucial than ever. Whether you're leading a team, presenting to clients, or writing content, clear communication is the foundation of success.
          </p>
        </article>
      </main>
    </div>
  );
};

export default EffectiveCommunicationStrategies;
