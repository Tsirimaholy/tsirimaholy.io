import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Linux", "CI/CD", "Agile", "Testing"],
  },
];

export function Skills() {
  return (
    <section className="container py-24" id="skills">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
        <p className="max-w-[700px] text-muted-foreground">
          A comprehensive list of my technical skills and the technologies I work with.
        </p>
      </div>
      <div className="grid gap-8 mt-12 md:grid-cols-3">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 