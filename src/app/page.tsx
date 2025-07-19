
import {Github, NotebookIcon, Linkedin, Twitter} from "lucide-react";
import { getAllPosts } from "../../lib/Blog";
import Link from "next/link";
export default function Home() {
  const allposts=getAllPosts()
  const all=allposts.slice(0,1)
  return (
    <>
      <h1 className="text-xl">Subham Kumar Das</h1>
      <p className="text-md  my-5">
        I am a Computer Engineering student studying at silicon University. With
        a keen interest in Web3 , space science and quantum physiscs (tho I `don&apos;t` have any knowledge) , I am always
        looking forward to explore every possibilities within this world.
      </p>
      <p className="text-md  my-5">
       This website is to showcase my works and my articles that I will keep on posting on a regular basis
        which will include maths,space tech, Rust, C Lang, some life lessons. 
      </p>
      <br />
      <div className="flex justify-start items-center gap-4 text-left my-6">
        <button className="inline-flex p-2   border-black px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2 ">
          <Github size={20} />
          GitHub
        </button>
        <button className="inline-flex p-2  border-black   px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2 ">
          <NotebookIcon size={20} />
          Resume
        </button>
        <button className="inline-flex p-2   border-black d  px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2  ">
          <Linkedin size={20} />
          Linkedln
        </button>
        <button className="inline-flex p-2   border-black d  px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2  ">
          <Twitter size={20} />
          X
        </button>
      </div>

      <div>
        <div>My Personal Fav!!</div>
        {all.map(post=><div key={post.slug}>
        <article key={post.slug} className="space-y-2  ml-0 m-4 border shadow-sm rounded-md px-2 py-3">
            <h2 className="text-md hover:text-gray-600">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <time className="text-sm text-gray-500">{post.date.toString().split('T')[0]}</time>
            <p className="text-gray-700">{post.description}</p>
          </article>
        </div>)}
      </div>
    </>
  );
}
