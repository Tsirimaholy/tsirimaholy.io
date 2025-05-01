import { motion } from "motion/react";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Code,
  Database,
  Wrench,
  Server,
  Globe,
  BrainCircuit,
  Terminal,
  Cloud,
  Layers,
  MonitorSmartphone,
  FileCode,
} from "lucide-react";

// Define skills with icons and proficiency levels
const skillCategories = [
  {
    title: "Frontend",
    icon: <MonitorSmartphone className="h-6 w-6 text-primary" />,
    description: "Creating responsive and interactive user interfaces",
    skills: [
      { name: "React", level: 90 },
      { name: "React Native", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Remix(rrv7)", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 90 },
    ],
    backgroundColor: "from-blue-500/20 to-cyan-500/20",
    iconBackground: "bg-blue-500/10",
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-primary" />,
    description: "Building robust server-side applications and APIs",
    skills: [
      { name: "Python - Django", level: 85 },
      { name: "Python - DRF", level: 85 },
      { name: "Java - SpringBoot", level: 80 },
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "Prisma", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
    backgroundColor: "from-green-500/20 to-emerald-500/20",
    iconBackground: "bg-green-500/10",
  },
  {
    title: "DevOps & Infrastructure",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    description: "Deployment, automation, and infrastructure management",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Linux", level: 85 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Shell Scripting", level: 80 },
    ],
    backgroundColor: "from-orange-500/20 to-amber-500/20",
    iconBackground: "bg-orange-500/10",
  },
  {
    title: "Development Practices",
    icon: <Layers className="h-6 w-6 text-primary" />,
    description:
      "Methodologies, practices, and approaches to software development",
    skills: [
      { name: "Agile/Scrum", level: 85 },
      { name: "Test-Driven Development", level: 80 },
      { name: "Code Reviews", level: 90 },
      { name: "API Design", level: 85 },
      { name: "System Design", level: 80 },
      { name: "Documentation", level: 85 },
      { name: "Pair Programming", level: 80 },
    ],
    backgroundColor: "from-green-500/20 to-pink-500/20",
    iconBackground: "bg-green-500/10",
  },
];

export function Skills() {
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
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative py-24" id="skills">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-green-500/5 to-background animate-gradient opacity-50" />
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-green-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse delay-700" />

      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center justify-center gap-4 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="p-3 bg-primary/10 rounded-full"
            >
              <BrainCircuit className="h-7 w-7 text-primary" />
            </motion.div>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground">
            A comprehensive overview of my technical abilities and proficiency
            across different domains
          </p>
        </motion.div>
        <div className="flex justify-center">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-9">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: categoryIndex * 0.2,
                  type: "spring",
                  damping: 20,
                }}
                className="mb-16 last:mb-0"
              >
                <div className="flex items-start gap-6 flex-col md:flex-row">
                  {/* Category header with icon */}
                  <div className="flex-shrink-0 max-w-full md:max-w-xs mb-6 md:mb-0 md:sticky md:top-24">
                    <div className="flex items-center gap-4 mb-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        className={`p-4 rounded-xl ${category.iconBackground}`}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                    <div className="flex-grow w-full md:w-auto">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className={`p-4 rounded-lg bg-gradient-to-br ${category.backgroundColor} backdrop-blur-sm border border-white/5`}
                          >
                              <span className="font-medium">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to get proficiency label
function getProficiencyLabel(level: number) {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Proficient";
  if (level >= 60) return "Intermediate";
  return "Beginner";
}

// Helper function to get broader technology ecosystem
function getTechnologyEcosystem() {
  return [
    // Frontend
    "Zustand",
    "Tailwind CSS",
    "SASS",
    "Material UI",
    "Styled Components",
    "Framer Motion",
    "Vue.js",
    "Angular",

    // Backend & Databases
    "MongoDB",
    "Firebase",
    "Redis",
    "SQLite",
    "GraphQL",
    "Elasticsearch",
    "Flask",
    "FastAPI",
    "NestJS",

    // DevOps & Cloud
    "GitHub Actions",
    "Jenkins",
    "Terraform",
    "Ansible",
    "Nginx",
    "Apache",
    "Google Cloud",
    "Azure",
    "Vercel",
    "Netlify",

    // Tools & Development
    "Webpack",
    "Vite",
    "ESLint",
    "Prettier",
    "Jest",
    "Cypress",
    "Storybook",
    "Postman",
    "VSCode",
    "IntelliJ",
    "Git",

    // Mobile & Other
    "Flutter",
    "Expo",
    "Swift",
    "Kotlin",
    "PWAs",
    "Service Workers",
    "WebSockets",
    "WebRTC",
  ];
}
