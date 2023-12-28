import Link from "next/link";
import React from "react";
import { BsArrow90DegLeft, BsArrowBarUp, BsArrowRight, BsArrowUpRight } from "react-icons/bs";

export interface Imagen {
  url: string;
}

export interface PostCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    subdesc?: string;
    image: Imagen;
    _status: string;
    _firstPublishedAt: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
      <div className=" md:w-full lg:w-full xl:w-full  w-full p-4 shadow-2xl mb-14 hover:scale-105">
        <div className=" overflow-hidden  transition-transform transform ">
          <div className="p-4">
            <div className="flex-row flex justify-between">
              <div>
                {" "}
                <p className=" font-bold mb-2 text-[1.85rem] hover:text-gray-600 ">
                  {post.title}
                </p>
              </div>
              <div className="mt-4">
                <BsArrowUpRight/>
              </div>
            </div>
            {post.subdesc && (
              <p className="text-[1rem] text-gray-500 mb-4">{post.subdesc}</p>
            )}
            <p className="text-gray-600 text-sm">
              {new Date(post._firstPublishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
