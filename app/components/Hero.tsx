
import { motion } from "motion/react";
import { Button } from "~/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";

export function Hero() {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"

    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-green-400/10 animate-gradient" />

      {/* Subtle animated circles */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-green-500/20 blur-3xl animate-pulse delay-700" />

      <div className="container relative flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
        >
          <h1
            className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
            style={{ fontFamily: "'Shadows Into Light', cursive" }} // Handwritten font
          >
            Hi, I'm{" "}
            <span
              className="bg-gradient-to-r from-primary via-green-300 to-primary bg-clip-text text-transparent animate-gradient-x"

            >
              Tsirimaholy
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[600px] text-lg text-muted-foreground sm:text-xl"
          >
            A passionate{" "}
            <strong className="decoration-2 decoration-wavy underline decoration-yellow-500">
              full-stack developer
            </strong>{" "}
            crafting beautiful and functional web experiences.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4"
          >
            {[
              {
                href: "https://github.com/Tsirimaholy",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://linkedin.com/in/tsirimaholy",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:tsirimaholy.h@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map(({ href, icon: Icon, label }, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm border-2 border-dashed border-gray-400 shadow-sketchy-md"
                asChild
              >
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <Link
              to="#about"
              className="flex items-center gap-2 text-lg font-medium text-primary hover:underline hover:opacity-90 transition-all"

            >
              Discover my journey
              <ArrowDown className="animate-bounce" size={20} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-dashed border-gray-400 shadow-sketchy-lg"
          >
            <img
              src="/Tsirimaholy.jpg"
              alt="Tsirimaholy"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative glow */}
          <div
            className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-green-500 opacity-50 blur-md -z-10 shadow-sketchy-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
