import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, techStack, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">Tech Stack:</p>
          <p className="text-primary text-sm">
            {techStack.join(" | ")}
          </p>
        </div>
        
        <div className="flex items-center gap-4 pt-4">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="glass-card border-primary/50 hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                GitHub
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button
              variant="outline"
              size="sm"
              className="glass-card border-primary/50 hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
