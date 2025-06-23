
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";

const Index = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Professional Blogging",
      excerpt: "Exploring the fundamentals of creating compelling content that resonates with your audience. From structure to storytelling, discover the elements that make a blog post memorable and impactful.",
      date: "December 20, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 2,
      title: "Minimalist Design Principles",
      excerpt: "Less is more: understanding how simplicity creates powerful user experiences and lasting impressions in our digital world.",
      date: "December 18, 2024",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Building Sustainable Habits",
      excerpt: "A practical guide to developing routines that stick and create meaningful change in both personal and professional contexts.",
      date: "December 15, 2024",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "The Future of Remote Work",
      excerpt: "How distributed teams are reshaping the workplace and what it means for productivity, creativity, and collaboration.",
      date: "December 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=600&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Effective Communication Strategies",
      excerpt: "Mastering the art of clear, concise communication in an age of information overload and shortened attention spans.",
      date: "December 10, 2024",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Digital Wellness in Modern Life",
      excerpt: "Finding balance between our connected lives and mental well-being through mindful technology use and digital boundaries.",
      date: "December 8, 2024",
      readTime: "5 min read"
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Featured Post */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Featured Article</h2>
            <div className="w-16 h-1 bg-white"></div>
          </div>
          <BlogCard {...featuredPost} />
        </section>

        {/* Recent Posts */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Recent Posts</h2>
            <div className="w-16 h-1 bg-white"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20 bg-gray-900 border border-gray-700 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Subscribe to receive new posts and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-gray-400"
            />
            <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <span className="text-lg font-bold text-white">Annodatorum</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Annodatorum. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
