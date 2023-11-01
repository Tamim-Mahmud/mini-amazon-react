import React from "react";
import logo from "../../../images/ema-jhon.png";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="flex font-bold justify-around items-center p-3 sticky top-0 ">
        <img className="w-32" src={logo} alt="" />
        <div className="">
          <Link className="mx-6" href="/">
            Shop
          </Link>
          <Link className="mx-6" to="/orders">
            Order
          </Link>
          <Link className="mx-6" to="">
            Order Review
          </Link>
          <Link className="mx-6" to="">
            Manage Inventory
          </Link>
          <Link className="mx-6" to="">
            Login
          </Link>
          
        </div>
        
      </div>
    
    </div>
  );
};

export default Header;
