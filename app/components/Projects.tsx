import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Github, Globe, X, ExternalLink } from "lucide-react";

// Updated projects array with images and detailed descriptions
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A mobile app with React Native",
    image: "https://placehold.co/600x400",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/Tsirimaholy/project1",
    detailedDescription: "This is a comprehensive mobile application built with React Native. It features user authentication, real-time data synchronization, offline support, and a beautiful UI. The backend is powered by Node.js and PostgreSQL, with TypeScript providing type safety throughout the codebase.",
    features: [
      "User authentication and profile management",
      "Real-time data synchronization",
      "Offline support with local storage",
      "Push notifications",
      "Beautiful and responsive UI"
    ],
    challenges: "One of the main challenges was implementing a reliable offline-first strategy that would sync correctly when the user came back online. This was solved using a queue-based approach with conflict resolution."
  },
  {
    id: 2,
    title: "Project Two",
    description: "A mobile-first e-commerce platform with real-time updates.",
    image: "https://placehold.co/600x400",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Redux"],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/Tsirimaholy/project2",
    detailedDescription: "An e-commerce platform built with Next.js and MongoDB, featuring real-time inventory updates, a shopping cart, payment processing, and order tracking. The application is fully responsive and uses Tailwind CSS for styling, with Redux for state management.",
    features: [
      "Real-time inventory updates",
      "User accounts and order history",
      "Payment processing integration",
      "Responsive design for all devices",
      "Advanced search and filtering capabilities"
    ],
    challenges: "Implementing real-time inventory updates while handling high traffic was challenging. We used WebSockets and an efficient caching strategy to ensure the system remained responsive even under load."
  },
  {
    id: 3,
    title: "Project Three",
    description: "An AI-powered task management system with natural language processing.",
    image: "https://placehold.co/600x400",
    tags: ["Python", "React", "Machine Learning", "Docker"],
    liveUrl: "https://project3.com",
    githubUrl: "https://github.com/Tsirimaholy/project3",
    detailedDescription: "This task management system uses natural language processing to automatically categorize, prioritize, and schedule tasks. Built with a Python backend for the ML components and a React frontend for the user interface. The entire application is containerized with Docker for easy deployment.",
    features: [
      "Natural language task processing",
      "Automatic categorization and prioritization",
      "Smart scheduling based on task content",
      "Task dependencies and workflows",
      "Analytics and productivity insights"
    ],
    challenges: "Training the NLP model to accurately understand task context and priority was complex. We used a combination of supervised learning and reinforcement learning to improve the model's performance over time."
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <section className="relative py-24 flex justify-center" id="projects">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-purple-500/5 to-background animate-gradient opacity-50" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center justify-center gap-4 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3 relative max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm bg-background/80 overflow-hidden">
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        className="rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 px-3 py-1 text-sm text-secondary-foreground hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </CardContent>
                <CardFooter className="flex gap-4 justify-between">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="group/btn hover:border-primary"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Globe className="mr-2 h-4 w-4 group-hover/btn:text-primary transition-colors" />
                        <span className="group-hover/btn:text-primary transition-colors">
                          Demo
                        </span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="group/btn hover:border-primary"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/btn:text-primary transition-colors" />
                        <span className="group-hover/btn:text-primary transition-colors">
                          Code
                        </span>
                      </a>
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-primary/10 hover:text-primary"
                    onClick={() => openModal(project)}
                  >
                    <span className="mr-1">Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-3xl max-h-[85vh] overflow-y-auto bg-background rounded-xl shadow-2xl border border-primary/20 z-50"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors z-10"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal content */}
              <div className="p-6">
                {/* Image */}
                <div className="h-64 sm:h-80 w-full rounded-lg overflow-hidden mb-6">
                  <motion.img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                  />
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-primary">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.detailedDescription}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-primary/80">Key Features</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-primary/80">Challenges & Solutions</h4>
                  <p className="text-muted-foreground">{selectedProject.challenges}</p>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-primary/80">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 px-3 py-1 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-6">
                  <Button asChild>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Globe className="mr-2 h-5 w-5" />
                      View Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
