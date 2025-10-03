<!-- Footer -->
    <footer>
      <style>
        .footer-animate {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(.4, 0, .2, 1),
            transform 0.8s cubic-bezier(.4, 0, .2, 1);
        }
        .footer-animate.visible {
          opacity: 1;
          transform: none;
        }
        .linkedin-link .linkedin-icon rect {
          transition: fill 0.3s;
        }
        .linkedin-link:hover .linkedin-icon rect {
          fill: #000;
        }
        .linkedin-link:hover .linkedin-icon path {
          stroke: #fff;
        }
        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #222;
          border-radius: 8px;
          transition: background 0.3s;
        }
        .social-link:hover {
          background: #fff;
        }
        .social-link .social-img {
          width: 28px;
          height: 28px;
          display: block;
          transition: filter 0.3s;
          filter: brightness(0) invert(1); /* icono blanco */
        }
        .social-link:hover .social-img {
          filter: brightness(0) invert(0); /* icono negro */
        }
      </style>
      <div class="container">
        <div class="footer-content footer-animate">
          <!-- Logo and Company Info -->
          <div class="footer-section footer-animate">
            <div class="logo" onclick="scrollToTop()">
              <svg
                width="120"
                height="96"
                viewBox="0 0 168 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
                </g>
                <defs>
                  <clipPath id="clip0_footer">
                    <rect width="168" height="135" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p class="footer-tagline">
              Digital Solutions with Attitude, Resilience & Vision
            </p>
            <p class="footer-description">
              Building meaningful solutions for real-world problems.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="footer-section footer-animate">
            <h4>Quick Links</h4>
            <nav>
              <a href="#projects" onclick="scrollToSection('projects')"
                >Our Projects</a
              >
              <a href="#about" onclick="scrollToSection('about')">About Us</a>
              <a href="#contact" onclick="scrollToSection('contact')"
                >Contact</a
              >
            </nav>
          </div>

          <!-- Contact Info -->
          <div class="footer-section footer-animate">
            <h4>Get in Touch</h4>
            <div class="contact-info">
              <a href="mailto:hello@imsolutions.studio" class="email-link">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                hello@imsolutions.studio
              </a>
              <p class="location">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23S3 17 3 10C3 6.68629 5.68629 4 9 4H15C18.3137 4 21 6.68629 21 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                Based in Bulgaria & Spain
              </p>
            </div>
          </div>

          <!-- Social Media -->
          <div class="footer-section footer-animate">
            <h4>Connect With Us</h4>
            <div class="social-links">
              <a href="https://www.instagram.com/im.solutions_?igsh=M2RkYm5qYTM3eGJi" class="social-link" aria-label="Instagram" title="Instagram I'm Solutions" target="_blank" rel="noopener">
                <img src="/img/instagram.svg" alt="Instagram" class="social-img" />
              </a>
              <a href="https://www.tiktok.com/@im.solutions?_t=ZN-8zhVObxki18&_r=1" class="social-link" aria-label="TikTok" title="TikTok I'm Solutions" target="_blank" rel="noopener">
                <img src="/img/tik-tok.svg" alt="TikTok" class="social-img" />
              </a>
              <a href="https://www.linkedin.com/company/i%E2%80%99m-solutions/" class="social-link" aria-label="LinkedIn" title="LinkedIn I'm Solutions" target="_blank" rel="noopener">
                <img src="/img/linkedin.svg" alt="LinkedIn" class="social-img" />
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="footer-bottom footer-animate">
          <div class="footer-bottom-left">
            <p>© 2025 i'm solutions. All rights reserved.</p>
            <p class="footer-subtitle">Made with ❤️ by Ivelina & Mario</p>
          </div>
          <div class="footer-links">
            <a href="privacy-policy.php" style="color:#fff;">Privacy Policy</a>
            <span class="separator" style="color:#fff;">•</span>
            <a href="terms-of-service.php" style="color:#fff;">Terms of Service</a>
          </div>
        </div>
      </div>
      <script>
        // Animación de aparición al hacer scroll
        document.addEventListener('DOMContentLoaded', function() {
          const elements = document.querySelectorAll('.footer-animate');
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
    </footer>
