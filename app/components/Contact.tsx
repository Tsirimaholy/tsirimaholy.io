import { motion } from "motion/react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Contact() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-24 flex justify-center" id="contact">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-yellow-500/5 to-background animate-gradient opacity-50" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center justify-center gap-4 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">
            Feel free to reach out if you're looking to collaborate or just want to connect!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 relative"
        >
          <motion.div variants={item}>
            <Card className="h-full group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm bg-background/80">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">Contact Information</CardTitle>
                <CardDescription>Here's how you can reach me</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <motion.div
                  className="flex items-center gap-3 group/item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail className="h-5 w-5 text-muted-foreground group-hover/item:text-primary transition-colors" />
                  <a href="mailto:tsirimaholy.h@gmail.com" className="group-hover/item:text-primary transition-colors">
                    tsirimaholy.h@gmail.com
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 group/item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <MapPin className="h-5 w-5 text-muted-foreground group-hover/item:text-primary transition-colors" />
                  <p className="group-hover/item:text-primary transition-colors">Madagascar</p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 group/item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Github className="h-5 w-5 text-muted-foreground group-hover/item:text-primary transition-colors" />
                  <a href="https://github.com/Tsirimaholy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    github.com/Tsirimaholy
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 group/item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover/item:text-primary transition-colors" />
                  <a href="https://linkedin.com/in/tsirimaholy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    linkedin.com/in/tsirimaholy
                  </a>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm bg-background/80">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <motion.div
                    className="grid gap-2"
                    variants={item}
                  >
                    <Input
                      placeholder="Name"
                      className="bg-background/50 focus:border-primary transition-colors"
                    />
                  </motion.div>
                  <motion.div
                    className="grid gap-2"
                    variants={item}
                  >
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-background/50 focus:border-primary transition-colors"
                    />
                  </motion.div>
                  <motion.div
                    className="grid gap-2"
                    variants={item}
                  >
                    <Textarea
                      placeholder="Your message"
                      className="min-h-[150px] bg-background/50 focus:border-primary transition-colors"
                    />
                  </motion.div>
                  <motion.div variants={item}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-green-500 hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
