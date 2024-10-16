"use client";

import {  ProductSelectProviderType } from "@/app/types/project";
import { useProduct } from "@/hooks/useProduct";
import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";

export const ProductSelectContext = createContext<
  ProductSelectProviderType | undefined
>(undefined);

const ProductSelectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activeProductID, setActiveProductID] = useState<number | undefined>(
    undefined
  );
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [hasPrev, setHasPrev] = useState<boolean>(false);
  const [productOrder, setProductOrder] = useState<number[]>([]);
  const { data, isLoading, isError } = useProduct("");
  const getProductOrder = () => {
    if (isLoading || isError || data === undefined) {
      return [];
    }
    const productIDOrder = new Set<number>([]);
    for (let i = 0; i < data?.length; i++) {
      productIDOrder.add(parseInt(data[i].id));
    }
    return Array.from(productIDOrder).sort(function (a, b) {
      return a - b;
    });
  };

  const setActiveProduct = (id: string | undefined) => {
    if (id == undefined) {
      setActiveProductID(undefined);
      return;
    }
    try {
      setActiveProductID(parseInt(id));
    } catch (e) {
      console.error(e);
    }
  };

  const clearActiveProduct = () => {
    setActiveProduct(undefined);
  };

  const navigateProduct = (params: "next" | "prev") => {
    if (params === "next" && activeProductID != undefined) {
      const indexNext = productOrder.indexOf(activeProductID);
      console.log(JSON.stringify(productOrder), indexNext);
      setActiveProductID(productOrder[indexNext + 1]);
    } else if (params === "prev" && activeProductID != undefined) {
      const indexPrev = productOrder.indexOf(activeProductID);
      setActiveProductID(productOrder[indexPrev - 1]);
    }
  };

  useEffect(() => {
    setProductOrder(getProductOrder());
  }, [isLoading, isError]);

  useEffect(() => {
    if (activeProductID !== undefined) {
      if (productOrder.indexOf(activeProductID) != productOrder.length - 1) {
        setHasNext(true);
      } else {
        setHasNext(false);
      }

      if (productOrder.indexOf(activeProductID) == 0) {
        setHasPrev(false);
      } else {
        setHasPrev(true);
      }
    }
  }, [activeProductID]);

  return (
    <ProductSelectContext.Provider
      value={{
        activeProductID,
        hasNext,
        hasPrev,
        navigateProduct,
        setActiveProduct,
        clearActiveProduct
      }}
    >
      {children}
    </ProductSelectContext.Provider>
  );
};

export default ProductSelectProvider;
