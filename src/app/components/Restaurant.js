import { CDN_URL } from "../utils/constant";

const Restaurant = (props) => {
  const { name, cloudinaryImageId, sla, cuisines, avgRating } = props.resData;

  return (
    <div
      className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 content-center"
      data-testid="resCard"
    >
      <img
        className="rounded-lg h-[200] w-[280]"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2 className="pt-2 font-bold truncate">{name}</h2>
      <h6 className="py-1 text-xs truncate">{cuisines.join(", ")}</h6>
      <h4 className="pt-2">{sla.deliveryTime} minutes</h4>
      <h4>⭐{avgRating}</h4>
    </div>
  );
};

export const withPromotedLabel = (Restaurant) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-1 rounded-lg bg-opacity-[0.7] ">
          Promoted
        </label>
        <Restaurant {...props} />
      </div>
    );
  };
};

export default Restaurant;
