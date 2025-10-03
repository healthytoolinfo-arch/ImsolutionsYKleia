import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SEOHead from "../components/SEOHead";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEOHead
        title="404 - Page Not Found | i'm solutions"
        description="Oops! The page you're looking for doesn't exist. Return to i'm solutions homepage to explore our digital solutions and projects."
        keywords="404, page not found, i'm solutions, error page"
        canonicalUrl="https://imsolutions.com/404"
      />
      <div className="min-h-screen bg-[#FFFFFC] flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Illustration */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9de058c79701c509287f0cc92ea3e2ec376cdff9?width=1104"
              alt="404 error page illustration - lost page on i'm solutions website"
              loading="lazy"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto mx-auto"
            />
          </motion.div>

          {/* Message */}
          <motion.p
            className="font-gill-sans text-xl md:text-2xl lg:text-3xl text-black leading-tight mb-8 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            {t("notFound.message")}
          </motion.p>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-gill-sans font-semibold text-lg rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 transform"
            >
              {t("notFound.button")}
            </Link>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 text-3xl opacity-20"
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 0.2, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            ⚡
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-1/4 text-2xl opacity-20"
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ opacity: 0.2, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          >
            ✨
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
