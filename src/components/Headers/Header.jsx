import React from 'react';
import logo from '../../../images/ema-jhon.png'

const Header = () => {
    return (
        <div>
            <div className="flex  font-bold justify-around items-center p-3 ">
                <img className="w-32" src={logo} alt="" />
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