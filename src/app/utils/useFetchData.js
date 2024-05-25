import { useEffect, useState } from "react";
import { RES_LIST_URL, RES_URL } from "./constant";

const useFetchData = () => {
  const getRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState([]);

    useEffect(() => {
      fetchMenu();
    }, []);

    const fetchMenu = async () => {
      const data = await fetch(RES_URL + resId);
      const jsonData = await data.json();
      setResMenu(jsonData.data);
    };

    return resMenu;
  };

  const getRestaurantList = () => {
    const [resData, setResData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(RES_LIST_URL);
      const jsonData = await data.json();
      setResData(
        jsonData?.data?.cards[1]?.card.card.gridElements.infoWithStyle
          .restaurants
      );
    };
    return resData;
  };
  return { getRestaurantList, getRestaurantMenu };
};

export default useFetchData;
