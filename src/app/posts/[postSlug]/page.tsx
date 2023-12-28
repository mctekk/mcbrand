// pages/posts/[postId].tsx
"use client";

import React, { useEffect, useState } from "react";
import api from "@/model/api/dato-cms/data";
import { Imagen } from "@/components/atoms/postCards";
import { KanvasMenu } from "@/components/molecules/kanvas-menu";
import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";
import { GMenu } from "@/components/molecules/gewaer-menu";
import { StructuredText } from "react-datocms";
import { isHeading, isCode } from 'datocms-structured-text-utils';
import McMenu from "@/components/molecules/mc-menu";
interface Post {
  id: string;
  title: string;
  image: Imagen;
  subdesc?: string;
  info: any;
  _status: string;
  _firstPublishedAt: string;
}

function PostDetail() {
  const [post, setPost] = useState<Post | null>(null);
  const pageType = process.env.NEXT_PUBLIC_PAGE_TYPE || "";

  useEffect(() => {
    const fetchPostDetail = async () => {
      let postSlug = window.location.pathname.split("/").pop();

      let apiUrl, query;

      switch (pageType) {
        case "kanvas":
          apiUrl = "https://graphql.datocms.com/";
          query = `
            query {
              kanvasPost(filter: { slug: { eq: "${postSlug}" } }) {
                id
                title
                subdesc
                info{
                  blocks
                  links
                  value
                }
                image{url}
                _status
                _firstPublishedAt
              }
            }
          `;
          break;
        case "salesAssist":
          apiUrl = "https://graphql.datocms.com/";
          query = `
            query {
              salesPost(filter: { slug: { eq: "${postSlug}" } }) {
                id
                title
                subdesc
                info{
                  blocks
                  links
                  value
                }
                image{url}
                _status
                _firstPublishedAt
              }
            }
          `;
          break;
        case "mctekk":
          apiUrl = "https://graphql.datocms.com/";
          query = `
            query {
              mctekkPost(filter: { slug: { eq: "${postSlug}" } }) {
                id
                title
                subdesc
                info{
                  blocks
                  links
                  value
                }
                image{url}
                _status
                _firstPublishedAt
              }
            }
          `;
          break;
        case "gewaer":
          apiUrl = "https://graphql.datocms.com/";
          query = `
            query {
              gewaerPost(filter: { slug: { eq: "${postSlug}" } }) {
                id
                title
                subdesc
                info{
                  blocks
                  links
                  value
                }
                image{url}
                _status
                _firstPublishedAt
              }
            }
          `;
          break;
        default:
          console.log("PAGE_TYPE not recognized");
          console.log(pageType);
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
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    fetchPostDetail();
  }, [pageType]);

  if (pageType === "kanvas") {
    return (
      <>
        <Header
          menu={<KanvasMenu />}
          className="bg-sky-600"
          logo="/images/kanvasL.svg"
          iconColor="text-white"
        />
        <div className="w-fit mx-auto justify-center ">
          {post ? (
            <div className="section prose-h1:">
              <small className="text-gray-800 block font-bold mb-4 text-center">
                First Published At:{" "}
                {new Date(post._firstPublishedAt).toLocaleDateString()}
              </small>
              <p className=" text-[2rem] font-bold mb-4 text-center">
                {post.title}
              </p>

              <div className="mb-8 flex justify-center">
                <img
                  alt="ss"
                  src={post.image.url}
                  className="object-cover rounded-lg shadow-lg w-7/12 "
                />
              </div>
              <div className="xl:text-justify xl:w-7/12 mx-auto  prose prose-lg prose-blue  "id='main-content' >
                <article key={post.id}>
                <StructuredText data={post.info}   />
                </article>
              </div>
            </div>
          ) : (
            <p className="p-96">Loading...</p>
          )}
        </div>
        <Footer kanvas></Footer>
      </>
    );
  }
  if (pageType === "mctekk") {
    return (
      <>
        <Header
          menu={<McMenu></McMenu>}
          className="bg-black"
          logo="/images/McLogo.svg"
          iconColor="text-white"
        />
        <div className="w-fit mx-auto justify-center ">
          {post ? (
            <div className="section">
              <small className="text-mctekk-100 block font-semibold text-[16px] mb-4 text-center">
                First Published At:{" "}
                {new Date(post._firstPublishedAt).toLocaleDateString()}
              </small>
              <div className="w-1/2 mx-auto ">
              <p className=" text-[48px] font-bold mb-4 text-center ">
                {post.title}
              </p>
              <p className=" text-[20px]  mb-4 text-center">
                {post.subdesc}
              </p>
              </div>
              <div className="mb-8 flex justify-center">
                <img
                  alt="ss"
                  src={post.image.url}
                  className="object-cover rounded-lg shadow-lg w-3/6 "
                />
              </div>
              <div className="xl:text-justify xl:w-1/2 mx-auto  prose prose-lg prose-blue  "id='main-content' >
                <article key={post.id}>
                <StructuredText data={post.info}   />
                </article>
              </div>
            </div>
          ) : (
            <p className="p-96">Loading...</p>
          )}
        </div>
        <Footer mctekk></Footer>
      </>
    );
  }
  if (pageType === "gewaer") {
    return (
      <>
        <Header
          menu={<GMenu />}
          className="bg-gewaer-100"
          logo="/images/Gewaer.svg"
          iconColor="text-white"
        />
        <div className="w-fit mx-auto justify-center  ">
          {post ? (
            <div className="section">
               <small className="text-gewaer-100 block font-semibold text-[16px] mb-4 text-center">
                First Published At:{" "}
                {new Date(post._firstPublishedAt).toLocaleDateString()}
              </small>
              <div className="w-1/2 md:mx-auto justify-center items-center ">
              <p className=" text-[2.9rem] font-bold mb-4 text-center">
                {post.title}
              </p>
              <p className=" text-[1.5rem]  mb-4 text-center">
                {post.subdesc}
              </p>
              </div>
              <div className="mb-8 flex justify-center">
                <img
                  alt="ss"
                  src={post.image.url}
                  className="object-cover rounded-lg shadow-lg w-3/6 "
                />
              </div>
              <div className="xl:text-justify xl:w-7/12 mx-auto  prose lg:prose-xl prose-lg prose-blue  "id='main-content'  >
                <article key={post.id}>
                <StructuredText data={post.info}   />
                </article>
              </div>
            </div>
          ) : (
            <p className="p-96">Loading...</p>
          )}
        </div>
        <Footer gewaer></Footer>
      </>
    );
  }

  return null;
}

export default PostDetail;
