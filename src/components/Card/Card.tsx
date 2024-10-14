import Image from "next/image";
import React, { FC, useContext, useEffect } from "react";
import AddButton from "./AddButton";
import { CartItem, Product, ProductSelectProviderType } from "@/app/types/project";
import { ProductSelectContext } from "@/utils/provider/ProductSelectProvider";

interface CardProps {
  data: Product;
  isLoading: boolean;
  isInCart: boolean;
  cartData: CartItem | undefined;
}

const Card: FC<CardProps> = ({ data, isLoading, isInCart, cartData }) => {
  const { activeProductID, hasNext,hasPrev,navigateProduct, setActiveProduct} = useContext(ProductSelectContext) as ProductSelectProviderType;
  return (
    <button onClick={()=>setActiveProduct(data.id)}>
      <div className="bg-[#F9F8F6] hover:bg-slate-200 min-w-[167px] min-h-[242px] items-center px-3 rounded-xl ">
        {!isLoading ? (
          <>
            <div className="pt-2 h-[153px]">
              <Image
                src={data.imageUrl}
                className="object-fill"
                width="145"
                height="145"
                alt="garlic"
              />
            </div>
            <h1 className="text-2xl">
              {(data.price * data.weight).toFixed(2) + "$"}
            </h1>
            <h2 className="text-xl font-light"> {data.name}</h2>
            <AddButton
              inCart={isInCart}
              quota={cartData === undefined ? 0 : cartData.quota}
              weight={data.weight}
              increment={data.metadata.increment}
              data={data}
              id={cartData?.id}
            />
          </>
        ) : (
          <>
            <h1 className="text-black">loading</h1>
          </>
        )}
      </div>
    </button>
  );
};

export default Card;
