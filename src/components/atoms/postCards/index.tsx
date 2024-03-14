import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export interface Imagen {
  url: string;
}

export interface PostCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    subdesc?: string;
    image?: Imagen;
    _status: string;
    _firstPublishedAt: string;
  };
}

function PostCard({ post }: PostCardProps): JSX.Element {
  return (
    <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
      <div className="md:w-full lg:w-full xl:w-full w-full p-4 shadow-2xl mb-14 relative">
       {post.image &&  <img
          src={post.image.url}
          alt={post.title}
          className="w-full h-auto mb-4 object-cover object-center"
          style={{ maxHeight: "180px" }}
        />}

        <div className="overflow-hidden transition-transform transform">
          <div className="p-4">
            <div className="flex justify-between items-center">
              <p className="font-bold text-2xl mb-2 text-black">
                {post.title}
              </p>
              <div className="mt-4">
                <BsArrowUpRight />
              </div>
            </div>

            {post.subdesc && (
              <p className="text-lg text-gray-500 mb-4">{post.subdesc}</p>
            )}
            <p className="text-gray-800 text-lg">
              {new Date(post._firstPublishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
