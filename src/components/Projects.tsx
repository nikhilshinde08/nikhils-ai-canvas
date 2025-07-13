import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Bot, Camera, BarChart3, Cpu } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Recommendation Engine",
      description: "Increased client's sales by 35% with a personalized product recommendation system. Reduced customer acquisition cost by 40%.",
      technologies: ["Python", "TensorFlow", "AWS", "PostgreSQL", "Redis"],
      icon: Bot,
      github: "#",
      demo: "#",
      featured: true,
      client: "Online Retailer",
      result: "35% increase in sales"
    },
    {
      title: "Agentic AI Development Platform",
      description: "Developed problem-based solutions using Agentic AI that automated complex workflows and decision-making processes.",
      technologies: ["LangChain", "CrewAI", "OpenAI", "FastAPI", "PostgreSQL"],
      icon: Camera,
      github: "#",
      demo: "#",
      featured: true,
      client: "Tech Startup",
      result: "80% workflow automation"
    },
    {
      title: "Marketing & Sales AI Assistant",
      description: "Built Agentic AI system that optimized marketing campaigns and sales processes, increasing conversion rates significantly.",
      technologies: ["AutoGen", "LangGraph", "Pinecone", "Streamlit", "OpenAI"],
      icon: BarChart3,
      github: "#",
      demo: "#",
      featured: false,
      client: "E-commerce Company",
      result: "45% conversion boost"
    },
    {
      title: "Healthcare Diagnostic Assistant",
      description: "Developed AI tool that assists doctors in diagnosis, reducing diagnostic time by 50% while maintaining 95% accuracy.",
      technologies: ["TensorFlow", "FastAPI", "GCP", "PostgreSQL", "React"],
      icon: Cpu,
      github: "#",
      demo: "#",
      featured: false,
      client: "Healthcare Provider",
      result: "50% faster diagnosis"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results for real businesses. Here are some of the AI solutions I've delivered 
            for my clients, driving measurable growth and competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        {project.featured && (
                          <Badge variant="default" className="text-xs">
                            Featured
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs">
                          {project.client}
                        </Badge>
                        <Badge variant="secondary" className="text-xs text-primary">
                          {project.result}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 hover:border-primary/60 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Similar Project?
                  </Button>
                  <Button variant="default" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    <Github className="mr-2 h-4 w-4" />
                    Hire Me
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <Github className="mr-2 h-5 w-5" />
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;