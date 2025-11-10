import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { FileText, GraduationCap } from "lucide-react";

export const ResourcesSummarySection = () => {
  const { ref, isVisible } = useScrollReveal();

  const resources = [
    {
      icon: FileText,
      title: "Reports & Publications",
      description: "Access our latest research, impact reports, and documentation.",
      link: "/resources/reports"
    },
    {
      icon: GraduationCap,
      title: "Educational Materials",
      description: "Learning resources about forest conservation and climate action.",
      link: "/resources/education"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
            <span className="text-accent">Resources</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Knowledge and insights from our conservation work
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resources.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  to={item.link}
                  className="block group"
                >
                  <div
                    className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                    <div className="pt-4 border-t border-foreground/10">
                      <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        Explore 
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
