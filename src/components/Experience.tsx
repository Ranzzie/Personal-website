import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Network Operations Center (NOC) Team",
      company: "SMKN 2 DEPOK SLEMAN",
      period: "2024 - Present",
      description: [
        "Monitor and maintain school network infrastructure",
        "Assist in troubleshooting network connectivity issues",
        "Learn and implement network security best practices",
        "Support IT operations and technical documentation"
      ]
    }
  ];

  return (
  <section id="experience" aria-labelledby="experience-heading" className="py-24 px-4 scroll-mt-24 md:scroll-mt-32">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg">
            Professional journey and key accomplishments
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-border hover:shadow-glow transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-3 mb-2 md:mb-0">
                  <Briefcase className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold">{exp.role}</h3>
                    <p className="text-lg text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 ml-9">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
