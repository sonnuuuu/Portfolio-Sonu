import Link from 'next/link';
import React from 'react';
import cn from 'classnames';
import { SiGithub, SiLinkedin, SiX, SiLeetcode } from "react-icons/si";
import Image from 'next/image';

export default function Navbar({ className }: { className?: string }) {
    const socials = [
        {
            href: "https://www.linkedin.com/in/soonnuuuu/",
            label: "Linkedin",
            Icon: SiLinkedin,
        },
        {
            href: "https://github.com/sonnuuuu",
            label: "Github",
            Icon: SiGithub,
        },
        {
            href: "https://twitter.com/Soonnuuuu",
            label: "x",
            Icon: SiX,
        },
        {
            href: "https://leetcode.com/soonnuuuu",
            label: "LeetCode",
            Icon: SiLeetcode,
        }
    ];

    return (
        <nav className={cn("py-10 flex justify-between items-center animate-move-down", className)}>
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
                Soonnuuu 👨🏻‍💻
            </h1>

            <div className="flex items-center gap-5">
                {socials.map((social, index) => {
                    const Icon = social.Icon;
                    return (
                        <Link
                            href={social.href}
                            key={index}
                            aria-label={social.label}
                        >
                            <Icon className="w-5 h-5 hover:scale-125 transition-all" />
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
