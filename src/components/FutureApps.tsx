import { Package, Clock, Lightbulb } from "lucide-react";

export const FutureApps = () => {
  return (
    <section id="apps" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apps Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground">
              Practical solutions currently in development
            </p>
          </div>
          
          {/* Apps Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-card rounded-lg p-8 shadow-md text-center">
              <div className="p-4 bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">App #1</h3>
              <p className="text-muted-foreground mb-4">
                Solving a real problem for Shopify merchants. Details coming soon as development progresses.
              </p>
              <div className="inline-flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                In Planning
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-lg p-8 shadow-md text-center">
              <div className="p-4 bg-accent/10 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">App #2</h3>
              <p className="text-muted-foreground mb-4">
                Another practical tool to help merchants run their businesses more efficiently.
              </p>
              <div className="inline-flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                Research Phase
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-lg p-8 shadow-md text-center">
              <div className="p-4 bg-success/10 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">App #3</h3>
              <p className="text-muted-foreground mb-4">
                Focused on addressing overlooked pain points in the Shopify ecosystem.
              </p>
              <div className="inline-flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                Concept Stage
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              These apps are being built based on real merchant feedback and genuine market needs. 
              Follow my journey to see them develop from ideas to solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};