import { motion } from "framer-motion";
import { FaShieldAlt, FaCheckCircle, FaHeadset } from "react-icons/fa";

const FeatureCard = ({ icon, title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
    >
      <div className="flex flex-col items-center lg:items-start">
        <div className="bg-blue-100 p-3 rounded-xl mb-4 group-hover:bg-blue-600 transition-colors duration-300">
          {icon === "shieldDone" && (
            <FaShieldAlt className="text-blue-600 text-xl group-hover:text-white transition-colors duration-300" />
          )}
          {icon === "checkCircle" && (
            <FaCheckCircle className="text-blue-600 text-xl group-hover:text-white transition-colors duration-300" />
          )}
          {icon === "message" && (
            <FaHeadset className="text-blue-600 text-xl group-hover:text-white transition-colors duration-300" />
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 text-center lg:text-left">
          {title}
        </h3>
        <p className="text-gray-600 text-center lg:text-left text-sm">{desc}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="px-4 lg:px-8 md:px-10 xl:px-16 py-16 bg-gray-50 relative">
      {/* Background decorations - reduced size*/}
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-10"
      >
        <p className="text-blue-600 text-base font-bold tracking-wider mb-3 inline-block px-4 py-1 rounded-full bg-blue-50">
          WHY CHOOSE US
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Unleashing the Ultimate{" "}
          <span className="text-blue-600">Movie Experience</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          We're dedicated to providing the most immersive and convenient
          movie-going experience with cutting-edge technology and premium
          service.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <FeatureCard
          icon="shieldDone"
          title="Guaranteed Quality"
          desc="Enjoy premium quality seating, sound, and visuals in all our partner theaters, ensuring your movie experience is always outstanding."
          delay={0.2}
        />
        <FeatureCard
          icon="checkCircle"
          title="Affordable Pricing"
          desc="Get access to exclusive promotions, discounts, and loyalty rewards to make your movie outings more affordable and enjoyable."
          delay={0.4}
        />
        <FeatureCard
          icon="message"
          title="24/7 Customer Support"
          desc="Our dedicated support team is always ready to assist you with bookings, inquiries, or any issues, ensuring a smooth experience every time."
          delay={0.6}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
