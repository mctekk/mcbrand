// pages/posts/[postId].tsx
"use client";

import React, { useEffect, useState } from "react";
import api from "@/model/api/dato-cms/data";
import { Imagen } from "@/components/atoms/postCards";
import { KanvasMenu } from "@/components/molecules/kanvas-menu";
import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";
import { GMenu } from "@/components/molecules/gewaer-menu";
import { StructuredText, renderNodeRule } from "react-datocms";
import McMenu from "@/components/molecules/mc-menu";
import Head from "next/head";
import { isCode } from "datocms-structured-text-utils";
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface Post {
  id: string;
  title: string;
  image?: Imagen;
  subdesc?: string;
  info: any;
  _status: string;
  _firstPublishedAt: string;
  code?: string;
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
                  __typename

                }
                code
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
        {post ? (
          <Head>
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.subdesc} />
            {post.image ? (
              <meta property="og:image" content={post.image.url} />
            ) : (
              ""
            )}
          </Head>
        ) : (
          ""
        )}
        <Header
          menu={<KanvasMenu />}
          className="bg-sky-600"
          logo="/images/kanvasL.svg"
          iconColor="text-white"
        />
        <div className="w-fit mx-auto justify-center ">
          {post ? (
            <>
              <div className="section prose-h1:">
                <small className="text-gray-800 block font-bold mb-4 text-center">
                  First Published At:{" "}
                  {new Date(post._firstPublishedAt).toLocaleDateString()}
                </small>
                <p className=" text-[2rem] font-bold mb-4 text-center">
                  {post.title}
                </p>

                <div className="mb-8 flex justify-center">
                  {post.image ? (
                    <img
                      alt="ss"
                      src={post.image.url}
                      className="object-cover rounded-lg shadow-lg w-7/12 "
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className="xl:text-justify xl:w-7/12 mx-auto  prose prose-lg prose-blue  "
                  id="main-content"
                >
                  <article key={post.id}>
                    <StructuredText data={post.info} />
                  </article>
                </div>
              </div>
            </>
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
        {post ? (
          <Head>
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.subdesc} />
            {post.image ? (
              <meta property="og:image" content={post.image.url} />
            ) : (
              ""
            )}
          </Head>
        ) : (
          ""
        )}

        <Header
          menu={<McMenu></McMenu>}
          className="bg-black"
          logo="/images/McLogo.svg"
          iconColor="text-white"
        />
        <div className="w-fit mx-auto justify-center ">
          {post ? (
            <>
              <div className="section">
                <small className="text-mctekk-100 block font-semibold text-[16px] mb-4 text-center">
                  First Published At:{" "}
                  {new Date(post._firstPublishedAt).toLocaleDateString()}
                </small>
                <div className="w-3/4 mx-auto ">
                  <p className=" md:text-[2.9rem] text-[1.6rem] font-bold mb-4 text-center">
                    {post.title}
                  </p>
                  <p className=" md:text-[1.5rem] text-[1]  mb-4 text-center">
                    {post.subdesc}
                  </p>
                </div>
                <div className="mb-8 flex justify-center">
                  {post.image ? (
                    <img
                      alt="ss"
                      src={post.image.url}
                      className="object-cover rounded-lg shadow-lg w-7/12 "
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className=" xl:w-full mx-auto  max-w-3xl prose  prose-lg prose-blue  "
                  id="main-content"
                >
                  <div key={post.id}>
                    <StructuredText
                      data={post.info}
                      customNodeRules={[
                        renderNodeRule(isCode, ({ node, key }) => {
                          return (
                            <SyntaxHighlighter
                              language={node.language || "unknown"}
                              style={a11yDark}
                              showLineNumbers={
                                node.code.split(/\n/).length > 10
                              }
                              wrapLines={true}
                              lineProps={(lineNumber: number) => ({
                                style: { display: "block" },
                                className: `line-${lineNumber}`,
                              })}
                            >
                              {node.code}
                            </SyntaxHighlighter>
                          );
                        }),
                      ]}
                    />
                  </div>
                </div>
              </div>
            </>
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
        {post ? (
          <Head>
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.subdesc} />
            {post.image ? (
              <meta property="og:image" content={post.image.url} />
            ) : (
              ""
            )}
          </Head>
        ) : (
          ""
        )}
        <Header
          menu={<GMenu />}
          className="bg-gewaer-100"
          logo="/images/Gewaer.svg"
          iconColor="text-white"
        />
        <div className="mx-auto justify-center  ">
          {post ? (
            <>
              <div className="section">
                <small className="text-gewaer-100 block font-semibold text-[16px] mb-4 text-center">
                  First Published At:{" "}
                  {new Date(post._firstPublishedAt).toLocaleDateString()}
                </small>
                <div className="w-3/4 mx-auto ">
                  <p className=" md:text-[2.9rem] text-[1.6rem] font-bold mb-4 text-center">
                    {post.title}
                  </p>
                  <p className=" md:text-[1.5rem] text-[1]  mb-4 text-center">
                    {post.subdesc}
                  </p>
                </div>
                <div className="mb-8 flex justify-center">
                  {post.image ? (
                    <img
                      alt="ss"
                      src={post.image.url}
                      className="object-cover rounded-lg shadow-lg w-7/12 "
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className=" xl:w-full mx-auto  max-w-3xl prose  prose-lg prose-blue  "
                  id="main-content"
                >
                  <div key={post.id}>
                    <StructuredText
                      data={post.info}
                      customNodeRules={[
                        renderNodeRule(isCode, ({ node, key }) => {
                          return (
                            <SyntaxHighlighter
                              language={node.language || "unknown"}
                              style={a11yDark}
                              showLineNumbers={
                                node.code.split(/\n/).length > 10
                              }
                              wrapLines={true}
                              lineProps={(lineNumber: number) => ({
                                style: { display: "block" },
                                className: `line-${lineNumber}`,
                              })}
                            >
                              {node.code}
                            </SyntaxHighlighter>
                          );
                        }),
                      ]}
                    />
                  </div>
                </div>
              </div>
            </>
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
