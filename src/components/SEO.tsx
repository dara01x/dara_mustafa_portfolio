import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const SEO = ({
  title = "Dara Mustafa Saleem — Software Developer in Duhok, Kurdistan, Iraq | Full-Stack & AI",
  description = "Dara Mustafa Saleem is a software developer based in Duhok, Kurdistan Region of Iraq, with 6+ years of experience building web applications and AI-powered systems. Available for freelance and full-time projects locally and internationally.",
  keywords = "Dara Mustafa Saleem, programmer Duhok, software developer Duhok, developer Kurdistan, web developer Iraq, full stack developer Duhok, AI developer Kurdistan, React developer Duhok, freelance developer Kurdistan, programmer Erbil, software developer Erbil, web developer Erbil, developer Erbil Kurdistan, React developer Erbil, AI developer Erbil, programmer Iraq, software developer Iraq, web developer Iraq, AI engineer Iraq, full stack developer Iraq, software engineer Iraq, tech developer Iraq, programmer Sulaymaniyah, software developer Sulaymaniyah, developer Kurdistan Region, full stack developer Kurdistan, AI developer Kurdistan Region, software engineer Kurdistan, freelance developer Iraq, hire programmer Kurdistan, hire developer Iraq, best programmer Kurdistan, best developer Iraq, best programmer Duhok, best developer Duhok, Next.js, TypeScript, JavaScript, Python, Node.js, Express.js, PostgreSQL, MongoDB, Firebase, Supabase, PyTorch, OpenCV, Computer Vision, Duhok Iraq, Kurdistan Region, Erbil Iraq, Sulaymaniyah Iraq, Iraq tech, Kurdistan tech",
  ogImage = "/og%20image.png",
  canonicalUrl = "https://daramustafa.me/"
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
