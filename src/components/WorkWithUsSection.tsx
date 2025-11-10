import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Heart, Briefcase, Building } from "lucide-react";

export const WorkWithUsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const opportunities = [
    {
      icon: Heart,
      title: "Donate",
      description: "Support our mission and make a direct impact on forest conservation.",
      link: "/partners/donate",
      variant: "default" as const
    },
    {
      icon: Briefcase,
      title: "Volunteer Opportunities",
      description: "Join our team and contribute your skills to meaningful work.",
      link: "/partners/opportunities",
      variant: "outline" as const
    },
    {
      icon: Building,
      title: "Corporate Partnerships",
      description: "Partner with us to advance your sustainability goals.",
      link: "/partners/corporate",
      variant: "outline" as const
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
            Work <span className="text-accent">With Us</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Join us in creating lasting positive change for forests and communities
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  to={item.link}
                  className="block group"
                >
                  <div
                    className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full flex flex-col"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{item.description}</p>
                    <div className="pt-4 border-t border-foreground/10">
                      <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        Get Involved 
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
