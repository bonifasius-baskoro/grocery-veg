import Image from "next/image";
import React, { FC, useEffect } from "react";
import AddButton from "./AddButton";
import { CartItem, Product } from "@/app/types/project";

interface CardProps  {
  data: Product;
  isLoading: boolean;
  isInCart : boolean;
  cartData : CartItem|undefined;

}


const Card: FC<CardProps> = ({ data, isLoading, isInCart ,cartData}) => {
  useEffect(()=>console.log("in cart:", isInCart , "name:", data.name),[])
  return (
    <div className="bg-[#F9F8F6] min-w-[167px] min-h-[242px] items-center px-3 rounded-xl">
      {!isLoading ? (
        <>
          <div className="pt-2 h-[153px]">
            <Image src={data.imageUrl} className="object-fill" width="145" height="145" alt="garlic" />
          </div>
          <h1 className="text-2xl">{(data.price * data.weight).toFixed(2) + "$"}</h1>
          <h2 className="text-xl font-light"> {data.name}</h2>
          <AddButton inCart={isInCart} quota = {cartData=== undefined? 0 : cartData.quota} weight={data.weight} increment={data.metadata.increment}  />
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
