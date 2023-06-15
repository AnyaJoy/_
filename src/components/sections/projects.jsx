import React from "react";
import "../../styles/projects.scss";
import Divider from "../divider";
import { projects } from "@/app/content/projects";
import ProjectDisplay from "../projectDisplay";

function Projects() {
  return (
    <div className="projects-bg" id="projects">
      <Divider header="Projects" />
      <div className="projects-container w-10/12 sm:w-8/12">
        {projects.map((p, i) => (
          <div key={p.name} className="md:grid grid-cols-2 gap-10 lg:mt-20 mt-16" >
            <h3 className="mb-4 md:hidden">{p.name}</h3>
            {<div className={`contents ${i % 2 !== 0 && " md:hidden h-full"}`}>
              <ProjectDisplay p={p}/>
            </div>}
            <div className="col-span-1 my-auto h-fit">
              <h3 className="hidden md:contents">{p.name}</h3>
              <div className="mb-6 mt-5">{p.description}</div>
              <div className={`highlight-${p.color}`}>{p.tech}</div>
            </div>
            {<div className={`hidden ${i % 2 !== 0 && "md:contents h-full"}`}>
              <ProjectDisplay p={p}/>
            </div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
