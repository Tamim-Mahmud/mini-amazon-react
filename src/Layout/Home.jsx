import React from "react";
import Header from "../components/Headers/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header className="sticky top-0 left-0 w-full bg-slate-400 z-50 ">
        <Header></Header>
      </header>
      <Outlet />
    </div>
  );
};

export default Home;
