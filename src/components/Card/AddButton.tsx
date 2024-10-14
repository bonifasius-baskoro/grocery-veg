"use client";

import { CartItem, Product } from "@/app/types/project";
import { useCart } from "@/hooks/useCart";
import React, { FC } from "react";

interface AddButtonProps {
  element_id:string;
  inCart: boolean;
  quota: number;
  weight: number;
  increment: number;
  data: Product;
  id?: string;
}

const AddButton: FC<AddButtonProps> = ({
  element_id,
  inCart,
  quota,
  weight,
  increment,
  data,
  id,
}) => {
  const { addCartMutation, addQuotaMutation,removeCartItemMutation } = useCart();
  const addItem = async (isAdd: boolean) => {
    

    if (isAdd) {
        const quotaAfterIncrement = !inCart ? weight : quota + increment;
      if (!inCart) {
        const productToAdd: CartItem = {
          product: data,
          quota: quotaAfterIncrement,
        };

        await addCartMutation(productToAdd);
      } else {
        console.log("here called");
        const productToAdd: CartItem = {
          product: data,
          quota: quotaAfterIncrement,
          id: id,
        };
        await addQuotaMutation(productToAdd);
      }

      console.log("added");}

    else{
        if(quota === weight){
            const productToAdd: CartItem = {
                product: data,
                quota: quota,
                id: id,
              };
            await removeCartItemMutation(productToAdd);
        }
        else{
            const productToAdd: CartItem = {
                product: data,
                quota: quota-increment,
                id: id,
              };
              await addQuotaMutation(productToAdd);
        }
        console.log("removed")
    }
  };

  return (
    <div id={element_id} className="py-4">
      {inCart ? (
        <div className="flex justify-between">
          <button
            onClick={()=>addItem(false)}
            className="rounded-full border border-gray-500 text-center flex items-center justify-center bg-black"
          >
            <h1 className="text-center mx-2 text-white">-</h1>
          </button>
          <h1>{(quota / 1000).toFixed(2)} kg</h1>
          <button
            onClick={() => addItem(true)}
            className="rounded-full border border-gray-500 text-center flex items-center justify-center bg-black"
          >
            <h1 className="text-center mx-2 text-white">+</h1>
          </button>
        </div>
      ) : (
        <div className="flex justify-between">
          <h1>{(weight / 1000).toFixed(2)} kg</h1>
          <button
            onClick={() => addItem(true)}
            className="rounded-full border border-gray-500 text-center flex items-center justify-center"
          >
            <h1 className="text-center mx-2">+</h1>
          </button>
        </div>
      )}
    </div>
  );
};

export default AddButton;
