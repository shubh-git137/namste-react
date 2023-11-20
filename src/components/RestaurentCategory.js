import ItemList from "./ItemList";
import { useState } from "react";

const RestaurentCategory = ({ data,showItems,setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(!showItems)
  };

  return (
    <div className="w-6/12 mx-auto my-3 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data?.title} ({data.itemCards.length})
        </span>
        <span className="">{showItems ? "⌃" : "⌄"}</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurentCategory;
