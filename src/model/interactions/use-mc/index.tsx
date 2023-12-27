import { useEffect, useState } from "react";
import api from "@/model/api/dato-cms/data";
import { Imagen } from "@/components/atoms/postCards";

interface Post {
  id: string;
  title: string;
  subdesc?: string;
  slug:string
  info: string;
  image: Imagen;
  _status: string;
  _firstPublishedAt: string;
}

const useMctekkPosts = () => {
  const [mcposts, setPosts] = useState<Post[]>([]);
  const [mccurrentPage, setCurrentPage] = useState<number>(1);
  const [mctotalPages, setTotalPages] = useState<number>(1);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const postPerPage = 5;

  useEffect(() => {
    const fetchMctekkPosts = async () => {
      try {
        const response = await api.post(
          "https://graphql.datocms.com/",
          {
            query: `
              query {
                _allMctekkPostsMeta {
                  count
                }
                allMctekkPosts(
                  first: ${postPerPage}
                  skip: ${(mccurrentPage - 1) * postPerPage}
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
          Math.ceil(response.data.data._allMctekkPostsMeta.count / postPerPage)
        );
        setPosts(response.data.data.allMctekkPosts);
      } catch (error) {
        console.error("Error fetching Mctekk posts:", error);
      }
    };

    fetchMctekkPosts();
  }, [mccurrentPage, direction]);

  const mchandleLoadMore = (newDirection: "forward" | "backward") => {
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

  return { mcposts, mchandleLoadMore, mccurrentPage, mctotalPages };
};

export default useMctekkPosts;
