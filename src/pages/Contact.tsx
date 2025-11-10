import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Github, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please check the form for errors");
      }
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "samriddhi.jagriti@gmail.com", link: "mailto:samriddhi.jagriti@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9696456851", link: "tel:+919696456851" },
    { icon: MapPin, label: "Location", value: "India", link: null },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", value: "samriddhi-sharma-0512", link: "https://linkedin.com/in/samriddhi-sharma-0512" },
    { icon: Github, label: "GitHub", value: "samriddhi512", link: "https://github.com/samriddhi512" },
  ];

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-4 rounded-lg glass-card hover:bg-primary/5 transition-colors">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium break-all">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h2 className="text-2xl font-bold">Social Links</h2>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg glass-card hover:bg-primary/5 transition-colors"
                    >
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{social.label}</p>
                        <p className="font-medium">{social.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h2 className="text-2xl font-bold">Download Resume</h2>
              <p className="text-muted-foreground">
                Get a complete overview of my experience, skills, and education.
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
                asChild
              >
                <a href="/samriddhi-sharma-resume.pdf" download="Samriddhi_Sharma_Resume.pdf">
                  <Download size={18} className="mr-2" />
                  Download Resume (PDF)
                </a>
              </Button>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  className={`bg-background/50 border-primary/20 focus:border-primary ${
                    errors.name ? "border-destructive" : ""
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  className={`bg-background/50 border-primary/20 focus:border-primary ${
                    errors.email ? "border-destructive" : ""
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  className={`bg-background/50 border-primary/20 focus:border-primary min-h-[150px] ${
                    errors.message ? "border-destructive" : ""
                  }`}
                  placeholder="Tell me about your project or inquiry..."
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
