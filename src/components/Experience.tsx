import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    company: "Algorithmic International School",
    position: "Programming Instructor",
    period: "August 2025 – Present",
    location: "Duhok, Iraq",
    type: "Part-time",
    achievements: [
      "Taught courses in Artificial Intelligence (AI), Frontend Development, and Digital Literacy",
      "Designed and delivered structured lesson plans combining theory with hands-on projects",
      "Mentored students individually and in groups on programming fundamentals",
      "Delivered Python programming courses from beginner to advanced levels",
      "Guided students through Game Development projects and modern technologies"
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
      "Built scalable web applications with 95% specification alignment",
      "Optimized application performance and reliability across multiple projects",
      "Collaborated effectively in agile development teams",
      "Delivered high-quality solutions within tight deadlines"
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
      "Enhanced application usability through strategic API integration",
      "Successfully delivered all sprint goals on schedule",
      "Implemented responsive design patterns for mobile-first applications",
      "Collaborated with cross-functional teams to define technical requirements"
    ],
    technologies: ["React", "PHP", "MySQL", "REST APIs", "CSS3"],
    current: false
  },
  {
    company: "Zeronex Agency",
    position: "Junior Software Developer",
    period: "December 2021 – January 2024",
    location: "Duhok, Iraq",
    type: "Full-time",
    achievements: [
      "Maintained and enhanced legacy systems for improved stability",
      "Implemented performance optimizations resulting in 30% faster load times",
      "Contributed to scalability improvements across multiple client projects",
      "Mentored new team members on best practices and coding standards"
    ],
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL", "jQuery"],
    current: false
  },
  {
    company: "Robotics and AI Club",
    position: "Lead Programming Intern",
    period: "April 2021 – November 2021",
    location: "University of Duhok",
    type: "Internship",
    achievements: [
      "Developed robotics control software with 25% efficiency improvement",
      "Debugged real-time machine learning algorithms for autonomous systems",
      "Led a team of 5 junior developers on robotics projects",
      "Presented technical solutions to academic supervisors and industry partners"
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