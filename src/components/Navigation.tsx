import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Mail, FileText, User } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/projects", icon: Briefcase, label: "Projects" },
    { to: "/about", icon: User, label: "About" },
    { to: "/contact", icon: Mail, label: "Contact" },
  ];

  const handleResumeClick = () => {
    window.open("/samriddhi-sharma-resume.pdf", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-foreground">Sam</span>
            <span className="text-primary">riddhi</span>
          </Link>
          
          <div className="flex items-center gap-8">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;
              
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-2 transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
            <button
              onClick={handleResumeClick}
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <FileText size={18} />
              <span className="font-medium">Resume</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
