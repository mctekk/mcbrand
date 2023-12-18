// components/PostCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface Imagen {
  url: string;
}

interface PostCardProps {
  post: {
    id: string;
    title: string;
    image: Imagen;
    _status: string;
    _firstPublishedAt: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="w-fit md:w-full lg:w-full xl:w-full p-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <Image alt={post.title} src={post.image.url} width={200} height={200} className="object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 text-sm">{new Date(post._firstPublishedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
