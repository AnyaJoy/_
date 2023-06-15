import React from 'react'
import Image from "next/image";
import { links } from '@/app/content/projects';

interface Project {
    name: string,
    description: string,
    img: HTMLImageElement,
    tech: string,
    color: string,
    youtube: string,
    git: string,
    web: string,
}

interface Props {
    p: Project
}
function ProjectDisplay({p}:Props) {
    return (
        <div className="col-span-1 sm:flex h-fit my-auto">
          <figure className="my-auto">
            <Image src={p.img} alt={p.name} className="project-image" />
            <figcaption>
              <div className="grid grid-cols-3 my-auto">
                {links.map((l) => (
                  <a
                    key={l.name}
                    className="col-span-1 project-link"
                    href={p[l.name]}
                    target="_blank"
                  >
                    <Image alt={l.name} src={l.img} />
                  </a>
                ))}
              </div>
            </figcaption>
          </figure>
        </div>
      );
}

export default ProjectDisplay