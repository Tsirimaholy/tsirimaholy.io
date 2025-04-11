import { Hero } from "~/components/Hero";
import { About } from "~/components/About";
import { Skills } from "~/components/Skills";
import { Projects } from "~/components/Projects";
import { Contact } from "~/components/Contact";
import type { MetaFunction } from "react-router";
import React, { useEffect } from "react";

export const meta: MetaFunction = ({}) => {
    return [
        {
            title: "Tsirimaholy",
            description: "Tsirimaholy portfolio - Fullstack Developer"
        },
    ];
};

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
