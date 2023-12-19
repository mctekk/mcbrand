"use client"
import { useEffect, useState } from "react";
import api from "@/model/api/dato-cms/data";
import { Imagen } from "@/components/atoms/postCards";

interface Post {
  id: string;
  title: string;
  subdesc?:string
  info: string;
  image: Imagen;
  _status: string;
  _firstPublishedAt: string;
}

const useKanvasPosts = () => {
  const [kposts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchKanvasPosts = async () => {
      try {
        const response = await api.post(
          "https://graphql.datocms.com/",
          {
            query: `
              query {
                  allKanvasPosts {
                      id
                      title
                      subdesc
                      info
                      image{url}
                      _status
                      _firstPublishedAt
                    }
              }
            `,
          },
          {
            headers: {
              Authorization: `2a23696ee4a5978719f9205c429acb`,
            },
          }
        );
        setPosts(response.data.data.allKanvasPosts);

      } catch (error) {
        console.error("Error fetching Kanvas posts:", error);
      }
    };

    fetchKanvasPosts();
  }, []);

  return { kposts };
};

export default useKanvasPosts;
