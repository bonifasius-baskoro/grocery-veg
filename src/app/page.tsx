"use client";

import Card from "@/components/Card/Card";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { CartItem, Product } from "./types/project";
import { useProduct } from "@/hooks/useProduct";
import CategoryButton from "@/components/CategoryButton";
import { useCart } from "@/hooks/useCart";

const getCategoryProduct = (data: Product[]): string[] => {
  const arrayStr = new Set<string>();
  try {
    data.forEach((item) => arrayStr.add(item.category));
  } catch (e) {
    console.error(e);
  }
  return Array.from(arrayStr);
};

const checkItemInCart = (data:CartItem[]|undefined,productName:String) =>{
  if(!data){
    return false;
  }
  return data.some(e=> e.product.name === productName);
}

const getItemCart= (data:CartItem[]|undefined, productName:String) =>{
  if(!data || data == undefined){
    return undefined;
  }
  return data.find(e=> e.product.name === productName) as CartItem;
}

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const { data, isLoading, isError } = useProduct(search);
  const {data:cartData, isLoading:isLoadingCart,isError:isErrorCart} = useCart();
  const [category, setCategory] = useState<string>("all");

  const categoryProduct = useMemo(() => getCategoryProduct(data || []), [data]);

  useEffect(() => {
    console.log(JSON.stringify(categoryProduct));
  }, [categoryProduct]);

  return (
    <div className="bg-white">
      <div className="mt-10 mb-4">
        <h1 className="text-xl font-medium">Vegetables</h1>
      </div>
      <div>
        <CategoryButton categoryArr={categoryProduct} setCategory={setCategory} activeCategory={category}/>
      </div>
      <section className="flex justify-center px-2">
        <div className=" px-2  w-full" id="cardContainer">
          {category === "all" ? (
            categoryProduct.map((categoryProd) => (
              <div key={categoryProd}>
                <h1 className="text-3xl my-4"> {categoryProd}</h1>
                <div className="grid grid-cols-2 gap-2">
                  {data
                    ?.filter((product) => product.category === categoryProd)
                    .map((product) => (
                      <Card
                        key={product.id}
                        isLoading={isLoading}
                        data={product}
                        isInCart = {checkItemInCart(cartData,product.name)}
                        cartData = {getItemCart(cartData,product.name)}
                      />
                    ))}
                </div>
              </div>
            ))
          ) : (
            <div className="grid grid-cols-2 gap-2">
                  {data
                    ?.filter((product) => product.category === category)
                    .map((product) => (
                      <Card
                        key={product.id}
                        isLoading={isLoading}
                        data={product}
                        isInCart = {checkItemInCart(cartData,product.name)}
                        cartData = {getItemCart(cartData,product.name)}
                        
                      />
                    ))}
                </div>
          )}
        </div>
      </section>
    </div>
  );
}
