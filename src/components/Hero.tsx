import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Terminal, Zap, Coffee, Laptop, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { MatrixRain } from "@/components/MatrixRain";
import { LazyImage } from "@/components/LazyImage";
import heroImage from "@/assets/hero-bg.jpg";
import resumePdf from "@/assets/Dara_Mustafa_Resume.pdf";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navigation bar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Dara_Mustafa_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20 lg:pt-0 transition-colors duration-300">
      {/* Matrix Rain Background - Lowest Layer */}
      <div className="absolute inset-0 z-[1]">
        <MatrixRain />
      </div>
      
      {/* Hero Background Image - Middle Layer */}
      <div className="absolute inset-0 z-[2]">
        <LazyImage
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover opacity-15"
          loading="eager"
        />
      </div>
      
      {/* Gradient Overlay - Upper Middle Layer */}
      <div className="absolute inset-0 bg-gradient-hero z-[3]" style={{ opacity: 0.8 }} />
      
      {/* Light Mode Enhancement Overlay */}
      <div className="absolute inset-0 z-[3.5] bg-background/30 dark:bg-transparent transition-colors duration-300" />
      
      {/* Animated Background Elements - Above Gradient */}
      <div className="absolute inset-0 z-[4]">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-float transition-colors duration-300" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl animate-float transition-colors duration-300" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-cyan/10 dark:bg-cyan/5 rounded-full blur-3xl animate-float transition-colors duration-300" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[10]">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Text Content (First on mobile, left on desktop) */}
          <div className="order-1 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="animate-fade-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Dara Mustafa
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mt-2">
                  Full Stack Developer
                </h2>
              </div>
              
              <div className="animate-fade-up space-y-4" style={{ animationDelay: "0.2s" }}>
                
                <p className="text-sm sm:text-lg text-muted-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                    Creating digital solutions with modern web technologies, AI integration, and cloud-native architectures.
Passionate about building scalable applications and solve real-world problems.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2 min-w-0">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="truncate">+964 750 192 0671</span>
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="truncate">Daramistefa30@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse flex-shrink-0" />
                  <span>Duhok, Iraq</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="default"
                onClick={() => scrollToSection("#projects")}
                className="relative overflow-hidden bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg font-normal rounded-xl border-0 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button 
                size="default"
                variant="ghost"
                onClick={downloadResume}
                className="relative overflow-hidden bg-card/70 dark:bg-card/50 backdrop-blur-sm border border-primary/40 dark:border-primary/30 text-primary hover:text-white hover:bg-primary/20 dark:hover:bg-primary/10 hover:border-primary hover:shadow-lg transition-all duration-300 group px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg font-normal rounded-xl hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center transition-colors duration-300">
                  <Download className="mr-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:-translate-y-1" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 dark:from-primary/5 to-accent/10 dark:to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <a 
                href="https://github.com/dara01x" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 border border-border/60 dark:border-border rounded-full flex items-center justify-center hover:border-primary hover:shadow-glow-primary transition-all duration-300 group bg-card/50 dark:bg-transparent backdrop-blur-sm"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dara01/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 border border-border/60 dark:border-border rounded-full flex items-center justify-center hover:border-primary hover:shadow-glow-primary transition-all duration-300 group bg-card/50 dark:bg-transparent backdrop-blur-sm"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
              <a 
                href="mailto:Daramistefa30@gmail.com" 
                className="w-10 h-10 sm:w-12 sm:h-12 border border-border/60 dark:border-border rounded-full flex items-center justify-center hover:border-primary hover:shadow-glow-primary transition-all duration-300 group bg-card/50 dark:bg-transparent backdrop-blur-sm"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Right Side - Coding Visual (Second on mobile, right on desktop) */}
          <div className="order-2 lg:order-2 relative animate-fade-up w-full max-w-xs sm:max-w-sm lg:max-w-none mx-auto lg:mx-0 scale-50 sm:scale-65 lg:scale-100 mb-8 sm:mb-12 lg:mb-0" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main Terminal Window */}
              <div className="bg-card/90 dark:bg-card border border-border/50 dark:border-border rounded-2xl shadow-elegant backdrop-blur-sm transition-colors duration-300 overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-muted/80 dark:bg-muted px-4 py-3 border-b border-border/50 dark:border-border transition-colors duration-300">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Terminal className="w-4 h-4 text-muted-foreground transition-colors duration-300" />
                      <span className="text-sm font-mono text-muted-foreground transition-colors duration-300">terminal</span>
                    </div>
                  </div>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm bg-gradient-to-br from-card/90 to-muted/40 dark:from-card dark:to-muted/20 transition-colors duration-300">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-accent">$</span>
                      <span className="text-primary">npm create</span>
                      <span className="text-foreground">portfolio</span>
                    </div>
                    <div className="text-muted-foreground pl-4">
                      <div>✓ Initializing creative workspace...</div>
                      <div>✓ Loading imagination modules...</div>
                      <div className="flex items-center gap-2 mt-1">
                        <Zap className="w-3 h-3 text-yellow-500" />
                        <span>✓ Ready to build amazing things!</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">$</span>
                      <span className="text-cyan">git add . && git commit -m "feat: another masterpiece"</span>
                    </div>
                    <div className="text-green-500 dark:text-green-400 pl-4 transition-colors duration-300">
                      ✓ Innovation committed successfully
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">$</span>
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Code Snippets */}
              <div className="absolute -top-4 -right-4 bg-primary/20 dark:bg-primary/10 backdrop-blur-sm border border-primary/30 dark:border-primary/20 rounded-lg p-3 animate-float transition-colors duration-300">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-accent/20 dark:bg-accent/10 backdrop-blur-sm border border-accent/30 dark:border-accent/20 rounded-lg p-3 animate-float transition-colors duration-300" style={{ animationDelay: "1s" }}>
                <Laptop className="w-6 h-6 text-accent" />
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-cyan/20 dark:bg-cyan/10 backdrop-blur-sm border border-cyan/30 dark:border-cyan/20 rounded-lg p-3 animate-float transition-colors duration-300" style={{ animationDelay: "2s" }}>
                <Coffee className="w-6 h-6 text-cyan" />
              </div>

              {/* Background Code Pattern */}
              
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1 transition-colors duration-300">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};