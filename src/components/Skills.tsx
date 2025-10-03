import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Networking",
      skills: ["Cisco", "TCP/IP", "BGP", "OSPF", "VPN", "VLAN", "Firewall Configuration"]
    },
    {
      category: "Operating Systems",
      skills: ["Linux", "Ubuntu", "Red Hat", "Debian"]
    },
    {
      category: "Virtualization",
      skills: ["Proxmox", "Hyper-V", "KVM", "Docker", "Kubernetes"]
    },
    {
      category: "Monitoring & Security",
      skills: ["Prometeus", "Zabbix", "Wireshark", "pfSense", "SIEM"]
    },
    {
      category: "Cloud & Automation",
      skills: ["AWS", "Azure", "Ansible", "Terraform", "n8n", "Bash Scripting"]
    },
    {
      category: "Database & Storage",
      skills: ["MySQL", "PostgreSQL", "SAN", "NAS", "Backup Solutions"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Practical, industry-aligned skills developed through vocational labs, certifications, and real projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
