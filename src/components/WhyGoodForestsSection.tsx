import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Trees, Heart, Sprout } from "lucide-react";

export const WhyGoodForestsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <Trees className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why <span className="text-accent">Good Forests</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Good forests are essential climate solutions that restore ecosystems, support communities, 
              and combat climate change. Through sustainable practices and innovative monitoring, 
              we create thriving forests that benefit both people and nature.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center gap-2 bg-card px-6 py-3 rounded-full border border-border">
                <Heart className="w-5 h-5 text-accent" />
                <span className="font-medium">Community Impact</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-6 py-3 rounded-full border border-border">
                <Sprout className="w-5 h-5 text-accent" />
                <span className="font-medium">Ecosystem Restoration</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-6 py-3 rounded-full border border-border">
                <Trees className="w-5 h-5 text-accent" />
                <span className="font-medium">Climate Resilience</span>
              </div>
            </div>
            <Link to="/why-good-forests">
              <Button size="lg" className="px-8">
                Discover More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
