import type { Project as ProjectType } from "@/data/projects";
import { cn } from "@/utils/cn";
import Link from "next/link";

type ProjectProps = { project: ProjectType };

export default function Project({ project }: ProjectProps) {
  return (
    <div className="flex w-full py-4 rounded-xl gap-2">
      <div className="flex-1 flex flex-col">
        <Link
          href={project.url}
          className="text-mint-12 hover:text-mint-11 mb-2 no-underline transition"
        >
          {project.title}
        </Link>
        <span className="mb-4">{project.description}</span>
        <div className="flex flex-wrap w-full gap-2">
          {project.technologiesUsed.map((item, index) => (
            <span
              key={index}
              className={cn(
                "text-xs text-mint-11 border border-mint-11 bg-mint-3 rounded-full px-2",
                "cursor-pointer select-none",
              )}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
