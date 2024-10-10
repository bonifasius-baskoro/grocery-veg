"use client";

import React, { FC, useState } from "react";

const AddButton: FC = () => {
  const [inCart, setInCart] = useState<boolean>(true);
  return (
    <div className="py-4">
      {inCart ? (
        <div className="flex justify-between">
          <div className="rounded-full border border-gray-500 text-center flex items-center justify-center bg-black">
            <h1 className="text-center mx-2 text-white">-</h1>
          </div>
            <h1>
                1.2 kg
            </h1>
          <div className="rounded-full border border-gray-500 text-center flex items-center justify-center bg-black">
            <h1 className="text-center mx-2 text-white">+</h1>
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <h1>1 kg</h1>
          <div className="rounded-full border border-gray-500 text-center flex items-center justify-center">
            <h1 className="text-center mx-2">+</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddButton;
