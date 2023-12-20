
import Link from 'next/link';
import React from 'react';

export interface Imagen {
  url: string;
}

export interface PostCardProps {
  post: {
    id: string;
    title: string;
    subdesc?: string;
    image: Imagen;
    _status: string;
    _firstPublishedAt: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link href={`/posts/${encodeURIComponent(post.title)}`}>
      <div className=" md:w-full lg:w-full xl:w-full p-4">
        <div className=" overflow-hidden  transition-transform transform ">
          <div className="p-4">
            <p className=" font-bold mb-2 text-[1.85rem] hover:text-gray-600 ">{post.title}</p>
            {post.subdesc && <p className="text-[1.2rem] font-semibold mb-2">{post.subdesc}</p>}
            <p className="text-gray-600 text-sm">{new Date(post._firstPublishedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
