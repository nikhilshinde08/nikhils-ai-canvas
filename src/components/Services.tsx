import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Code, 
  Database, 
  Zap, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Rocket,
  Target,
  Settings
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Navigate the AI landscape with expert guidance. I help you identify opportunities and create a roadmap for AI implementation.",
      features: ["AI Readiness Assessment", "Technology Stack Selection", "ROI Analysis", "Implementation Roadmap"],
      duration: "2-4 weeks"
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "End-to-end AI solution development tailored to your business needs. From prototypes to production-ready systems.",
      features: ["Machine Learning Models", "MLOps Pipeline Setup", "API Development", "Cloud Deployment"],
      duration: "4-12 weeks"
    },
    {
      icon: Database,
      title: "Data Engineering & MLOps",
      description: "Build robust data infrastructure and ML operations to scale your AI initiatives efficiently.",
      features: ["Data Pipeline Design", "Model Monitoring", "A/B Testing Setup", "Performance Optimization"],
      duration: "3-8 weeks"
    },
    {
      icon: Zap,
      title: "AI Integration & Automation",
      description: "Seamlessly integrate AI into your existing workflows and automate business processes.",
      features: ["API Integration", "Workflow Automation", "Legacy System Updates", "Training & Documentation"],
      duration: "2-6 weeks"
    }
  ];

  const whyChooseMe = [
    {
      icon: Target,
      title: "Results-Focused",
      description: "I deliver measurable business outcomes, not just technical solutions."
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Rapid prototyping and iterative development to get you to market quickly."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "I work closely with your team to ensure knowledge transfer and long-term success."
    },
    {
      icon: Settings,
      title: "End-to-End Service",
      description: "From initial consultation to post-deployment support and maintenance."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Freelance Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I help businesses leverage AI to drive growth, improve efficiency, and stay competitive. 
            Here's how I can help transform your business with intelligent solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {service.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">What's Included:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <div className="bg-secondary/20 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Work With Me?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I bring a unique combination of technical expertise and business acumen to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseMe.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-medium">Available for new projects</span>
            </div>
            <Button variant="hero" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Your Project Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;