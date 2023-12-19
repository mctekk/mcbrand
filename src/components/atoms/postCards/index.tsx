
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
    <Link href={`/posts/${post.id}`}>
      <div className=" md:w-full lg:w-full xl:w-fit p-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:text-gray-300">
          <div className="p-4">
            <h3 className=" font-semibold mb-2">{post.title}</h3>
            {post.subdesc && <h3 className="text-lg font-semibold mb-2">{post.subdesc}</h3>}
            <p className="text-gray-600 text-sm">{new Date(post._firstPublishedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
