import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainLayout from "./MainLayout";
import Dashboard from "./Dashboard";
import ManageUsers from "./ManageUsers";
import Statics from "./Statics";

const MainContainer = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/statics" element={<Statics />} />
        </Routes>
      </MainLayout>
    </div>
  );
};

export default MainContainer;
