import { Eye, Star } from "lucide-react";
import { format } from "date-fns";

const NewsDetailsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    image_url,
    details,
    tags,
    others,
  } = news;

  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      {/* News Card */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Image */}
        <img src={image_url} alt={title} className="w-full h-80 object-cover" />

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold leading-snug text-gray-900">
            {title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4">
            <img
              src={author?.img}
              alt={author?.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">{author?.name}</p>
              <p className="text-sm text-gray-500">
                {author?.published_date
                  ? format(
                      new Date(author.published_date),
                      "MMMM dd, yyyy - h:mm a"
                    )
                  : "Date not available"}
              </p>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>{rating?.number} / 5</span>
              {rating?.badge && (
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700 capitalize">
                  {rating.badge}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-gray-500" />
              <span>{total_view?.toLocaleString() ?? 0} views</span>
            </div>
          </div>

          {/* Details */}
          <p className="text-gray-700 leading-relaxed text-justify">
            {details}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {tags?.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 capitalize"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Highlight Badges */}
          <div className="flex flex-wrap gap-2 pt-4">
            {others?.is_trending && (
              <span className="px-3 py-1 rounded-full text-sm bg-red-500 text-white">
                🔥 Trending
              </span>
            )}
            {others?.is_today_pick && (
              <span className="px-3 py-1 rounded-full text-sm bg-blue-500 text-white">
                ⭐ Today’s Pick
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
