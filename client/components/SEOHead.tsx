import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEOHead = ({
  title = "i'm solutions | Digital Solutions with Attitude, Resilience & Vision",
  description = "We build meaningful digital solutions focused on real-world problems. Currently developing an innovative platform for nutrition professionals. Founded by Ivelina & Mario.",
  keywords = "digital solutions, app development, nutrition software, startup, Ivelina, Mario, i'm solutions, technology, innovation",
  ogImage = "https://api.builder.io/api/v1/image/assets/TEMP/aeb6591aa0992e0f1a119dda4e425d95261e1f24",
  canonicalUrl = "https://imsolutions.com/"
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:url" content={canonicalUrl} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEOHead;
