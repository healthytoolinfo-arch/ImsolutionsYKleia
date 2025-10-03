import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "i'm solutions",
    "url": "https://imsolutions.com",
    "logo": "https://api.builder.io/api/v1/image/assets/TEMP/aeb6591aa0992e0f1a119dda4e425d95261e1f24",
    "description": "We build meaningful digital solutions focused on real-world problems. Currently developing an innovative platform for nutrition professionals.",
    "founder": [
      {
        "@type": "Person",
        "name": "Ivelina"
      },
      {
        "@type": "Person", 
        "name": "Mario"
      }
    ],
    "foundingLocation": {
      "@type": "Place",
      "name": "Spain / Bulgaria"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@imsolutions.studio",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://imsolutions.com"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "i'm solutions",
    "url": "https://imsolutions.com",
    "description": "Digital solutions with attitude, resilience and vision",
    "publisher": {
      "@type": "Organization",
      "name": "i'm solutions"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Digital platform for nutritionists",
    "description": "An innovative app designed to facilitate the daily life of nutrition professionals. Focused on organization, personalization and experience.",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InDevelopment"
    },
    "creator": {
      "@type": "Organization",
      "name": "i'm solutions"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(softwareApplicationSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
