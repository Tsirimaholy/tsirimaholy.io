import { Calendar, Clock, MoveRight } from "lucide-react";
import { Link, NavLink } from "react-router";

export type BlogItemProps = {
  title: string;
  summary: string;
  publishedAt: Date;
  published: boolean;
  readDuration: number;
};
export default function BlogItem({
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
