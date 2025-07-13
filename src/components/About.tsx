import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "Generative AI", "RAG", "Agentic RAG", "LangChain", "LlamaIndex", "OpenAI GPT",
    "Machine Learning", "Deep Learning", "Python", "TensorFlow", "PyTorch",
    "Natural Language Processing", "Computer Vision", "MLOps", "AWS", "Azure AI",
    "Google Cloud AI", "Azure OpenAI", "Vertex AI", "CrewAI", "AutoGen",
    "Vector Databases", "Pinecone", "ChromaDB", "Docker", "Kubernetes",
    "React", "Node.js", "PostgreSQL", "MongoDB", "FastAPI", "Streamlit"
  ];

  const expertiseAreas = [
    {
      icon: Brain,
      title: "AI Strategy & Implementation",
      description: "Helping businesses identify AI opportunities and build intelligent solutions that drive ROI."
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "End-to-end development of machine learning models and AI-powered applications."
    },
    {
      icon: Database,
      title: "Data Engineering & MLOps",
      description: "Building robust data pipelines and ML operations for scalable AI systems."
    },
    {
      icon: Zap,
      title: "AI Integration & Consulting",
      description: "Seamlessly integrating AI into existing workflows and providing strategic guidance."
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
            I'm a freelance AI consultant helping businesses harness the power of artificial intelligence. 
            With 5+ years of experience delivering AI solutions for startups to Fortune 500 companies, 
            I turn complex AI concepts into practical, revenue-generating solutions.
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