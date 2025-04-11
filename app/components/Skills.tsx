import { motion } from "motion/react";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "Remix(rrv7)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Python - Django",
      "Python - Django Rest Framework",
      "Java - SpringBoot",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Linux", "CI/CD", "Agile", "Testing"],
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
    <section className="relative py-24 flex justify-center" id="skills">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-purple-500/5 to-background animate-gradient opacity-50" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center justify-center gap-4 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground">
            A comprehensive list of my technical skills and the technologies I
            work with.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 mt-12 md:grid-cols-3 relative max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={item}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm bg-background/80 h-full">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
