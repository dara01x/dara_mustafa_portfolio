import { Card, CardContent } from "@/components/ui/card";
import { Code, Rocket, Users, Trophy } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "5+ Years Experience",
      description: "Delivering production-ready web apps, AI-powered tools, and scalable backend systems."
    },
    {
      icon: Rocket,
      title: "Full-Stack Expertise",
      description: "Proficient in JavaScript, TypeScript, Python, PHP, SQL, React, Node.js, Express.js, and databases."
    },
    {
      icon: Users,
      title: "Agile Development",
      description: "Experienced in collaborative, sprint-based development with clean code practices."
    },
    {
      icon: Trophy,
      title: "AI & Machine Learning",
      description: "Hands-on with computer vision, face recognition, and integrating AI models into real apps."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card/80 relative z-[1]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 mt-2">
              In this section, you'll discover more about my background, skills, and what drives my passion for software development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1">
                <div className="prose prose-invert max-w-none space-y-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {/* Main Description */}
                  <div className="relative bg-gradient-to-br from-card/90 to-muted/40 dark:from-card/50 dark:to-muted/20 rounded-xl p-6 border border-border/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-primary/5 rounded-xl"></div>
                    <p className="text-base sm:text-lg leading-relaxed text-muted-foreground relative z-10 font-normal" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      With <span className="text-primary font-bold">5+ years of experience</span> in software development, I specialize in:
                    </p>
                    
                    <div className="mt-4 space-y-3 relative z-10">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm sm:text-base  font-normal" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          Developing modern applications using <span className="text-accent font-bold ">JavaScript, TypeScript, Python, and PHP</span>
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm sm:text-base  font-normal" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          Building scalable web platforms with <span className="text-accent font-bold ">React, Node.js, Express.js, MongoDB, and PostgreSQL</span>
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm sm:text-base  font-normal" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          Integrating <span className="text-primary font-bold ">AI/ML solutions</span> such as computer vision and face recognition into real-world projects
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm sm:text-base  font-normal" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          Designing and deploying <span className="text-primary font-bold ">API-driven systems</span> and cloud-integrated applications
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm sm:text-base  font-normal" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          Creating seamless frontend experiences with <span className="text-primary font-bold ">React, Tailwind CSS, and Framer Motion</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              
              {/* Education */}
              <div className="bg-gradient-secondary/10 rounded-lg p-4 sm:p-6 border border-accent/20 mx-2 sm:mx-0">
                <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2">Education</h3>
                <p className="text-sm sm:text-base text-foreground/80">
                  <strong>B.Sc. Electrical & Computer Engineering</strong><br />
                  University of Duhok, 2024
                </p>
              </div>
              
              {/* Languages */}
              <div className="bg-gradient-primary/10 rounded-lg p-4 sm:p-6 border border-primary/20 mx-2 sm:mx-0">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs sm:text-sm">Kurdish (Native)</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs sm:text-sm">English (Fluent)</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs sm:text-sm">Arabic (Fluent)</span>
                </div>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary/20 group"
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-glow-primary transition-all duration-300">
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;