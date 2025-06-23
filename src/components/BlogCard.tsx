
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

const BlogCard = ({ title, excerpt, date, readTime, image, featured = false }: BlogCardProps) => {
  return (
    <article className={`group cursor-pointer ${featured ? 'md:col-span-2' : ''}`}>
      <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-lg">
        {image && (
          <div className={`aspect-video overflow-hidden ${featured ? 'md:aspect-[2/1]' : ''}`}>
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
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
