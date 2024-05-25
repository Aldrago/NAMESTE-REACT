import { useState } from "react";
import SubCatogory from "./SubCatogory";

const RestaurantCatogory = ({data, index, setShowIndex, show}) => {
  const onClickHandler = () => {
    show ? setShowIndex(-1) : setShowIndex(index);
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-slate-100">
      <div className="p-4 flex justify-between" onClick={onClickHandler}>
        <span>{data.title} ({data.itemCards.length})</span>
        <span>{show ? "🔼" : "🔽"}</span>
      </div>

      {show && <SubCatogory data={data.itemCards} showButton={true} />}
    </div>
  );
};

export default RestaurantCatogory;
