
import { Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const BlogCard = ({ title, excerpt, date, readTime, featured = false }: BlogCardProps) => {
  return (
    <article className={`group cursor-pointer ${featured ? 'md:col-span-2' : ''}`}>
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
    </article>
  );
};

export default BlogCard;
