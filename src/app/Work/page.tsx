"use client";

import { Pause, CheckCircle } from "lucide-react";

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
    status: "Ongoing",
  },
];

const ProjectsPage = () => { 
  return (
    <div className="mx-auto h-full max-w-4xl sm:p-6 md:p-8 text-neutral-900 ">

      {projects.map((project) => ( 
        <div 
          key={project.url} 
          className="flex flex-col md:flex-row items-start gap-6 mb-8 p-4 rounded-md  bg-white transition hover:border-gray-600 overflow-hidden"
        >
          {/* 1. Thumbnail/Image Section */}
          <section className="md:w-1/3 flex-shrink-0 w-full rounded-md text-black">
            {project.thumbnail ? (
              <img
                src={project.thumbnail} 
                alt={`${project.name} project thumbnail`} 
                className="w-full h-40 object-cover rounded-md shadow-lg"
              />
            ) : (
              // Placeholder for projects without a thumbnail
              <div className="w-full h-40 bg-gray-700 flex items-center justify-center rounded-md ">
                No Image
              </div>
            )}
          </section>

          {/* 2. Content Section */}
          <section className="flex flex-col justify-start items-start md:w-2/3">
            <div className="flex justify-between items-center w-full mb-2">
              <span className="text-xl font-bold ">{project.name}</span>
              
              {/* Status Indicator (using a separate div/span for ping effect) */}
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
                  className="bg-gray-700 text-gray-200 text-xs font-medium px-3 py-1 rounded-full border border-gray-600 shadow-inner"
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