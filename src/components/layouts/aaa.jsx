import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = import.meta.env.VITE_APP_API_KEY;
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
        );
        const data = await response.json();
        setMovies(data.results.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const getImageUrl = (path) => {
    return `https://image.tmdb.org/t/p/w500${path}`;
  };

  return (
    <section className="px-4 lg:px-8 md:px-12 xl:px-24 py-10 md:py-14 flex flex-col gap-8 lg:flex-row relative overflow-hidden h-[90vh] max-h-[800px]">
      {/* Background blob decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>

      <motion.div
        className="flex-1 flex flex-col justify-center gap-4 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="inline-block text-sm md:text-base text-blue-600 font-bold text-center md:text-start bg-blue-50 px-3 py-1 rounded-full">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </p>
        </motion.div>

        <motion.p
          className="text-2xl text-center md:text-start md:text-3xl lg:text-4xl font-mulish font-bold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Experience the <span className="text-blue-600">Magic of Cinema</span>:
          Book Your Tickets Today
        </motion.p>

        <motion.p
          className="text-gray-500 text-center md:text-start text-sm md:text-base max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Sign up now and unlock exclusive discounts on your favorite movies.
          Seamless booking experience, premium seats, and instant confirmation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 mt-2 justify-center md:justify-start"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg hover:shadow-blue-300/50 text-sm">
            Get Started
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-2 px-6 rounded-lg transition-all text-sm">
            Learn More
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-[0.75] flex justify-center min-h-[320px] md:min-h-[380px] w-full z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        {loading ? (
          <div className="w-full flex items-center justify-center">
            <div className="animate-pulse w-full h-full bg-gray-200 rounded-3xl"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-3 gap-2 md:gap-3 w-full h-full">
            {movies.length > 0 && (
              <>
                {/* Movie 1 - Top Left */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-cover bg-center rounded-t-lg md:rounded-t-xl shadow-md overflow-hidden relative group md:row-span-1"
                  style={{
                    backgroundImage: `url(${getImageUrl(
                      movies[0].poster_path
                    )})`,
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-2 font-medium text-xs">
                      {movies[0].title}
                    </p>
                  </div>
                </motion.div>

                {/* Movie 2 - Top Right (span 2 rows on md+) */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-center bg-cover rounded-t-lg md:rounded-t-xl shadow-md overflow-hidden relative group md:row-span-2"
                  style={{
                    backgroundImage: `url(${getImageUrl(
                      movies[1].poster_path
                    )})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-2 font-medium text-xs">
                      {movies[1].title}
                    </p>
                  </div>
                </motion.div>

                {/* Movie 3 - Bottom Left (span 2 rows on md+) */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-center bg-cover rounded-b-lg md:rounded-b-xl shadow-md overflow-hidden relative group md:row-span-2 md:row-start-2"
                  style={{
                    backgroundImage: `url(${getImageUrl(
                      movies[2].poster_path
                    )})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-2 font-medium text-xs">
                      {movies[2].title}
                    </p>
                  </div>
                </motion.div>

                {/* Movie 4 - Bottom Right */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-cover bg-center rounded-b-lg md:rounded-b-xl shadow-md overflow-hidden relative group md:row-span-1 md:row-start-3"
                  style={{
                    backgroundImage: `url(${getImageUrl(
                      movies[3].poster_path
                    )})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-2 font-medium text-xs">
                      {movies[3].title}
                    </p>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;
