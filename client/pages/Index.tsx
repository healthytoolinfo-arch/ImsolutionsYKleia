import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import SEOHead from "../components/SEOHead";
import StructuredData from "../components/StructuredData";
import LanguageSelector from "../components/LanguageSelector";

export default function Index() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init("Li-IsF_Rv_SW6GEY0");

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // Send email
      await emailjs.send("service_9yatyia", "template_ta16eku", templateParams);

      // Show success state
      setShowConfirmation(true);

      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });

      // Hide confirmation after 5 seconds
      setTimeout(() => {
        setShowConfirmation(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Hubo un error enviando el mensaje. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Force close mobile menu first
      setMobileMenuOpen(false);

      // Add a small delay to ensure menu closes before scrolling
      setTimeout(() => {
        // Get header height more reliably
        const header = document.querySelector("header");
        let headerHeight = 100; // Default fallback

        if (header) {
          const headerRect = header.getBoundingClientRect();
          headerHeight = headerRect.height + 30; // Add buffer
        }

        // Get element position more reliably
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top + window.pageYOffset;
        const targetPosition = elementTop - headerHeight;

        // Use both methods for maximum compatibility
        // Method 1: Standard scroll
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth",
        });

        // Method 2: Fallback for responsive mode issues
        if (window.scrollY === targetPosition) {
          // If scroll didn't work, try alternative method
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });

          // Adjust for header after scrollIntoView
          setTimeout(() => {
            window.scrollBy(0, -headerHeight);
          }, 100);
        }
      }, 50); // Small delay to ensure smooth operation
    } else {
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  // Scroll spy to track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "about", "contact"];
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight + 50 : 150; // Dynamic header height + buffer
      const scrollPosition = window.scrollY;

      // Find the section that's currently in view
      let currentSection = "";

      // Get viewport height for better detection
      const viewportHeight = window.innerHeight;
      const scrollMiddle = scrollPosition + viewportHeight / 3; // Use top third of viewport

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          const sectionTop = offsetTop - headerHeight;
          const sectionBottom = offsetTop + offsetHeight - headerHeight;

          // Check if section is in the top portion of the viewport
          if (scrollMiddle >= sectionTop && scrollMiddle < sectionBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // If we're at the very top, no section is active
      if (scrollPosition < 200) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return (
    <>
      <SEOHead
        title="i'm solutions | Digital Solutions with Attitude, Resilience & Vision"
        description="We build meaningful digital solutions focused on real-world problems. Currently developing an innovative platform for nutrition professionals. Founded by Ivelina & Mario in Spain."
        keywords="digital solutions, app development, nutrition software, startup, Ivelina, Mario, i'm solutions, technology, innovation, Spain, nutrition app, digital platform"
        canonicalUrl="https://imsolutions.com/"
      />
      <StructuredData />
      <div className="min-h-screen bg-[#FFFFFC]">
        {/* Header */}
        <header className="w-full bg-[#FFFFFC] py-4 lg:py-6 px-4 lg:px-16 xl:px-0 sticky top-0 z-50 border-b border-transparent transition-all duration-300">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center hover:opacity-70 transition-opacity"
            >
              <svg
                width="168"
                height="135"
                viewBox="0 0 168 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-32 h-auto lg:w-42"
              >
                <g clipPath="url(#clip0_1_5)">
                  <path
                    d="M9.28546 3.26505C11.8223 3.26505 14.0036 4.17797 15.8294 5.99308C17.6553 7.81356 18.5655 9.98846 18.5655 12.5178C18.5655 15.0471 17.6661 17.1254 15.8618 19.0103C14.0575 20.9006 11.8653 21.8404 9.28007 21.8404C6.69479 21.8404 4.6158 20.8952 2.7684 19.0103C0.921005 17.1308 0 14.9612 0 12.5232C0 9.95087 0.937163 7.75985 2.8061 5.96086C4.67504 4.16186 6.83483 3.26505 9.28546 3.26505ZM17.4991 32.0383V94.246H1.06643V32.0383H17.4991Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M42.684 0C46.2442 0 49.0987 1.32105 51.2316 3.96316C53.3698 6.60527 54.4363 10.1012 54.4363 14.4511C54.4363 20.3099 52.465 25.5189 48.5224 30.0674C44.5799 34.6213 39.7594 37.3171 34.061 38.1602V34.632C38.3375 31.034 40.4758 26.3513 40.4758 20.5784L40.3411 18.5162C35.3106 17.5818 32.7899 14.5423 32.7899 9.39238C32.7899 6.77175 33.7379 4.55388 35.6284 2.7334C37.5189 0.912924 39.8725 0.00537014 42.6733 0.00537014L42.684 0Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M104.273 30.8354C109.083 30.8354 113.144 31.9577 116.461 34.1971C119.779 36.4418 122.262 39.4491 123.91 43.2189C127.427 38.9121 130.934 35.7705 134.429 33.7943C137.925 31.8181 141.765 30.83 145.95 30.83C152.542 30.83 157.864 32.9727 161.914 37.258C165.964 41.5434 167.995 47.2626 167.995 54.4103V94.2406H151.562V57.1437C151.562 52.8368 150.636 49.4429 148.788 46.9512C146.941 44.4648 144.259 43.2189 140.736 43.2189C135.706 43.2189 130.874 46.441 126.242 52.8744V94.2353H109.874V56.8698C109.874 52.6059 108.894 49.2657 106.934 46.8438C104.973 44.4218 102.345 43.2135 99.0539 43.2135C96.3824 43.2135 93.9318 43.9815 91.7074 45.512C89.4776 47.0424 87.097 49.4966 84.5601 52.869V94.2299H68.1275V32.0383H84.5601V40.7648C87.544 37.3923 90.5709 34.8952 93.6463 33.2734C96.7217 31.6516 100.26 30.8407 104.268 30.8407L104.273 30.8354Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M0 133.12V128.62C1.17953 129.447 2.39138 130.119 3.62478 130.629C4.85817 131.144 5.89767 131.397 6.74327 131.397C7.58887 131.397 8.36984 131.182 9 130.752C9.63016 130.323 9.94255 129.812 9.94255 129.216C9.94255 128.62 9.73788 128.094 9.33393 127.691C8.9246 127.288 8.04668 126.703 6.70018 125.935C4.00179 124.437 2.2298 123.153 1.39497 122.09C0.560144 121.027 0.140036 119.867 0.140036 118.616C0.140036 116.994 0.770197 115.673 2.04129 114.647C3.307 113.621 4.93896 113.111 6.93178 113.111C8.9246 113.111 11.1275 113.691 13.3088 114.857V118.986C10.8205 117.488 8.78995 116.736 7.21185 116.736C6.39856 116.736 5.74147 116.908 5.24596 117.252C4.75045 117.595 4.49731 118.052 4.49731 118.621C4.49731 119.11 4.72352 119.577 5.17594 120.023C5.62837 120.468 6.42011 121 7.55655 121.628L9.05386 122.477C12.5871 124.464 14.3483 126.666 14.3483 129.082C14.3483 130.811 13.6697 132.229 12.3124 133.341C10.9551 134.447 9.21005 135.005 7.0772 135.005C5.81688 135.005 4.69659 134.871 3.71634 134.603C2.73609 134.334 1.49731 133.84 0.010772 133.12H0Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M29.2998 113.476C32.5206 113.476 35.1975 114.513 37.3303 116.586C39.4632 118.659 40.5296 121.263 40.5296 124.399C40.5296 127.536 39.447 129.974 37.2819 131.982C35.1167 133.996 32.3968 135 29.1113 135C25.8258 135 23.2783 133.98 21.1454 131.939C19.0126 129.898 17.9461 127.348 17.9461 124.287C17.9461 121.226 19.0233 118.621 21.1777 116.564C23.3321 114.508 26.0359 113.476 29.289 113.476H29.2998ZM29.0682 117.241C27.0592 117.241 25.4111 117.901 24.1185 119.217C22.8312 120.533 22.1849 122.208 22.1849 124.244C22.1849 126.279 22.842 127.911 24.167 129.19C25.4865 130.468 27.1831 131.107 29.2513 131.107C31.3196 131.107 32.9892 130.462 34.3034 129.168C35.6176 127.874 36.2693 126.22 36.2693 124.201C36.2693 122.181 35.5853 120.538 34.2226 119.223C32.8546 117.907 31.1364 117.246 29.0682 117.246V117.241Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M45.2747 102.575H49.465V134.635H45.2747V102.575Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M69.0054 134.635V131.928C68.1167 132.9 67.0987 133.657 65.9569 134.194C64.8151 134.732 63.6733 135.005 62.5368 135.005C61.2011 135.005 59.9731 134.672 58.842 134.007C57.7163 133.341 56.86 132.438 56.2891 131.3C55.7127 130.162 55.4273 128.266 55.4273 125.618V113.525H59.6176V125.559C59.6176 127.777 59.9354 129.324 60.5709 130.199C61.2065 131.08 62.3214 131.515 63.921 131.515C65.9138 131.515 67.6104 130.543 69.0054 128.599V113.519H73.1957V134.635H69.0054Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M76.1149 116.87L83.9892 109.159V113.519H90.6894V117.284H83.9892V127.616C83.9892 130.027 84.9964 131.236 87.0054 131.236C88.5081 131.236 90.0969 130.736 91.772 129.743V133.641C90.1616 134.544 88.4057 134.995 86.4991 134.995C84.5925 134.995 82.9874 134.436 81.7109 133.319C81.3124 132.981 80.9838 132.605 80.7199 132.181C80.4614 131.762 80.2406 131.209 80.0628 130.527C79.8851 129.845 79.7989 128.55 79.7989 126.639V117.273H76.1149V116.86V116.87Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M96.9479 104.643C97.6373 104.643 98.2298 104.879 98.7199 105.351C99.21 105.824 99.4578 106.409 99.4578 107.097C99.4578 107.784 99.21 108.353 98.7199 108.842C98.2298 109.331 97.6373 109.578 96.9479 109.578C96.3016 109.578 95.7361 109.331 95.246 108.831C94.7558 108.332 94.5081 107.757 94.5081 107.097C94.5081 106.436 94.7504 105.883 95.246 105.389C95.7361 104.89 96.3016 104.643 96.9479 104.643ZM94.8743 113.519H99.0646V134.635H94.8743V113.519Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M115.244 113.476C118.465 113.476 121.142 114.513 123.275 116.586C125.408 118.659 126.474 121.263 126.474 124.399C126.474 127.536 125.391 129.974 123.226 131.982C121.061 133.996 118.341 135 115.056 135C111.77 135 109.223 133.98 107.09 131.939C104.957 129.898 103.89 127.348 103.89 124.287C103.89 121.226 104.968 118.621 107.122 116.564C109.276 114.508 111.98 113.476 115.233 113.476H115.244ZM115.013 117.241C113.004 117.241 111.355 117.901 110.063 119.217C108.776 120.533 108.129 122.208 108.129 124.244C108.129 126.279 108.786 127.911 110.111 129.19C111.431 130.468 113.127 131.107 115.196 131.107C117.264 131.107 118.934 130.462 120.248 129.168C121.562 127.874 122.214 126.22 122.214 124.201C122.214 122.181 121.53 120.538 120.167 119.223C118.799 117.907 117.081 117.246 115.013 117.246V117.241Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M135.318 113.519V116.205C137.192 114.137 139.314 113.106 141.695 113.106C143.014 113.106 144.242 113.444 145.379 114.126C146.515 114.808 147.377 115.743 147.969 116.924C148.562 118.111 148.853 119.985 148.853 122.557V134.629H144.662V122.606C144.662 120.447 144.334 118.906 143.671 117.982C143.009 117.058 141.905 116.591 140.359 116.591C138.377 116.591 136.697 117.579 135.318 119.55V134.629H131.036V113.514H135.318V113.519Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M153.662 133.12V128.62C154.842 129.447 156.054 130.119 157.287 130.629C158.521 131.144 159.56 131.397 160.406 131.397C161.251 131.397 162.032 131.182 162.662 130.752C163.293 130.323 163.605 129.812 163.605 129.216C163.605 128.62 163.4 128.094 162.996 127.691C162.587 127.288 161.709 126.703 160.363 125.935C157.664 124.437 155.892 123.153 155.057 122.09C154.223 121.027 153.803 119.867 153.803 118.616C153.803 116.994 154.433 115.673 155.704 114.647C156.969 113.621 158.601 113.111 160.594 113.111C162.587 113.111 164.79 113.691 166.971 114.857V118.986C164.483 117.488 162.452 116.736 160.874 116.736C160.061 116.736 159.404 116.908 158.908 117.252C158.413 117.595 158.16 118.052 158.16 118.621C158.16 119.11 158.386 119.577 158.838 120.023C159.291 120.468 160.083 121 161.219 121.628L162.716 122.477C166.25 124.464 168.011 126.666 168.011 129.082C168.011 130.811 167.332 132.229 165.975 133.341C164.618 134.447 162.873 135.005 160.74 135.005C159.479 135.005 158.359 134.871 157.379 134.603C156.399 134.334 155.16 133.84 153.673 133.12H153.662Z"
                    fill="#1D1D1B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_5">
                    <rect width="168" height="135" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-16">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection("projects");
                  }}
                  className={`font-gill-sans text-xl text-black hover:opacity-70 transition-all duration-300 relative ${
                    activeSection === "projects"
                      ? 'after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-black'
                      : ""
                  }`}
                >
                  {t("nav.projects")}
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection("about");
                  }}
                  className={`font-gill-sans text-xl text-black hover:opacity-70 transition-all duration-300 relative ${
                    activeSection === "about"
                      ? 'after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-black'
                      : ""
                  }`}
                >
                  {t("nav.about")}
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection("contact");
                  }}
                  className={`font-gill-sans text-xl text-black hover:opacity-70 transition-all duration-300 relative ${
                    activeSection === "contact"
                      ? 'after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-black'
                      : ""
                  }`}
                >
                  {t("nav.contact")}
                </button>
              </nav>
              <LanguageSelector />
            </div>

            {/* Mobile Menu Button and Language Selector */}
            <div className="lg:hidden flex items-center space-x-4">
              <LanguageSelector />
              <button
                className="p-2 relative w-8 h-8 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="relative w-6 h-6 flex flex-col justify-center">
                  <motion.span
                    className="absolute w-6 h-0.5 bg-black transform-gpu"
                    initial={false}
                    animate={{
                      rotate: mobileMenuOpen ? 45 : 0,
                      y: mobileMenuOpen ? 0 : -8,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{
                      transformOrigin: "center center",
                      top: "50%",
                      left: "0",
                      transform: mobileMenuOpen
                        ? "translateY(-50%) rotate(45deg)"
                        : "translateY(-50%) translateY(-8px)",
                    }}
                  />
                  <motion.span
                    className="absolute w-6 h-0.5 bg-black transform-gpu"
                    initial={false}
                    animate={{
                      opacity: mobileMenuOpen ? 0 : 1,
                      scale: mobileMenuOpen ? 0.8 : 1,
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    style={{
                      top: "50%",
                      left: "0",
                      transform: "translateY(-50%)",
                    }}
                  />
                  <motion.span
                    className="absolute w-6 h-0.5 bg-black transform-gpu"
                    initial={false}
                    animate={{
                      rotate: mobileMenuOpen ? -45 : 0,
                      y: mobileMenuOpen ? 0 : 8,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{
                      transformOrigin: "center center",
                      top: "50%",
                      left: "0",
                      transform: mobileMenuOpen
                        ? "translateY(-50%) rotate(-45deg)"
                        : "translateY(-50%) translateY(8px)",
                    }}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="lg:hidden bg-[#FFFFFC] border-t border-gray-200 py-8 mt-4 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.div
                  className="max-w-7xl mx-auto px-6 flex flex-col space-y-6"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  exit={{ y: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToSection("projects");
                    }}
                    className={`font-gill-sans text-xl text-black hover:opacity-70 transition-all duration-300 text-left relative ${
                      activeSection === "projects"
                        ? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-8 after:h-0.5 after:bg-black'
                        : ""
                    }`}
                  >
                    {t("nav.projects")}
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToSection("about");
                    }}
                    className={`font-gill-sans text-xl text-black hover:opacity-70 transition-all duration-300 text-left relative ${
                      activeSection === "about"
                        ? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-8 after:h-0.5 after:bg-black'
                        : ""
                    }`}
                  >
                    {t("nav.about")}
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToSection("contact");
                    }}
                    className={`font-gill-sans text-xl text-black hover:opacity-70 transition-all duration-300 text-left relative ${
                      activeSection === "contact"
                        ? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-8 after:h-0.5 after:bg-black'
                        : ""
                    }`}
                  >
                    {t("nav.contact")}
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section className="w-full px-4 lg:px-16 xl:px-0 pb-16 lg:pb-32 pt-8 lg:pt-16">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-32">
            <div className="flex flex-col justify-center items-start gap-6 lg:w-1/2">
              <h1 className="font-gill-sans font-bold text-3xl lg:text-7xl leading-[120%] tracking-[-0.96px] lg:tracking-[-2.16px] text-black">
                {t("hero.title")}
              </h1>
              <h1 className="font-gill-sans font-bold text-3xl lg:text-7xl leading-[120%] tracking-[-0.96px] lg:tracking-[-2.16px] text-black -mt-4">
                {t("hero.tagline")}
              </h1>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full lg:w-80 px-4 py-2 bg-black text-white font-inter font-bold text-base rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 transform"
              >
                {t("hero.button")}
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <motion.img
                src="https://api.builder.io/api/v1/image/assets/TEMP/aeb6591aa0992e0f1a119dda4e425d95261e1f24?width=1106"
                alt="i'm solutions team - Ivelina and Mario working on digital solutions and innovative app development"
                loading="lazy"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto mx-auto block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full px-4 lg:px-16 xl:px-0 py-16 lg:py-32"
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 lg:gap-16">
            <motion.h2
              className="font-gill-sans font-bold text-3xl lg:text-7xl leading-[120%] tracking-[-0.96px] lg:tracking-[-2.16px] text-black"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {t("projects.title")}
            </motion.h2>

            <div className="w-full flex flex-col lg:flex-row items-start gap-6 lg:gap-32">
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <motion.img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2785a569c041b1950ce1cc503e61182ca53bd9a5?width=718"
                  alt="Digital platform for nutritionists - innovative app development for nutrition professionals"
                  loading="lazy"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto mx-auto block"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                />
              </div>
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="font-gill-sans font-bold text-xl lg:text-2xl text-black mb-4">
                  {t("projects.nutrition.title")}
                </h3>
                <p className="font-gill-sans text-base leading-[140%] tracking-[-0.48px] text-black">
                  {t("projects.nutrition.description1")}
                </p>
                <p className="font-gill-sans text-base leading-[140%] tracking-[-0.48px] text-black mt-4">
                  {t("projects.nutrition.description2")}
                </p>
              </motion.div>
            </div>

            <div className="w-full flex justify-center mt-8 lg:mt-16">
              <motion.img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a937afc03306a051c8043cbd0977df0234d4f0ea?width=1104"
                alt="Nutrition app interface design - user-friendly tool for nutritionist workflow and client management"
                loading="lazy"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto mx-auto block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full px-4 lg:px-16 xl:px-0 py-16 lg:py-32"
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 lg:gap-16">
            <motion.h2
              className="font-gill-sans font-bold text-3xl lg:text-7xl leading-[120%] tracking-[-0.96px] lg:tracking-[-2.16px] text-black"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {t("about.title")}
            </motion.h2>

            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-32">
              <div className="lg:w-1/2 flex justify-center items-center">
                <motion.img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e18d29b28501d84e34086be05d5ef2a5654c8e6d?width=722"
                  alt="About i'm solutions founders - Ivelina and Mario's entrepreneurial journey in digital innovation"
                  loading="lazy"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto mx-auto block"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                />
              </div>
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="space-y-4 font-gill-sans text-base leading-[140%] tracking-[-0.48px] text-black">
                  <p>{t("about.content.intro")}</p>
                  <p>{t("about.content.founding")}</p>
                  <p>{t("about.content.ivelina")}</p>
                  <p>{t("about.content.mario")}</p>
                  <p className="font-bold">{t("about.content.mission")}</p>
                  <p className="font-bold">
                    {t("about.content.philosophy", { returnObjects: true })
                      .split("\\n")
                      .map((line: string, index: number) => (
                        <span key={index}>
                          {line}
                          {index === 0 && <br />}
                        </span>
                      ))}
                  </p>
                  <p className="font-bold text-lg">{t("about.content.cta")}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full px-4 lg:px-16 xl:px-0 py-16 lg:py-32"
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 lg:gap-16">
            <motion.h2
              className="font-gill-sans font-bold text-3xl lg:text-7xl leading-[120%] tracking-[-0.96px] lg:tracking-[-2.16px] text-black text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {t("contact.title")}
            </motion.h2>

            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-32">
              <div className="lg:w-1/2 w-full">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-inter font-bold text-base text-black mb-2">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.namePlaceholder")}
                      required
                      className="w-full px-6 py-4 border border-black rounded-lg bg-white font-inter text-base text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block font-inter font-bold text-base text-black mb-2">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.emailPlaceholder")}
                      required
                      className="w-full px-6 py-4 border border-black rounded-lg bg-white font-inter text-base text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block font-inter font-bold text-base text-black mb-2">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.messagePlaceholder")}
                      rows={4}
                      required
                      className="w-full px-6 py-4 border border-black rounded-lg bg-white font-inter text-base text-gray-500 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full lg:w-auto px-4 py-3 bg-black text-white font-inter font-bold text-base rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 transform disabled:opacity-70 disabled:cursor-not-allowed"
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.div
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        {t("contact.form.sending")}
                      </span>
                    ) : (
                      t("contact.form.button")
                    )}
                  </motion.button>

                  {/* Success Confirmation */}
                  <AnimatePresence>
                    {showConfirmation && (
                      <motion.div
                        className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="flex-shrink-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: 0.2,
                              type: "spring",
                              stiffness: 500,
                              damping: 25,
                            }}
                          >
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <motion.svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="3"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                  delay: 0.4,
                                  duration: 0.5,
                                  ease: "easeOut",
                                }}
                              >
                                <motion.path d="m9 12 2 2 4-4" />
                              </motion.svg>
                            </div>
                          </motion.div>
                          <div>
                            <motion.h4
                              className="font-gill-sans font-bold text-green-800 text-lg"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3, duration: 0.4 }}
                            >
                              {t("contact.form.success.title")}
                            </motion.h4>
                            <motion.p
                              className="font-gill-sans text-green-700 text-sm mt-1"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4, duration: 0.4 }}
                            >
                              {t("contact.form.success.description")}
                            </motion.p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>

              <div className="lg:w-1/2 flex justify-center items-center">
                <motion.img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0dd979f6d97ac4aa15d61a99a715b109041f1b8e?width=912"
                  alt="Contact i'm solutions - Get in touch for digital solutions and app development projects"
                  loading="lazy"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto mx-auto block"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-black text-white py-16 px-4 lg:px-16 xl:px-0 pb-32 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              {/* Logo and Company Info */}
              <div className="flex flex-col gap-4">
                <button
                  onClick={scrollToTop}
                  className="flex items-center hover:opacity-70 transition-opacity"
                >
                  <svg
                    width="120"
                    height="96"
                    viewBox="0 0 168 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-24 h-auto"
                  >
                    <g clipPath="url(#clip0_footer)">
                      <path
                        d="M9.28546 3.26505C11.8223 3.26505 14.0036 4.17797 15.8294 5.99308C17.6553 7.81356 18.5655 9.98846 18.5655 12.5178C18.5655 15.0471 17.6661 17.1254 15.8618 19.0103C14.0575 20.9006 11.8653 21.8404 9.28007 21.8404C6.69479 21.8404 4.6158 20.8952 2.7684 19.0103C0.921005 17.1308 0 14.9612 0 12.5232C0 9.95087 0.937163 7.75985 2.8061 5.96086C4.67504 4.16186 6.83483 3.26505 9.28546 3.26505ZM17.4991 32.0383V94.246H1.06643V32.0383H17.4991Z"
                        fill="white"
                      />
                      <path
                        d="M42.684 0C46.2442 0 49.0987 1.32105 51.2316 3.96316C53.3698 6.60527 54.4363 10.1012 54.4363 14.4511C54.4363 20.3099 52.465 25.5189 48.5224 30.0674C44.5799 34.6213 39.7594 37.3171 34.061 38.1602V34.632C38.3375 31.034 40.4758 26.3513 40.4758 20.5784L40.3411 18.5162C35.3106 17.5818 32.7899 14.5423 32.7899 9.39238C32.7899 6.77175 33.7379 4.55388 35.6284 2.7334C37.5189 0.912924 39.8725 0.00537014 42.6733 0.00537014L42.684 0Z"
                        fill="white"
                      />
                      <path
                        d="M104.273 30.8354C109.083 30.8354 113.144 31.9577 116.461 34.1971C119.779 36.4418 122.262 39.4491 123.91 43.2189C127.427 38.9121 130.934 35.7705 134.429 33.7943C137.925 31.8181 141.765 30.83 145.95 30.83C152.542 30.83 157.864 32.9727 161.914 37.258C165.964 41.5434 167.995 47.2626 167.995 54.4103V94.2406H151.562V57.1437C151.562 52.8368 150.636 49.4429 148.788 46.9512C146.941 44.4648 144.259 43.2189 140.736 43.2189C135.706 43.2189 130.874 46.441 126.242 52.8744V94.2353H109.874V56.8698C109.874 52.6059 108.894 49.2657 106.934 46.8438C104.973 44.4218 102.345 43.2135 99.0539 43.2135C96.3824 43.2135 93.9318 43.9815 91.7074 45.512C89.4776 47.0424 87.097 49.4966 84.5601 52.869V94.2299H68.1275V32.0383H84.5601V40.7648C87.544 37.3923 90.5709 34.8952 93.6463 33.2734C96.7217 31.6516 100.26 30.8407 104.268 30.8407L104.273 30.8354Z"
                        fill="white"
                      />
                      <path
                        d="M0 133.12V128.62C1.17953 129.447 2.39138 130.119 3.62478 130.629C4.85817 131.144 5.89767 131.397 6.74327 131.397C7.58887 131.397 8.36984 131.182 9 130.752C9.63016 130.323 9.94255 129.812 9.94255 129.216C9.94255 128.62 9.73788 128.094 9.33393 127.691C8.9246 127.288 8.04668 126.703 6.70018 125.935C4.00179 124.437 2.2298 123.153 1.39497 122.09C0.560144 121.027 0.140036 119.867 0.140036 118.616C0.140036 116.994 0.770197 115.673 2.04129 114.647C3.307 113.621 4.93896 113.111 6.93178 113.111C8.9246 113.111 11.1275 113.691 13.3088 114.857V118.986C10.8205 117.488 8.78995 116.736 7.21185 116.736C6.39856 116.736 5.74147 116.908 5.24596 117.252C4.75045 117.595 4.49731 118.052 4.49731 118.621C4.49731 119.11 4.72352 119.577 5.17594 120.023C5.62837 120.468 6.42011 121 7.55655 121.628L9.05386 122.477C12.5871 124.464 14.3483 126.666 14.3483 129.082C14.3483 130.811 13.6697 132.229 12.3124 133.341C10.9551 134.447 9.21005 135.005 7.0772 135.005C5.81688 135.005 4.69659 134.871 3.71634 134.603C2.73609 134.334 1.49731 133.84 0.010772 133.12H0Z"
                        fill="white"
                      />
                      <path
                        d="M29.2998 113.476C32.5206 113.476 35.1975 114.513 37.3303 116.586C39.4632 118.659 40.5296 121.263 40.5296 124.399C40.5296 127.536 39.447 129.974 37.2819 131.982C35.1167 133.996 32.3968 135 29.1113 135C25.8258 135 23.2783 133.98 21.1454 131.939C19.0126 129.898 17.9461 127.348 17.9461 124.287C17.9461 121.226 19.0233 118.621 21.1777 116.564C23.3321 114.508 26.0359 113.476 29.289 113.476H29.2998ZM29.0682 117.241C27.0592 117.241 25.4111 117.901 24.1185 119.217C22.8312 120.533 22.1849 122.208 22.1849 124.244C22.1849 126.279 22.842 127.911 24.167 129.19C25.4865 130.468 27.1831 131.107 29.2513 131.107C31.3196 131.107 32.9892 130.462 34.3034 129.168C35.6176 127.874 36.2693 126.22 36.2693 124.201C36.2693 122.181 35.5853 120.538 34.2226 119.223C32.8546 117.907 31.1364 117.246 29.0682 117.246V117.241Z"
                        fill="white"
                      />
                      <path
                        d="M45.2747 102.575H49.465V134.635H45.2747V102.575Z"
                        fill="white"
                      />
                      <path
                        d="M69.0054 134.635V131.928C68.1167 132.9 67.0987 133.657 65.9569 134.194C64.8151 134.732 63.6733 135.005 62.5368 135.005C61.2011 135.005 59.9731 134.672 58.842 134.007C57.7163 133.341 56.86 132.438 56.2891 131.3C55.7127 130.162 55.4273 128.266 55.4273 125.618V113.525H59.6176V125.559C59.6176 127.777 59.9354 129.324 60.5709 130.199C61.2065 131.08 62.3214 131.515 63.921 131.515C65.9138 131.515 67.6104 130.543 69.0054 128.599V113.519H73.1957V134.635H69.0054Z"
                        fill="white"
                      />
                      <path
                        d="M76.1149 116.87L83.9892 109.159V113.519H90.6894V117.284H83.9892V127.616C83.9892 130.027 84.9964 131.236 87.0054 131.236C88.5081 131.236 90.0969 130.736 91.772 129.743V133.641C90.1616 134.544 88.4057 134.995 86.4991 134.995C84.5925 134.995 82.9874 134.436 81.7109 133.319C81.3124 132.981 80.9838 132.605 80.7199 132.181C80.4614 131.762 80.2406 131.209 80.0628 130.527C79.8851 129.845 79.7989 128.55 79.7989 126.639V117.273H76.1149V116.86V116.87Z"
                        fill="white"
                      />
                      <path
                        d="M96.9479 104.643C97.6373 104.643 98.2298 104.879 98.7199 105.351C99.21 105.824 99.4578 106.409 99.4578 107.097C99.4578 107.784 99.21 108.353 98.7199 108.842C98.2298 109.331 97.6373 109.578 96.9479 109.578C96.3016 109.578 95.7361 109.331 95.246 108.831C94.7558 108.332 94.5081 107.757 94.5081 107.097C94.5081 106.436 94.7504 105.883 95.246 105.389C95.7361 104.89 96.3016 104.643 96.9479 104.643ZM94.8743 113.519H99.0646V134.635H94.8743V113.519Z"
                        fill="white"
                      />
                      <path
                        d="M115.244 113.476C118.465 113.476 121.142 114.513 123.275 116.586C125.408 118.659 126.474 121.263 126.474 124.399C126.474 127.536 125.391 129.974 123.226 131.982C121.061 133.996 118.341 135 115.056 135C111.77 135 109.223 133.98 107.09 131.939C104.957 129.898 103.89 127.348 103.89 124.287C103.89 121.226 104.968 118.621 107.122 116.564C109.276 114.508 111.98 113.476 115.233 113.476H115.244ZM115.013 117.241C113.004 117.241 111.355 117.901 110.063 119.217C108.776 120.533 108.129 122.208 108.129 124.244C108.129 126.279 108.786 127.911 110.111 129.19C111.431 130.468 113.127 131.107 115.196 131.107C117.264 131.107 118.934 130.462 120.248 129.168C121.562 127.874 122.214 126.22 122.214 124.201C122.214 122.181 121.53 120.538 120.167 119.223C118.799 117.907 117.081 117.246 115.013 117.246V117.241Z"
                        fill="white"
                      />
                      <path
                        d="M135.318 113.519V116.205C137.192 114.137 139.314 113.106 141.695 113.106C143.014 113.106 144.242 113.444 145.379 114.126C146.515 114.808 147.377 115.743 147.969 116.924C148.562 118.111 148.853 119.985 148.853 122.557V134.629H144.662V122.606C144.662 120.447 144.334 118.906 143.671 117.982C143.009 117.058 141.905 116.591 140.359 116.591C138.377 116.591 136.697 117.579 135.318 119.55V134.629H131.036V113.514H135.318V113.519Z"
                        fill="white"
                      />
                      <path
                        d="M153.662 133.12V128.62C154.842 129.447 156.054 130.119 157.287 130.629C158.521 131.144 159.56 131.397 160.406 131.397C161.251 131.397 162.032 131.182 162.662 130.752C163.293 130.323 163.605 129.812 163.605 129.216C163.605 128.62 163.4 128.094 162.996 127.691C162.587 127.288 161.709 126.703 160.363 125.935C157.664 124.437 155.892 123.153 155.057 122.09C154.223 121.027 153.803 119.867 153.803 118.616C153.803 116.994 154.433 115.673 155.704 114.647C156.969 113.621 158.601 113.111 160.594 113.111C162.587 113.111 164.79 113.691 166.971 114.857V118.986C164.483 117.488 162.452 116.736 160.874 116.736C160.061 116.736 159.404 116.908 158.908 117.252C158.413 117.595 158.16 118.052 158.16 118.621C158.16 119.11 158.386 119.577 158.838 120.023C159.291 120.468 160.083 121 161.219 121.628L162.716 122.477C166.25 124.464 168.011 126.666 168.011 129.082C168.011 130.811 167.332 132.229 165.975 133.341C164.618 134.447 162.873 135.005 160.74 135.005C159.479 135.005 158.359 134.871 157.379 134.603C156.399 134.334 155.16 133.84 153.673 133.12H153.662Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_footer">
                        <rect width="168" height="135" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <p className="font-gill-sans text-sm text-gray-300 max-w-xs">
                  {t("footer.description")}
                </p>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <div className="flex flex-col gap-4">
                  <h4 className="font-gill-sans font-bold text-white text-lg">
                    {t("footer.navigation")}
                  </h4>
                  <nav className="flex flex-col gap-3">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        scrollToSection("projects");
                      }}
                      className="font-gill-sans text-gray-300 hover:text-white transition-colors text-left"
                    >
                      {t("nav.projects")}
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        scrollToSection("about");
                      }}
                      className="font-gill-sans text-gray-300 hover:text-white transition-colors text-left"
                    >
                      {t("nav.about")}
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        scrollToSection("contact");
                      }}
                      className="font-gill-sans text-gray-300 hover:text-white transition-colors text-left"
                    >
                      {t("nav.contact")}
                    </button>
                  </nav>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="font-gill-sans font-bold text-white text-lg">
                    {t("footer.contactInfo")}
                  </h4>
                  <div className="flex flex-col gap-3">
                    <a
                    href="mailto:hello@imsolutions.studio"
                    className="font-gill-sans text-gray-300 hover:text-white transition-colors text-sm underline"
                  >
                    hello@imsolutions.studio
                  </a>
                    <p className="font-gill-sans text-gray-300 text-sm">
                      {t("footer.location")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-12 pt-8 pb-8 lg:pb-0 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4">
              <p className="font-gill-sans text-gray-400 text-sm">
                {t("footer.copyright", { year: new Date().getFullYear() })}
              </p>
              <div className="flex gap-6">
                <Link
                  to="/privacy-policy"
                  className="font-gill-sans text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("footer.privacy")}
                </Link>
                <Link
                  to="/terms-of-service"
                  className="font-gill-sans text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("footer.terms")}
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
