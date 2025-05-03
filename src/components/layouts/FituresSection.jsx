import { motion } from "framer-motion";
import { FaShieldAlt, FaCheckCircle, FaHeadset } from "react-icons/fa";

const FeatureCard = ({ icon, title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
    >
      <div className="flex flex-col items-center lg:items-start">
        <div className="bg-blue-100 p-4 rounded-2xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
          {icon === "shieldDone" && (
            <FaShieldAlt className="text-blue-600 text-3xl group-hover:text-white transition-colors duration-300" />
          )}
          {icon === "checkCircle" && (
            <FaCheckCircle className="text-blue-600 text-3xl group-hover:text-white transition-colors duration-300" />
          )}
          {icon === "message" && (
            <FaHeadset className="text-blue-600 text-3xl group-hover:text-white transition-colors duration-300" />
          )}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center lg:text-left">
          {title}
        </h3>
        <p className="text-gray-600 text-center lg:text-left">{desc}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="px-4 lg:px-8 md:px-12 xl:px-24 py-24 bg-gray-50 relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-blue-600 text-lg font-bold tracking-wider mb-4 inline-block px-4 py-1 rounded-full bg-blue-50">
          WHY CHOOSE US
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Unleashing the Ultimate{" "}
          <span className="text-blue-600">Movie Experience</span>
        </h2>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          We're dedicated to providing the most immersive and convenient
          movie-going experience with cutting-edge technology and premium
          service.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
