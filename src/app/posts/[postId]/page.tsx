// pages/posts/[postId].tsx
"use client";
"use client";
import React, { useEffect, useState } from "react";
import api from "@/model/api/dato-cms/data";
import Image from "next/image";
import { Imagen } from "@/components/atoms/postCards";

interface Post {
  id: string;
  title: string;
  image: Imagen;
  info: string;
  _status: string;
  _firstPublishedAt: string;
}

const PostDetail: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      const postId = window.location.pathname.split("/").pop();

      const pageType = process.env.PAGE_TYPE || "";

      let apiUrl, query;

      switch (pageType) {
        case "kanvas":
          apiUrl = "https://graphql.datocms.com/";
          query = `
            query {
              kanvasPost(filter: { id: { eq: "${postId}" } }) {
                id
                title
                info
                image{url}
                _status
                _firstPublishedAt
              }
            }
          `;
          break;
        case "salesAssist":
          apiUrl = "https://graphql.salesassist.com/";
          query = `
            query {
              salesPost(filter: { id: { eq: "${postId}" } }) {
                id
                title
                info
                image{url}
                _status
                _firstPublishedAt
              }
            }
          `;
          break;
        case "mctekk":
          apiUrl = "https://graphql.mctekk.com/";
          query = `
            query {
              mctekkPost(filter: { id: { eq: "${postId}" } }) {
                id
                title
                info
                image{url}
                _status
                _firstPublishedAt
              }
            }
          `;
          break;
        case "gewaer":
          apiUrl = "https://graphql.kanvas.com/";
          query = `
            query {
              gewaerPost(filter: { id: { eq: "${postId}" } }) {
                id
                title
                info
                image{url}
                _status
                _firstPublishedAt
              }
            }
          `;
          break;
        default:
          console.log("PAGE_TYPE not recognized");
          console.log(pageType)
          return;
      }

      try {
        const response = await api.post(
          apiUrl,
          { query: query },
          {
            headers: { Authorization: `2a23696ee4a5978719f9205c429acb` },
            timeout: 5000,
          }
        );

        setPost(response.data.data[`${pageType}Post`]);
        console.log(pageType);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };
    fetchPostDetail();
  }, []);

  return (
    <div className="w-fit mx-auto justify-center">
      {post ? (
        <>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-2">ID: {post.id}</p>
          <p className="text-gray-600 mb-2">Status: {post._status}</p>
          <small className="text-gray-600 block mb-4">
            First Published At:{" "}
            {new Date(post._firstPublishedAt).toLocaleDateString()}
          </small>
          <div className="mb-8">
            <Image
              alt="ss"
              src={post.image.url}
              width={800}
              height={500}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          <p className="text-lg leading-relaxed mb-8">{post.info}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetail;
