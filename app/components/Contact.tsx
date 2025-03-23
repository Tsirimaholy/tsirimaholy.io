import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="container py-24" id="contact">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
        <p className="max-w-[700px] text-muted-foreground">
          Feel free to reach out if you're looking to collaborate or just want to connect!
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Here's how you can reach me</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <p>your.email@example.com</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <p>Your Location</p>
            </div>
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-muted-foreground" />
              <a href="https://github.com/yourusername" className="hover:text-primary">
                github.com/yourusername
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-muted-foreground" />
              <a href="https://linkedin.com/in/yourusername" className="hover:text-primary">
                linkedin.com/in/yourusername
              </a>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you soon.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <div className="grid gap-2">
                <Input placeholder="Name" />
              </div>
              <div className="grid gap-2">
                <Input type="email" placeholder="Email" />
              </div>
              <div className="grid gap-2">
                <Textarea placeholder="Your message" className="min-h-[150px]" />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 