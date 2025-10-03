import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Privacy Policy | i'm solutions"
        description="Privacy policy for i'm solutions. Learn how we collect, use, and protect your personal information on our digital solutions platform."
        keywords="privacy policy, data protection, i'm solutions, personal information, GDPR, data security"
        canonicalUrl="https://imsolutions.com/privacy-policy"
      />
      <div className="min-h-screen bg-[#FFFFFC]">
      {/* Header */}
      <header className="w-full bg-[#FFFFFC] py-4 lg:py-6 px-4 lg:px-16 xl:px-0 sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            to="/"
            className="flex items-center hover:opacity-70 transition-opacity"
          >
            <svg
              width="168"
              height="135"
              viewBox="0 0 168 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-auto"
            >
              <g clipPath="url(#clip0_1_5)">
                <path d="M9.28546 3.26505C11.8223 3.26505 14.0036 4.17797 15.8294 5.99308C17.6553 7.81356 18.5655 9.98846 18.5655 12.5178C18.5655 15.0471 17.6661 17.1254 15.8618 19.0103C14.0575 20.9006 11.8653 21.8404 9.28007 21.8404C6.69479 21.8404 4.6158 20.8952 2.7684 19.0103C0.921005 17.1308 0 14.9612 0 12.5232C0 9.95087 0.937163 7.75985 2.8061 5.96086C4.67504 4.16186 6.83483 3.26505 9.28546 3.26505ZM17.4991 32.0383V94.246H1.06643V32.0383H17.4991Z" fill="#1D1D1B"/>
                <path d="M42.684 0C46.2442 0 49.0987 1.32105 51.2316 3.96316C53.3698 6.60527 54.4363 10.1012 54.4363 14.4511C54.4363 20.3099 52.465 25.5189 48.5224 30.0674C44.5799 34.6213 39.7594 37.3171 34.061 38.1602V34.632C38.3375 31.034 40.4758 26.3513 40.4758 20.5784L40.3411 18.5162C35.3106 17.5818 32.7899 14.5423 32.7899 9.39238C32.7899 6.77175 33.7379 4.55388 35.6284 2.7334C37.5189 0.912924 39.8725 0.00537014 42.6733 0.00537014L42.684 0Z" fill="#1D1D1B"/>
                <path d="M104.273 30.8354C109.083 30.8354 113.144 31.9577 116.461 34.1971C119.779 36.4418 122.262 39.4491 123.91 43.2189C127.427 38.9121 130.934 35.7705 134.429 33.7943C137.925 31.8181 141.765 30.83 145.95 30.83C152.542 30.83 157.864 32.9727 161.914 37.258C165.964 41.5434 167.995 47.2626 167.995 54.4103V94.2406H151.562V57.1437C151.562 52.8368 150.636 49.4429 148.788 46.9512C146.941 44.4648 144.259 43.2189 140.736 43.2189C135.706 43.2189 130.874 46.441 126.242 52.8744V94.2353H109.874V56.8698C109.874 52.6059 108.894 49.2657 106.934 46.8438C104.973 44.4218 102.345 43.2135 99.0539 43.2135C96.3824 43.2135 93.9318 43.9815 91.7074 45.512C89.4776 47.0424 87.097 49.4966 84.5601 52.869V94.2299H68.1275V32.0383H84.5601V40.7648C87.544 37.3923 90.5709 34.8952 93.6463 33.2734C96.7217 31.6516 100.26 30.8407 104.268 30.8407L104.273 30.8354Z" fill="#1D1D1B"/>
              </g>
              <defs>
                <clipPath id="clip0_1_5">
                  <rect width="168" height="135" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </Link>
          
          <Link 
            to="/"
            className="font-gill-sans text-lg text-black hover:opacity-70 transition-opacity"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="w-full px-4 lg:px-16 xl:px-0 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="font-gill-sans font-bold text-4xl lg:text-6xl text-black mb-8">
              Privacy Policy
            </h1>
            
            <div className="space-y-8 font-gill-sans text-base lg:text-lg leading-relaxed text-gray-800">
              <p className="text-gray-600">
                <strong>Effective Date:</strong> January 2025
              </p>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  At i'm solutions, we collect information you provide directly to us, such as when you contact us through our website, subscribe to our newsletter, or use our services.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact information (name, email address)</li>
                  <li>Communications you send to us</li>
                  <li>Technical information about your device and browser</li>
                </ul>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Send you updates about our products and services (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
                </p>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">5. Your Rights</h2>
                <p className="mb-4">Depending on your location, you may have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p><strong>Email:</strong> <a href="mailto:hello@imsolutions.studio" className="text-black hover:text-gray-600 transition-colors underline">hello@imsolutions.studio</a></p>
                  <p><strong>Company:</strong> i'm solutions</p>
                  <p><strong>Based in:</strong> Spain / Bulgaria</p>
                </div>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">7. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      </div>
    </>
  );
}
