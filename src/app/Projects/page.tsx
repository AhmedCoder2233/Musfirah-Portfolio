"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import Image from "next/image";

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store built with Next.js.",
      tags: ["Next.js", "Tailwind CSS"],
      image: "/project1.jpg",
      live: "https://uiux-hackathon-ten.vercel.app/",
      icon: <SiNextdotjs className="text-xl md:text-2xl" />,
    },
    {
      title: "Minecraft Website",
      description:
        "Interactive Minecraft website with authentication and cart and stripe",
      tags: ["Clerk", "Next.js", "TailwindCSS", "Stripe"],
      image: "/project2.jpg",
      live: "https://shock-smp.vercel.app/",
      icon: <FaReact className="text-xl md:text-2xl" />,
    },
    {
      title: "E-Commerce Website",
      description:
        "Comprehensive Ecommerce website with authentication and Payment Stripe",
      tags: ["TypeScript", "TailwindCSS", "Nextjs", "Stripe"],
      image: "/project3.jpg",
      live: "https://final-hackathon-3-zzop.vercel.app/",
      icon: <SiTypescript className="text-xl md:text-2xl" />,
    },
    {
      title: "E-Commerce Website",
      description: "Comprehensive Ecommerce website with amazing features",
      tags: ["TypeScript", "TailwindCSS", "Nextjs"],
      image: "/project4.jpg",
      live: "https://hackathon3-sw9s.vercel.app/",
      icon: <SiTypescript className="text-xl md:text-2xl" />,
    },
    {
      title: "Restaurent Website",
      description: "Restaurent Website with cart system",
      tags: ["TailwindCSS", "Next.js"],
      image: "/project5.jpg",
      live: "https://restaurent-web-u2bu.vercel.app/",
      icon: <FaNodeJs className="text-xl md:text-2xl" />,
    },
    {
      title: "Resume Builder",
      description: "A Resume builder to build your interactive resume.",
      tags: ["Next.js", "React.js", "Typescript"],
      image: "/project6.jpg",
      live: "https://resume-builder-woad-nine.vercel.app/",
      icon: <FaFigma className="text-xl md:text-2xl" />,
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 md:py-20 px-4 min-h-screen"
    >
      {/* Floating tech elements */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 1000,
              rotate: Math.random() * 360,
              opacity: 0.1 + Math.random() * 0.2,
            }}
            animate={{
              x: [null, Math.random() * 1000],
              y: [null, Math.random() * 1000],
              rotate: [null, 360],
            }}
            transition={{
              duration: 30 + Math.random() * 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className={`absolute hidden md:block ${
              i % 4 === 0
                ? "text-cyan-400/10"
                : i % 3 === 0
                ? "text-teal-400/10"
                : "text-white/05"
            } text-2xl md:text-3xl`}
          >
            {i % 4 === 0 ? "</>" : i % 3 === 0 ? "{ }" : ";"}
          </motion.div>
        ))}
      </motion.div>

      {/* Glow effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 -left-20 w-32 h-32 md:w-64 md:h-64 rounded-full bg-cyan-400 blur-xl md:blur-3xl opacity-10 md:opacity-20 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-1/4 -right-20 w-32 h-32 md:w-64 md:h-64 rounded-full bg-teal-400 blur-xl md:blur-3xl opacity-10 md:opacity-20 pointer-events-none"
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-6xl mx-auto z-10 w-full mt-10 md:mt-0"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl -mt-64 md:text-4xl lg:text-5xl lg:-mt-32 font-bold text-cyan-400 mb-3 md:mb-4">
            Featured Projects
          </h2>
          <div className="w-20 md:w-24 h-0.5 md:h-1 bg-cyan-400/70 mx-auto mb-4 md:mb-5"></div>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2 md:px-0">
            A selection of my recent work showcasing diverse technologies and
            solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden rounded-lg md:rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-40 sm:h-36 md:h-44 lg:h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2 md:gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 md:p-2.5 bg-gray-900 rounded-full border border-gray-700 hover:bg-teal-400 hover:text-gray-900 transition-all"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FiExternalLink className="text-lg md:text-xl" />
                    </a>
                  </div>
                </div>
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-gray-900/80 p-1.5 md:p-2 rounded-md md:rounded-lg backdrop-blur-sm">
                  {project.icon}
                </div>
                {/* Actual Image Implementation */}
                <div className="h-full w-full relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/project-fallback.jpg";
                    }}
                  />
                </div>
              </div>

              <div className="p-4 md:p-5 lg:p-6">
                <h3 className="text-lg md:text-xl font-bold text-cyan-100 mb-1 md:mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] md:text-xs font-medium px-2 py-0.5 md:px-2.5 md:py-1 rounded-full bg-gray-800 text-cyan-300 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14 lg:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 md:gap-4 text-cyan-400/80">
            <div className="w-12 md:w-16 h-px bg-cyan-400/50"></div>
            <span className="text-xs md:text-sm font-medium">
              MORE PROJECTS AVAILABLE
            </span>
            <div className="w-12 md:w-16 h-px bg-cyan-400/50"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
