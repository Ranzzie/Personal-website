import { Card } from "@/components/ui/card";
import { Server, Network, Shield, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Network,
      title: "Network Architecture",
      description: "Designing and implementing scalable network solutions"
    },
    {
      icon: Server,
      title: "Systems Management",
      description: "Managing server infrastructures"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Implementing robust security protocols and monitoring"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing systems for maximum efficiency and uptime"
    }
  ];

  return (
  <section id="about" aria-labelledby="about-heading" className="py-24 px-4 scroll-mt-24 md:scroll-mt-32">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate 11th grade SIJA student learning to build reliable network infrastructures and exploring the world of systems administration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Learning Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently in 11th grade at SMKN 2 DEPOK SLEMAN, majoring in SIJA (Network & Application Systems). 
              I'm actively learning network engineering and system administration through both classroom studies and 
              hands-on experience in the school's NOC. My focus is on building a strong foundation in network protocols, 
              server management, and security practices.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Passion for Technology</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm enthusiastic about exploring new technologies and expanding my skills in networking and systems. 
              Through projects like my Armbian Homelab and Discord bot development, I'm constantly learning and 
              applying my knowledge to real-world scenarios while preparing for a career in IT infrastructure.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 group"
            >
              <highlight.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2">{highlight.title}</h4>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
