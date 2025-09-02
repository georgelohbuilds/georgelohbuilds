import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Twitter, Mail, Bell } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Follow My Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated on my progress and connect with me
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-card rounded-lg shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="p-2 bg-foreground/5 rounded-lg group-hover:bg-foreground/10 transition-colors">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <p className="text-sm text-muted-foreground">Follow my code and projects</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-card rounded-lg shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-sm text-muted-foreground">Professional updates and insights</p>
                  </div>
                </a>
                
                <a 
                  href="https://x.com/georgelohbuilds" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-card rounded-lg shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Twitter className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">X (Twitter)</h4>
                    <p className="text-sm text-muted-foreground">Real-time thoughts and updates</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:hello@georgelohbuilds.com" 
                  className="flex items-center gap-4 p-4 bg-gradient-card rounded-lg shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="p-2 bg-success/10 rounded-lg group-hover:bg-success/20 transition-colors">
                    <Mail className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-sm text-muted-foreground">hello@georgelohbuilds.com</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Stay Updated</h3>
              <div className="bg-gradient-card rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="h-6 w-6 text-primary" />
                  <h4 className="font-medium">Newsletter</h4>
                </div>
                <p className="text-muted-foreground mb-6">
                  Get notified when I launch new apps, share insights from my journey, 
                  or publish important updates.
                </p>
                <div className="space-y-3">
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-background"
                  />
                  <Button variant="hero" className="w-full">
                    Subscribe to Updates
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  No spam, just valuable updates. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};