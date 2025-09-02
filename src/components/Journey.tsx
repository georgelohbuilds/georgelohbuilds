import { TrendingUp, Code, Users } from "lucide-react";

export const Journey = () => {
  return (
    <section id="journey" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              From performance marketing to app entrepreneurship
            </p>
          </div>
          
          {/* Journey Story */}
          <div className="bg-gradient-card rounded-lg p-8 md:p-12 shadow-md mb-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I started my career as a performance marketer, running campaigns and obsessing over numbers — CPMs, CTRs, and ROAS. 
              Over time, I realized that while ads can drive growth, the biggest impact comes from solving the real problems 
              businesses face every day.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-6">
              That's why I'm shifting gears into building Shopify apps. Right now, I'm learning in public, sharing the process 
              openly, and laying the groundwork for tools that will make life easier for merchants. This site is where I'll 
              document that journey — from marketer to app entrepreneur.
            </p>
          </div>
          
          {/* Journey Stages */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Marketing</h3>
              <p className="text-muted-foreground">
                Years of optimizing campaigns, analyzing data, and driving growth through paid advertising.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-accent/10 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learning to Build</h3>
              <p className="text-muted-foreground">
                Currently learning development skills and understanding the Shopify ecosystem inside and out.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-success/10 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Solving Real Problems</h3>
              <p className="text-muted-foreground">
                Building practical apps that address genuine pain points for Shopify merchants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};