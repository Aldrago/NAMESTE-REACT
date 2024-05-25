import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const SubCatogory = (props) => {
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {props.data?.map((item) => {
        return (
          <div
            className="my-1 p-3 flex justify-between border-b-2"
            key={item.card.info.id}
          >
            <div className="w-9/12 text-left">
              <div className="font-bold">{item.card.info.name}</div>
              <div>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
              <div className="text-xs">{item.card.info.description}</div>
            </div>
            <div className="w-2/12">
              <div className="absolute">
                {props.showButton && <button className="rounded-lg bg-black text-white p-1 mr-2 shadow-lg bg-opacity-[0.5]" onClick={() => addItemHandler(item)}>Add +</button>}
              </div>
              <img src={CDN_URL + item.card.info.imageId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubCatogory;
