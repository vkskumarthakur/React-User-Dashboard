import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-[#262626] py-3 px-5 box-shadow-new flex-1 ml-[15%] mt-14" style={{ minHeight: `calc(100vh - 56px - 32px)` }}>
      {children}
    </div>
  );
};

export default MainLayout;
