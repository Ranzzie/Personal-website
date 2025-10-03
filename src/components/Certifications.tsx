import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import mikrotikCertificate from "@/assets/mikrotik-certificate.jpg";

const Certifications = () => {
  const certifications = [
    {
      name: "MikroTik Certified Network Associate (MTCNA)",
      issuer: "MikroTik",
      year: "2025",
  description: "Certified in MikroTik RouterOS configuration, network management, and routing protocols"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and technical qualifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-gradient-card border-border hover:shadow-glow transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={mikrotikCertificate} 
                  alt={cert.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-secondary">
                        {cert.issuer}
                      </Badge>
                      <Badge variant="outline">
                        {cert.year}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
