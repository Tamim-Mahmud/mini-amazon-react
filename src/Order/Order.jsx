/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CardCalculate from "../components/Cards/CardCalculate";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../components/ReviewItem/ReviewItem";
import {
  deleteShoppingCart,
  getShoppingCart,
  removeFromDb,
} from "../components/Utilities/fakedb";

const Order = () => {
  let products = useLoaderData();
  const [data, setData] = useState(products);
  // const [clearCart,setClearCart]=useState([]);

  console.log(products);
  const handleDelete = (id) => {
    const newProducts = data.filter((product) => product.id != id);
    console.log(newProducts);
    setData(newProducts);
    removeFromDb(id);
  };
  const deleteCart = () => {
    setData([]);
    deleteShoppingCart();
  };

  return (
    <div className="text-black mt-20 max-w-7xl mx-auto">
      <main className="grid grid-cols-4 mt-5 z-0 gap-7">
        <div className="col-span-3 ">
          <div className="grid grid-cols-1 gap-5">
            {data.map((product) => (
              <ReviewItem
                key={product.id}
                product={product}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
        <div className="text-center">
          <CardCalculate cart={data} deleteCart={deleteCart}>
            <Link to={"/checkout"}>
              <button className='btn btn-error  mb-3 w-full'>Proceed To Checkout</button>
            </Link>
          </CardCalculate>
        </div>
      </main>
    </div>
  );
};

export default Order;
