"use client"
import React, { act, FC, useEffect, useState } from "react";

interface CategoryButtonProps {
  categoryArr: string[];
  activeCategory: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryButton: FC<CategoryButtonProps> = ({
  categoryArr,
  setCategory,
  activeCategory
}) => {
    const [categoryActive, setCategoryActive] = useState<string>(activeCategory);

    useEffect(()=>(
        setCategoryActive(activeCategory)
    ),[activeCategory]);

    
  return (
    <div className="flex justify-between overflow-x-scroll mb-4 py-2" >
      <button
        onClick={() => setCategory("all")}
        className={`px-2 py-1 ${categoryActive === "all" ? "border-black border-b-4  bg-slate-400" : "border-b-2 border-transparent"}` }
        aria-pressed={categoryActive === "all"}
      >
        <h1>All</h1>
      </button>
      {categoryArr.map((category) => (
        <button
          key={category}
          onClick={() => setCategory(category)}
          className={`px-2 py-1 ${categoryActive === category ? "border-b-2 border-black bg-slate-400" : "border-b-2 border-transparent"}`}
          aria-pressed={categoryActive === category}
        >
          <h1 className="text-nowrap">{category}</h1>
        </button>
      ))}
    </div>
  );
};

export default CategoryButton;