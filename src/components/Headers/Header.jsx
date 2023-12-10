import React, { useContext } from "react";
import logo from "../../../images/ema-jhon.png";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user ,logOut } = useContext(AuthContext);
  const handleSignOut=()=>{
    logOut().then()
  }
  return (
    <div className="">
      <div className="flex font-bold justify-around items-center p-3 sticky top-0 ">
        <img className="w-32" src={logo} alt="" />
        <div className="flex items-center">
          <Link className="mx-6" href="/">
            Shop
          </Link>
          <Link className="mx-6" to="/orders">
            Order
          </Link>
          <Link className="mx-6" to="">
            Manage Inventory
          </Link>
          {user ? (
            <div className="flex gap-x-3 items-center">
              <p className="text-red-200">Welcome "{user.displayName}"</p> <button onClick ={handleSignOut} className="btn btn-warning">Signout</button>
            </div>
          ) : (
            <Link className="mx-6" to="/login">
              Login/SignUp
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
