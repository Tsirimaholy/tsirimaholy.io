import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  MoveRight,
} from "lucide-react";
import { useState } from "react";
import type { BlogItemProps } from "~/components/BlogItem";
import BlogItem from "~/components/BlogItem";
import { Input } from "~/components/ui/input";

const blogs: BlogItemProps[] = [
  {
    title: "Title1",
    summary: `
    loremDesciption Lorem ipsum dolor sit amet,
                    consectetur
                    adipisicing elit. Eaque earum nemo obcaecati pariatur quo recusandae sed veritatis!
                    Accusantium
                    atque consectetur debitis, dolor et ex harum quia sit soluta ut! Commodi`,
    publishedAt: new Date("2023-01-01"),
    published: true,
    readDuration: 5,
  },
  {
    title: "Title1",
    summary: `
      loremDesciption Lorem ipsum dolor sit amet,
                      consectetur
                      adipisicing elit. Eaque earum nemo obcaecati pariatur quo recusandae sed veritatis!
                      Accusantium
                      atque consectetur debitis, dolor et ex harum quia sit soluta ut! Commodi`,
    publishedAt: new Date("2023-01-01"),
    published: true,
    readDuration: 5,
  },
];
export function Welcome() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBlog = blogs.filter((b) => b.summary.includes(searchTerm));
  return (
    <main className="pt-16 pb-4">
      <header className="text-center flex flex-col items-center px-6">
        <h1 className={"text-5xl mt-4 mb-2"}>Blog</h1>
        <p className="text-muted-foreground text-center text-lg w-1/2">
          Insights into my journey as a developer and my thoughts/opinions on
          various topics. Join me on this journey of thought and ideas. Let's
          explore together!
        </p>
        <Input
          placeholder={"Search blogs..."}
          className={"md:w-1/3 justify-self-center mt-4"}
          type={"search"}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
        />
      </header>
      <section
        className={"p-10 flex justify-center items-center  gap-5 flex-col"}
      >
        {filteredBlog.length > 0 ? (
          filteredBlog.map((blog) => (
            <BlogItem
              title={blog.title}
              summary={blog.summary}
              publishedAt={blog.publishedAt}
              published
              readDuration={blog.readDuration}
            />
          ))
        ) : (
          <h1 className="text-2xl text-muted-foreground">No blog found</h1>
        )}
      </section>
    </main>
  );
}
