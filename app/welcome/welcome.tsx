import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  MoveRight,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Input } from "~/components/ui/input";
type BlogItemProps = {
  title: string;
  summary: string;
  publishedAt: Date;
  published: boolean;
  readDuration: number;
};
function BlogItem({
  title,
  summary,
  publishedAt,
  published,
  readDuration: readTime,
}: BlogItemProps) {
  return (
    <div
      className={
        "border-1 rounded-sm lg:max-w-[60%] max-w-[90%] py-5 px-3 hover:shadow-sm transition-shadow"
      }
    >
      <div className="flex gap-2 mb-2">
        <div className="flex items-center gap-1 text-sm text-muted-foreground w-fit">
          <Calendar size={20} className="inline align-bottom" />{" "}
          {publishedAt.toLocaleDateString()}
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground w-fit">
          <Clock size={20} /> {readTime} minutes read
        </div>
      </div>
      <div>
        <Link to={"/blog/:one"} className="hover:text-blue-500" viewTransition>
          <h1 className={"text-xl font-semibold"}>{title}</h1>
        </Link>
        <p className={"text-muted-foreground text-pretty mb-1"}>{summary}</p>
        <NavLink
          to={"/blog/:one"}
          className={"hover:bg-muted transition-all rounded p-1 mt-5"}
        >
          Read more <MoveRight className="inline" size={15} />
        </NavLink>
      </div>
    </div>
  );
}
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
      <header className="text-center flex flex-col items-center">
        <h1 className={"text-5xl mt-4 mb-2"}>Blog</h1>
        <p className="text-muted-foreground text-center text-lg w-1/2">
          Insights into my journey as a developer and my thoughts/opinions on
          various topics. Join me on this journey of thought and ideas. Let's
          explore together!
        </p>
        <Input
          placeholder={"Search blogs..."}
          className={"w-1/3 justify-self-center mt-4"}
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
