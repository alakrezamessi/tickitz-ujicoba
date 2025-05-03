import { useSelector } from "react-redux";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

// Array of gradient backgrounds for genre tags
const genreGradients = [
  "from-purple-500 to-pink-500",
  "from-cyan-500 to-blue-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-pink-500 to-rose-500",
  "from-indigo-500 to-violet-500",
  "from-green-500 to-emerald-500",
  "from-red-500 to-rose-500",
  "from-blue-500 to-indigo-500",
  "from-yellow-500 to-amber-500",
];

const Card = ({ title, dataGenre, release, src, id, vote_average }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get genres data from Redux store
  const genresData = useSelector((state) => {
    // Select only the genres data array - not the whole state
    return state && state.genres ? state.genres.data || [] : [];
  });

  // Generate a consistent color based on genre ID
  const getGenreGradient = (genreId) => {
    // Use modulo to cycle through available gradients
    const index = genreId % genreGradients.length;
    return genreGradients[index];
  };

  // Function to get genre name from genre ID
  const getGenreName = (genreId) => {
    if (!Array.isArray(genresData)) {
      return `Genre ${genreId}`;
    }

    const genre = genresData.find((g) => g && g.id === genreId);
    return genre?.name || `Genre ${genreId}`;
  };

  // Handle card click to navigate to movie details
  const handleDetailsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Navigate programmatically if needed
    window.location.href = `/movie/${id}`;
  };

  // Handle buy ticket button click
  const handleBuyTicketClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Implement buy ticket functionality
    window.location.href = `/movie/${id}/buy-ticket`;
  };

  return (
    <Link to={`/movie/${id}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-[2/3] w-full relative overflow-hidden">
          {/* Movie Poster Image */}
          <img
            src={`https://image.tmdb.org/t/p/w500${src}`}
            alt={title}
            className="w-full h-full object-cover transition-all duration-300"
          />

          {/* Rating Badge - Always Visible */}
          {vote_average && (
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-sm rounded-lg py-1 px-1.5 sm:px-2 flex items-center gap-0.5 sm:gap-1 shadow-md z-10">
              <FaStar className="text-yellow-500 text-xs sm:text-base" />
              <span className="font-bold text-gray-800 text-xs sm:text-sm">
                {vote_average.toFixed(1)}
              </span>
            </div>
          )}

          {/* Overlay with Buttons - Visible on Hover */}
          <div
            className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 sm:gap-4 p-2 sm:p-4 transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={handleDetailsClick}
              className="w-3/4 px-2 sm:px-4 py-2 sm:py-3 bg-white text-blue-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-50 transition-colors shadow-lg"
            >
              Details
            </button>
            <button
              onClick={handleBuyTicketClick}
              className="w-3/4 px-2 sm:px-4 py-2 sm:py-3 bg-blue-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg"
            >
              Buy Ticket
            </button>
          </div>
        </div>

        <div className="p-2 sm:p-4 flex-1 flex flex-col">
          <h3 className="font-bold text-sm sm:text-lg text-gray-800 mb-1 sm:mb-2 line-clamp-2">
            {title}
          </h3>

          <div className="flex flex-wrap gap-1 sm:gap-2 mb-auto">
            {Array.isArray(dataGenre) &&
              dataGenre.slice(0, 2).map((genre, idx) => (
                <div
                  key={idx}
                  className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-2xs sm:text-xs font-medium text-white bg-gradient-to-r ${getGenreGradient(
                    genre
                  )} shadow-sm`}
                >
                  {getGenreName(genre)}
                </div>
              ))}
          </div>

          {release && (
            <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500">
              Release:{" "}
              {new Date(release).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
          )}

          {/* Recommendation text */}
          <div className="mt-2 sm:mt-3 flex items-center">
            <span className="text-2xs sm:text-xs font-medium text-blue-600 bg-blue-50 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
              Recommendation
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
