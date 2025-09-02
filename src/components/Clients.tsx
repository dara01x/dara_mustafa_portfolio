import { Card } from "@/components/ui/card";

export const Clients = () => {
  const clients = [
    { 
      name: "Algorithmics International Coding School", 
      logo: "/clients_logos/Algorithmics International Coding School.png",
      category: "Education"
    },
    { 
      name: "Alpha Company", 
      logo: "/clients_logos/alpha-logo.png",
      category: "Technology"
    },
    
    { 
      name: "Bussnise Lounge Cafe", 
      logo: "/clients_logos/Bussnise Lounge Cafe.png",
      category: "Hospitality"
    },
    { 
      name: "Civic Company", 
      logo: "/clients_logos/Civic Company.png",
      category: "Civil Services"
    },
    { 
      name: "Environment Eagle Company", 
      logo: "/clients_logos/Environment Eagle Company.png",
      category: "Environmental"
    },
    { 
      name: "Ministry of Peshmerga Affairs", 
      logo: "/clients_logos/Fixed_Emblem_of_the_Ministry_of_Peshmerga_Affairs.png",
      category: "Government"
    },
    { 
      name: "Huj Company", 
      logo: "/clients_logos/Huj Company.png",
      category: "Business"
    },
    { 
      name: "Jehan Company", 
      logo: "/clients_logos/Jehan logo white copy.png",
      category: "Business"
    },
    { 
      name: "Ozkanlar Baskul Company", 
      logo: "/clients_logos/Ozkanlar Baskul Company.png",
      category: "Industrial"
    },
    { 
      name: "P2P Express", 
      logo: "/clients_logos/P2P express.png",
      category: "Logistics"
    },
    { 
      name: "Parez Company", 
      logo: "/clients_logos/Parez.png",
      category: "Technology"
    },
    { 
      name: "Peru Group", 
      logo: "/clients_logos/Peru Group.png",
      category: "Business"
    },
    { 
      name: "Pexira Company", 
      logo: "/clients_logos/Pexira.png",
      category: "Technology"
    },
    { 
      name: "Saziware Company", 
      logo: "/clients_logos/Saziware Company.png",
      category: "Software"
    },
    { 
      name: "Shar Real Estate", 
      logo: "/clients_logos/Shar Real State.png",
      category: "Real Estate"
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
                My Clients & Partners
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2 leading-relaxed">
              I've had the privilege of working with diverse companies across various industries, 
              delivering innovative solutions that drive business growth and digital transformation.
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {clients.map((client, index) => (
              <Card 
                key={client.name}
                className="group relative bg-card/60 hover:bg-card/80 border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-glow-primary/20 cursor-pointer transform hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 sm:p-6 flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px]">
                  {/* Logo Container */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-3 sm:mb-4 text-muted-foreground group-hover:text-foreground transition-all duration-300 flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="w-full h-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                      loading="lazy"
                    />
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
                Delivering custom solutions across diverse industries
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
