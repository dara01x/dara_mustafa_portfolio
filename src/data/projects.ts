export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  screenshots?: string[];
  technologies: string[];
  features: string[];
  github: string | null;
  demo: string | null;
  type: string;
  status: string;
}

export const projectsData: Project[] = [
  {
    slug: "face-recognition-attendance-system",
    title: "Face Recognition Attendance System",
    description: "AI-powered attendance tracking system using computer vision and machine learning. Features Flask dashboard for attendance management and real-time recognition.",
    longDescription: "This comprehensive attendance management system leverages cutting-edge computer vision and machine learning technologies to automate the attendance tracking process. Built with Python and Flask, it provides real-time face recognition capabilities with high accuracy, making it ideal for educational institutions and corporate environments. The system includes an intuitive admin dashboard for managing attendance records, generating reports, and monitoring system performance.",
    image: "/project_images/What-Is-a-Facial-Recognition-Attendance-System-1024x576.webp",
    screenshots: [
      "/project_images/What-Is-a-Facial-Recognition-Attendance-System-1024x576.webp"
    ],
    technologies: ["Python", "Flask", "OpenCV", "Scikit-learn", "HTML/CSS", "SQLite"],
    features: [
      "Real-time face recognition with high accuracy",
      "Automated attendance tracking and reporting",
      "Admin dashboard for attendance management",
      "Machine learning algorithms for face detection",
      "SQLite database for data persistence",
      "Comprehensive attendance reports and analytics"
    ],
    github: "https://github.com/dara01x/Face-Recognition-Based-Attendance-System",
    demo: null,
    type: "AI/ML",
    status: "Completed"
  },
  {
    slug: "brainwave-saas-landing-page",
    title: "Brainwave – SaaS Landing Page",
    description: "Modern, animated SaaS homepage design with performance optimization and stunning visual effects. Built with React and enhanced with smooth animations.",
    longDescription: "Brainwave is a cutting-edge SaaS landing page that showcases modern web design principles and advanced animation techniques. Built with React and TypeScript, it features smooth scroll animations powered by Framer Motion, creating an engaging and immersive user experience. The project demonstrates best practices in responsive design, performance optimization, and component-based architecture.",
    image: "/project_images/brainwave.png",
    screenshots: [
      "/project_images/brainwave.png"
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    features: [
      "Modern SaaS design patterns and aesthetics",
      "Smooth scroll animations and transitions",
      "Fully responsive layout for all devices",
      "Performance optimized with code splitting",
      "Interactive UI components",
      "Clean and maintainable codebase"
    ],
    github: "https://github.com/dara01x/Brainwave",
    demo: "https://brainwave-ecru-six.vercel.app/",
    type: "Frontend",
    status: "Completed"
  },
  {
    slug: "invonest-invoice-generator",
    title: "Invonest – Professional Invoice Generator",
    description: "A free invoice generator supporting English, Arabic, and Kurdish with full RTL/LTR formatting.",
    longDescription: "Invonest is a comprehensive invoice generation platform designed to meet the needs of businesses operating in multilingual environments. Supporting English, Arabic, and Kurdish languages with complete RTL (Right-to-Left) and LTR (Left-to-Right) formatting, it provides a seamless experience for creating professional invoices. The application features real-time preview, multiple professional templates, custom branding options, and one-click PDF export functionality.",
    image: "/project_images/invonest.png",
    screenshots: [
      "/project_images/invonest.png"
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "jsPDF", "html2canvas"],
    features: [
      "Responsive web app with real-time preview",
      "PDF export with professional formatting",
      "Custom branding and logo support",
      "Multiple professional templates",
      "Full RTL/LTR support for multiple languages",
      "Dark/light mode support",
      "One-click PDF download"
    ],
    github: null,
    demo: "https://invonest.me/",
    type: "Full-Stack",
    status: "Production"
  },
  {
    slug: "ai-image-generator",
    title: "AI Image Generator",
    description: "A creative AI-powered image generation tool integrated with OpenAI API. Built with React and modern design principles.",
    longDescription: "This innovative AI-powered application harnesses the capabilities of OpenAI's image generation API to create stunning, unique images from text descriptions. Built with modern React and styled with Tailwind CSS, it provides an intuitive interface for users to experiment with AI-generated artwork. The application demonstrates seamless API integration, real-time image generation, and responsive design principles.",
    image: "/project_images/ai_image genrator.jpg",
    screenshots: [
      "/project_images/ai_image genrator.jpg"
    ],
    technologies: ["React", "OpenAI API", "Tailwind CSS", "JavaScript"],
    features: [
      "AI-powered image generation from text prompts",
      "Integration with OpenAI's image generation API",
      "Real-time image preview and generation",
      "Modern and intuitive user interface",
      "Responsive design for all devices",
      "Image download functionality"
    ],
    github: null,
    demo: "https://dara01x.github.io/text-to-image/",
    type: "AI/ML",
    status: "Completed"
  },
  {
    slug: "business-lounge-cafe-menu",
    title: "Business Lounge Café – Digital Menu",
    description: "An elegant digital menu for a premium café, featuring sections for beverages, desserts, and hookah options.",
    longDescription: "Designed for Business Lounge Café, this sophisticated digital menu provides an immersive browsing experience for customers. The application features an elegant, mobile-first design that showcases the café's premium offerings including beverages, desserts, and hookah options. Built with React and Tailwind CSS, it ensures seamless navigation and fast loading times across all devices, enhancing the customer experience with modern web technologies.",
    image: "/project_images/menu.png",
    screenshots: [
      "/project_images/menu.png",
      "/project_images/full-page.png"
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    features: [
      "Interactive menu system for beverages, desserts, and hookah",
      "Sophisticated UI/UX for premium customer experience",
      "Mobile-first performance optimization",
      "Seamless navigation on all devices",
      "Fast loading times with optimized assets",
      "Modern and elegant design aesthetic"
    ],
    github: null,
    demo: "https://dara01x.github.io/business-lounge-cafe-menu/",
    type: "Frontend",
    status: "Completed"
  }
];
