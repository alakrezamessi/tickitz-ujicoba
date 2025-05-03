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
    <section className="px-4 lg:px-8 md:px-12 xl:px-24 py-16 md:py-24 flex flex-col gap-16 lg:flex-row relative overflow-hidden">
      {/* Background blob decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>

      <motion.div
        className="flex-1 flex flex-col justify-center gap-8 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="inline-block text-xl md:text-2xl text-blue-600 font-bold text-center md:text-start bg-blue-50 px-4 py-2 rounded-full">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </p>
        </motion.div>

        <motion.p
          className="text-3xl text-center md:text-start md:text-5xl lg:text-6xl font-mulish font-bold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Experience the <span className="text-blue-600">Magic of Cinema</span>:
          Book Your Tickets Today
        </motion.p>

        <motion.p
          className="text-gray-500 text-center md:text-start text-lg max-w-xl"
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
          className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-blue-300/50">
            Get Started
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-all">
            Learn More
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center 2xl:min-h-[800px] min-h-[400px] md:min-h-[500px] w-full z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        {loading ? (
          <div className="w-full flex items-center justify-center">
            <div className="animate-pulse w-full h-full bg-gray-200 rounded-3xl"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 grid-rows-3 gap-4 lg:gap-6 w-full relative">
            {movies.length > 0 && (
              <>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full bg-cover sm:w-full w-full rounded-2xl shadow-xl overflow-hidden relative group"
                  style={{
                    backgroundImage: `url(${getImageUrl(
                      movies[0].poster_path
                    )})`,
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-3 font-medium text-sm">
                      {movies[0].title}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full bg-center bg-cover sm:w-full w-full row-span-2 rounded-2xl shadow-xl overflow-hidden relative group"
                  style={{
                    backgroundImage: `url(${getImageUrl(
                      movies[1].poster_path
                    )})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-3 font-medium text-sm">
                      {movies[1].title}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full bg-center bg-cover sm:w-full w-full row-start-2 row-end-4 rounded-2xl shadow-xl overflow-hidden relative group"
                  style={{
                    backgroundImage: `url(${getImageUrl(
                      movies[2].poster_path
                    )})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-3 font-medium text-sm">
                      {movies[2].title}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full sm:w-full w-full bg-cover bg-center col-end-3 rounded-2xl shadow-xl overflow-hidden relative group"
                  style={{
                    backgroundImage: `url(${getImageUrl(
                      movies[3].poster_path
                    )})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-3 font-medium text-sm">
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
