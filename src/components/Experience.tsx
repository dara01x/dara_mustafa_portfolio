import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    company: "Algorithmic International School",
    position: "Programming Instructor",
    period: "September 2025 – Present",
    location: "Duhok, Iraq",
    type: "Part-time",
    achievements: [
      "I teach Visual Programming, Python, and Frontend Development through project-based learning",
      "I mentor students to build problem-solving, coding, and creativity skills."
    ],
    technologies: ["Python", "AI/ML", "React", "JavaScript", "Game Development", "Digital Literacy"],
    current: true
  },
  {
    company: "Saziware Company",
    position: "Software Developer",
    period: "July 2024 – Present",
    location: "Duhok, Iraq",
    type: "Full-time",
    achievements: [
      "Built and maintained scalable web apps, improving reliability and performance.",
      "Translated UI/UX designs into functional interfaces with 92% accuracy."
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"],
    current: true
  },
  {
    company: "Lelav Company",
    position: "Full-Stack Web Developer",
    period: "February 2024 – June 2024",
    location: "Duhok, Iraq",
    type: "Internship",
    achievements: [
      "Enhanced usability by delivering new features and seamless API integrations.",
      "Achieved 100% of sprint goals, contributing to on-time product releases."
    ],
    technologies: ["React", "PHP", "MySQL", "REST APIs", "CSS3"],
    current: false
  },
  {
    company: "Zeronex Agency",
    position: "Junior Software Developer",
    period: "December 2020 – December 2023",
    location: "Duhok, Iraq",
    type: "Full-time",
    achievements: [
      "Maintained and modernized legacy systems, ensuring continuous stability.",
      "Implemented performance upgrades that improved scalability and reduced downtime."
    ],
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL", "jQuery"],
    current: false
  },
  {
    company: "Robotics and AI Club",
    position: "Robotics & AI Engineering Intern",
    period: "April 2020 – November 2020",
    location: "University of Duhok",
    type: "Internship",
    achievements: [
      "Built custom control software, boosting robotics task execution by 25%.",
      "Debugged and optimized machine learning algorithms in real-time team projects."
    ],
    technologies: ["Python", "OpenCV", "Scikit-learn", "C++", "Arduino"],
    current: false
  }
];

export const Experience = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card/80 relative z-[1]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              My journey from intern to senior developer, building scalable solutions across various industries
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3 sm:left-4 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-cyan"></div>

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3 sm:left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-primary rounded-full border-2 sm:border-4 border-background flex items-center justify-center z-10">
                    {exp.current && (
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-foreground rounded-full animate-pulse"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 sm:ml-16 lg:ml-0 ${
                    index % 2 === 0 ? 'lg:mr-8 lg:ml-0' : 'lg:ml-8 lg:mr-0'
                  } lg:w-1/2`}>
                    <Card className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary/20 group">
                      <CardContent className="p-4 sm:p-6">
                        {/* Header */}
                        <div className="mb-3 sm:mb-4">
                          <div className="flex items-start justify-between mb-2 gap-2">
                            <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                              {exp.position}
                            </h3>
                            {exp.current && (
                              <Badge className="bg-gradient-primary text-primary-foreground text-xs flex-shrink-0">
                                Current
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2 mb-2">
                            <Building className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                            <span className="text-accent font-semibold text-sm sm:text-base">{exp.company}</span>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                              <span>{exp.location}</span>
                            </div>
                            <Badge variant="outline" className="text-xs self-start">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-3 sm:mb-4">
                          <ul className="space-y-1.5 sm:space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/80">
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <span className="leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge 
                              key={i}
                              variant="secondary"
                              className="text-xs bg-secondary/50 hover:bg-secondary transition-colors px-2 py-1"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;