import Restaurant, { withPromotedLabel } from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import useFetchData from "../utils/useFetchData";

const Content = () => {
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useNetworkStatus();
  const { getRestaurantList } = useFetchData();
  const resData = getRestaurantList();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const RestaurantCardsPromoted = withPromotedLabel(Restaurant);

  if (!onlineStatus) {
    return <h1>Please check your Internet!!</h1>;
  }

  useEffect(() => {
    setFilteredRestaurants(resData);
  }, [resData]);

  if (filteredRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="flex">
        <div>
          <input
            className="border border-gray-600 m-4"
            type="text"
            data-testid="searchText"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button
            className="px-2 py-1 bg-green-400 rounded"
            data-testid="searchBtn"
            onClick={() =>
              setFilteredRestaurants(() =>
                resData.filter((res) =>
                  res?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLocaleLowerCase())
                )
              )
            }
          >
            Search
          </button>
        </div>
      </div>
      <h2 className="m-4 text-3xl font-bold">Restaurant list</h2>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((item) => (
          <Link key={item.info.id} to={"/restaurant/" + item.info.id}>
            {item.info.avgRating >= 4.4 ? (
              <RestaurantCardsPromoted resData={item.info} />
            ) : (
              <Restaurant resData={item.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
