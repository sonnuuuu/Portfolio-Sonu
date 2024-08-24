"use client";

import React from 'react'
import Tittle from './Tittle'
import { HoverEffect } from './ui/card-hover-effect'
import { SiExpress, SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si'

export default function skills() {


    const skills = [

        {
            text: "React",
            Icon: SiReact,
        },

        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },

        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },

        {
            text: "Node.js",
            Icon: SiNodedotjs,
        },

        {
            text: "MongoDB",
            Icon: SiMongodb,
        },

        {
            text: "Git",
            Icon: SiGit,
        },

        {
            text: "Python",
            Icon: SiPython,
        },
        {
            text: "Javascript",
            Icon: SiJavascript,
        },

        {
            text: "Express",
            Icon: SiExpress
        },

    ]
  return (
    <div className="max-w-5xl mx-auto px-8">

        <Tittle 
        
        text ="Skills 🔪 " 
        className="flex flex-col items-center justify-center -rotate-6"/>
        
       <HoverEffect items={skills}
       
       />

    </div>
  )
}


