import { useState } from "react";
import { ChevronDown, MapPin, MessageSquare } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who is a software developer in Duhok, Kurdistan?",
    answer:
      "I'm Dara Mustafa Saleem — a professional software developer based in Duhok, Kurdistan Region of Iraq. I have 6+ years of experience building production-grade web applications and AI-powered systems. I specialize in React, Next.js, Node.js, Python, and AI/ML engineering. You can reach me at Daramistefa30@gmail.com.",
  },
  {
    question: "Are you available for freelance projects in Kurdistan or remotely?",
    answer:
      "Yes! I am available for both local projects in Duhok and Kurdistan Region, as well as remote work with international clients worldwide. I have professional proficiency in English and Arabic alongside Kurdish, making cross-border collaboration smooth and effective.",
  },
  {
    question: "What services do you offer as a developer in Duhok?",
    answer:
      "I offer full-stack web development (React, Next.js, Node.js, Express.js), AI & machine learning engineering (PyTorch, OpenCV, Scikit-learn), database design and management (PostgreSQL, MongoDB, Firebase, Supabase), API development, software consulting, and technical leadership & mentoring.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "For frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS. For backend: Node.js, Express.js, PostgreSQL, MongoDB, Firebase, Supabase. For AI/ML: Python, PyTorch, OpenCV, Scikit-learn. I also work with tools like Git, Docker, and various CI/CD pipelines.",
  },
  {
    question: "Do you build AI-powered applications?",
    answer:
      "Absolutely. AI engineering is one of my core specializations. I have hands-on experience with computer vision, deep learning pipelines, and integrating AI features into full-stack web applications. I have also taught AI to university students at the University of Duhok, Kurdistan.",
  },
  {
    question: "How do I hire you or get in touch?",
    answer:
      "You can contact me via email at Daramistefa30@gmail.com, call or WhatsApp me at +964 750 192 0671, connect on LinkedIn at linkedin.com/in/dara01, or use the contact form below on this page. I typically respond within 24 hours.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 lg:py-24 bg-background relative z-[1]"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span className="text-sm font-mono text-primary uppercase tracking-widest">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Common Questions
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
              Looking for a developer in Duhok or Kurdistan? Here are answers to
              the questions people ask most.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>
                Based in{" "}
                <strong className="text-foreground">
                  Duhok, Kurdistan Region, Iraq
                </strong>{" "}
                · Available Worldwide
              </span>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/40 transition-colors duration-300"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  id={`faq-question-${index}`}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors duration-300"
                    itemProp="name"
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="px-6 pb-5">
                    <div className="w-full h-px bg-border/50 mb-4" />
                    <p
                      className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                      itemProp="text"
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA at bottom */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? I'd love to hear from you.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (el) {
                  const offset = 80;
                  const pos =
                    el.getBoundingClientRect().top + window.pageYOffset - offset;
                  window.scrollTo({ top: pos, behavior: "smooth" });
                }
              }}
            >
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
