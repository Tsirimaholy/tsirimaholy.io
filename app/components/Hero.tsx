import { motion } from "motion/react";
import { Button } from "~/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, LucideArrowBigDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-purple-500/10 animate-gradient" />

      {/* Animated circles in background */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse delay-700" />

      <div className="container relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-gradient-x">
              Tsirimaholy
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[600px] text-lg text-muted-foreground sm:text-xl backdrop-blur-sm"
          >
            A passionate <strong className="">full-stack developer</strong> crafting beautiful and functional
            web experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm"
              asChild
            >
              <a
                href="https://github.com/Tsirimaholy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm"
              asChild
            >
              <a
                href="https://linkedin.com/in/tsirimaholy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm"
              asChild
            >
              <a href="mailto:tsirimaholy.h@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
          <div className="flex">
            <a href="" download={"/Tsirimaholy.jpg"}>
              <Button className="mr-5 cursor-pointer transition-all duration-300 hover:scale-105">
                Get my CV <Download />{" "}
              </Button>
            </a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm"
                asChild
              >
                <a href="#projects">
                  View My Work
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background/50 shadow-xl">
            <img
              src="/Tsirimaholy.jpg"
              alt="Tsirimaholy"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative circle */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-purple-500 opacity-50 blur-md -z-10" />
        </motion.div>
      </div>
    </div>
  );
}
