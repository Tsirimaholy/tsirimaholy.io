import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Github, Globe } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with React, Node.js, and PostgreSQL.",
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
    description: "An AI-powered task management system with natural language processing.",
    tags: ["Python", "React", "Machine Learning", "Docker"],
    liveUrl: "https://project3.com",
    githubUrl: "https://github.com/yourusername/project3",
  },
];

export function Projects() {
  return (
    <section className="container py-24" id="projects">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
        <p className="max-w-[700px] text-muted-foreground">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
      </div>
      <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
} 