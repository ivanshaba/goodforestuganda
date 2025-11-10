import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Handshake } from "lucide-react";

export const PartnersSummarySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <Link to="/about/partners" className="block group">
              <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <Handshake className="w-16 h-16 text-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Our <span className="text-accent">Partners</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We collaborate with organizations, communities, and individuals who share our vision 
                  for sustainable forest conservation. Together, we're creating lasting impact across Uganda.
                </p>
                <div className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                  Meet Our Partners
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
