import { Card, CardContent } from "@/components/ui/card";
import { 
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,
  SiMysql,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiOpencv,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiOpenai,
  SiMapbox,
  SiGit,
  SiDocker,
  SiPostman,
  SiWordpress,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiVite,
  SiWebpack
} from "react-icons/si";
import { Code, Database, Brain, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "primary",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" }
    ]
  },
  {
    title: "Frontend Development",
    icon: Code,
    color: "accent",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "shadcn/ui", icon: SiReact, color: "#FFFFFF" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" }
    ]
  },
  {
    title: "Backend Development",
    icon: Code,
    color: "cyan",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    color: "primary",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" }
    ]
  },
  {
    title: "AI/ML & Computer Vision",
    icon: Brain,
    color: "accent",
    skills: [
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "OpenAI", icon: SiOpenai, color: "#412991" }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Code,
    color: "cyan",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Mapbox GL", icon: SiMapbox, color: "#4264FB" },
      { name: "WordPress", icon: SiWordpress, color: "#21759B" }
    ]
  },
  {
    title: "Design Tools",
    icon: Palette,
    color: "primary",
    skills: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
      { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" }
    ]
  },
  
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return {
        border: "border-primary/20",
        hover: "hover:border-primary/50",
        shadow: "hover:shadow-glow-primary/10",
        bg: "bg-card/50"
      };
    case "accent":
      return {
        border: "border-accent/20",
        hover: "hover:border-accent/50",
        shadow: "hover:shadow-glow-accent/10",
        bg: "bg-card/50"
      };
    case "cyan":
      return {
        border: "border-cyan/20",
        hover: "hover:border-cyan/50",
        shadow: "hover:shadow-glow-primary/10",
        bg: "bg-card/50"
      };
    default:
      return {
        border: "border-primary/20",
        hover: "hover:border-primary/50",
        shadow: "hover:shadow-glow-primary/10",
        bg: "bg-card/50"
      };
  }
};

export const Skills = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card/80 relative z-[1]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Technologies and tools I work with to build modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6 sm:gap-8">
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              
              return (
                <Card 
                  key={index}
                  className={`${colors.bg} border-2 ${colors.border} ${colors.hover} transition-all duration-300 ${colors.shadow} group backdrop-blur-sm shadow-elegant rounded-2xl bg-gradient-to-br from-card/90 to-muted/20 dark:from-card/70 dark:to-muted/10`}
                >
                  <CardContent className="p-6 sm:p-8 lg:p-10">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow-primary/30 transition-all duration-300 shadow-lg">
                        <category.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills Icons Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 lg:gap-6">
                      {category.skills.map((skill, skillIndex) => (
                        <Card
                          key={skillIndex} 
                          className="group/skill bg-background/60 dark:bg-background/30 border border-border/60 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary/20 cursor-default backdrop-blur-sm aspect-square"
                        >
                          <CardContent className="flex flex-col items-center justify-center gap-2 p-3 sm:p-4 h-full">
                            <div className="relative flex-shrink-0">
                              <skill.icon 
                                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-all duration-300 group-hover/skill:scale-110 drop-shadow-sm" 
                                style={{ color: skill.color }}
                              />
                              <div 
                                className="absolute inset-0 rounded-lg opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300 blur-md"
                                style={{ backgroundColor: skill.color }}
                              />
                            </div>
                            <span className="text-xs sm:text-xs lg:text-sm font-medium text-center text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300 leading-tight">
                              {skill.name}
                            </span>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 sm:mt-20 bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-2 sm:space-y-3">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center space-y-2 sm:space-y-3">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  30+
                </div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center space-y-2 sm:space-y-3">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;