"use client";
import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  image?: string; // Optional image URL for the project
};

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-[315px] bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col">
      <div className="h-48 bg-gray-700 flex items-center justify-center">
        {project.image ? (
          <Link href={project.link} className="block h-full w-full">
            <img
              src={project.image}
              alt={`${project.title} Logo`}
              className="object-contain h-full w-full cursor-pointer"
            />
          </Link>
        ) : (
          <span className="text-gray-400">{project.title} Image</span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-medium mb-2">
          <Link
            href={`${project?.link}`}
            className="cursor-pointer hover:text-cyan-400"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-gray-400 flex-1 whitespace-normal break-words">
          {project.description}
        </p>
        <div
          onClick={() => setOpen(!open)}
          className="mt-4 cursor-pointer text-cyan-400 font-medium flex items-center"
        >
          Tech Stack <span className="ml-1">{open ? "▲" : "▼"}</span>
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
          className="mt-2"
        >
          <ul className="list-disc list-inside text-gray-400">
            {project.techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default function Home() {
  const projectItems = [
    {
      id: 1,
      title: "PeteyGen.AI",
      description:
        "AI-powered video creation platform that transforms simple scripts into engaging, character-driven animations and audio in seconds",
      techStack: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "AWS",
        "Redis",
        "Hugging Face",
        "Modal",
      ],
      link: "https://peteygen.ai",
      image: "/PeteyLogo.png",
    },
    {
      id: 2,
      title: "PAP Foundation",
      description:
        "PAP Treatment Tracker App is a free app that helps patients with PAP manage their treatment and track their treatments.",
      techStack: ["React Native", "Apple Devices", "Firebase", "Expo"],
      link: "https://apps.apple.com/us/app/pap-foundation/id6450156978?l=vi",
      image: "/PAPLogo.webp",
    },
    {
      id: 3,
      title: "VGLB",
      description:
        "Full-stack web application for video game reviews and discussions. DISCONTINUED",
      techStack: ["Javascript", "Nextjs", "Prisma", "Vercel"],
      link: "https://github.com/uChase/VGLB",
      image: "/VGLBlogo.png",
    },
    {
      id: 4,
      title: "AI Poker Bot",
      description:
        "Ai model built to counter the style of play of a poker player. Utilized reinforcement learning and custom poker environment for training. Full white paper available.",
      techStack: ["Python", "Pytorch"],
      link: "https://github.com/uChase/PokerBot/blob/main/WhitePaper.pdf",
      image: "/PokerLogo.png",
    },
    {
      id: 4,
      title: "Promise Locket",
      description:
        "Iphone app to track promises to onself and hold oneself accountable. Uses new iOS 17 features such as Live Activities and Widgets integrated as native modules.",
      techStack: ["Swift", "UIKit", "React Native"],
      link: "https://github.com/uChase/PromiseLocket",
      image: "/PLlogo.png",
    },
  ];

  const duplicates = 3;
  const displayProjects = Array(duplicates).fill(projectItems).flat();

  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current && trackRef.current) {
      const totalWidth = trackRef.current.scrollWidth;
      setTrackWidth(totalWidth / duplicates);
    }
  }, []);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: [0, -trackWidth],
        transition: { x: { repeat: Infinity, duration: 20, ease: "linear" } },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls, trackWidth]);

  return (
    <>
      <Head>
        <title>ChaseX - Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website." />
        <link rel="icon" href="/wall.jpeg" />
      </Head>
      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Navigation
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full p-6 flex justify-end space-x-6 fixed top-0 bg-gray-900/80 backdrop-blur z-10"
        >
          {[
            { name: "Resume", href: "https://example.com/resume.pdf" },
            { name: "Email", href: "mailto:chasejh1@gmail.com" },
            {
              name: "LinkedIn",
              href: "https://www.linkedin.com/in/chase-hameetman/",
            },
            { name: "GitHub", href: "https://github.com/uChase" },
          ].map(({ name, href }) => (
            <Link key={name} href={href}>
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer hover:text-cyan-400"
              >
                {name}
              </motion.span>
            </Link>
          ))}
        </motion.nav> */}

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-15">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl font-bold mb-4"
          >
            Hello, I&apos;m{" "}
            <span className="text-cyan-400">Chase Hameetman</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg opacity-75 mb-8 max-w-xl"
          >
            A developer creating sleek, modern web experiences with passion, ai,
            and precision.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex space-x-4"
          >
            {[
              { name: "Resume", href: "/resume.pdf" },
              { name: "Email", href: "mailto:chasejh1@gmail.com" },
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/chase-hameetman/",
              },
              { name: "GitHub", href: "https://github.com/uChase" },
            ].map(({ name, href }) => (
              <Link key={name} href={href}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer px-6 py-2 border border-cyan-400 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition"
                >
                  {name}
                </motion.button>
              </Link>
            ))}
            <Link href="/doom">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer px-6 py-2 border border-red-500 rounded-lg text-red-500 bg-transparent hover:bg-red-500 hover:text-gray-900 transition shadow-[0_0_10px_rgba(255,0,0,0.7)]"
              >
                Doom
              </motion.button>
            </Link>
          </motion.div>
        </main>

        {/* Projects Carousel Section */}
        <motion.section
          id="projects"
          className="px-4 py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold text-center mb-8">Projects</h2>
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              ref={trackRef}
              className="flex space-x-8 w-max cursor-grab"
              animate={controls}
              drag="x"
              dragConstraints={{ left: -trackWidth, right: 0 }}
              onDragStart={() => setIsPaused(true)}
            >
              {displayProjects.map((proj, idx) => (
                <ProjectCard key={idx} project={proj} />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Chase Hameetman. All rights reserved.
        </footer>
      </div>
    </>
  );
}
