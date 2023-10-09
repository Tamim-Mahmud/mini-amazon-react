import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Headers/Header";
import Card from "./components/Cards/Card";
import CardCalculate from "./components/Cards/CardCalculate";
import { addToDb } from "./components/Utilities/fakedb";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const [cart, setCart] = useState([]);
  const addToCartHandeler =(props) => {
    const newCart=[...cart,props.data];
    setCart(newCart);
    
    addToDb(props.data.id);

  }; 
  return (
    <>
      <div className="">
        <header className="fixed top-0 left-0 w-full bg-slate-400 z-10 ">
          <Header></Header>
        </header>

        <main className="grid grid-cols-4 mt-5 z-0 ">
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-5">
              {data.map((d) => (
                <Card key={d.id} data={d} addToCartHandeler={addToCartHandeler}></Card>
              ))}
            </div>
          </div>
          <div className="text-center">
                <CardCalculate cart= {cart}></CardCalculate>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
