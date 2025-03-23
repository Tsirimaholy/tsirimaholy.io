import { Hero } from "~/components/Hero";
import { About } from "~/components/About";
import { Skills } from "~/components/Skills";
import { Projects } from "~/components/Projects";
import { Contact } from "~/components/Contact";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}