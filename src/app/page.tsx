"use client"

import Card from "@/components/Card/Card";
import Image from "next/image";
import { useState } from "react";
import { Product } from "./types/project";
import { useProduct } from "@/hooks/useProduct";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const {data, isLoading, isError} = useProduct(search);

  return (
    <div className="bg-white">
      <div className="mt-10">
        <h1 className="text-xl font-medium">Vegetables</h1>
      </div>
      <section className="flex justify-center px-2">
        <div className="grid grid-cols-2 px-2 gap-2 w-full" id="cardContainer">
          {data?.map((product)=>(<Card key={product.id} isLoading={isLoading} data={product}/>))}
        </div>
      </section>
    </div>
  );
}
