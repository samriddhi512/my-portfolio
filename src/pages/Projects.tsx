import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Welth - AI Finance Platform",
      description: "A full-stack AI-powered personal finance platform built with Next.js 15 and React 19. Features Clerk authentication, multi-account budget tracking, recurring transactions, AI receipt scanning with Google Gemini, automated email reports via Inngest + Resend, interactive analytics with Recharts, and Arcjet-based bot/abuse protection.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      techStack: ["Next.js 15", "React 19", "Prisma", "Clerk", "Google Gemini AI", "Inngest", "Tailwind CSS"],
      githubUrl: "https://github.com/samriddhi512/welth",
      demoUrl: "https://drive.google.com/file/d/1PI7Avs9p-gABA29X6_vJbx60cHoM5lzd/view",
    },
    {
      title: "Natours - Tour Booking App",
      description: "Built a full-stack tour booking platform with JWT authentication, role-based access control, interactive maps, and real-time booking system. Implemented comprehensive security measures including rate limiting, input validation, and RESTful API design.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      techStack: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/samriddhi512/natours-tour-booking",
      demoUrl: "https://drive.google.com/file/d/1ttpg9dLC29cGcnXl--E-7YC4BpN3x7RU/view",
    },
    {
      title: "Tic-Tac-Toe Multiplayer",
      description: "A server-authoritative multiplayer Tic-Tac-Toe game built with Node.js (WebSockets) and vanilla JavaScript. Real-time gameplay with socket connections for seamless multiplayer experience.",
      image: "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=800&q=80",
      techStack: ["Node.js", "WebSockets", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/samriddhi512/Tic-tac-toe-multiplayer",
      demoUrl: "https://drive.google.com/file/d/1FAGDnoutqkZvj5gkreS75x7XP8E6oOZk/view",
    },
    {
      title: "WorldWise Travel App",
      description: "A travel tracking app with interactive maps to log your adventures around the world. Keep track of cities you've visited, add notes, and visualize your travel journey on an interactive map.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      techStack: ["React", "React Router", "Leaflet", "Context API", "CSS Modules"],
      githubUrl: "https://github.com/samriddhi512/world-wise-app",
      demoUrl: "https://drive.google.com/file/d/1z5w8Tn7-M-YO0z3JqA1yxO0-bRrfU95O/view",
    },
    {
      title: "Todo API - Task Management Backend",
      description: "Designed and implemented a RESTful API for task management using modular architecture in NestJS. Features secure authentication, user-specific todo management with full CRUD operations.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      techStack: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM"],
      githubUrl: "https://github.com/samriddhi512/todo-list-api",
    },
    {
      title: "Blogging Platform API",
      description: "A RESTful API for a blogging platform built with TypeScript, Express.js, and MySQL. Complete backend solution for creating, managing, and publishing blog posts with user authentication.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      techStack: ["TypeScript", "Express.js", "MySQL", "REST API"],
      githubUrl: "https://github.com/samriddhi512/blogging-platform-api",
    },
    {
      title: "Fast React Pizza",
      description: "A modern pizza ordering application built with React. Features a dynamic menu, shopping cart functionality, and order management system with a clean and intuitive user interface.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
      techStack: ["React", "JavaScript", "React Router", "Redux"],
      githubUrl: "https://github.com/samriddhi512/fast-react-pizza",
      demoUrl: "https://drive.google.com/file/d/1oo-bcCLDVRkTGdntFAO1yxIsyXgLaB6C/view",
    },
  ];

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            My Recent <span className="text-gradient">Works</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are a few projects I've worked on recently. Each one represents a unique 
            challenge and learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
