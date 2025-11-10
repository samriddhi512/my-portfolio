import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Linkedin, Mail, Code2, Database, Server, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Home = () => {
  const skills = [
    { name: "React", icon: Code2 },
    { name: "Node.js", icon: Server },
    { name: "TypeScript", icon: Code2 },
    { name: "NestJS", icon: Server },
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Database },
  ];

  return (
    <div className="min-h-screen">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-particle" style={{ top: "10%", left: "10%", animationDelay: "0s" }} />
        <div className="floating-particle" style={{ top: "60%", left: "80%", animationDelay: "2s" }} />
        <div className="floating-particle" style={{ top: "80%", left: "20%", animationDelay: "4s" }} />
        <div className="floating-particle" style={{ top: "30%", left: "70%", animationDelay: "1s" }} />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="text-gradient">Samriddhi</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground h-16 flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Software Engineer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Full-Stack Software Engineer with 2+ years of experience in end-to-end product development, 
            microservices architecture, and CI/CD pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground group glow-effect"
              asChild
            >
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass-card border-primary/50 hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-6 pt-8"
          >
            <a 
              href="https://github.com/samriddhi512" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 hover:rotate-12"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/samriddhi-sharma-0512" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 hover:rotate-12"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:samriddhi.jagriti@gmail.com"
              className="glass-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 hover:rotate-12"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <Sparkles className="inline-block mr-2 text-primary" size={32} />
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-lg">Technologies I work with</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  className="glass-card p-6 rounded-lg text-center hover:border-primary/50 transition-all cursor-pointer"
                >
                  <Icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-gradient">Professional Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Software Developer-2</h3>
                <p className="text-muted-foreground">Vyapar • June 2023 - Present</p>
                <ul className="mt-2 space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Developed full-stack P2P payment system with Razorpay integration—built complete React/TypeScript frontend and contributed to NestJS/MongoDB backend APIs</li>
                  <li>Built Job Work Management workflow for manufacturing with raw material tracking and GST automation—led to 2× increase in manufacturing user adoption</li>
                  <li>Created WhatsApp-based marketing features with Brands.live integration—boosted user engagement and sales</li>
                  <li>Architected scalable client-side add-on system with CleverTap and Mixpanel analytics integration</li>
                  <li>Resolved 50+ critical bugs and implemented GitLab CI workflows</li>
                  <li>Revamped product image UX with zoom, rotate, and crop functionalities—increased usage by 40%</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center glass-card p-12 rounded-lg"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new projects and opportunities
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground group glow-effect"
            asChild
          >
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
