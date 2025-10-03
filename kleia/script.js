// Estado global
let mobileMenuOpen = false;
let activeSection = "";

// Función para alternar el menú móvil
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNavTabs = document.getElementById("mobile-nav-tabs");
  const hamburger = document.querySelector(".mobile-hamburger");
  
  if (mobileMenuOpen) {
    mobileMenu.style.display = "block";
    mobileNavTabs.style.display = "block";
    
    // Animación de entrada
    mobileMenu.style.animation = "slideDown 0.3s ease forwards";
    mobileNavTabs.style.animation = "slideDown 0.3s ease forwards";
    hamburger.classList.add("open");
  } else {
    // Animación de salida antes de ocultar
    mobileMenu.style.animation = "slideUp 0.3s ease forwards";
    mobileNavTabs.style.animation = "slideUp 0.3s ease forwards";
    hamburger.classList.remove("open");
    
    // Ocultar después de la animación
    setTimeout(() => {
      mobileMenu.style.display = "none";
      mobileNavTabs.style.display = "none";
    }, 300);
  }
}

// Función para cerrar el menú móvil
function closeMobileMenu() {
  if (mobileMenuOpen) {
    mobileMenuOpen = false;
    
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileNavTabs = document.getElementById("mobile-nav-tabs");
    const hamburger = document.querySelector(".mobile-hamburger");
    
    mobileMenu.style.animation = "slideUp 0.3s ease forwards";
    mobileNavTabs.style.animation = "slideUp 0.3s ease forwards";
    hamburger.classList.remove("open");
    
    setTimeout(() => {
      mobileMenu.style.display = "none";
      mobileNavTabs.style.display = "none";
    }, 300);
  }
}

// Función para navegar a una sección
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  closeMobileMenu();
}

// Función para ir al inicio
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMobileMenu();
}

// Función para actualizar la sección activa
function updateActiveSection() {
  const sections = ["what-is-kleia", "why-it-feels-hard", "lets-fix-that"];
  const scrollPosition = window.scrollY + 300; // Offset aumentado

  // Verificar si estamos en el área hero (primera sección no alcanzada aún)
  const firstSection = document.getElementById(sections[0]);
  if (firstSection && scrollPosition < firstSection.offsetTop) {
    setActiveSection(""); // No hay sección activa en el área hero
    return;
  }

  // Verificar en qué sección estamos
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && scrollPosition >= section.offsetTop) {
      setActiveSection(sections[i]);
      break;
    }
  }
}

// Función para establecer la sección activa
function setActiveSection(sectionId) {
  if (activeSection === sectionId) return; // No cambiar si es la misma

  activeSection = sectionId;

  // Actualizar tabs de escritorio
  const desktopTabs = document.querySelectorAll(".nav-tab");
  desktopTabs.forEach((tab) => {
    const tabSection = tab.getAttribute("data-section");
    if (tabSection === sectionId) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  // Actualizar tabs móviles
  const mobileTabs = document.querySelectorAll(".mobile-nav-tab");
  mobileTabs.forEach((tab) => {
    const tabSection = tab.getAttribute("data-section");
    if (tabSection === sectionId) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

// Función para manejar el scroll
function handleScroll() {
  updateActiveSection();
}

// Función para manejar el resize de la ventana
function handleResize() {
  // Cerrar menú móvil si la ventana se hace más grande
  if (window.innerWidth >= 768 && mobileMenuOpen) {
    closeMobileMenu();
  }
}

// Función para inicializar eventos
function initializeEvents() {
  // Event listener para scroll
  window.addEventListener("scroll", handleScroll);

  // Event listener para resize
  window.addEventListener("resize", handleResize);

  // Event listeners para los botones de navegación desktop
  const desktopTabs = document.querySelectorAll(".nav-tab");
  desktopTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const sectionId = tab.getAttribute("data-section");
      scrollToSection(sectionId);
    });
  });

  // Event listeners para los botones de navegación móvil
  const mobileTabs = document.querySelectorAll(".mobile-nav-tab");
  mobileTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const sectionId = tab.getAttribute("data-section");
      scrollToSection(sectionId);
    });
  });

  // Event listener para el logo
  const logo = document.querySelector(".logo-clickable");
  if (logo) {
    logo.addEventListener("click", scrollToTop);
  }
}

