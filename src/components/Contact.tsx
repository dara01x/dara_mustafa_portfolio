import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageCircle,
  Download
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import resumePdf from "@/assets/Dara_Mustafa_Resume.pdf";
import emailjs from '@emailjs/browser';

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "Daramistefa30@gmail.com",
    href: "mailto:Daramistefa30@gmail.com",
    color: "primary"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+964 750 192 0671",
    href: "tel:+9647501920671",
    color: "accent"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Duhok, Iraq",
    href: "#",
    color: "cyan"
  }
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/dara01x",
    description: "View my code repositories"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dara01/",
    description: "Connect professionally"
  },
  {
    icon: Mail,
    name: "Email",
    href: "mailto:Daramistefa30@gmail.com",
    description: "Send me a direct message"
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Dara_Mustafa_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration - Replace these with your actual values
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xxxxxxx';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'New Contact Form Message',
          message: formData.message,
          to_name: 'Dara Mustafa',
          reply_to: formData.email,
        },
        publicKey
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card/80 relative z-[1]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Ready to discuss your next project or just want to say hello? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">
                  Let's Start a Conversation
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  I'm always interested in new opportunities, freelance projects, or just 
                  connecting with fellow developers. Whether you have a project in mind or 
                  want to discuss the latest in web development, feel free to reach out.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-3 sm:space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-card/60 border-border hover:border-primary/50 transition-all duration-300 group">
                    <CardContent className="p-3 sm:p-4">
                      <a 
                        href={method.href}
                        className="flex items-center gap-3 sm:gap-4 text-foreground hover:text-primary transition-colors"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow-primary transition-all duration-300 flex-shrink-0">
                          <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-sm sm:text-base">{method.title}</h4>
                          <p className="text-muted-foreground text-xs sm:text-sm truncate">{method.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Connect With Me</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {socialLinks.map((link, index) => (
                    <Card key={index} className="bg-card/60 border-border hover:border-primary/50 transition-all duration-300 group">
                      <CardContent className="p-3 sm:p-4 text-center">
                        <a 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:shadow-glow-primary transition-all duration-300">
                            <link.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                          </div>
                          <h5 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                            {link.name}
                          </h5>
                          <p className="text-xs text-muted-foreground mt-1 leading-tight">
                            {link.description}
                          </p>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <Card className="bg-gradient-primary/10 border-primary/20">
                <CardContent className="p-4 sm:p-6 text-center">
                  <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    Interested in my background?
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    Download my resume for a detailed overview of my experience and skills.
                  </p>
                  <Button 
                    onClick={downloadResume}
                    className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-sm sm:text-base"
                    size="sm"
                  >
                    <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/80 border-border order-1 lg:order-2">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-foreground/80 mb-1 sm:mb-2 block">
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="bg-input border-border focus:border-primary transition-colors text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-foreground/80 mb-1 sm:mb-2 block">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-input border-border focus:border-primary transition-colors text-sm sm:text-base"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-medium text-foreground/80 mb-1 sm:mb-2 block">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-input border-border focus:border-primary transition-colors text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-medium text-foreground/80 mb-1 sm:mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={4}
                      className="bg-input border-border focus:border-primary transition-colors resize-none text-sm sm:text-base"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group text-sm sm:text-base disabled:opacity-50"
                  >
                    <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2 transition-transform group-hover:translate-x-1" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 sm:mt-20 lg:mt-24 pt-8 sm:pt-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © 2025 Dara Mustafa Saleem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;