// hooks/useKanvasPosts.ts
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

const useGewaerPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchGewaerPosts = async () => {
      try {
        const response = await api.post(
          "https://graphql.datocms.com/",
          {
            query: `
              query {
                  allGewaerPosts {
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
        setPosts(response.data.data.allGewaerPosts);
      } catch (error) {
        console.error("Error fetching Gewaer posts:", error);
      }
    };

    fetchGewaerPosts();
  }, []);

  return { posts };
};

export default useGewaerPosts;
