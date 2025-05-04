import { Link } from "react-router-dom";
import Card from "../elements/Card";
import Skeleton from "../elements/Skeleton";
import { FaLongArrowAltDown, FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const PopularMovie = ({ datas, isLoading }) => {
  const [isViewMore, setIsViewMore] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative px-4 lg:px-8 md:px-10 xl:px-16 py-10 sm:py-14 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Background decorative elements - reduced size */}
      <div className="absolute top-20 left-0 w-56 h-56 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-x-1/2"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 translate-x-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold text-sm tracking-wider inline-block px-3 py-1 rounded-full bg-blue-50 mb-2 shadow-sm"
          >
            MOVIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
          >
            Exciting Movies That Should Be <br className="hidden lg:block" />
            <span className="text-blue-600">Watched Today</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 w-12 sm:w-16 bg-blue-600 mx-auto mb-3 rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm text-gray-600 max-w-2xl mx-auto"
          >
            Our curated selection of the most popular films that audiences are
            raving about. Don't miss out on these must-watch cinematic
            experiences.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 overflow-y-hidden py-4 transition-all duration-500"
        >
          {isLoading ? (
            <>
              {[...Array(5)].map((_, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Skeleton />
                </motion.div>
              ))}
            </>
          ) : datas && datas.length !== 0 ? (
            !isViewMore ? (
              datas.slice(0, 5).map((data, idx) => {
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="transition-all duration-300"
                  >
                    <Card
                      title={data.title}
                      dataGenre={data.genre_ids}
                      src={data.poster_path}
                      id={data.id}
                      vote_average={data.vote_average}
                    />
                  </motion.div>
                );
              })
            ) : (
              datas.map((data, idx) => {
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="transition-all duration-300"
                  >
                    <Card
                      title={data.title}
                      dataGenre={data.genre_ids}
                      src={data.poster_path}
                      id={data.id}
                      vote_average={data.vote_average}
                    />
                  </motion.div>
                );
              })
            )
          ) : (
            <motion.p
              variants={itemVariants}
              className="col-span-full text-center text-gray-500 py-8"
            >
              No movies available at the moment
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full flex justify-center mt-4 sm:mt-6"
        >
          {!isViewMore ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-bold text-white bg-blue-600 hover:bg-blue-700 px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-blue-300/50 flex items-center gap-2 text-sm transition-all duration-300"
              onClick={() => setIsViewMore(true)}
            >
              View More <FaLongArrowAltDown className="text-base sm:text-lg" />
            </motion.button>
          ) : (
            <Link
              to="/movie"
              className="font-bold text-white bg-blue-600 hover:bg-blue-700 px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-blue-300/50 flex items-center gap-2 text-sm transition-all duration-300"
            >
              View All <FaLongArrowAltRight className="text-base sm:text-lg" />
            </Link>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 bg-blue-50 p-3 sm:p-4 rounded-xl shadow-md border border-blue-100 max-w-2xl mx-auto"
        >
          <h3 className="text-base sm:text-lg font-bold text-blue-600 mb-1">
            Recommendations
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Our experts curate this selection based on audience ratings, critic
            reviews, and current popularity. These films represent the best
            cinema has to offer right now.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularMovie;
