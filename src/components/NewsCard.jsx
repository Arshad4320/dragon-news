import { FaBookmark, FaShareAlt, FaEye } from "react-icons/fa";

const NewsCard = ({ item }) => {
  const { title, author, thumbnail_url, details, total_view, rating, tags } =
    item;
  return (
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden mb-5">
      {/* Author + Date + Action */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-600 text-lg">
          <button className="hover:text-primary transition">
            <FaBookmark />
          </button>
          <button className="hover:text-primary transition">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* News Title */}
      <h3 className="text-xl font-bold px-4 pb-2 text-gray-900 leading-snug">
        {title}
      </h3>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="w-full h-64 object-cover"
        />
      </figure>

      {/* News Details */}
      <div className="p-4">
        <p className="text-gray-700 text-sm leading-relaxed mb-2">
          {details.slice(0, 180)}...
        </p>
        <button className="text-orange-300 font-semibold hover:underline">
          Read More
        </button>

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-4  pt-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-700">
              ⭐⭐⭐⭐ {rating.number}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
