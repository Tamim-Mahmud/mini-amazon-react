import { useEffect, useState } from "react";

import Header from "../components/Headers/Header";
import Card from "../components/Cards/Card";
import CardCalculate from "../components/Cards/CardCalculate";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../components/Utilities/fakedb";
import { Outlet } from "react-router-dom";

function Shop() {
  // load data
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();

    let savedCard = [];
    // console.log(data);
    for (const id in storedCart) {
      const addedProduct = data.find((product) => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = storedCart[id];
        savedCard.push(addedProduct);
      }
    }
    setCart(savedCard);
  }, [data]);
  const addToCartHandeler = (props) => {
    const data = props.data;

    let newCart = [];
    let exist = cart.find((pd) => pd.id === data.id);
    console.log(data);
    if (!exist) {
      data.quantity = 1;
      newCart = [...cart, data];
    }
    if (exist) {
      exist.quantity = exist.quantity + 1;

      const remaining = cart.filter((pd) => pd.id != data.id);

      newCart = [...remaining, exist];
    }

    setCart(newCart);

    addToDb(data.id);
  };
  // ***********for load data from local storage;**********
  const deleteCart=()=>{
    setCart([]);
    deleteShoppingCart();
}
  return (
    <>
      <div className="max-w-7xl mx-auto">
       <div className="mb-20"></div>
        
        <main className="grid grid-cols-4 mt-5 z-0 gap-7">
          <div className="col-span-3 ">
            <div className="grid grid-cols-3 gap-5">
              {data.map((d) => (
                <Card
                  key={d.id}
                  data={d}
                  addToCartHandeler={addToCartHandeler}
                ></Card>
              ))}
            </div>
          </div>
          <div className="text-center">
            <CardCalculate cart={cart} deleteCart={deleteCart}></CardCalculate>
          </div>
        </main>
        
      </div>
    </>
  );
}

export default Shop;
