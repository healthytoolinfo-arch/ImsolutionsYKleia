import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { motion } from "framer-motion";

export default function TermsOfService() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Terms of Service | i'm solutions"
        description="Terms of Service for i'm solutions. Read our terms and conditions for using our digital solutions platform and services."
        keywords="terms of service, terms and conditions, i'm solutions, user agreement, legal terms, digital solutions"
        canonicalUrl="https://imsolutions.com/terms-of-service"
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
              Terms of Service
            </h1>
            
            <div className="space-y-8 font-gill-sans text-base lg:text-lg leading-relaxed text-gray-800">
              <p className="text-gray-600">
                <strong>Effective Date:</strong> January 2025
              </p>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the i'm solutions website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">2. Description of Service</h2>
                <p>
                  i'm solutions provides digital solutions and software development services. We specialize in creating meaningful applications with a focus on user experience, particularly in the nutrition and wellness sector.
                </p>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">3. User Responsibilities</h2>
                <p className="mb-4">As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Use our services in compliance with all applicable laws and regulations</li>
                  <li>Not attempt to interfere with or disrupt our services</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">4. Intellectual Property</h2>
                <p>
                  All content, features, and functionality on our website, including but not limited to text, graphics, logos, and software, are owned by i'm solutions and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">5. Service Availability</h2>
                <p>
                  We strive to maintain our services available 24/7, but we do not guarantee uninterrupted access. We reserve the right to suspend or terminate services for maintenance, updates, or other operational reasons.
                </p>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">6. Limitation of Liability</h2>
                <p>
                  i'm solutions shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services, even if we have been advised of the possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">7. Privacy</h2>
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
                </p>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">8. Modifications</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">9. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of Spain, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="font-gill-sans font-bold text-2xl text-black mb-4">10. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p><strong>Email:</strong> <a href="mailto:hello@imsolutions.studio" className="text-black hover:text-gray-600 transition-colors underline">hello@imsolutions.studio</a></p>
                  <p><strong>Company:</strong> i'm solutions</p>
                  <p><strong>Based in:</strong> Spain / Bulgaria</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      </div>
    </>
  );
}
