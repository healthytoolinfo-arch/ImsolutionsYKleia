import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = "Kleia - AI-Powered Nutrition Platform for Health Professionals",
  description = "Transform your nutrition practice with Kleia's AI-powered tools. Create personalized meal plans, track client progress, and scale your business without losing the personal touch.",
  keywords = "nutrition software, meal planning, nutritionist tools, AI nutrition, health coaching platform, dietitian software, client management, nutrition tracking",
  image = "https://api.builder.io/api/v1/image/assets/TEMP/0487c93cc50f3d278ae7e6ca7f0177671694d8b3?width=1200",
  url = "https://kleia.app/",
  type = "website"
}: SEOProps) {
  
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    
    // Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', url, true);
    
  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything
}
