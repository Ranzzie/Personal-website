import { Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
              Rifat Raditya
            </h3>
            <p className="text-muted-foreground text-sm">
              Network Engineer & System Administrator
            </p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/Ranzzie" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:rifatradityaa@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Rifat Raditya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
