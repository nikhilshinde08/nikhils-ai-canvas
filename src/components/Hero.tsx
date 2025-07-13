import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-lg border-primary/50 bg-primary/10">
            🚀 Freelance AI Consultant
          </Badge>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-1000">
          Nikhil
        </h1>

        <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-200">
          <p className="mb-4">Available for hire • Building AI solutions for ambitious businesses</p>
          <p>From concept to deployment - I help startups and enterprises leverage AI to drive growth.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in slide-in-from-bottom-12 duration-1000 delay-400">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto"
          >
            <Mail className="mr-2 h-5 w-5" />
            Hire Me
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto"
          >
            <Download className="mr-2 h-5 w-5" />
            View Services
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-in slide-in-from-bottom-16 duration-1000 delay-600">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
            <Twitter className="h-5 w-5" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;