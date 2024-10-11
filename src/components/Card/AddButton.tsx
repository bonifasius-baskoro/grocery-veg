"use client";

import React, { FC, useEffect, useState } from "react";

interface AddButtonProps{
    inCart:boolean;
    quota:number;
    weight:number;
    increment:number;

}
const AddButton: FC<AddButtonProps> = ({inCart, quota ,weight,increment}) => {
  
  return (
    <div className="py-4">
      {inCart ? (
        <div className="flex justify-between">
          <div className="rounded-full border border-gray-500 text-center flex items-center justify-center bg-black">
            <h1 className="text-center mx-2 text-white">-</h1>
          </div>
            <h1>
                {(quota/1000).toFixed(2)} kg
            </h1>
          <button  
          className="rounded-full border border-gray-500 text-center flex items-center justify-center bg-black">
            <h1 className="text-center mx-2 text-white">+</h1>
          </button>
        </div>
      ) : (
        <div className="flex justify-between">
          <h1>{(weight/1000).toFixed(2)} kg</h1>
          <div className="rounded-full border border-gray-500 text-center flex items-center justify-center">
            <h1 className="text-center mx-2">+</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddButton;
