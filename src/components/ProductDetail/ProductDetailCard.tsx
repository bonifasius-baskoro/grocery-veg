import { Product, ProductSelectProviderType } from "@/app/types/project";
import { useProduct } from "@/hooks/useProduct";
import { ProductSelectContext } from "@/utils/provider/ProductSelectProvider";
import Image from "next/image";
import React, { FC, useContext, useEffect, useState } from "react";

const ProductDetailCard: FC = () => {
  const {
    activeProductID,
    hasNext,
    hasPrev,
    navigateProduct,
    setActiveProduct,
    clearActiveProduct
  } = useContext(ProductSelectContext) as ProductSelectProviderType;
  const [activeProductData, setActiveProductData] = useState<Product>();
  const { getProductByID } = useProduct("");


  useEffect(() => {
    if (activeProductID !== undefined) {
      setActiveProductData(() => getProductByID(activeProductID.toString()));
    }
  }, []);

  useEffect(() => {
    
    if (activeProductID !== undefined) {
      setActiveProductData(() => getProductByID(activeProductID.toString()));
    }
  }, [activeProductID]);

  return (
    <div onClick={()=>clearActiveProduct()} className="h-screen text-center w-screen fixed top-0 bg-black bg-opacity-50 flex items-end">
      <div onClick={(e)=> e.stopPropagation()} className="h-[90%] w-full bg-white relative bottom-0 rounded-t-[50px] flex flex-col items-center">
        {
            hasNext? (<button onClick={() => navigateProduct("next")} className="text-black">
            next
          </button>) : ""
        }
        {
            hasPrev? (<button onClick={() => navigateProduct("prev")}>prev</button>) : ""
        }
        
        <div> button -</div>
        <div
          style={{ width: "80%", height: "60%", position: "relative" }}
          className="pt-6"
        >
          <Image
            alt="beetles"
            src="/products/garlic.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h1 className="text-black text-2xl">{activeProductData?.name}</h1>
          <div>{activeProductData?.weight}</div>
        </div>
        <div>metadata</div>
        <div>add button</div>
        <div>cart button</div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
