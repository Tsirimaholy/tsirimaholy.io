import { useState, useEffect, useRef } from "react";
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
import { Badge } from "~/components/ui/badge";
import { AnimatePresence, motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<any | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Categories for filtering
  const categories = [
    "All",
    "TypeScript",
    "React",
    "Python",
    "Django",
    "PostgreSQL",
    "Tailwind CSS",
    "Machine Learning",
    "Docker",
  ];

  // Projects data
  const projects: TProject[] = [
    {
      id: 1,
      title: "KIS",
      description:
        "ERP solution used to manage both employees and a high formation center.",
      image: "/kis-present.gif",
      tags: ["TypeScript", "React", "Python", "Django", "PostgreSQL"],
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/Tsirimaholy/project1",
      detailedDescription:
        "This is a comprehensive ERP solution built with React and Django. It features user management, real-time data synchronization, and a responsive UI.",
      features: [
        "User authentication and profile management",
        "Real-time data synchronization",
        "Offline support with local storage",
        "Push notifications",
        "Beautiful and responsive UI",
      ],
      challenges: [
        "Implementing a reliable offline-first strategy was challenging but solved using a queue-based approach with conflict resolution.",
      ],
    },
    // Add more projects here
  ];

  // Close modal on outside click
  useEffect(() => {
    if (!selected) return;
    function onClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as any)) {
        setSelected(null);
      }
    }
    document.body.style.overflow = selected ? "hidden" : "auto";
    document.addEventListener("mousedown", onClick);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", onClick);
    };
  }, [selected]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <section className="relative py-24 bg-gray-50" id="projects">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2
          className="text-4xl font-bold bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent"
          style={{ fontFamily: "'Shadows Into Light', cursive" }} // Handwritten font
        >
          Featured Projects
        </h2>
        <p className="text-gray-600 mt-2">
          Explore some of my best work. Hover over each card for more details.
        </p>
      </motion.div>

      {/* Filter Bar */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {categories.map((cat) => (
          <motion.div key={cat} variants={item}>
            <Button
              variant={filter === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(cat)}
              className="capitalize cursor-pointer shadow-sketchy-md"
            >
              {cat}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Grid */}
      <div className="flex justify-center px-9">
        <motion.div
          variants={container}
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 mt-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects
            .filter(
              (project) => filter === "All" || project.tags.includes(filter)
            )
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={() => setSelected(project)}
              />
            ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onCloseCliked={() => {
              setSelected(null);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
