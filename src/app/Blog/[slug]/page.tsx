
import React from "react";
import {getPosts} from "../../../../lib/Blog";
import Comment from "@/app/Comments/Comment";


type PageProps = {
  params: Promise<{ slug: string }>
}


const page = async ({params}:PageProps) => {
  const resolvedParams = await params;
  const post = await getPosts(resolvedParams.slug)
  console.log(resolvedParams);
  console.log(post);
  return <div>
    
    <article className="prose prose-neutral max-w-none prose-pre:p-0 mb-8">
      <h1 className="text-2xl font-semibold underline mb-2">{post?.title}</h1>
      {post?.content}
      <Comment />
    </article>
  </div>;

};

export default page;
