import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles, Eye } from "lucide-react";

const projects = [
  {
    title: "Face Recognition Attendance System",
    description: "AI-powered attendance tracking system using computer vision and machine learning. Features Flask dashboard for attendance management and real-time recognition.",
    image: "/project_images/What-Is-a-Facial-Recognition-Attendance-System-1024x576.webp",
    technologies: ["Python", "Flask", "OpenCV", "Scikit-learn", "HTML/CSS", "SQLite"],
    features: [
      "Real-time face recognition",
      "Automated attendance tracking",
      "Admin dashboard interface",
      "Machine learning algorithms"
    ],
    github: "https://github.com/dara01x/Face-Recognition-Based-Attendance-System",
    demo: null,
    type: "AI/ML",
    status: "Completed"
  },
  {
    title: "Brainwave – SaaS Landing Page",
    description: "Modern, animated SaaS homepage design with performance optimization and stunning visual effects. Built with React and enhanced with smooth animations.",
    image: "/project_images/brainwave.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    features: [
      "Modern SaaS design patterns",
      "Smooth scroll animations",
      "Fully responsive layout",
      "Performance optimized"
    ],
    github: "https://github.com/dara01x/Brainwave",
    demo: "https://brainwave-ecru-six.vercel.app/",
    type: "Frontend",
    status: "Completed"
  },
  {
    title: "Invonest – Professional Invoice Generator",
    description: "A free invoice generator supporting English, Arabic, and Kurdish with full RTL/LTR formatting.",
    image: "/project_images/invonest.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "jsPDF", "html2canvas"],
    features: [
      "Built a responsive web app with real-time preview, PDF export, and custom branding.",
      "Delivered multiple templates, dark/light mode, and one-click PDF download.",
      "Full RTL/LTR support for multiple languages",
      "Custom branding and professional templates"
    ],
    github: null,
    demo: "https://invonest.me/",
    type: "Full-Stack",
    status: "Completed"
  },
  {
    title: "Movie Search Engine",
    description: "Real-time movie search application with TMDB API integration. Features fast search with live suggestions and detailed movie information display.",
    image: "/project_images/full-page.png",
    technologies: ["React", "Tailwind CSS", "TMDB API", "JavaScript", "Axios"],
    features: [
      "Real-time movie search",
      "Live search suggestions",
      "Detailed movie information",
      "Responsive design"
    ],
    github: "https://github.com/dara01x/movie-search-engine",
    demo: null,
    type: "Frontend",
    status: "Completed"
  },
  {
    title: "Iraqi Jordanian Company",
    description: "A responsive and professional company website built for the Iraqi Jordanian Company. Designed and developed a modern WordPress website to represent the company's services and brand.",
    image: "/project_images/image.png",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "HTML"],
    features: [
      "Customized theme and UI for clean, professional experience",
      "Multilingual support implementation",
      "Performance and SEO optimization",
      "Full responsiveness across devices"
    ],
    github: null,
    demo: "https://iraqi-jordanian.com/",
    type: "Web Development",
    status: "Completed"
  },
  {
    title: "Business Lounge Cafe – Digital Menu Website",
    description: "More than coffee, it's where business happens. Built a modern, responsive website featuring a digital menu with an elegant design and interactive menu system.",
    image: "/project_images/menu.png",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    features: [
      "Interactive menu system for beverages, desserts, and hookah",
      "Sophisticated UI/UX for premium customer experience",
      "Mobile-first performance optimization",
      "Seamless navigation on all devices"
    ],
    github: null,
    demo: "https://dara01x.github.io/business-lounge-cafe-menu/",
    type: "Frontend",
    status: "Completed"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Production": return "bg-gradient-primary text-primary-foreground";
    case "Completed": return "bg-accent/20 text-accent";
    default: return "bg-secondary text-secondary-foreground";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "AI/ML": return <Sparkles className="w-4 h-4" />;
    default: return <Eye className="w-4 h-4" />;
  }
};

export const Projects = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card/80 relative z-[1]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              A showcase of my latest work in full-stack development, AI integration, and modern web applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary/20 group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-full h-48 bg-gradient-secondary/20 items-center justify-center hidden">
                    <div className="text-6xl opacity-20">🚀</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      {getTypeIcon(project.type)}
                      <span className="ml-1">{project.type}</span>
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4 sm:p-6">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-foreground/80 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-2" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge 
                        key={i}
                        variant="secondary" 
                        className="text-xs bg-secondary/50 hover:bg-secondary transition-colors px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="p-4 sm:p-6 pt-0 flex gap-2 sm:gap-3">
                  {project.demo ? (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-xs sm:text-sm"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      size="sm" 
                      disabled
                      className="flex-1 opacity-50 cursor-not-allowed text-xs sm:text-sm"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Demo Unavailable
                    </Button>
                  )}
                  
                  {project.github ? (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-border hover:border-primary hover:text-primary transition-all duration-300 text-xs sm:text-sm"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="outline"
                      disabled
                      className="flex-1 opacity-70 cursor-not-allowed border-muted text-muted-foreground hover:text-muted-foreground text-xs sm:text-sm"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      {project.title === "Business Lounge Cafe – Digital Menu Website" || project.title === "Invonest – Professional Invoice Generator" ? "Private Repository" : "Code Unavailable"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-10 sm:mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-6 sm:px-8 text-sm sm:text-base"
              asChild
            >
              <a href="https://github.com/dara01x?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;