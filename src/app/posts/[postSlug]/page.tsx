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
    case "gewaer":
    case "kanvas":
      try {
        response = await api.post(
          "https://graphql.datocms.com/",
          {
            query: `
              query {
                ${pageType}Post(filter: { slug: { eq: "${id}" } }) {
                  title
                  subdesc
                  image { url }
                }
              }
            `,
          },
          {
            headers: { Authorization: `2a23696ee4a5978719f9205c429acb` },
            timeout: 5000,
          }
        );

        const previousImages =
          response.data?.data?.[`${pageType}Post`]?.image?.url;

        return {
          title: response.data?.data?.[`${pageType}Post`]?.title || "",
          description: response.data?.data?.[`${pageType}Post`]?.subdesc || "",
          openGraph: {
            images: previousImages ? [previousImages] : [],
          },
        };
      } catch (error) {
        console.error("Error fetching post details:", error);
        return {
          title: "",
          description: "",
          openGraph: {
            images: [],
          },
        };
      }
    default:
      console.log("PAGE_TYPE not recognized");
      console.log(pageType);
      return {
        title: "",
        description: "",
        openGraph: {
          images: [],
        },
      };
  }
}

export default function Post({ params, searchParams }: Props) {
  return (
    <div>
      <PostClient></PostClient>
    </div>
  );
}
