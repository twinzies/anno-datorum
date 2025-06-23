
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const BlogCard = ({ id, title, excerpt, date, readTime, featured = false }: BlogCardProps) => {
  // Create URL-friendly slug from title and date
  const getPostUrl = () => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    
    const slug = title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    
    return `/${year}/${month}/${day}/${slug}`;
  };

  return (
    <article className={`group cursor-pointer ${featured ? 'md:col-span-2' : ''}`}>
      <Link to={getPostUrl()}>
        <div className="bg-black border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300 hover:shadow-lg">
          <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
            <div className="flex items-center mb-3">
              <div className="flex items-center space-x-1 text-sm text-olive-500">
                <Calendar className="h-4 w-4" />
                <span className="text-olive-600 font-medium">{date}</span>
              </div>
            </div>
            
            <h2 className={`font-bold text-white mb-3 group-hover:text-gray-100 transition-colors ${
              featured ? 'text-2xl md:text-3xl' : 'text-xl'
            }`}>
              {title}
            </h2>
            
            <p className={`text-gray-300 leading-relaxed ${
              featured ? 'text-lg' : ''
            }`}>
              {excerpt}
            </p>
            
            <div className="mt-4 text-white font-medium group-hover:underline">
              Read more →
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
