import { Card } from "@/components/ui/card";

// SVG Components for major brand logos
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const MicrosoftLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="#F25022" d="M1 1h10v10H1z"/>
    <path fill="#00A4EF" d="M13 1h10v10H13z"/>
    <path fill="#7FBA00" d="M1 13h10v10H1z"/>
    <path fill="#FFB900" d="M13 13h10v10H13z"/>
  </svg>
);

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const AmazonLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="currentColor" d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.29-.13.187-.088.375-.075.56.04.184.114.184.222 0 .325-.65.299-1.326.584-2.028.855-3.14 1.132-6.458 1.698-9.954 1.698a27.617 27.617 0 0 1-6.585-.792c-1.435-.347-2.786-.82-4.051-1.42-.24-.116-.31-.138-.31-.207 0-.07.024-.127.073-.185l.024-.024zM17.735 15.24c-.34-.4-.896-.2-1.396.6-.5.8-.6 1.6-.2 2 .4.4.996.2 1.496-.6.5-.8.5-1.6.1-2z"/>
    <path fill="#FF9900" d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.29-.13.187-.088.375-.075.56.04.184.114.184.222 0 .325-.65.299-1.326.584-2.028.855-3.14 1.132-6.458 1.698-9.954 1.698a27.617 27.617 0 0 1-6.585-.792c-1.435-.347-2.786-.82-4.051-1.42-.24-.116-.31-.138-.31-.207 0-.07.024-.127.073-.185l.024-.024z"/>
  </svg>
);

const NikeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="currentColor" d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.456 0-2.19-.647-2.19-1.647 0-.462.185-.925.555-1.387.925-1.234 3.668-2.497 8.23-3.668L24 7.8z"/>
  </svg>
);

const CocaColaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="#ED1C16" d="M8.2 24c-.896 0-1.701-.224-2.414-.672-.713-.448-1.288-1.064-1.725-1.848-.437-.784-.656-1.661-.656-2.632 0-.971.219-1.848.656-2.632.437-.784 1.012-1.4 1.725-1.848.713-.448 1.518-.672 2.414-.672s1.701.224 2.414.672c.713.448 1.288 1.064 1.725 1.848.437.784.656 1.661.656 2.632 0 .971-.219 1.848-.656 2.632-.437.784-1.012 1.4-1.725 1.848-.713.448-1.518.672-2.414.672z"/>
    <path fill="#ED1C16" d="M15.8 24c-.896 0-1.701-.224-2.414-.672-.713-.448-1.288-1.064-1.725-1.848-.437-.784-.656-1.661-.656-2.632 0-.971.219-1.848.656-2.632.437-.784 1.012-1.4 1.725-1.848.713-.448 1.518-.672 2.414-.672s1.701.224 2.414.672c.713.448 1.288 1.064 1.725 1.848.437.784.656 1.661.656 2.632 0 .971-.219 1.848-.656 2.632-.437.784-1.012 1.4-1.725 1.848-.713.448-1.518.672-2.414.672z"/>
  </svg>
);

const SamsungLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="#1428A0" d="M2 6h20v12H2z"/>
    <path fill="white" d="M4.5 8.5h3v1h-2v1h1.5v1h-1.5v1h2v1h-3v-5zm4.5 0h1.5l1 2.5 1-2.5h1.5l-1.5 3.5v1.5h-1v-1.5l-1.5-3.5zm6 0h3v1h-2v1h1.5v1h-1.5v1h2v1h-3v-5zm4.5 0h3v1h-2v4h-1v-5z"/>
  </svg>
);

const IBMLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="#1F70C1" d="M0 9.5h4.6v1.1H0zm5.1 0h6.7v1.1H5.1zm7.2 0h6.7v1.1h-6.7zm7.2 0H24v1.1h-4.5zM0 11.4h4.6v1.1H0zm5.1 0h6.7v1.1H5.1zm7.2 0h6.7v1.1h-6.7zm7.2 0H24v1.1h-4.5zM0 13.3h4.6v1.1H0zm5.1 0h6.7v1.1H5.1zm7.2 0h6.7v1.1h-6.7zm7.2 0H24v1.1h-4.5z"/>
    <path fill="#1F70C1" d="M0 7.6h4.6v1.1H0zm7.7 0h3.8v1.1H7.7zm5.1 0h3.8v1.1h-3.8zm5.1 0H24v1.1h-6.1zM0 15.2h4.6v1.1H0zm7.7 0h3.8v1.1H7.7zm5.1 0h3.8v1.1h-3.8zm5.1 0H24v1.1h-6.1z"/>
  </svg>
);

const MetaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const NetflixLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="#E50914" d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.71.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"/>
  </svg>
);

export const Clients = () => {
  const clients = [
    { 
      name: "Google", 
      logo: GoogleLogo,
      category: "Technology",
      description: "Search & Cloud Platform"
    },
    { 
      name: "Microsoft", 
      logo: MicrosoftLogo,
      category: "Technology",
      description: "Cloud & Enterprise Solutions"
    },
    { 
      name: "Apple", 
      logo: AppleLogo,
      category: "Technology",
      description: "Consumer Electronics"
    },
    { 
      name: "Amazon", 
      logo: AmazonLogo,
      category: "E-commerce",
      description: "Cloud & E-commerce Platform"
    },
    { 
      name: "Meta", 
      logo: MetaLogo,
      category: "Social Media",
      description: "Social Platform & VR"
    },
    { 
      name: "Netflix", 
      logo: NetflixLogo,
      category: "Entertainment",
      description: "Streaming Platform"
    },
    { 
      name: "Nike", 
      logo: NikeLogo,
      category: "Retail",
      description: "Athletic Apparel"
    },
    { 
      name: "Samsung", 
      logo: SamsungLogo,
      category: "Technology",
      description: "Consumer Electronics"
    },
    { 
      name: "IBM", 
      logo: IBMLogo,
      category: "Technology",
      description: "Enterprise Solutions"
    },
    { 
      name: "Coca-Cola", 
      logo: CocaColaLogo,
      category: "Consumer Goods",
      description: "Global Beverage Brand"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background relative z-[1]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Trusted by Global Leaders
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2 leading-relaxed">
              I've had the privilege of working with and building solutions inspired by industry-leading companies. 
              Here are some of the global brands that represent the standards of excellence I strive for in every project.
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {clients.map((client, index) => (
              <Card 
                key={client.name}
                className="group relative bg-card/60 hover:bg-card/80 border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-glow-primary/20 cursor-pointer transform hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 sm:p-6 flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px]">
                  {/* Logo Container */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-3 sm:mb-4 text-muted-foreground group-hover:text-foreground transition-all duration-300 flex items-center justify-center">
                    <client.logo />
                  </div>
                  
                  {/* Company Name */}
                  <h3 className="text-sm sm:text-base font-semibold text-center text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                    {client.name}
                  </h3>
                  
                  {/* Category */}
                  <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors duration-300 text-center">
                    {client.category}
                  </span>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-card/60 to-muted/40 border border-border/50 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-primary rounded-full animate-pulse" />
              <p className="text-sm text-muted-foreground">
                Building solutions with enterprise-grade quality and innovation
              </p>
              <div className="w-2 h-2 bg-gradient-secondary rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
