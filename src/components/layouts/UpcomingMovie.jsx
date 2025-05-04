import { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Card from "../elements/Card";
import Skeleton from "../elements/Skeleton";
import { motion } from "framer-motion";

const UpcomingMovie = ({ datas, isLoading }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);

  // Calculate card width based on container width and responsive breakpoints
  useEffect(() => {
    const updateDimensions = () => {
      const container = document.getElementById("scrollContainer");
      if (container) {
        const containerWidth = container.clientWidth;
        let cardsToShow = 5; // Default for desktop

        // Responsive breakpoints
        if (window.innerWidth < 640) {
          cardsToShow = 1.5; // Mobile - show 1.5 cards
        } else if (window.innerWidth < 768) {
          cardsToShow = 2.5; // Small tablet - show 2.5 cards
        } else if (window.innerWidth < 1024) {
          cardsToShow = 3.5; // Tablet - show 3.5 cards
        } else if (window.innerWidth < 1280) {
          cardsToShow = 4; // Small desktop - show 4 cards
        }

        setVisibleCards(Math.floor(cardsToShow));

        // Calculate gap size based on screen width
        const gapSize = window.innerWidth < 640 ? 12 : 16; // 3px or 4px gap (tailwind gap-3 and gap-4)
        const totalGapWidth = gapSize * (cardsToShow - 1); // gaps between cards

        // Calculate card width
        const calculatedCardWidth =
          (containerWidth - totalGapWidth) / cardsToShow;

        setContainerWidth(containerWidth);
        setCardWidth(calculatedCardWidth);
      }
    };

    // Initial calculation
    updateDimensions();

    // Recalculate on window resize
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const scrollLeft = () => {
    const container = document.getElementById("scrollContainer");
    const gapSize = window.innerWidth < 640 ? 12 : 16;
    // Scroll by the number of visible cards
    const scrollAmount =
      cardWidth * visibleCards + gapSize * (visibleCards - 1);
    const newPosition = Math.max(scrollPosition - scrollAmount, 0);
    setScrollPosition(newPosition);
    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const container = document.getElementById("scrollContainer");
    const gapSize = window.innerWidth < 640 ? 12 : 16;
    // Scroll by the number of visible cards
    const scrollAmount =
      cardWidth * visibleCards + gapSize * (visibleCards - 1);
    const maxScroll = container.scrollWidth - container.clientWidth;
    const newPosition = Math.min(scrollPosition + scrollAmount, maxScroll);
    setScrollPosition(newPosition);
    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  // Generate skeleton placeholders based on visible cards
  const renderSkeletons = () => {
    // Always show at least 5 skeletons for loading state
    const skeletonCount = Math.max(5, visibleCards + 1);
    return [...Array(skeletonCount)].map((_, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: idx * 0.1 }}
        className="flex-shrink-0 snap-start"
        style={{ width: cardWidth > 0 ? `${cardWidth}px` : "auto" }}
      >
        <Skeleton />
      </motion.div>
    ));
  };

  return (
    <section className="px-4 lg:px-8 md:px-12 xl:px-24 py-12 sm:py-20 md:py-5 bg-white relative">
      {/* Background decorations - adjusted size */}
      <div className="absolute top-1/2 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0 md:mt-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-blue-600 text-sm sm:text-lg font-bold tracking-wider inline-block px-3 sm:px-4 py-1 rounded-full bg-blue-50 mb-2 sm:mb-3"
            >
              UPCOMING MOVIES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight"
            >
              Exciting Movies <span className="text-blue-600">Coming Soon</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-600 mt-1 sm:mt-2 max-w-lg text-xs sm:text-sm md:text-base"
            >
              Get a sneak peek at the latest films making their way to theaters
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-2 sm:gap-3 md:mt-34"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollLeft}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-all duration-300 shadow-md"
            >
              <FaArrowLeftLong className="text-gray-700 text-xs sm:text-sm" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollRight}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 shadow-md"
            >
              <FaArrowRightLong className="text-white text-xs sm:text-sm" />
            </motion.button>
          </motion.div>
        </div>

        <div
          id="scrollContainer"
          className="flex gap-3 sm:gap-4 overflow-x-auto py-3 sm:py-4 px-1 sm:px-2 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {isLoading ? (
            <>{renderSkeletons()}</>
          ) : datas && datas.length !== 0 ? (
            datas.map((data, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(idx * 0.1, 0.8) }}
                viewport={{ once: true }}
                className="flex-shrink-0 snap-start"
                style={{ width: cardWidth > 0 ? `${cardWidth}px` : "auto" }}
                whileHover={{ y: -5 }}
              >
                <Card
                  title={data.title}
                  dataGenre={data.genre_ids}
                  src={data.poster_path}
                  release={data.release_date}
                  id={data.id}
                  vote_average={data.vote_average}
                />
              </motion.div>
            ))
          ) : (
            <div className="w-full flex justify-center items-center py-8 sm:py-12">
              <p className="text-gray-500 text-sm sm:text-base">
                No upcoming movies available at the moment
              </p>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-6 sm:mt-8"
        >
          <motion.a
            href="/movies/upcoming"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold py-1.5 sm:py-2 px-4 sm:px-6 rounded-full flex items-center gap-1 sm:gap-2 shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm"
          >
            View All Upcoming Movies
            <FaArrowRightLong className="text-xs" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UpcomingMovie;
