import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles, Eye, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projectsData } from "@/data/projects";

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
  const navigate = useNavigate();

  const handleViewDetails = (slug: string) => {
    navigate(`/project/${slug}`);
    window.scrollTo(0, 0);
  };

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
            {projectsData.map((project, index) => (
              <Card 
                key={index}
                className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary/20 group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden cursor-pointer" onClick={() => handleViewDetails(project.slug)}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="bg-background/90 hover:bg-background">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="bg-background/90 backdrop-blur-sm gap-1">
                      {getTypeIcon(project.type)}
                      {project.type}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Project Title */}
                  <h3 
                    className="text-xl font-bold mb-3 line-clamp-1 cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleViewDetails(project.slug)}
                  >
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="text-xs border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge 
                        variant="outline" 
                        className="text-xs border-primary/30"
                      >
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button
                    onClick={() => handleViewDetails(project.slug)}
                    className="flex-1 bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="border-primary/50 hover:bg-primary/10"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  
                  {project.github && (
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="border-primary/50 hover:bg-primary/10"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
