import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Headers/Header";
import Card from "./components/Cards/Card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const [cart, setCart] = useState([]);
  const addToCartHandeler =(props) => {
    const newCart=[...cart,props.data.id];
    setCart(newCart);
  }; 
  return (
    <>
      <div className="">
        <header className="bg-slate-400 ">
          <Header></Header>
        </header>

        <main className="grid grid-cols-4 mt-5">
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-5">
              {data.map((d) => (
                <Card key={d.id} data={d} addToCartHandeler={addToCartHandeler}></Card>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2>Order Summary</h2>
            <h1>Selected Item : {cart.length}</h1>

          </div>
        </main>
      </div>
    </>
  );
}

export default App;
