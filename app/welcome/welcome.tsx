import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Input } from "~/components/ui/input";
type BlogItemProps = {
  title: string;
  summary: string;
};
function BlogItem({ title, summary }: BlogItemProps) {
  return (
    <div
      className={
        "flex border-1 lg:max-w-[60%] max-w-[90%] py-5 px-3 hover:shadow-sm transition-shadow"
      }
    >
      <div>
        <Link to={"/blog/:one"} viewTransition>
          <h1 className={"text-lg font-semibold"}>{title}</h1>
        </Link>
        <p className={"text-muted-foreground text-pretty"}>{summary}</p>
      </div>
      <div className={"relative ml-6"}>
        <ChevronRight
          className={
            "hover:animate-pulse absolute top-1/2 bottom-1/2 right-0 text-blue-"
          }
        />
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
  },
  {
    title: "Title1",
    summary: `
      loremDesciption Lorem ipsum dolor sit amet,
                      consectetur
                      adipisicing elit. Eaque earum nemo obcaecati pariatur quo recusandae sed veritatis!
                      Accusantium
                      atque consectetur debitis, dolor et ex harum quia sit soluta ut! Commodi`,
  },
  {
    title: "Title1",
    summary: `
        loremDesciption Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit. Eaque earum nemo obcaecati pariatur quo recusandae sed veritatis!
                        Accusantium
                        atque consectetur debitis, dolor et ex harum quia sit soluta ut! Commodi`,
  },
  {
    title: "Title1",
    summary: `
    ako
          loremDesciption Lorem ipsum dolor sit amet,
                          consectetur
                          adipisicing elit. Eaque earum nemo obcaecati pariatur quo recusandae sed veritatis!
                          Accusantium
                          atque consectetur debitis, dolor et ex harum quia sit soluta ut! Commodi`,
  },
];
export function Welcome() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBlog = blogs.filter((b) => b.summary.includes(searchTerm));
  return (
    <main className="pt-16 pb-4">
      <header className="text-center">
        <h1 className={"text-5xl mt-4 mb-2"}>Blog</h1>
        <p className="text-muted-foreground">
          This is the list of blogs that i've been writting.
        </p>
      </header>
      <Input
        placeholder={"Search blogs..."}
        className={"w-1/3 justify-self-center mt-4"}
        type={"search"}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
      <section
        className={"p-10 flex justify-center items-center  gap-5 flex-col"}
      >
        {filteredBlog.length > 0 ? (
          filteredBlog.map((blog) => (
            <BlogItem title={blog.title} summary={blog.summary} />
          ))
        ) : (
          <h1 className="text-2xl text-muted-foreground">No blog found</h1>
        )}
      </section>
    </main>
  );
}
