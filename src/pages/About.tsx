import { Code2, Palette, Zap, Database } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Expert in React, TypeScript, and modern CSS frameworks",
      tools: ["React", "TypeScript", "JavaScript", "Redux", "HTML5", "CSS3"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Building scalable APIs and microservices architecture",
      tools: ["Node.js", "NestJS", "Express", "MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      icon: Zap,
      title: "Development Tools",
      description: "Proficient with modern development and collaboration tools",
      tools: ["Git", "Electron", "Jira", "Postman", "GitLab CI"],
    },
    {
      icon: Palette,
      title: "Integrations & APIs",
      description: "Experience with payment gateways and third-party integrations",
      tools: ["Razorpay", "Brands.live", "CleverTap", "Mixpanel", "REST APIs"],
    },
  ];

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate full-stack developer with a love for creating beautiful, 
            functional applications that solve real-world problems.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl space-y-6">
          <h2 className="text-3xl font-bold">My Journey</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm Samriddhi Sharma, a Full-Stack Software Engineer with over 2 years of 
              experience at Vyapar. I specialize in building scalable web applications using 
              React, TypeScript, Node.js, and modern cloud technologies.
            </p>
            <p>
              I graduated from PES University (2019-2023) with a B.Tech in Computer Science & 
              Engineering (CGPA: 8.6). Throughout my career, I've developed end-to-end features 
              including P2P payment systems with Razorpay integration, Job Work Management workflows, 
              and WhatsApp marketing features that significantly boosted user engagement.
            </p>
            <p>
              My expertise spans microservices architecture, CI/CD pipelines, API development, 
              and performance optimization. I'm passionate about writing clean, maintainable code 
              and delivering solutions that scale. When I'm not coding, I'm exploring new 
              technologies and contributing to open-source projects.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-xl space-y-4 hover:scale-[1.02] transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="text-xs px-3 py-1 rounded-full glass-card border border-primary/30 text-primary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
