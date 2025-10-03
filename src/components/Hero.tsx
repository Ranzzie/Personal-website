import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
  className="min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-24 md:scroll-mt-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Network Engineer & System Administrator
            </span>
          </div>
          
          <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Rifat Raditya
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building robust network infrastructures and managing scalable systems with expertise
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://links.rifatraditya.me/">
                Get In Touch
              </a>
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a href="https://github.com/Ranzzie" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:rifatradityaa@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
