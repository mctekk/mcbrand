import React from "react";
import PageClient from "./client";
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

      return {
        title: "Gewaer",
        description: "Lanza una plataforma para tu negocio que le permita a tu equipo de ventas ingresar nuevos pedidos y clientes potenciales. Gewaer permitirá a los clientes ver actualizaciones del progreso de sus proyectos o cargar los documentos necesarios para finalizar las tareas.",
        openGraph: {
          images: [],
        },
      };
  }


export default function Post({ params, searchParams }: Props) {
  return (
    <div>
      <PageClient></PageClient>
    </div>
  );
}
