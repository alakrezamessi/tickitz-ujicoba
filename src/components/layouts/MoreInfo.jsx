import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const MoreInfo = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      setFirstName("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="px-4 lg:px-8 md:px-10 xl:px-16 py-16 bg-gray-50 relative overflow-hidden">
      {/* Background decorations - reduced size */}
      <div className="absolute top-0 left-1/4 w-56 h-56 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 py-10 md:py-14 px-4 md:px-8 rounded-2xl shadow-lg relative overflow-hidden"
        >
          {/* Decorative elements - reduced size */}
          <div className="w-48 h-48 border-6 border-blue-400/30 absolute right-[-6rem] bottom-[-6rem] rounded-full"></div>
          <div className="w-24 h-24 border-6 border-blue-400/30 absolute left-[-1.5rem] top-[-1.5rem] rounded-full"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-blue-200 font-bold text-base tracking-wider inline-block px-3 py-1 rounded-full bg-blue-500/30 mb-3"
              >
                STAY UPDATED
              </motion.p>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
              >
                Subscribe to our newsletter
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-blue-100 mt-3 max-w-xl mx-auto text-sm"
              >
                Get exclusive updates on new releases, special promotions, and
                insider movie news delivered straight to your inbox
              </motion.p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
            >
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-sm border border-blue-300/30 text-white placeholder-blue-200 font-medium px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm"
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-sm border border-blue-300/30 text-white placeholder-blue-200 font-medium px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 text-sm"
              >
                {isSubmitting ? (
                  <div className="h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Subscribe <FaPaperPlane className="text-xs" />
                  </>
                )}
              </motion.button>
            </motion.form>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-4 bg-blue-500/30 backdrop-blur-sm py-2 px-4 rounded-lg mx-auto max-w-md"
              >
                <p className="text-white text-sm">
                  Thank you for subscribing! We'll keep you updated with the
                  latest movie news.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-xs mt-4"
        >
          We respect your privacy. Your information is safe and will never be
          shared.
        </motion.div>
      </div>
    </section>
  );
};

export default MoreInfo;
