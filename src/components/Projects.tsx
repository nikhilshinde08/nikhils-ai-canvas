import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Bot, Camera, BarChart3, Cpu } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot Platform",
      description: "Built an intelligent conversational AI platform using GPT-4 and custom training data, serving 10k+ users daily.",
      technologies: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Docker"],
      icon: Bot,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Computer Vision Pipeline",
      description: "Developed a real-time object detection system with 95% accuracy for autonomous vehicle applications.",
      technologies: ["TensorFlow", "OpenCV", "Python", "AWS", "Kubernetes"],
      icon: Camera,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "ML Analytics Dashboard",
      description: "Created a comprehensive analytics platform for ML model monitoring and performance tracking.",
      technologies: ["React", "D3.js", "Python", "MLflow", "MongoDB"],
      icon: BarChart3,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Neural Network Optimizer",
      description: "Developed an automated hyperparameter tuning system that reduced training time by 40%.",
      technologies: ["PyTorch", "Optuna", "Ray", "Docker", "GCP"],
      icon: Cpu,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in AI, machine learning, and software development.
            Each project demonstrates my commitment to innovation and technical excellence.
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
                      {project.featured && (
                        <Badge variant="default" className="mt-1">
                          Featured
                        </Badge>
                      )}
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
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;