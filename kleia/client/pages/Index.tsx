import React, { useState, useEffect } from "react";
import SEO from "../components/SEO";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Scroll tracking effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["what-is-kleia", "why-it-feels-hard", "lets-fix-that"];
      const scrollPosition = window.scrollY + 300; // Increased offset

      // Check if we're in hero area (first section hasn't been reached yet)
      const firstSection = document.getElementById(sections[0]);
      if (firstSection && scrollPosition < firstSection.offsetTop) {
        setActiveSection(""); // No section active in hero area
        return;
      }

      // Check which section we're in
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Run on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "what-is-kleia", label: "What is kleia?" },
    { id: "why-it-feels-hard", label: "Why It Feels So Hard Right Now" },
    { id: "lets-fix-that", label: "Let's Fix That, Together" },
  ];

  return (
    <>
      <SEO />
      {/* Removed complex Tally JavaScript - now using direct embed */}
      <div className="min-h-screen bg-kleia-bg-main">
        {/* Sticky Navigation Header */}
        <header className="sticky-header">
          <div className="px-4 md:px-6 lg:px-[156px] pt-6 md:pt-8 lg:pt-12 pb-3 md:pb-4 lg:pb-6">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <svg
                  onClick={scrollToTop}
                  className="logo-clickable h-6 w-auto md:h-8 lg:h-10"
                  width="166"
                  height="54"
                  viewBox="0 0 166 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_193_732)">
                    <path
                      d="M49.9177 43.6234C48.9019 43.6234 48.0286 46.2866 45.52 46.2866C41.1966 46.2866 36.3281 37.1066 36.3281 35.1675C36.3281 34.1611 49.6948 31.1359 49.6948 22.4959C49.6948 18.5011 47.1862 15.8748 42.8627 15.8748C33.3425 15.8748 27.2786 28.2211 26.622 28.2211C26.5105 28.2211 26.368 28.08 26.368 27.54C26.368 25.6684 31.1251 4.75568 31.1251 1.73045C31.1251 0.822273 30.6729 0.0552273 29.3845 0.0122727L13.6022 0.00613636L0.309765 0C0.0620037 0 -0.0804589 0.276136 0.0496157 0.478636L4.45977 7.17341C4.51551 7.25932 4.61462 7.31455 4.71991 7.31455H21.3695C21.5615 7.31455 21.7039 7.48023 21.673 7.67046C21.5739 8.25955 21.388 9.38864 21.3137 9.84273C21.258 10.1557 21.2208 10.4134 21.1898 10.5914H7.29663C7.04887 10.5914 6.90021 10.8614 7.03648 11.0639L11.4466 17.7586C11.5024 17.8445 11.6015 17.8998 11.7068 17.8998H19.6228C19.8148 17.8998 19.9572 18.0655 19.9263 18.2557C19.7838 19.1148 19.6351 19.98 19.4803 20.9066C19.4555 21.0539 19.3254 21.1643 19.1768 21.1643H14.2711C14.0295 21.1643 13.8809 21.4282 14.0048 21.6307L18.099 28.3255C18.1362 28.3868 18.1548 28.4666 18.1362 28.5402C17.1823 33.8298 16.2532 38.7143 15.5533 42.0771C14.5375 46.7898 13.2615 50.3918 13.2615 51.5086C13.2615 52.3739 13.5526 53.2391 15.2622 53.2391C18.13 53.2391 21.4004 52.7359 22.4906 51.8339C23.4011 51.1527 23.7604 49.6002 23.7604 48.3055C23.7604 47.115 23.8719 44.6727 24.1939 42.4023C25.3584 34.4495 32.2957 22.8948 37.7836 22.8948C39.3445 22.8948 40.3975 23.8275 40.3975 25.7727C40.3975 29.878 33.8195 32.9339 29.8615 34.6275C28.7713 35.0939 28.1891 35.9223 28.1891 36.9286C28.1891 41.715 34.1849 53.6318 42.1009 53.6318C47.5516 53.6318 50.6734 48.8086 50.6734 44.9918C50.6734 44.1634 50.3451 43.6234 49.9116 43.6234H49.9177Z"
                      fill="#4956F3"
                    />
                    <path
                      d="M69.6457 0C68.444 0 65.4647 0.650455 62.2686 1.98205C59.4689 3.1725 58.1619 4.03159 58.1619 5.51045C58.1619 6.33886 58.9238 6.66409 59.5432 6.98932C60.6705 7.35136 61.3209 8.24727 61.3209 9.83045C61.3209 13.862 55.0339 37.3643 55.0339 45.538C55.0339 50.7232 57.8708 53.4539 61.6492 53.4539C66.592 53.4539 69.243 49.2443 69.243 46.1823C69.243 45.2127 68.8776 45.0286 68.6236 45.0286C67.645 45.0286 67.1309 47.0414 65.6815 47.0414C64.6657 47.0414 63.8295 46.1025 63.8295 43.9118C63.8295 35.5234 71.4233 6.98318 71.4233 1.73045C71.4233 0.54 70.6986 0 69.6457 0Z"
                      fill="#4956F3"
                    />
                    <path
                      d="M84.3565 37.7202C92.13 37.1434 105.794 33.9034 105.794 24.7296C105.794 19.7959 101.799 15.8748 94.7129 15.8748C82.6531 15.8748 73.3125 26.9939 73.3125 38.6591C73.3125 47.4034 78.6146 53.7055 87.5897 53.7055C98.4912 53.7055 104.63 44.7096 104.63 40.4264C104.63 39.5611 104.264 39.1684 103.793 39.1684C103.323 39.1684 102.994 39.598 102.486 40.1012C100.597 42.3348 97.2524 46.7223 91.2938 46.7223C85.3351 46.7223 83.3344 41.7887 83.3344 39.1991C83.3344 38.0455 83.6256 37.7939 84.3503 37.7264L84.3565 37.7202ZM82.9009 32.4307C82.9009 27.3191 87.695 20.5139 93.2201 20.5139C96.3419 20.5139 97.8347 22.7107 97.8347 25.1959C97.8347 31.5287 87.3358 33.8359 83.8485 33.8359C83.0495 33.8359 82.9009 33.2959 82.9009 32.4307Z"
                      fill="#4956F3"
                    />
                    <path
                      d="M122.76 1.00638C119.018 1.00638 115.711 4.42433 115.711 7.81161C115.711 9.97161 117.092 11.8064 119.96 11.8064C123.41 11.8064 127.225 8.99592 127.225 5.28956C127.225 2.76751 125.411 1.00638 122.76 1.00638Z"
                      fill="#4956F3"
                    />
                    <path
                      d="M124.209 45.0286C123.23 45.0286 122.648 47.0414 121.192 47.0414C120.177 47.0414 119.303 46.0718 119.303 43.5129C119.303 36.6402 124.605 21.3054 124.605 17.5991C124.605 16.4086 123.949 15.8686 122.859 15.8686C121.657 15.8686 119.334 16.3718 115.667 17.7402C113.016 18.7098 111.27 19.6118 111.27 21.3423C111.27 22.1707 111.994 22.6002 112.614 22.8518C113.778 23.177 114.354 24.0054 114.354 25.1529C114.354 28.1413 110.464 39.1193 110.464 45.4152C110.464 50.6004 113.369 53.4416 117.222 53.4416C122.233 53.4416 124.816 49.232 124.816 46.17C124.816 45.2004 124.45 45.0163 124.197 45.0163L124.209 45.0286Z"
                      fill="#4956F3"
                    />
                    <path
                      d="M165.517 45.0286C164.575 45.0286 164.061 47.0414 162.612 47.0414C161.739 47.0414 161.156 46.035 161.156 44.3414C161.156 40.3466 162.791 31.7066 164.098 25.4843C164.823 21.9559 165.734 19.2191 165.734 18.5748C165.734 17.4211 165.263 16.74 164.39 16.74C162.358 16.74 157.923 21.9927 157.304 21.9927C156.684 21.9927 154.578 15.8748 147.387 15.8748C138.337 15.8748 129.294 25.5948 129.294 40.0643C129.294 47.9802 133.401 53.6318 140.45 53.6318C145.355 53.6318 148.589 51.0055 150.986 48.4834C151.673 47.7655 151.933 47.3666 152.218 47.3666C152.472 47.3666 152.584 47.833 152.726 48.4098C153.054 51.1834 155.235 53.4477 158.214 53.4477C163.157 53.4477 166.136 49.2382 166.136 46.1761C166.136 45.2066 165.771 45.0225 165.517 45.0225V45.0286ZM144.699 47.4771C140.629 47.4771 138.635 43.9118 138.635 38.3707C138.635 28.2948 144.011 20.9127 149.059 20.9127C152.001 20.9127 154.473 23.5391 154.473 29.5159C154.473 40.4202 149.753 47.4771 144.699 47.4771Z"
                      fill="#4956F3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_193_732">
                      <rect width="166" height="54" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              {/* Desktop Navigation Buttons */}
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="/waitlist"
                  className="kleia-btn-primary flex items-center justify-center h-14 px-6 font-bold text-base text-white no-underline min-w-[160px]"
                >
                  Get early access
                </a>
                <button className="flex items-center justify-center h-14 px-6 border-2 border-kleia-primary text-kleia-primary font-bold text-base rounded-lg hover:bg-kleia-primary hover:text-white transition-all min-w-[160px]">
                  Back to i'm solutions
                </button>
              </div>

              {/* Mobile Hamburger Menu - Fixed centering */}
              <button
                className={`md:hidden relative w-6 h-6 ${mobileMenuOpen ? "hamburger-open" : ""}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-6 space-y-4">
                <a
                  href="/waitlist"
                  className="kleia-btn-primary w-full h-14 text-base font-bold flex items-center justify-center text-white no-underline"
                >
                  Get early access
                </a>
                <button className="w-full h-14 border-2 border-kleia-primary text-kleia-primary font-bold text-base rounded-lg hover:bg-kleia-primary hover:text-white transition-all">
                  Back to i'm solutions
                </button>
              </div>
            )}
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="hidden md:block kleia-card mx-4 lg:mx-[156px] px-4 py-4">
            <div className="flex justify-center items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-6 py-2 rounded-full transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? "nav-item-active"
                      : "hover:bg-kleia-bg-secondary"
                  }`}
                >
                  <span className="font-bold text-base text-kleia-text-primary">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Tabs */}
          {mobileMenuOpen && (
            <div className="md:hidden kleia-card mx-4 px-4 py-4 mt-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? "nav-item-active"
                        : "hover:bg-kleia-bg-secondary"
                    }`}
                  >
                    <span className="font-bold text-base text-kleia-text-primary">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="px-4 md:px-6 lg:px-[156px] py-8 lg:py-16 mt-20 md:mt-40 lg:mt-40">
          <div className="kleia-card px-8 md:px-16 lg:px-24 py-8 lg:py-16 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="font-gelica text-2xl md:text-4xl lg:text-6xl xl:text-7xl leading-tight text-kleia-text-primary tracking-tight">
                Because supporting your clients starts with a tool that supports
                you.
              </h1>
              <a
                href="/waitlist"
                className="kleia-btn-primary h-14 px-8 md:px-16 text-lg font-bold inline-flex items-center justify-center text-white no-underline transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105"
              >
                Get early access
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0487c93cc50f3d278ae7e6ca7f0177671694d8b3?width=1488"
              alt="Healthy food bowl with avocado and vegetables"
              className="w-full max-w-2xl lg:max-w-4xl h-auto object-cover rounded-3xl"
            />
          </div>
        </section>

        {/* What is Kleia Section */}
        <section
          id="what-is-kleia"
          className="section-anchor px-4 md:px-6 lg:px-[156px] py-8"
        >
          <div className="kleia-card px-8 md:px-16 lg:px-24 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9647a1d066efe18a7a2b1e941b6fab46c857a5b3?width=720"
                  alt="Professional nutritionist working"
                  className="w-full max-w-sm md:max-w-md lg:max-w-none h-auto object-contain rounded-3xl"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="font-gelica text-3xl md:text-4xl lg:text-5xl text-center lg:text-left text-kleia-text-primary">
                  What is kleia?
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-kleia-text-primary">
                  <p>
                    Our mission is to make healthy living a natural part of
                    daily life — powered by tools that feel personal, intuitive,
                    and deeply human.
                  </p>
                  <p>
                    We imagine a future where nutritionists no longer have to
                    adapt to technology. Just as their plans adapt to their
                    clients, Kleia adapts to them.
                  </p>
                  <p>
                    It's more than a platform — Kleia is the digital extension
                    of every expert committed to delivering care that's both
                    scalable and heartfelt.
                  </p>
                  <p>
                    By making the experience simple for clients and seamless for
                    professionals, we help embed health into daily life — not as
                    a task, but as a way of being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Feels So Hard Right Now Section */}
        <section
          id="why-it-feels-hard"
          className="section-anchor px-4 md:px-6 lg:px-[156px] py-8"
        >
          <div className="kleia-card px-8 md:px-16 lg:px-24 py-8 lg:py-16">
            <h2 className="font-gelica text-3xl md:text-4xl lg:text-5xl text-center text-kleia-text-primary mb-8">
              Why It Feels So Hard Right Now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "🕒 Wasted Time",
                  description:
                    "Repetitive admin eats up hours every week — hours that should go into helping clients, not fighting with systems.",
                },
                {
                  title: "🍽️ Messy Meal Planning",
                  description:
                    "Manually editing every plan is exhausting. It takes time, mental energy, and often breaks your focus.",
                },
                {
                  title: "📈 Hard to Grow Without Chaos",
                  description:
                    "Taking on more clients sounds great — until the back-end becomes unmanageable, and hiring help feels out of reach.",
                },
                {
                  title: "📉 Scaling Feels Like Losing Yourself",
                  description:
                    "Growth often means giving up the personal touch… or working late nights just to keep up. (spoiler: not anymore)",
                },
                {
                  title: "📬 Too Many Channels, Not Enough Flow",
                  description:
                    "Between chats, emails, and scattered files, it's easy to miss things — and hard to stay on top of it all.",
                },
                {
                  title: "�� Data's Everywhere, Insights Are Nowhere",
                  description:
                    "Client progress lives in multiple tools and formats. It's tough to track, and even harder to act on with clarity.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-kleia-bg-secondary p-6 rounded-2xl text-center space-y-2"
                >
                  <h3 className="font-bold text-base text-kleia-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-kleia-text-primary">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Let's Fix That, Together Section with Stacking Cards */}
        <section
          id="lets-fix-that"
          className="section-anchor px-4 md:px-6 lg:px-[156px] py-8"
        >
          <div className="kleia-card px-8 md:px-16 lg:px-24 py-8 lg:py-16">
            <h2 className="stacking-section-title font-gelica text-3xl md:text-4xl lg:text-5xl text-center text-kleia-text-primary">
              Let's Fix That, Together
            </h2>

            {/* Stacking Cards Container */}
            <div className="stacking-cards">
              {/* Feature 1 */}
              <div className="stacking-card p-4 md:p-8 lg:p-12 shadow-lg">
                <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
                  <div className="bg-kleia-bg-secondary p-4 md:p-8 rounded-2xl space-y-2 md:space-y-4">
                    <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-kleia-text-primary">
                      ✅ Create meal plans from scratch or AI-assisted.
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-kleia-text-primary">
                      Start from scratch or let Kleia's AI support you — not
                      replace you. Build personalized nutrition plans in
                      minutes. Plans feel natural, because they come from you —
                      just faster.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/eef37096753fa7f465f2caf2844561967ef49688?width=912"
                      alt="Meal planning interface"
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="stacking-card p-4 md:p-8 lg:p-12 shadow-lg">
                <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
                  <div className="order-2 lg:order-1">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/8705817a8ffbe493d2be7c5f17bef21ed071f2f5?width=910"
                      alt="Analytics dashboard"
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                  <div className="order-1 lg:order-2 bg-kleia-bg-secondary p-4 md:p-8 rounded-2xl space-y-2 md:space-y-4">
                    <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-kleia-text-primary">
                      📊 See the story behind the numbers
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-kleia-text-primary">
                      All your client's metrics — from weight to mood — in one
                      clear, human dashboard. You don't just see data. You feel
                      their progress, spot what matters, and act at the right
                      moment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="stacking-card p-4 md:p-8 lg:p-12 shadow-lg">
                <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
                  <div className="bg-kleia-bg-secondary p-4 md:p-8 rounded-2xl space-y-2 md:space-y-4">
                    <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-kleia-text-primary">
                      💬 Chat like a human, not a helpline
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-kleia-text-primary">
                      Boundaried, focused communication that feels personal, not
                      overwhelming. You stay connected without staying on-call.
                      Clients feel heard. You stay sane.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/a0f124bb0df86f7174abb452d8f0fc9b1690a5da?width=912"
                      alt="Chat interface"
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="stacking-card p-4 md:p-8 lg:p-12 shadow-lg">
                <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
                  <div className="order-2 lg:order-1">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/8c4f5b60c8af96fe428875a0717fba1d5df87bb5?width=910"
                      alt="Grocery list interface"
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                  <div className="order-1 lg:order-2 bg-kleia-bg-secondary p-4 md:p-8 rounded-2xl space-y-2 md:space-y-4">
                    <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-kleia-text-primary">
                      🛒 Grocery lists that actually move people forward
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-kleia-text-primary">
                      Every plan comes with editable, AI-powered lists — plus
                      smart ingredient swaps your clients can use instantly. No
                      back-and-forth. No delays. Just clarity and action.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="stacking-card p-4 md:p-8 lg:p-12 shadow-lg">
                <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
                  <div className="bg-kleia-bg-secondary p-4 md:p-8 rounded-2xl space-y-2 md:space-y-4">
                    <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-kleia-text-primary">
                      📅 Your Day, Organized Right
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-kleia-text-primary">
                      See your week or month at a glance, hop into video calls
                      directly from Kleia, and stay on track with a smart to-do
                      list built around real priorities — not noise.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/a0f124bb0df86f7174abb452d8f0fc9b1690a5da?width=912"
                      alt="Calendar interface"
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 md:px-6 lg:px-[156px] py-8 pb-24 md:pb-8 text-center">
          <div className="space-y-6 mb-12 md:mb-0">
            <h3 className="font-bold text-xl md:text-2xl text-kleia-text-primary max-w-2xl mx-auto">
              Built with care by i'm solutions – a team focused on making
              software that feels human.
            </h3>
            <a
              href="/waitlist"
              className="kleia-btn-primary h-14 px-8 md:px-16 text-lg font-bold mb-16 md:mb-0 inline-flex items-center justify-center text-white no-underline transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105"
            >
              Get early access
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
