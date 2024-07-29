import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-[#262626] py-3 px-5 box-shadow-new flex-1" style={{ minHeight: `calc(100vh - 56px - 32px - 8px)` }}>
      {children}
    </div>
  );
};

export default MainLayout;
