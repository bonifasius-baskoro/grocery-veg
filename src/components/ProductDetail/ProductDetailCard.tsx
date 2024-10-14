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
    clearActiveProduct,
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
    <div
      onClick={() => clearActiveProduct()}
      className="h-screen text-center w-screen fixed top-0 bg-black bg-opacity-50 flex items-end"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-[90%] w-full bg-white relative bottom-0 rounded-t-[50px] flex flex-col items-center"
      >
        {hasNext ? (
          <button
            onClick={() => navigateProduct("next")}
            className="text-black"
          >
            next
          </button>
        ) : (
          ""
        )}
        {hasPrev ? (
          <button onClick={() => navigateProduct("prev")}>prev</button>
        ) : (
          ""
        )}

        <div> button -</div>
        <div
          style={{ width: "80%", height: "50%", position: "relative" }}
          className="pt-6"
        >
          <Image
            alt="beetles"
            src={activeProductData?.imageUrl}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h1 className="text-black text-2xl">{activeProductData?.name}</h1>
          <div>
            <h1>in {activeProductData?.metadata.increment} grams</h1>
          </div>
        </div>
        <div className="flex justify-between py-2 gap-6">
          <div>
            <h1>{activeProductData?.metadata.calorie}</h1>
            <h2  className="text-gray-500">calorie</h2>
          </div>
          <div>
            <h1>{activeProductData?.metadata.proteins}</h1>
            <h2 className="text-gray-500">proteins</h2>
          </div>
          <div>
            <h1>{activeProductData?.metadata.fats}</h1>
            <h2 className="text-gray-500">fats</h2>
          </div>
          <div>
            <h1>{activeProductData?.metadata.carbs}</h1>
            <h2 className="text-gray-500">carbs</h2>
          </div>
        </div>
        <div>add button</div>
        <div>cart button</div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
