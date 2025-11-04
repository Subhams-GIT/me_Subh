import React from "react";
import Link from "next/link";
import {getAllPosts} from "../../../lib/Blog";

const page = async () => {
  const alldata = getAllPosts();
  return <div className="h-full w-full">

	{alldata.map(post=>
		<article key={post.slug} className="space-y-2 m-4 border shadow-sm rounded-md px-2 py-3">
            <h2 className="text-md hover:text-gray-600">
              <Link href={`/Blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <time className="text-sm text-gray-500">{post.date.toString().split('T')[0]}</time>
            <p className="text-gray-700">{post.description}</p>
          </article>
	)}
  </div>;
};

export default page;
