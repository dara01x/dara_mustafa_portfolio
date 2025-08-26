import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const SEO = ({
  title = "Dara Mustafa Saleem - Full Stack Developer | React, TypeScript, Node.js",
  description = "Experienced Full Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies. Based in Duhok, Iraq. Available for freelance projects and full-time opportunities.",
  keywords = "Dara Mustafa, Full Stack Developer, React Developer, TypeScript, Node.js, JavaScript, Web Developer, Frontend, Backend, Duhok Iraq, Portfolio",
  ogImage = "/og%20image.png",
  canonicalUrl = "https://daramustafa.dev/"
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Update Open Graph image
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', `${canonicalUrl}${ogImage}`);
    }

    // Update Twitter title
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    // Update Twitter description
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    // Update Twitter image
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', `${canonicalUrl}${ogImage}`);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    }
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null; // This component doesn't render anything
};

export default SEO;
