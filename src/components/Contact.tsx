import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Send,
  Calendar,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nikhilbshinde34@gmail.com",
      href: "mailto:nikhilbshinde34@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7494949582",
      href: "tel:+917494949582"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/nikhilshinde08",
      username: "@nikhilshinde08"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nikhil-shinde33/",
      username: "/in/nikhil-shinde33"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/nikhilbshinde619",
      username: "@nikhilbshinde619"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how AI can drive your business forward. I'm currently accepting new clients 
            and would love to help you achieve your goals with intelligent solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Send a Message
              </CardTitle>
              <CardDescription>
                Drop me a line and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Project Type</Label>
                <Input id="subject" placeholder="AI Consultation, Custom Development, etc." />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your business challenge and how AI might help solve it..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" className="w-full" asChild>
                <a href="https://calendly.com/nikhilbshinde33" target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2 h-4 w-4" />
                  Get Free Consultation
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Prefer a more direct approach? Here are the best ways to reach me.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-300 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <contact.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors duration-300">
                        {contact.label}
                      </p>
                      <p className="text-sm text-muted-foreground">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
                <CardDescription>
                  Connect with me on social media for updates and insights.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-300 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <social.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors duration-300">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Schedule Meeting */}
            <Card className="bg-gradient-primary p-[1px] rounded-lg">
              <div className="bg-card/90 backdrop-blur-sm rounded-[7px] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Schedule a Meeting</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to explore how AI can transform your business? Let's schedule a free 30-minute consultation to discuss your needs.
                </p>
                <Button variant="hero" className="w-full" asChild>
                  <a href="https://calendly.com/nikhilbshinde33" target="_blank" rel="noopener noreferrer">
                    Book Free Consultation
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;