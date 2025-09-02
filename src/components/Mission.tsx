import { Target, Eye, Heart } from "lucide-react";

export const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Mission, Vision & Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything I build
            </p>
          </div>
          
          {/* Mission, Vision, Values Grid */}
          <div className="grid md:grid-cols-1 gap-12">
            {/* Mission */}
            <div className="bg-gradient-card rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To build Shopify apps that solve <strong>real, painful, and often ignored problems</strong> for merchants — 
                    practical tools that help businesses run better, not just look good on paper.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Vision */}
            <div className="bg-gradient-card rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become a trusted builder who empowers <strong>entrepreneurs and small businesses worldwide</strong> with 
                    apps that are simple, effective, and high-impact — making technology feel like an ally, not a burden.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Core Values */}
            <div className="bg-gradient-card rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-success/10 rounded-lg shrink-0">
                  <Heart className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Core Values</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Authenticity</h4>
                      <p className="text-sm text-muted-foreground">
                        Share the journey openly, wins and failures alike.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        Focus on solving problems that make a real difference to businesses.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Simplicity</h4>
                      <p className="text-sm text-muted-foreground">
                        Build tools that are easy to understand and effortless to use.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Usefulness</h4>
                      <p className="text-sm text-muted-foreground">
                        Prioritize practicality over vanity; every feature should earn its place.
                      </p>
                    </div>
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