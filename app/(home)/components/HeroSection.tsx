import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "./ui/moving-border";
import Tittle from "./Tittle"; 

export default function HeroSection() {
  return (
    <div
      className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up"
    >
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Nice to meet you! <span className="inline-block"> 👋 </span>
          <br /> {" "}
          <span className=" underline underline-offset-8 decoration-green-500">
               {"I'm Sonu."}
          </span>
        </h1>

        <p className="md:w-96 text-lg text-gray-300">
          {
            "Passionate developer crafting sleek, modern apps that users love and find valuable."
          }
        </p>

        <Link href={"mailto:cse2023sonu113@iesbpl.ac.in"} className="inline-block">
          <Tittle text="Contact Me 📭" />
        </Link>
      </div>

      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>

          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl  bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full  bg-green-500"></div>
          </div>

          <div className="glow absolute top-[60%] right-1/2 -z-10"></div>
        </div>

        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <Link href="/SonuKumarResume.pdf" download>
              <p>📢 Available for work</p>
            </Link>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
