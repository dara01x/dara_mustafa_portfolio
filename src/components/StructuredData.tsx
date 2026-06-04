import { useEffect } from 'react';

export const StructuredData = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dara Mustafa Saleem",
      "url": "https://daramustafa.me",
      "image": "https://daramustafa.me/og%20image.png",
      "jobTitle": "Lead Software Developer",
      "description": "Software Developer with 6+ years of experience building production-grade web applications and AI-powered systems.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Duhok",
        "addressCountry": "Iraq"
      },
      "email": "Daramistefa30@gmail.com",
      "telephone": "+964 750 192 0671",
      "sameAs": [
        "https://github.com/dara01x",
        "https://www.linkedin.com/in/dara01/"
      ],
      "knowsAbout": [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Supabase",
        "PyTorch",
        "OpenCV",
        "Scikit-learn",
        "AI",
        "Computer Vision",
        "Full Stack Development",
        "Frontend Development",
        "Backend Development",
        "Web Development"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Vonex Labs"
      }
    };

    // Remove existing structured data script if it exists
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};

export default StructuredData;
