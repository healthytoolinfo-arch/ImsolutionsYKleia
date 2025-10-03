<!doctype html>
<html lang="en">
  <head>
     <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="/img/favicon.png"/>
    <title>
      i'm solutions (im solutions) | Digital Solutions with Attitude, Resilience & Vision
    </title>
    <meta
      name="description"
      content="We build meaningful digital solutions focused on real-world problems. im solutions (i'm solutions) is currently developing an innovative platform for nutrition professionals. Founded by Ivelina & Mario in Spain."
    />
    <meta
      name="keywords"
      content="digital solutions, app development, nutrition software, startup, Ivelina, Mario, i'm solutions, im solutions, technology, innovation, Spain, nutrition app, digital platform"
    />
    <link rel="canonical" href="https://imsolutions.studio/" />

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-CWMRZMK854"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CWMRZMK854');
    </script>

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://imsolutions.studio/" />
    <meta
      property="og:title"
      content="i'm solutions (im solutions) | Digital Solutions with Attitude, Resilience & Vision"
    />
    <meta
      property="og:description"
      content="Construimos soluciones digitales significativas enfocadas en problemas del mundo real. im solutions (i'm solutions) es nuestro nombre alternativo."
    />
    <meta
      property="og:image"
      content="img/hero.png"
    />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://imsolutions.studio/" />
    <meta
      property="twitter:title"
      content="i'm solutions (im solutions) | Digital Solutions with Attitude, Resilience & Vision"
    />
    <meta
      property="twitter:description"
      content="Construimos soluciones digitales significativas enfocadas en problemas del mundo real. im solutions (i'm solutions) es nuestro nombre alternativo."
    />
    <meta
      property="twitter:image"
      content="img/hero.png"
    />

    <!-- Fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Gill+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family:
          "Gill Sans",
          -apple-system,
          Roboto,
          Helvetica,
          sans-serif;
        background-color: #fffffc;
        color: #1d1d1b;
        line-height: 1.6;
      }

      .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 16px;
      }

      /* Header */
      .header {
        position: sticky;
        top: 0;
        background-color: #fffffc;
        z-index: 1000;
        padding: 32px 0 16px;
        border-bottom: 1px solid transparent;
      }

      .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        cursor: pointer;
      }

      .logo svg {
        width: 128px;
        height: auto;
        transition: opacity 0.3s;
      }
      @media (max-width: 600px) {
        .logo svg {
          width: 56px;
        }
      }

      .logo:hover svg {
        opacity: 0.7;
      }

      /* Desktop Navigation */
      .desktop-nav {
        display: none;
        gap: 64px;
        align-items: center;
      }

      .desktop-nav a {
        font-family: "Gill Sans", sans-serif;
        font-size: 20px;
        color: #1d1d1b;
        text-decoration: none;
        transition: opacity 0.3s;
        position: relative;
      }

      .desktop-nav a:hover {
        opacity: 0.7;
      }

      .desktop-nav a.active::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #1d1d1b;
      }

      /* Mobile Menu Button */
      .mobile-menu-btn {
        display: flex;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
        width: 32px;
        height: 32px;
        justify-content: center;
        align-items: center;
        position: relative;
      }

      .mobile-menu-btn span {
        display: block;
        width: 18px;
        height: 2px;
        background-color: #1d1d1b;
        transition: all 0.3s ease;
        position: absolute;
      }

      .mobile-menu-btn span:nth-child(1) {
        top: 8px;
      }

      .mobile-menu-btn span:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
      }

      .mobile-menu-btn span:nth-child(3) {
        bottom: 8px;
      }

      /* Hamburger to X animation */
      .mobile-menu-btn.active span:nth-child(1) {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      }

      .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
      }

      .mobile-menu-btn.active span:nth-child(3) {
        bottom: 50%;
        transform: translateY(50%) rotate(-45deg);
      }

      /* Mobile Menu */
      .mobile-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #fffffc;
        border-top: 1px solid #eee;
        padding: 32px 0;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .mobile-menu.active {
        display: block;
      }

      .mobile-menu nav {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 0 24px;
      }

      .mobile-menu nav a {
        font-family: "Gill Sans", sans-serif;
        font-size: 20px;
        color: #1d1d1b;
        text-decoration: none;
        transition: opacity 0.3s;
      }

      .mobile-menu nav a:hover {
        opacity: 0.7;
      }

      /* Subrayado activo igual en desktop y móvil/tablet */
      nav a.active {
        color: #1d1d1b;
        font-weight: bold;
        position: relative;
        background: none;
        border-radius: 0;
        box-shadow: none;
        padding-left: 0;
        padding-right: 0;
      }
      nav a.active::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -8px;
        height: 2px;
        background-color: #1d1d1b;
        border-radius: 1px;
      }
      @media (max-width: 1023px) {
        .mobile-menu nav a.active::after {
          bottom: -6px;
        }
      }

      /* Hero Section */
      .hero {
        padding: 32px 0 64px;
      }

      .hero-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
      }

      .hero-text {
        flex: 1;
      }

      .hero h1 {
        font-family: "Gill Sans", sans-serif;
        font-weight: bold;
        font-size: 40px;
        line-height: 1.2;
        letter-spacing: -1.2px;
        margin-bottom: 24px;
      }

      .hero-button {
        width: 100%;
        max-width: 320px;
        padding: 16px 32px;
        background-color: #1d1d1b;
        color: white;
        border: none;
        border-radius: 8px;
        font-family: "Inter", sans-serif;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s;
      }

      .hero-button:hover {
        background-color: #333;
        transform: scale(1.05);
      }

      .hero-image {
        flex: 1;
        text-align: center;
      }

      .hero-image img {
        width: 100%;
        height: auto;
        max-width: 400px;
        border-radius: 16px;
      }

      /* Sections */
      .section {
        padding: 64px 0;
        overflow: hidden;
      }

      .section h2 {
        font-family: "Gill Sans", sans-serif;
        font-weight: bold;
        font-size: 36px;
        line-height: 1.2;
        letter-spacing: -0.96px;
        text-align: center;
        margin-bottom: 64px;
      }

      .section-content {
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;
        justify-content: center;
      }

      .section-text {
        flex: 1;
        max-width: 600px;
      }

      .section-text h3 {
        font-family: "Gill Sans", sans-serif;
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 16px;
      }

      .section-image {
        flex: 1;
        text-align: center;
        width: 100%;
        max-width: 100%;
        display: flex;
        justify-content: center;
      }

      .section-image img {
        width: 100%;
        height: auto;
        max-width: 400px;
        border-radius: 16px;
      }

      .section p {
        margin-bottom: 16px;
        line-height: 1.4;
        letter-spacing: -0.48px;
      }

      /* Prevent all images from overflowing */
      img {
        max-width: 100%;
        height: auto;
        display: block;
      }

      /* Projects second image styling */
      .projects-second-image {
        text-align: center;
        margin-top: 64px;
        width: 100%;
      }

      .projects-second-image img {
        width: 100%;
        max-width: 500px;
        height: auto;
      }

      /* Contact section specific styling */
      .contact-section {
        gap: 48px !important;
      }

      .contact-image {
        order: -1;
      }

      /* Mobile/tablet: stack vertically, center images */
      @media (max-width: 1023px) {
        .section-image,
        .contact-image {
          display: flex;
          justify-content: center;
          margin: 0 auto;
        }

        .projects-second-image {
          display: flex;
          justify-content: center;
        }

        /* Hero button full width en móvil/tablet */
        .hero-button {
          width: 100%;
          max-width: none;
          display: block;
        }
      }

      /* Hero Section - Desktop: imagen más grande */
      @media (min-width: 1024px) {
        .hero-content {
          flex-direction: row;
          gap: 128px;
        }
        .hero-image img {
          max-width: 600px;
        }
      }

      /* Contact Section - Desktop: imagen a la derecha, centrada verticalmente, form a la izquierda */
      @media (min-width: 1024px) {
        #contact .section-content {
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 64px;
        }
        .contact-form {
          order: 1;
          max-width: 480px;
          margin: 0;
        }
        .contact-image {
          order: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        .contact-image img {
          max-width: 420px;
          margin: 0 auto;
        }
      }

      /* Contact Form */
      .contact-form {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      }

      .form-group {
        margin-bottom: 32px;
      }

      .form-group label {
        display: block;
        font-family: "Inter", sans-serif;
        font-weight: bold;
        margin-bottom: 12px;
        font-size: 16px;
      }

      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 20px 24px;
        border: 1px solid #1d1d1b;
        border-radius: 8px;
        background: white;
        font-family: "Inter", sans-serif;
        font-size: 16px;
        color: #666;
        transition: all 0.3s;
        box-sizing: border-box;
      }

      .form-group input:focus,
      .form-group textarea:focus {
        outline: none;
        box-shadow: 0 0 0 2px #1d1d1b;
      }

      .form-group textarea {
        resize: none;
        height: 150px;
      }

      .submit-btn {
        width: 100%;
        padding: 20px 32px;
        background-color: #1d1d1b;
        color: white;
        border: none;
        border-radius: 8px;
        font-family: "Inter", sans-serif;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s;
      }

      .submit-btn:hover {
        background-color: #333;
        transform: scale(1.05);
      }

      /* Footer */
      footer {
        background: linear-gradient(135deg, #1d1d1b 0%, #2a2a2a 100%);
        color: white;
        padding: 64px 0 32px;
      }

      .footer-content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .footer-section h4 {
        font-family: "Gill Sans", sans-serif;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
        color: white;
      }

      .footer-tagline {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 8px;
        color: #f0f0f0;
      }

      .footer-description {
        font-size: 14px;
        color: #bbb;
        line-height: 1.5;
      }

      .footer-section nav {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .footer-section a {
        color: #ccc;
        text-decoration: none;
        transition: all 0.3s ease;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .footer-section a:hover {
        color: white;
        transform: translateX(4px);
      }

      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .email-link {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
      }

      .location {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #bbb;
        font-size: 14px;
      }

      .social-links {
        display: flex;
        gap: 16px;
        margin-bottom: 16px;
      }

      .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transition: all 0.3s ease;
      }

      .social-link:hover {
        background-color: white;
        color: #1d1d1b;
        transform: translateY(-2px);
      }

      .newsletter {
        font-size: 13px;
        color: #bbb;
        line-height: 1.4;
      }

      .footer-bottom {
        border-top: 1px solid #444;
        margin-top: 48px;
        padding-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }

      .footer-bottom-left p {
        margin: 0;
        font-size: 14px;
      }

      .footer-subtitle {
        color: #bbb;
        font-size: 12px;
        margin-top: 4px;
      }

      .footer-links {
        display: flex;
        gap: 16px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      .footer-links a {
        font-size: 13px;
      }

      .separator {
        color: #666;
        font-size: 12px;
      }

      /* Scroll animation */
      .scroll-animate {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1);
      }
      .scroll-animate.visible {
        opacity: 1;
        transform: none;
      }

      /* Desktop styles */
      @media (min-width: 1024px) {
        .container {
          padding: 0 64px;
        }

        .desktop-nav {
          display: flex;
        }

        .mobile-menu-btn {
          display: none;
        }

        .hero {
          padding: 64px 0 128px;
        }

        .hero-content {
          flex-direction: row;
          gap: 128px;
        }

        .hero h1 {
          font-size: 64px;
          letter-spacing: -2.4px;
        }

        .hero-text {
          text-align: left;
        }

        .hero-button {
          width: 100%;
        }

        .section {
          padding: 128px 0;
        }

        .section h2 {
          font-size: 56px;
          letter-spacing: -1.68px;
        }

        .section-content {
          flex-direction: row;
          gap: 64px;
          align-items: flex-start;
        }

        .section-text {
          max-width: 500px;
          text-align: left;
        }

        .section-image {
          max-width: 450px;
        }

        /* Desktop: centrar imágenes en About */
        #about .section-content {
          justify-content: center;
          align-items: center;
        }

        /* Desktop: mejorar Projects segunda imagen */
        .projects-second-image {
          display: flex;
          justify-content: center;
        }

        .projects-second-image img {
          max-width: 600px;
        }

        /* Desktop: Contact layout */
        #contact .section-content {
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 64px;
        }
        .contact-form {
          order: 1;
          max-width: 480px;
          margin: 0;
        }
        .contact-image {
          order: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        .contact-image img {
          max-width: 420px;
          margin: 0 auto;
        }

        .footer-content {
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        .footer-section:first-child {
          max-width: 350px;
        }

        .footer-bottom {
          flex-direction: row;
          justify-content: space-between;
          text-align: left;
          align-items: center;
        }

        .footer-bottom-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .social-links {
          margin-bottom: 12px;
        }
      }

      /* Success message styles */
      .success-message {
        background-color: #f0f9ff;
        border: 1px solid #3b82f6;
        color: #1e40af;
        padding: 16px;
        border-radius: 8px;
        margin-top: 16px;
        display: none;
      }

      .success-message.show {
        display: block;
      }
    </style>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I find im solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "im solutions (without apostrophe) is the same company as i'm solutions. You can search for either name to find us."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo puedo buscar im solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "im solutions (sin apóstrofe) es equivalente a i'm solutions. Puedes encontrarnos buscando cualquiera de los dos nombres."
          }
        }
      ]
    }
    </script>
  </head>
  <body>
    <?php include 'includes/header.php'; ?>
    <body>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content scroll-animate">
          <div class="hero-text">
            <h1>Because everything starts with believing you are. <br> Ready to build</h1>
            <button class="hero-button" onclick="scrollToContact()">
              Contact us
            </button>
          </div>
          <div class="hero-image">
            <img
              src="img/hero.png"
              alt="Team i'm solutions - Ivelina and Mario working on digital solutions and innovative app development"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="section" id="projects">
      <div class="container">
        <h2 class="scroll-animate">Projects</h2>
        <div class="section-content scroll-animate" style="align-items: center; background: #F6F8FC; border-radius: 24px; padding: 48px 32px; box-shadow: 0 2px 16px rgba(0,0,0,0.04);">
          <div class="section-image scroll-animate" style="display: flex; align-items: center; justify-content: center;">
            <img
              src="img/logo kleia.png"
              alt="Kleia logo - digital platform for nutritionists"
              style="max-width: 320px; border-radius: 0; background: none; box-shadow: none;"
            />
          </div>
          <div class="section-text scroll-animate" style="display: flex; flex-direction: column; justify-content: center; gap: 24px;">
            <div>
              <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 12px;">Kleia</h3>
              <p style="font-size: 20px; margin-bottom: 8px;">
                We are developing a tool designed to facilitate the daily life of nutrition professionals. An app focused on the organization, personalization and experience of both the nutritionist and the end customer.
              </p>
            </div>
            <button class="hero-button" style="align-self: flex-start; min-width: 140px;" onclick="window.location.href='https://imsolutions.studio/kleia'">
              See more
            </button>
          </div>
        </div>
        <!-- Imagen secundaria si se desea mantener -->
        <div class="projects-second-image scroll-animate">
          <img
            src="img/proyects.png"
            alt="Nutrition app interface design - user-friendly tool for nutritionist workflow and client management"
          />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section" id="about">
      <div class="container">
        <h2 class="scroll-animate">About us</h2>
        <div class="section-content scroll-animate">
          <div class="section-image scroll-animate">
            <img
              src="img/about.png"
              alt="About i'm solutions founders - Ivelina and Mario's entrepreneurial journey in digital innovation"
            />
          </div>
          <div class="section-text scroll-animate">
            <p>
              <strong
                >We are Ivelina and Mario, and this is i'm solutions.</strong
              >
            </p>
            <p>
              We met in a startup incubator, working on opposite projects but
              sharing the same energy: the desire to build something with
              impact. From the first moment we knew that someday we would work
              together. That "someday" came sooner than expected.
            </p>
            <p>
              Ivelina had an idea in her head, born from her experience with
              nutritionists: why wasn't there a really useful, human and
              effective tool for the daily work of these professionals? She told
              Mario about it. He didn't hesitate. That's where it all began.
            </p>
            <p>But it was not easy. In fact, it was quite the opposite.</p>
            <p>
              In the first months we faced block after block: ideas that didn't
              fit, functionalities we didn't know how to solve, uncomfortable
              silences after sending surveys... Until we made a decision that
              has marked everything we are as a team: focus on what we can do
              today, and leave for tomorrow what doesn't depend on us yet.
            </p>
            <p>
              Since then, we moved forward step by step, but without stopping.
            </p>
            <p>
              This is how our first app was born, designed for nutrition
              professionals: functional, flexible, forward-looking, and built
              from empathy with those who are going to use it. And so i'm
              solutions was also born, not as an agency or a studio, but as a
              company from which to launch products that are born from real
              life, from teamwork and from a very specific way of seeing the
              world: with attitude, resilience and vision.
            </p>
            <p><strong>Why "i'm"?</strong></p>
            <p>
              Because together we form the core of this project: Ivelina + Mario
              = i'm. And also because we believe in teams with identity, not
              only in products with a logo.
            </p>
            <p><strong>im solutions (sin apóstrofe) es equivalente a i'm solutions. Puedes encontrarnos buscando cualquiera de los dos nombres.</strong></p>
            <p>
              <strong
                >This is not just about apps. It's about how to build something
                worthwhile.</strong
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
<section class="section" id="contact">
  <div class="container">
    <h2 class="scroll-animate">Contact us</h2>
    <div class="section-content contact-section scroll-animate">
      <div class="contact-form scroll-animate">
        
        <!-- ================================
             FORMULARIO ORIGINAL (COMENTADO)
        <form id="contactForm" method="post" action="contact.php">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Rachel Joe"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Rachel@domain.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your query here....."
              required
            ></textarea>
          </div>
          <button type="submit" class="submit-btn">Contact us</button>
          <div id="successMessage" class="success-message">
            <strong>Message sent successfully! 🎉</strong><br />
            Thank you for contacting us! We'll get back to you soon.
          </div>
        </form>
        ================================== -->

        <!-- NUEVO: Tally Embed -->
        <iframe
          data-tally-src="https://tally.so/embed/mBvvde?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="484"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Contact Form"
        ></iframe>
        <script>
          var d=document,w="https://tally.so/widgets/embed.js",v=function(){
            "undefined"!=typeof Tally?Tally.loadEmbeds():
            d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){
              e.src=e.dataset.tallySrc
            })
          };
          if("undefined"!=typeof Tally)v();
          else if(d.querySelector('script[src="'+w+'"]')==null){
            var s=d.createElement("script");
            s.src=w;
            s.onload=v;
            s.onerror=v;
            d.body.appendChild(s);
          }
        </script>
      </div>

      <div class="section-image contact-image scroll-animate">
        <img
          src="img/contact.png"
          alt="Contact i'm solutions - Get in touch for digital solutions and app development projects"
        />
      </div>
    </div>
  </div>
