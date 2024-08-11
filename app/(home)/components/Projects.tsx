import React from "react";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Tittle from "./Tittle";
import Link from "next/link";
import cn from "classnames";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "TimeLess",
      tech: [SiReact, SiNodedotjs, SiExpress, SiMongodb],
      link: "https://time-less.vercel.app/login",
      cover: "/project-1.jpg",
      background: "bg-indigo-600",
    },

    {
      title: "Carhub",
      tech: [SiNextdotjs, SiTailwindcss],
      link: "https://car-hub-swart.vercel.app/",
      cover: "/project-3.jpg",
      background: "bg-green-600 ",
    },

    {
      title: "ModernTo-Do",
      tech: [SiReact, SiTailwindcss],
      link: "https://modern-todo-app-liart.vercel.app/",
      cover: "/project-0.jpg",
      background: "bg-green-600 ",
    },

    {
      title: "Hotstar-Clone",
      tech: [SiReact, SiTailwindcss],
      link: "https://hostar-clone.vercel.app/",
      cover: "/project-4.png",
      background: "bg-indigo-600",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Tittle
        text="Projects 🎨"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>

                    <div className="flex items-centergap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-5" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
