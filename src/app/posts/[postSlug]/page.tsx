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
  console.log(id)
  const response = await api.post(
    "https://graphql.datocms.com/",
    { query: `            query {
      mctekkPost(filter: { slug: { eq: "${id}" } }) {
        id
        title
        subdesc
        info{
          blocks
          links
          value
          __typename

        }
        image{url}
        _status
        _firstPublishedAt
      }
    }` },
    {
      headers: { Authorization: `2a23696ee4a5978719f9205c429acb` },
      timeout: 5000,
    })
    console.log(response.data.data.mctekkPost.title)
    const previousImages = response.data.data.mctekkPost.image.url
    console.log(response.data.data.mctekkPost)

  return {
    title: response.data.data.mctekkPost.title,
    description:response.data.data.mctekkPost.subdesc,
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
