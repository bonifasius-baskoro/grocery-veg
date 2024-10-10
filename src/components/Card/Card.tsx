import Image from "next/image";
import React, { FC } from "react";
import AddButton from "./AddButton";
import { Product } from "@/app/types/project";

interface CardProps  {
  data: Product;
  isLoading: boolean;

}

const Card: FC<CardProps> = ({ data, isLoading }) => {
  return (
    <div className="bg-[#F9F8F6] min-w-[167px] min-h-[242px] items-center px-3 rounded-xl">
      {!isLoading ? (
        <>
          <div className="pt-2">
            <Image src={data.imageUrl} width="145" height="113" alt="garlic" />
          </div>
          <h1 className="text-2xl">{(data.price * data.weight).toFixed(2) + "$"}</h1>
          <h2 className="text-xl font-light"> {data.name}</h2>
          <AddButton />
        </>
      ) : (
        <>
          <h1 className="text-black">loading</h1>
        </>
      )}
    </div>
  );
};

export default Card;
