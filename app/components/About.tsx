import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

export function About() {
  return (
    <section className="container py-24" id="about">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
        <p className="max-w-[700px] text-muted-foreground">
          Discover my journey in software development and what drives me to create amazing digital experiences.
        </p>
      </div>
      <div className="grid gap-8 mt-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Background</CardTitle>
            <CardDescription>My Professional Journey</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              I'm a software developer with a passion for building innovative solutions. With experience in full-stack development,
              I specialize in creating responsive and user-friendly applications that solve real-world problems.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
            <CardDescription>Academic Background</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Bachelor's degree in Computer Science with a focus on software engineering. Continuously learning and staying
              up-to-date with the latest technologies and best practices in web development.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 