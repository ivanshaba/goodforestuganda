import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { TreePine, MapPin, Coffee, HelpCircle, Map, Leaf } from "lucide-react";

export const OurWorkSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const workItems = [
    {
      icon: TreePine,
      title: "Tree Planting",
      description: "Strategic reforestation initiatives restoring degraded landscapes.",
      link: "/work/conservation"
    },
    {
      icon: Leaf,
      title: "Jubiya Project",
      description: "Community-driven forest restoration and livelihood support.",
      link: "/work/community"
    },
    {
      icon: Coffee,
      title: "Cocoa Pilot",
      description: "Integrating sustainable cocoa farming with forest conservation.",
      link: "/work/areas"
    },
    {
      icon: MapPin,
      title: "Tree0 Platform",
      description: "Cutting-edge technology for transparent forest monitoring.",
      link: "/work/treeo"
    },
    {
      icon: Map,
      title: "Operational Areas",
      description: "Discover where we're making an impact across Uganda.",
      link: "/work/areas"
    },
    {
      icon: HelpCircle,
      title: "FAQs",
      description: "Common questions about our work and impact.",
      link: "/work/faqs"
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
            Our <span className="text-accent">Work</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Explore our projects and initiatives making a real difference in forest conservation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  to={item.link}
                  className="block group"
                >
                  <div
                    className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <Icon className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{item.description}</p>
                    <div className="pt-3 border-t border-foreground/10">
                      <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        Learn more 
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
