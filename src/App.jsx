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
  return (
    <>
      <div className="">
        <header className="bg-slate-400 ">
          <Header></Header>
        </header>

        <main className=" grid grid-cols-3 gap-5  mx-16 mt-6">
          {data.map(d => <Card key={d.id}  data={d}></Card>)}
        </main>
      </div>
    </>
  );
}

export default App;
