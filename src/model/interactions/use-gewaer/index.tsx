import { useEffect, useState } from "react";
import api from "@/model/api/dato-cms/data";
import { Imagen } from "@/components/atoms/postCards";

interface Post {
  id: string;
  title: string;
  slug:string
  subdesc?: string;
  info: string;
  image: Imagen;
  _status: string;
  _firstPublishedAt: string;
}

const useGewaerPosts = () => {
  const [gposts, setPosts] = useState<Post[]>([]);
  const [gcurrentPage, setCurrentPage] = useState<number>(1);
  const [gtotalPages, setTotalPages] = useState<number>(1);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const postPerPage = 1;

  useEffect(() => {
    const fetchGewaerPosts = async () => {
      try {
        const response = await api.post(
          "https://graphql.datocms.com/",
          {
            query: `
            query {
              _allGewaerPostsMeta {
                count
              }
              allGewaerPosts(
                first: ${postPerPage}
                skip: ${(gcurrentPage - 1) * postPerPage}
              ) {
                id
                title
                slug
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
            `,
          },
          {
            headers: {
              Authorization: `2a23696ee4a5978719f9205c429acb`,
            },
          }
        );

        setTotalPages(
          Math.ceil(response.data.data._allGewaerPostsMeta.count / postPerPage)
        );
        setPosts(response.data.data.allGewaerPosts);
      } catch (error) {
        console.error("Error fetching Gewaer posts:", error);
      }
    };

    fetchGewaerPosts();
  }, [gcurrentPage, direction]);

  const ghandleLoadMore = (newDirection: "forward" | "backward") => {
    setCurrentPage((prevPage) => {
      if (newDirection === "forward") {
        setDirection("forward");
        return prevPage + 1;
      } else if (newDirection === "backward" && prevPage > 1) {
        setDirection("backward");
        return prevPage - 1;
      }
      return prevPage;
    });
  };

  return { gposts, ghandleLoadMore, gcurrentPage, gtotalPages };
};

export default useGewaerPosts;