</section>

   
    <script>
      // Mobile menu toggle
      function toggleMobileMenu() {
        const menu = document.getElementById("mobileMenu");
        const btn = document.querySelector(".mobile-menu-btn");
        menu.classList.toggle("active");
        btn.classList.toggle("active");
      }

      // Smooth scroll to contact
      function scrollToContact() {
        scrollToSection("contact");
      }

      // Scroll to section
      function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        const header = document.querySelector(".header");
        const headerHeight = header ? header.offsetHeight : 80;

        if (element) {
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - headerHeight - 20; // 20px extra margin

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }

        // Close mobile menu
        const menu = document.getElementById("mobileMenu");
        const btn = document.querySelector(".mobile-menu-btn");
        menu.classList.remove("active");
        btn.classList.remove("active");
      }

      // Scroll to top
      function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        // Close mobile menu if open
        const menu = document.getElementById("mobileMenu");
        const btn = document.querySelector(".mobile-menu-btn");
        menu.classList.remove("active");
        btn.classList.remove("active");
      }

      // --- ACTIVE SECTION HIGHLIGHTING ---
      window.addEventListener("scroll", function () {
        const sections = ["projects", "about", "contact"];
        const navLinks = document.querySelectorAll("nav a[href^='#']");
        const header = document.querySelector(".header");
        const headerHeight = header ? header.offsetHeight : 80;
        const isMobile = window.innerWidth < 1024;

        // Solo resaltar en móvil/tablet
        if (isMobile) {
          let foundActive = false;
          sections.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            const navLinksToSection = document.querySelectorAll(`.mobile-menu nav a[href='#${sectionId}']`);
            if (section && navLinksToSection.length) {
              const rect = section.getBoundingClientRect();
              const threshold = headerHeight + 50;
              if (!foundActive && rect.top <= threshold && rect.bottom >= threshold) {
                navLinks.forEach((link) => link.classList.remove("active"));
                navLinksToSection.forEach((link) => link.classList.add("active"));
                foundActive = true;
              }
            }
          });
          if (!foundActive) {
            navLinks.forEach((link) => link.classList.remove("active"));
          }
        }
      });

      // Al hacer click en un enlace del menú móvil, resalta solo ese
      document.querySelectorAll('.mobile-menu nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function() {
          document.querySelectorAll('.mobile-menu nav a').forEach(l => l.classList.remove('active'));
          this.classList.add('active');
        });
      });

      // Elimina el efecto hover/touch para evitar que se queden marcados por pasar el dedo
      // (solo click o scroll activa)
      // ...existing code...

      // Form submission handling
      document
//         .getElementById("contactForm")
//         .addEventListener("submit", function (e) {
//           e.preventDefault();
// 
//           // Simulate form submission
//           const formData = new FormData(this);
// 
//           // Here you would normally send the data to your PHP script
//           // For demo purposes, we'll just show the success message
// 
//           // Show success message
//           document.getElementById("successMessage").classList.add("show");
// 
//           // Reset form
//           this.reset();
// 
//           // Hide success message after 5 seconds
//           setTimeout(() => {
//             document.getElementById("successMessage").classList.remove("show");
//           }, 5000);
//         });

      // Language selector
      function changeLanguage(lang) {
        // This would redirect to different language versions
        if (lang === "en") {
          window.location.href = "index-en.html";
        } else if (lang === "bg") {
          window.location.href = "index-bg.html";
        }
      }

      // Animación de aparición al hacer scroll para elementos del index
      document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('.scroll-animate');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        elements.forEach(el => observer.observe(el));
      });
    </script>
  </body>
    <?php include 'includes/footer.php'; ?>
  </body>
</html>