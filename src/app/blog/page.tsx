"use client";
import React from "react";
import useKanvasPosts from "@/model/interactions/use-kanvas";
import PostCard from "@/components/atoms/postCards";
import Header from "@/components/organism/header";
import { KanvasMenu } from "@/components/molecules/kanvas-menu";
import { Footer } from "@/components/organism/sections/footer";
import { GMenu } from "@/components/molecules/gewaer-menu";
import useGewaerPosts from "@/model/interactions/use-gewaer";
import BlogCards from "@/components/molecules/blog-cards";
import McMenu from "@/components/molecules/mc-menu";
import { Menu } from "@headlessui/react";
import useMctekkPosts from "@/model/interactions/use-mc";

function Home() {
  const { gposts, ghandleLoadMore, gcurrentPage, gtotalPages } =
    useGewaerPosts();

  const { kposts, handleLoadMore, currentPage, totalPages } = useKanvasPosts();
  const { mcposts, mchandleLoadMore, mccurrentPage, mctotalPages } = useMctekkPosts();

  if (process.env.NEXT_PUBLIC_PAGE_TYPE == "kanvas") {
    return (
      <div>
        <Header
          menu={<KanvasMenu />}
          className="bg-sky-600"
          logo="/images/kanvasL.svg"
          iconColor="text-white"
        />
        <BlogCards
          posts={kposts}
          handleLoadMore={handleLoadMore}
          currentPage={currentPage}
          totalPages={totalPages}
        ></BlogCards>
        <Footer kanvas></Footer>
      </div>
    );
  }
  if (process.env.NEXT_PUBLIC_PAGE_TYPE == "gewaer") {
    return (
      <div>
        <Header
          menu={<GMenu />}
          className="bg-gewaer-100"
          logo="/images/Gewaer.svg"
          iconColor="text-white"
        />
        <BlogCards
          posts={gposts}
          handleLoadMore={ghandleLoadMore}
          currentPage={gcurrentPage}
          totalPages={gtotalPages}
        ></BlogCards>
        <Footer gewaer></Footer>
      </div>
    );
  }
  if (process.env.NEXT_PUBLIC_PAGE_TYPE == "mctekk") {
    return (
      <div>
        <Header
          menu={<McMenu></McMenu>}
          className="bg-black"
          logo="/images/McLogo.svg"
          iconColor="text-white"
        />
        <BlogCards
          posts={mcposts}
          handleLoadMore={mchandleLoadMore}
          currentPage={mccurrentPage}
          totalPages={mctotalPages}
        ></BlogCards>
        <Footer mctekk></Footer>
      </div>
    );
  }
  if (process.env.NEXT_PUBLIC_PAGE_TYPE == "salesAssist") {
    return (
      <div>
        <Header
          menu={<Menu></Menu>}
          logo="/images/logo.png"
          iconColor="text-black"
        />
        ,
        <BlogCards
          posts={kposts}
          handleLoadMore={handleLoadMore}
          currentPage={currentPage}
          totalPages={totalPages}
        ></BlogCards>
        <Footer sales></Footer>
      </div>
    );
  }
}

export default Home;
