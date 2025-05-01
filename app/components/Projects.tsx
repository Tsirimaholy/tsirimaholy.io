import { motion, AnimatePresence } from "motion/react";
import { useState, useMemo, useEffect, useRef } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Github, Globe, X, ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "~/components/ui/badge";

// Updated projects array with images and detailed descriptions
const projects = [
  {
    id: 1,
    title: "KIS",
    description:
      "ERP solution used to managed both employees and a high formation center.",
    image: "/kis-present.gif",
    tags: [
      "TypeScript",
      "React",
      "Python",
      "Django",
      "Django Rest Framework",
      "PostgreSQL",
    ],
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/Tsirimaholy/project1",
    detailedDescription:
      "This is a comprehensive mobile application built with React Native. It features user authentication, real-time data synchronization, offline support, and a beautiful UI. The backend is powered by Node.js and PostgreSQL, with TypeScript providing type safety throughout the codebase.",
    features: [
      "User authentication and profile management",
      "Real-time data synchronization",
      "Offline support with local storage",
      "Push notifications",
      "Beautiful and responsive UI",
      // ```
      // - J'ai réalisé l'initialisation de l'application web de KIS en mettant en place la structure
      // nécessaire pour assurer une base solide au développement.
      // J'ai contribué à la mise en place des infrastructures, modélisation de la base de données
      // (voir annexe 2), spécification de l’api (voir annexe 4), garantissant ainsi un
      // environnement technique adapté aux besoins des projets.
      // J'ai développé et testé les fonctionnalités demandées par le client (KIS), veillant à ce
      // qu'elles répondent à ses besoins spécifiques et à garantir leur qualité.
      // J'ai participé au déploiement des applications, assurant une transition fluide de
      // l'environnement de développement vers la production tout en surveillant les
      // performances.
      // ```
    ],
    challenges:
      "One of the main challenges was implementing a reliable offline-first strategy that would sync correctly when the user came back online. This was solved using a queue-based approach with conflict resolution.",
  },
  {
    id: 2,
    title: "Activity Reward",
    description: "A well beign app for british company employees.",
    image: "https://placehold.co/600x400",
    tags: ["React.js", "Postgresql", "Tailwind CSS", "Django/DjangoRestFramework", "Sentry", "Stripe"],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/Tsirimaholy/project2",
    detailedDescription:
      "A web and mobile(ios/android) app that push employees to move, do some gym, meditation, etc every day and reward them based on their effort. The app is built with Django and Django Restframework for the api and swift and java for respectively the ios app and the android app. The application is fully responsive and uses Tailwind CSS for styling.",
    features: [
      "Real-time xps update",
      "Real time chat support",
      "Web portal that allow company and employeers to see stats of their employees, manage them, etc",
      "Payment processing integration with stripe",
      "Responsive design for all devices",
      "Advanced search and filtering capabilities",
      "Asyncronous task"
    ],
    challenges:
      "Implementing real-time inventory updates while handling high traffic was challenging. We used WebSockets and an efficient caching strategy to ensure the system remained responsive even under load.",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "An AI-powered task management system with natural language processing.",
    image: "https://placehold.co/600x400",
    tags: ["Python", "React", "Machine Learning", "Docker"],
    liveUrl: "https://project3.com",
    githubUrl: "https://github.com/Tsirimaholy/project3",
    detailedDescription:
      "This task management system uses natural language processing to automatically categorize, prioritize, and schedule tasks. Built with a Python backend for the ML components and a React frontend for the user interface. The entire application is containerized with Docker for easy deployment.",
    features: [
      "Natural language task processing",
      "Automatic categorization and prioritization",
      "Smart scheduling based on task content",
      "Task dependencies and workflows",
      "Analytics and productivity insights",
    ],
    challenges:
      "Training the NLP model to accurately understand task context and priority was complex. We used a combination of supervised learning and reinforcement learning to improve the model's performance over time.",
  },
];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Build category list
  const categories = useMemo(
    () => ["All", ...new Set(projects.flatMap((p) => p.tags))],
    []
  );
  // Filtered list
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((tag) => tag.toLowerCase() === filter.toLowerCase())
        );
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
    <section className="relative py-24" id="projects">
      {/* Background blobs */}
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-green-500/5 to-background animate-gradient opacity-50" /> */}
      {/* <div className="absolute -z-10 top-20 left-10 w-64 h-64 rounded-full bg-green-500/10 blur-3xl animate-pulse" /> */}
      {/* <div className="absolute -z-10 bottom-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse delay-700" /> */}

      <div className="">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-2">
            Filter by category and hover each card for interactive effects.
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
                className="capitalize cursor-pointer"
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
            // initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 mt-4 md:grid-cols-3 lg:grid-cols-3"
          >
            {filtered.map((proj, idx) => (
              <motion.div
                key={proj.id}
                variants={item}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  whileHover={{ rotateX: 10, rotateY: -10, scale: 1.05 }}
                  className="transform-style-3d"
                >
                  <Card className="flex flex-col h-full overflow-hidden">
                    {/* Image with overlay labels */}
                    <div
                      className="relative h-48 overflow-hidden cursor-pointer"
                      onClick={() => {
                        setSelected(proj);
                      }}
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hovered === idx ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/40 flex items-end justify-between p-4"
                      >
                        <span className="bg-primary/20 px-2 py-1 rounded text-xs">
                          {proj.year}
                        </span>
                        <span className="bg-primary/20 px-2 py-1 rounded text-xs">
                          {proj.role}
                        </span>
                      </motion.div>
                    </div>

                    {/* Title & description */}
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        {proj.title}
                        <ArrowRight className="h-4 w-4 text-muted-foreground" onClick={()=>setSelected(proj)}/>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {proj.description}
                      </CardDescription>
                    </CardHeader>

                    {/* Tags */}
                    <CardContent className="flex flex-wrap gap-2">
                      {proj.tags.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="bg-background/50"
                        >
                          {t}
                        </Badge>
                      ))}
                    </CardContent>

                    {/* Actions */}
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="gap-1"
                      >
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelected(proj)}
                        className="gap-1"
                      >
                        Details
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setSelected(null)}
            />

            {/* Content */}
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-1/2 left-1/2 w-[90%] max-w-3xl max-h-[85vh] overflow-y-auto bg-background rounded-xl p-6 shadow-2xl transform -translate-x-1/2 -translate-y-1/2 z-50"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              {/* Modal details */}
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-primary">
                {selected.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {selected.detailedDescription}
              </p>
              <h4 className="font-semibold text-lg mb-2">Key Features</h4>
              <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                {selected.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <h4 className="font-semibold text-lg mb-2">Challenges</h4>
              <p className="text-muted-foreground mb-4">
                {selected.challenges}
              </p>
              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-green-500 hover:from-primary/90 hover:to-green-500/90"
                >
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2"
                  >
                    <Globe className="h-5 w-5" />
                    View Demo
                  </a>
                </Button>
                <Button variant="outline" asChild className="gap-2">
                  <a
                    href={selected.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2"
                  >
                    <Github className="h-5 w-5" />
                    View Code
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
