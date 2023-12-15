import Section from "@/components/layout/section";
import Project from "./project";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

const Projects = async ({ slice }: ProjectsProps): Promise<JSX.Element> => {
  const client = createClient();

  const projects = await Promise.all(
    slice.items.map((item) => {
      if (isFilled.contentRelationship(item.project) && item.project.uid) {
        return client.getByUID("project", item.project.uid);
      }
    }),
  );

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.primary.section_id || ""}
    >
      <h1>{slice.primary.section_title}</h1>
      <div className="flex flex-col gap-8">
        {projects.map(
          (project) =>
            project && <Project key={project.id} {...project.data} />,
        )}
      </div>
    </Section>
  );
};

export default Projects;
