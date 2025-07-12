import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "Machine Learning", "Deep Learning", "Python", "TensorFlow", "PyTorch",
    "Natural Language Processing", "Computer Vision", "MLOps", "AWS", "Docker",
    "React", "Node.js", "PostgreSQL", "MongoDB", "Kubernetes"
  ];

  const expertiseAreas = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Building intelligent systems with advanced ML algorithms and neural networks."
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Full-stack development with modern frameworks and cloud technologies."
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Designing robust data pipelines and scalable infrastructure solutions."
    },
    {
      icon: Zap,
      title: "MLOps & Automation",
      description: "Streamlining ML workflows with CI/CD and automated deployment pipelines."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm passionate about leveraging artificial intelligence to solve complex problems and create innovative solutions. 
            With expertise in machine learning, software engineering, and data science, I build systems that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card/30 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-center mb-6">Skills & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;