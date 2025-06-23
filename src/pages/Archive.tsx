
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Archive = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Professional Blogging",
      date: "December 20, 2024",
      url: "/2024/12/20/the-art-of-professional-blogging"
    },
    {
      id: 2,
      title: "Minimalist Design Principles", 
      date: "December 18, 2024",
      url: "/2024/12/18/minimalist-design-principles"
    },
    {
      id: 3,
      title: "Building Sustainable Habits",
      date: "December 15, 2024", 
      url: "/2024/12/15/building-sustainable-habits"
    },
    {
      id: 4,
      title: "The Future of Remote Work",
      date: "December 12, 2024",
      url: "/2024/12/12/the-future-of-remote-work"
    },
    {
      id: 5,
      title: "Effective Communication Strategies",
      date: "December 10, 2024",
      url: "/2024/12/10/effective-communication-strategies"
    },
    {
      id: 6,
      title: "Digital Wellness in Modern Life",
      date: "December 8, 2024",
      url: "/2024/12/08/digital-wellness-in-modern-life"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-8">Archive</h1>
          <p className="text-gray-300 text-lg mb-8">
            Browse all blog posts by date.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">All Posts</h2>
          <ul className="space-y-4">
            {blogPosts.map((post) => (
              <li key={post.id} className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0"></span>
                <div className="flex-1">
                  <Link 
                    to={post.url}
                    className="text-white hover:text-gray-300 transition-colors font-medium"
                  >
                    {post.title}
                  </Link>
                  <span className="text-gray-400 ml-3 text-sm">
                    {post.date}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Archive;