// Configurar cierre al hacer clic fuera del menú
function setupCloseMenuOnClickOutside() {
  document.addEventListener("click", (e) => {
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileNavTabs = document.getElementById("mobile-nav-tabs");
    const hamburger = document.querySelector(".mobile-hamburger");
    
    if (
      mobileMenuOpen &&
      !e.target.closest(".mobile-hamburger") &&
      !e.target.closest("#mobile-menu") &&
      !e.target.closest("#mobile-nav-tabs")
    ) {
      closeMobileMenu();
    }
  });
}

// Función para efectos de scroll suave en las cartas apiladas
function initializeStackingCards() {
  const stackingCards = document.querySelectorAll(".stacking-card");

  // Configurar el Intersection Observer para las cartas apiladas
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -20% 0px",
    threshold: [0, 0.1, 0.5, 0.9, 1],
  };

  const stackingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const card = entry.target;
      const ratio = entry.intersectionRatio;

      // Agregar clase de animación basada en visibilidad
      if (ratio > 0.1) {
        card.classList.add("in-view");
      } else {
        card.classList.remove("in-view");
      }
    });
  }, observerOptions);

  // Observar todas las cartas apiladas
  stackingCards.forEach((card) => {
    stackingObserver.observe(card);
  });
}

// Función para inicializar efectos de parallax suave
function initializeParallax() {
  // Parallax deshabilitado para mantener la imagen del hero fija
  // La imagen del hero debe permanecer en su posición original
}

// Función para animaciones de entrada
function initializeAnimations() {
  // Configurar el Intersection Observer para animaciones de entrada
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observar elementos que necesitan animación
  const animatedElements = document.querySelectorAll(
    ".feature-card, .section-image, .hero-card",
  );
  animatedElements.forEach((element) => {
    animationObserver.observe(element);
  });
}

// Función para optimizar el rendimiento del scroll
function optimizeScrollPerformance() {
  let ticking = false;

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateActiveSection);
      ticking = true;
    }
  }

  function finishTick() {
    ticking = false;
  }

  // Sobrescribir el event listener de scroll con uno optimizado
  window.removeEventListener("scroll", handleScroll);
  window.addEventListener(
    "scroll",
    () => {
      requestTick();
      setTimeout(finishTick, 100);
    },
    { passive: true },
  );
}

// Función para inyectar estilos de animación
function injectAnimationStyles() {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideDown {
      from { 
        opacity: 0; 
        transform: translateY(-20px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
    
    @keyframes slideUp {
      from { 
        opacity: 1; 
        transform: translateY(0); 
      }
      to { 
        opacity: 0; 
        transform: translateY(-20px); 
      }
    }
    
    .mobile-menu, .mobile-nav-tabs {
      display: none;
      opacity: 0;
    }
    
    .feature-card {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    .feature-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .section-image {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .section-image.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero-card {
        opacity: 0;
        transform: translateY(40px);
        transition: all 1s ease;
    }
    
    .hero-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .stacking-card.in-view {
        transform: scale(1) translateY(0);
    }
    
    /* Smooth transitions para navegación */
    .nav-tab, .mobile-nav-tab {
        transition: all 0.3s ease;
    }
    
    /* Mejoras para dispositivos móviles */
    @media (max-width: 768px) {
        .mobile-menu {
            animation: slideDown 0.3s ease;
        }
        
        .mobile-nav-tabs {
            animation: slideDown 0.3s ease;
        }
    }
  `;
  document.head.appendChild(style);
}

// Función para manejar errores de JavaScript
function handleErrors() {
  window.addEventListener("error", (e) => {
    console.error("Error de JavaScript:", e.error);
    // En producción, podrías enviar esto a un servicio de logging
  });
}

// Función principal de inicialización
function initialize() {
  // Ejecutar cuando el DOM esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initializeEvents();
      initializeStackingCards();
      initializeParallax();
      initializeAnimations();
      optimizeScrollPerformance();
      injectAnimationStyles();
      setupCloseMenuOnClickOutside();

      // Establecer el estado inicial
      updateActiveSection();
    });
  } else {
    // DOM ya está listo
    initializeEvents();
    initializeStackingCards();
    initializeParallax();
    initializeAnimations();
    optimizeScrollPerformance();
    injectAnimationStyles();
    setupCloseMenuOnClickOutside();

    // Establecer el estado inicial
    updateActiveSection();
  }
}

// Configurar manejo de errores
handleErrors();

// Inicializar la aplicación
initialize();

// Exponer funciones globales para uso desde HTML
window.scrollToSection = scrollToSection;
window.scrollToTop = scrollToTop;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;