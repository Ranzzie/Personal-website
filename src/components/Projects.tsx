import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Armbian Homelab",
      description: "Built and configured a home laboratory environment using Armbian OS for learning network infrastructure, server administration, and testing various IT solutions.",
      tech: ["Armbian", "Linux", "Network Configuration", "Server Management"],
      impact: "Hands-on learning environment for network and system administration skills"
    },
    {
      title: "Discord Bot",
      description: "Developed a custom Discord bot using discord.py to automate tasks, manage server operations, and enhance community engagement.",
      tech: ["Python", "discord.py", "API Integration", "Automation"],
      impact: "Improved server management efficiency and user interaction"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcase of significant infrastructure projects and implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-border hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex}
                    variant="secondary"
                    className="bg-secondary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-primary font-medium">
                  Impact: <span className="text-muted-foreground font-normal">{project.impact}</span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
