import useFetchData from "../utils/useFetchData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { getRestaurantMenu } = useFetchData();
  const resMenu = getRestaurantMenu(resId);

  if (resMenu.length === 0) {
    return <Shimmer />;
  }
console.log(resMenu);
  const { name, cuisines, avgRating, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h4>Rating - ⭐{avgRating}</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return <li key={item.card.info.id}>{item.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
