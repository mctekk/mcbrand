import React from "react";
import PostClient from "./client";
import { Metadata, ResolvingMetadata } from "next";
import api from "@/model/api/dato-cms/data";
type Props = {
  params: { postSlug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.postSlug;
  console.log(id);
  const pageType = process.env.NEXT_PUBLIC_PAGE_TYPE || "";
  let response;
  switch (pageType) {
    case "mctekk":
      response = await api.post(
        "https://graphql.datocms.com/",
        {
          query: `            query {
        mctekkPost(filter: { slug: { eq: "${id}" } }) {
          title
          subdesc
          image{url}
    
        }
      }`,
        },
        {
          headers: { Authorization: `2a23696ee4a5978719f9205c429acb` },
          timeout: 5000,
        }
      );
      break;
    case "gewaer":
      response = await api.post(
        "https://graphql.datocms.com/",
        {
          query: `            query {
          gewaerPost(filter: { slug: { eq: "${id}" } }) {
            title
            subdesc
            image{url}
      
          }
        }`,
        },
        {
          headers: { Authorization: `2a23696ee4a5978719f9205c429acb` },
          timeout: 5000,
        }
      );
      break;
    case "kanvas":
      response = await api.post(
        "https://graphql.datocms.com/",
        {
          query: `            query {
          kanvasPost(filter: { slug: { eq: "${id}" } }) {
            title
            subdesc
            image{url}
      
          }
        }`,
        },
        {
          headers: { Authorization: `2a23696ee4a5978719f9205c429acb` },
          timeout: 5000,
        }
      );
      break;
  }

  const previousImages = response?.data.data.mctekkPost.image.url;

  return {
    title: response?.data.data.mctekkPost.title,
    description: response?.data.data.mctekkPost.subdesc,
    openGraph: {
      images: [previousImages],
    },
  };
}
export default function Post({ params, searchParams }: Props) {
  return (
    <div>
      <PostClient></PostClient>
    </div>
  );
}
