import { Building, University } from "lucide-react";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function About() {
  return (
    <section className="relative py-24 flex justify-center" id="about">
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
            About Me
          </h2>
          <p className="text-muted-foreground">
            Discover my journey in software development and what drives me to
            create amazing digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-8 mt-12 md:grid-cols-2 relative max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="group transition-all duration-300 backdrop-blur-sm bg-background/80 shadow-none border-none">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Background <Building />{" "}
                </CardTitle>
                <CardDescription>My Professional Journey</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-justify">
                  I'm a software developer with a passion for building
                  innovative solutions. With experience in full-stack
                  development, I specialize in creating responsive and
                  user-friendly applications that solve real-world problems.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="group border-0 shadow-none transition-all duration-300 backdrop-blur-sm bg-background/80">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Education <University />{" "}
                </CardTitle>
                <CardDescription>Academic Background</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-justify">
                  Bachelor's degree in Software Ecosystem with a focus on
                  software engineering. Continuously learning and staying
                  up-to-date with the latest technologies and best practices in
                  web development.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
