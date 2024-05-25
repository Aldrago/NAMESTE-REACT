import { useSelector } from "react-redux";
import SubCatogory from "./SubCatogory";

const Cart = () => {
  console.log("carts");
  const items = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <div className="text-2xl font-bold">Cart</div>
      <div className="w-6/12 m-auto">
        <SubCatogory data={items} showButton={false} />
      </div>
    </div>
  );
};

export default Cart;
