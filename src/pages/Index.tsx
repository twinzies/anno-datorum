import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
const Index = () => {
  // Sample blog posts data
  const blogPosts = [{
    id: 1,
    title: "The Art of Professional Blogging",
    excerpt: "Exploring the fundamentals of creating compelling content that resonates with your audience. From structure to storytelling, discover the elements that make a blog post memorable and impactful.",
    date: "December 20, 2024",
    readTime: "5 min read",
    featured: true
  }, {
    id: 2,
    title: "Minimalist Design Principles",
    excerpt: "Less is more: understanding how simplicity creates powerful user experiences and lasting impressions in our digital world.",
    date: "December 18, 2024",
    readTime: "3 min read"
  }, {
    id: 3,
    title: "Building Sustainable Habits",
    excerpt: "A practical guide to developing routines that stick and create meaningful change in both personal and professional contexts.",
    date: "December 15, 2024",
    readTime: "4 min read"
  }, {
    id: 4,
    title: "The Future of Remote Work",
    excerpt: "How distributed teams are reshaping the workplace and what it means for productivity, creativity, and collaboration.",
    date: "December 12, 2024",
    readTime: "6 min read"
  }, {
    id: 5,
    title: "Effective Communication Strategies",
    excerpt: "Mastering the art of clear, concise communication in an age of information overload and shortened attention spans.",
    date: "December 10, 2024",
    readTime: "4 min read"
  }, {
    id: 6,
    title: "Digital Wellness in Modern Life",
    excerpt: "Finding balance between our connected lives and mental well-being through mindful technology use and digital boundaries.",
    date: "December 8, 2024",
    readTime: "5 min read"
  }];
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);
  return <div className="min-h-screen bg-black text-white font-inter">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Latest Post */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Latest</h2>
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
            {regularPosts.map(post => <BlogCard key={post.id} {...post} />)}
          </div>
        </section>

        {/* Newsletter Signup */}
        
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 mt-20 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <span className="text-lg font-bold text-white">Anno Datorum</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Anno Datorum. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;