import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [authBtn, setAuthBtn] = useState("login");

  return (
    <div className="flex justify-between bg-yellow-100">
      <div className="w-32">
        <img src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-xl"><Link to="/">Home</Link></li>
          <li className="px-4 text-xl"><Link to="/about">About us</Link></li>
          <li className="px-4 text-xl"><Link to="/contact">Contact us</Link></li>
          <li className="px-4 text-xl"><Link>Cart</Link></li>
          <li className="px-4 py-1 text-lg bg-gray-100 rounded-lg">
            <button className="login-btn"
              onClick={() => {
                authBtn === "login"
                  ? setAuthBtn("logout")
                  : setAuthBtn("login");
              }}
            >
              {authBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
