import Link from "next/link";
import "./globals.css";
import ProjectsPage from "@/Components/Work";
export default function Home() {

  return (
   <>
   <div className="m-6 mt-0">
    <section className="text-5xl dancing-script-title ">Hi,</section>
    <section className="text-3xl dancing-script-title">I am Subham</section>
   </div>
   
   <div className="ml-6 mr-2">
    <section className=""><span className="text-xl">tldr;</span></section>
    <article className="max-w-2xl">I am a final year Computer Engineering student at Silicon University
    aiming to become a Full-Stack Developer while having a keen interest in
    space science and how things work , understanding laws of Nature.
    </article>
   </div>

   <div className="ml-6 mt-5 flex justiy-center items-center gap-2">
     <span className="text-blue-500 text-sm italic underline ">
       <Link href={"https://github.com/Subhams-GIT"}>
       Github
       </Link>
     </span>
     <span className="text-blue-500 text-sm italic underline ">
       <Link href={"https://x.com/Subhamkumar7933"}>
         X
       </Link>
     </span>
     <span className="text-blue-500 text-sm italic underline ">
       <Link href={"#"}>
         linkedln
       </Link>
     </span>
     <span className="text-blue-500 text-sm italic underline ">
       <Link href="https://drive.google.com/file/d/1K1nMzk0jzAFRflqttjFzkjv0aCCOXsVI/view?usp=drive_link">
         Resume
       </Link>
     </span>
     <span className="text-blue-500 text-sm italic underline ">
       <Link href="/Blog">
         Blogs
       </Link>
     </span>
   </div>
   <div className="mt-6">
     <span className="font-semibold text-xl m-6">Projects</span>
     <ProjectsPage/>
   </div>
   </>
  );
}
