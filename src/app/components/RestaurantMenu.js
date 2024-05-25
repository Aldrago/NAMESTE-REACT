import { useState } from "react";
import useFetchData from "../utils/useFetchData";
import RestaurantCatogory from "./RestaurantCatogory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { getRestaurantMenu } = useFetchData();
  const resMenu = getRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(-1);

  if (resMenu.length === 0) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;
  const catogories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-4">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {catogories.map((data, index) => (
        <RestaurantCatogory
          key={data.card.card.title}
          data={data.card.card}
          index={index}
          setShowIndex={setShowIndex}
          show={showIndex === index ? true : false}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
