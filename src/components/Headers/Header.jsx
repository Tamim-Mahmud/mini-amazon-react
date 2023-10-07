import React from 'react';
import logo from '../../../images/ema-jhon.png'

const Header = () => {
    return (
        <div>
            <div className="flex text-3xl font-bold justify-around bg-gray-300  p-9">
                <img className="w-52" src={logo} alt="" />
                <div className="">
                    <a className="mx-6"href="">Order</a>
                    <a className="mx-6"href="">Order Review</a>
                    <a className="mx-6"href="">Manage Inventory</a>
                    <a className="mx-6"href="">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;