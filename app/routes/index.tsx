import { Hero } from "~/components/Hero";
import { About } from "~/components/About";
import { Skills } from "~/components/Skills";
import { Projects } from "~/components/Projects";
import { Contact } from "~/components/Contact";
import type { MetaFunction } from "react-router";
import React, { useEffect } from "react";
import type { Route } from "./+types";
import { data } from "react-router";

export const meta: MetaFunction = ({}) => {
  return [
    {
      title: "Tsirimaholy",
      description: "Tsirimaholy portfolio - Fullstack Developer",
    },
  ];
};
export const loader = async () => {
  return data({ name: "John", createdAt: new Date() });
};
export default function HomePage({ loaderData }: Route.ComponentProps) {
  const { name, createdAt } = loaderData;
  return (
    <main className="flex min-h-screen flex-col bg-backgroud">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
