import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import MainLayout from "./MainLayout";

const MainContainer = () => {

  return (
    <div className="min-h-[100vh] flex flex-col">
    <Header/>
    <div className="flex justify-start">
    <Sidebar/>
    <MainLayout/>
    </div>
    <Footer/>
    </div>
  );
};

export default MainContainer;