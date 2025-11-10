import { Users, Leaf, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

import { useState } from "react";

export const IntroductionSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1);
  const { ref: videoRef, isVisible: videoVisible } = useScrollReveal(0.3);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.2);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const highlights = [
    {
      icon: Users,
      title: "Community-Driven",
      description: "Working hand-in-hand with local farmers and communities",
    },
    {
      icon: Leaf,
      title: "Science-Based",
      description: "Data-driven conservation with measurable impact",
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Tangible outcomes for climate and communities",
    },
  ];

  // Enhanced YouTube embed URL with privacy enhancements
  const youtubeEmbedUrl = "https://www.youtube-nocookie.com/embed/7q2QmNqT6U4?rel=0&modestbranding=1";

  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary/3 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              titleVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              Transforming Landscapes, Empowering Communities
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Reviving Degraded Landscapes Through
              <span className="text-primary"> Innovative Conservation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with community-centered
              approaches to restore forests, sequester carbon, and create
              sustainable livelihoods across Uganda.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <div
              ref={contentRef}
              className={`space-y-8 transition-all duration-1000 ease-out ${
                contentVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Our Approach to Sustainable Impact
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Through our TreeO technology platform, we monitor tree
                    growth and carbon capture in real-time, ensuring transparent
                    and verifiable environmental impact.
                  </p>
                  <p className="leading-relaxed">
                    We work directly with farmers and communities, providing
                    training, resources, and sustainable livelihood
                    opportunities that align conservation with economic growth.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={highlight.title}
                    className={`flex items-start space-x-4 p-4 bg-white/50 rounded-lg border border-primary/10 transition-all duration-700 ease-out ${
                      contentVisible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="mt-6 bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 font-medium hover-lift"
              >
                <Link to="/work">Discover Our Impact</Link>
                
              </Button>
            </div>

            {/* Enhanced YouTube Embed */}
            <div
              ref={videoRef}
              className={`relative transition-all duration-1000 ease-out ${
                videoVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                {!videoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Loading video...</p>
                    </div>
                  </div>
                )}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={youtubeEmbedUrl}
                  title="Forest Restoration in Action"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  onLoad={() => setVideoLoaded(true)}
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>

              {/* Floating Stats */}
              <div
                ref={statsRef}
                className={`absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-primary/10 transition-all duration-1000 ease-out ${
                  statsVisible
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1054471+</div>
                  <div className="text-xs text-muted-foreground">
                    Trees Monitored
                  </div>
                </div>
              </div>

              <div
                className={`absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-6 border border-primary/10 transition-all duration-1000 ease-out ${
                  statsVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-xs text-muted-foreground">
                    Regions Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};