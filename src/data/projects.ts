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
    description: "A facial recognition system to automate attendance using computer vision.",
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
    slug: "kurdray-xray-detection",
    title: "KurdRay — Chest X-ray AI Diagnostics",
    description: "AI-driven X-ray diagnostics project that identifies 14 conditions with probability scoring.",
    longDescription: "KurdRay is an advanced medical AI application that leverages a powerful ensemble of two high-performing DenseNet-121 models to detect 14 thoracic conditions from chest X-ray images. The system combines a custom-trained DenseNet-121 model (AUC 0.84) with the renowned Arnoweng CheXNet variant (AUC 0.85) to achieve an impressive ensemble AUC of approximately 0.87. The application features a futuristic web interface that provides detailed per-model probability breakdowns and uses hybrid diagnostic logic for optimal accuracy. It can detect conditions including Pneumonia, Cardiomegaly, Atelectasis, and 11 other thoracic abnormalities, making it a valuable tool for medical professionals and researchers in radiological diagnosis.",
    image: "/project_cover_images/KurdRay.jpeg",
    screenshots: [
      "/project_images/x-ray/homepage.png",
      "/project_images/x-ray/analyzepage.png",
      "/project_images/x-ray/results1.png",
      "/project_images/x-ray/results2.png",
      "/project_images/x-ray/results3.png",
      "/project_images/x-ray/popupbox.png"
    ],
    technologies: ["Python", "DenseNet-121", "Deep Learning", "Flask", "Medical AI", "Computer Vision", "PyTorch"],
    features: [
      "Ensemble AI model combining two DenseNet-121 architectures for improved accuracy",
      "Detection of 14 thoracic conditions including Pneumonia, Cardiomegaly, and Atelectasis",
      "Per-model probability scores with final ensemble probability visualization",
      "Hybrid diagnostic logic with disease-specific tuned thresholds",
      "Support for multiple image formats (PNG, JPG, JPEG, DCM)",
      "Futuristic web-based interface for easy diagnosis review",
      "State-of-the-art ensemble AUC of approximately 0.87",
      "Detailed probability breakdowns for medical professionals"
    ],
    github: null,
    demo: "https://sahanova.framer.website/",
    type: "AI/ML",
    status: "Completed"
  },
  {
    slug: "hivi-hospital-management",
    title: "Hivi Hospital Management System",
    description: "Hospital system for patient care, rare diseases, inventory, and reporting.",
    longDescription: "Hivi Hospital Management System is a full-featured healthcare platform designed to revolutionize hospital operations and patient care. Built with React 18, TypeScript, and Firebase, it provides specialized management for rare diseases including Gaucher, Pompe, Fabry, and MPS variants I-VII. The system features an intuitive role-based interface with five user roles (Admin, Doctor, Nurse, Receptionist, Pharmacist), complete bilingual support (English/Arabic with RTL), and comprehensive patient management including medical history, visit tracking, and dose administration. Advanced features include automated doctor notifications for upcoming visits, detailed analytics dashboard, audit logs for complete system activity tracking, inventory management, and professional PDF report generation. The system implements HIPAA-ready architecture with Firebase Authentication and granular permission controls, making it ideal for hospitals managing complex treatment protocols and rare disease care.",
    image: "/project_images/hivi-hospital/homepage.png",
    screenshots: [
      "/project_images/hivi-hospital/homepage.png",
      "/project_images/hivi-hospital/patientpage.png",
      "/project_images/hivi-hospital/deses page.png",
      "/project_images/hivi-hospital/inventory.png",
      "/project_images/hivi-hospital/logs.png"
    ],
    technologies: ["React 18", "TypeScript", "Firebase", "Firestore", "Vite", "Tailwind CSS", "shadcn/ui", "Recharts", "React Router"],
    features: [
      "Complete patient management with medical history, imaging, and visit tracking",
      "Specialized rare disease protocols (Gaucher, Pompe, Fabry, MPS I-VII)",
      "Role-based access control with 5 user roles and granular permissions",
      "Automated doctor notifications with color-coded urgency (1-3 days)",
      "Bilingual support (English/Arabic) with full RTL layout",
      "Advanced analytics dashboard with real-time hospital operations data",
      "Complete audit logs system tracking all user activities",
      "Inventory management with low stock alerts and expiry tracking",
      "Professional PDF report generation and Excel export",
      "Medical image storage (X-Ray, MRI, CT, Ultrasound)"
    ],
    github: null,
    demo: "https://hivi-hospital-management.web.app/",
    type: "Full-Stack",
    status: "Production"
  },
  {
    slug: "fastaqar-portal-v2",
    title: "Fast Aqar",
    description: "Real estate portal for property/project management with Mapbox mapping.",
    longDescription: "Fast Aqar is a comprehensive real estate management system that combines modern web technologies with powerful backend services. Built with Next.js 16 and Firebase, it provides a complete solution for managing properties and real estate projects. The platform features an intuitive admin dashboard with role-based access control, interactive Mapbox GL integration for property visualization, and a public-facing browse interface for property discovery. The system includes automated image protection with watermarking, cloud functions for maintenance tasks, and dynamic configuration through app variables. This enterprise-grade solution is designed for real estate professionals who need robust property management tools with advanced mapping capabilities.",
    image: "/project_images/fastaqar/browse_page.png",
    screenshots: [
      "/project_images/fastaqar/browse_page.png",
      "/project_images/fastaqar/proprtypage1.png",
      "/project_images/fastaqar/proprtypage2.png",
      "/project_images/fastaqar/proprtypage3.png"
    ],
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "Firebase", "Firestore", "Mapbox GL", "React Map GL", "Formik", "Yup"],
    features: [
      "Comprehensive property CRUD operations with image uploads and watermarking",
      "Multi-property project management with phase handling",
      "Interactive Mapbox GL integration with drawing tools for property boundaries",
      "Role-based access control (Admin, Editor, Viewer) with Firebase Authentication",
      "Dynamic app variables for property types, amenities, and features",
      "Public browse interface for property and project discovery",
      "Automated image cleanup with Firebase Cloud Functions",
      "Advanced filtering and search capabilities"
    ],
    github: null,
    demo: null,
    type: "Full-Stack",
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
