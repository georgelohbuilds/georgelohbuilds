import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToMission = () => {
    document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            George Loh
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Building real solutions for real businesses.
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Performance marketer transitioning into a Shopify app entrepreneur. 
            Documenting my journey publicly as I move from marketing into building apps for real businesses.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToMission}
              className="group"
            >
              Learn More
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};