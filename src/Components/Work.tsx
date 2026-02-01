"use client";

import { Pause, CheckCircle } from "lucide-react";
import Image from "next/image";
interface Project {
  url: string;
  thumbnail: string;
  name: string;
  description: string;
  techUsed: string[];
  status: "Completed" | "Ongoing"; 
}

const projects: Project[] = [
  {
    url: "https://github.com/Subhams-GIT/Ama-App.git",
    thumbnail: "/ama.png",
    name: "Uncork",
    description: "Anyone can ask and get back a reply from user anonymously.",
    techUsed: ["NextJS", "React", "Prisma", "Postgres", "Vercel", "MistralAI"],
    status: "Completed",
  },
  {
    url: "https://github.com/Subhams-GIT/dedupx.git",
    description:
      "A Rust-based file deduplicator which can scan for duplicates and can either quarantine or delete them.",
    techUsed: ["Rust"],
    status: "Completed",
    thumbnail: "", 
    name: 'Dedupx'
  },
  {
    url: "https://github.com/Subhams-GIT/musi.git",
    thumbnail: "/musi.png",
    name: "Musi",
    description: "Music streaming platform where people can stream and vote for a music.",
    techUsed: ["NextJs", "Prisma", "Docker", "Turborepo", "Redis"],
    status: "Completed",
  },
];

const ProjectsPage = () => { 
  return (
    <div className=" h-full max-w-4xl sm:p-6 md:p-8 text-neutral-900 ">

      {projects.map((project) => ( 
        <div 
          key={project.url} 
          className="flex flex-col items-start gap-6 mb-8 p-4 rounded-md ring-1 ring-black/10 shadow-sm overflow-hidden"
        >
          <section className="flex-shrink-0 w-full rounded-md text-black">
            {project.thumbnail ? (
              <Image src={project.thumbnail} height={500} width={1000} alt={project.name}/>
            ) : (
            <></>
            )}
          </section>

          {/* 2. Content Section */}
          <section className="flex flex-col justify-start">
            <div className=" flex justify-between items-center w-full mb-2">
              <span className="text-xl font-bold ">{project.name}</span>
              
              <div className="flex items-center space-x-2 text-sm font-medium">
                {project.status === "Completed" ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-400">Completed</span>
                  </>
                ) : (
                  <>
                    <div className="relative">
                       <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75 animate-ping"></span>
                       <Pause className="h-5 w-5 text-yellow-500 relative" /> 
                    </div>
                    <span className="text-yellow-400">Ongoing</span>
                  </>
                )}
              </div>
            </div>

            <p className="text-gray-400 mb-4">{project.description}</p>

            <section className="flex flex-wrap gap-2 mb-4">
              {project.techUsed.map((t) => (
                <span 
                  key={t}
                  className="bg-black text-gray-200 text-xs font-medium px-3 py-1 rounded-xl border border-gray-600 shadow-inner"
                >
                  {t}
                </span>
              ))}
            </section>
            
            {/* Project URL */}
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 text-sm underline transition"
            >
              View on GitHub
            </a>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;