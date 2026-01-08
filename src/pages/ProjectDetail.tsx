import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Sparkles } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { projectsData } from "@/data/projects";

export const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.slug === slug);

  const handleBackToProjects = () => {
    navigate('/');
    // Wait for navigation to complete, then scroll to projects
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const offset = 80;
        const elementPosition = projectsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={`${project.title} - Dara Mustafa`}
        description={project.description}
        keywords={`${project.technologies.join(', ')}, portfolio project`}
      />
      <Navigation />
      
      <main className="relative z-[5] pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={handleBackToProjects}
            className="mb-8 hover:bg-primary/20 hover:text-white active:bg-primary/30 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Projects
          </Button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className={project.status === "Production" ? "bg-gradient-primary" : "bg-accent/20 text-accent"}>
                {project.status}
              </Badge>
              <Badge variant="outline" className="gap-1">
                {project.type === "AI/ML" ? <Sparkles className="w-3 h-3" /> : <Tag className="w-3 h-3" />}
                {project.type}
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.demo && (
                <Button 
                  asChild
                  className="bg-gradient-primary hover:shadow-glow-primary"
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.github && (
                <Button 
                  asChild
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 w-4 h-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Main Project Image */}
          <div className="mb-12 rounded-xl overflow-hidden border border-border shadow-elegant">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Technologies */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-primary" />
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="text-sm py-1 px-3 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Project Info
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground">Status:</span> {project.status}
                </div>
                <div>
                  <span className="font-semibold text-foreground">Type:</span> {project.type}
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Long Description */}
          {project.longDescription && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">About This Project</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </div>
          )}

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div 
                    key={index}
                    className="rounded-lg overflow-hidden border border-border shadow-elegant hover:shadow-glow-primary/20 transition-all group"
                  >
                    <img 
                      src={screenshot} 
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Interested in this project?</h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out if you'd like to know more or discuss similar projects.
            </p>
            <Button 
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="bg-gradient-primary hover:shadow-glow-primary"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
