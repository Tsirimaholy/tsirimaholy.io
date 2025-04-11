import { motion } from "motion/react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Github, Globe } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A mobile app with React Native",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    title: "Project Two",
    description: "A mobile-first e-commerce platform with real-time updates.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Redux"],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    title: "Project Three",
    description:
      "An AI-powered task management system with natural language processing.",
    tags: ["Python", "React", "Machine Learning", "Docker"],
    liveUrl: "https://project3.com",
    githubUrl: "https://github.com/yourusername/project3",
  },
];

export function Projects() {
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
              key={project.title}
              variants={item}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm bg-background/80">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {/* <div className="h-[80%] overflow-hidden">
                    <img
                      src="/theimage.jpg"
                      alt="projec-1"
                      className="hover:scale-110 transition w-full h-full object-cover"
                    />
                  </div> */}
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
                <CardFooter className="flex gap-4">
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
                        Live Demo
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
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
