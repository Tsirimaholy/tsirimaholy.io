import { Button } from "~/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
          A passionate full-stack developer crafting beautiful and functional web experiences
        </p>
        <div className="flex gap-4">
          <Button variant="outline" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
        <Button className="mt-4">View My Work</Button>
      </div>
    </div>
  );
} 