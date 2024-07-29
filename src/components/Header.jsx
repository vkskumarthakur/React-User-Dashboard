import React from "react";

const Header = () => {

  return (
    <>
     <div className="bg-[#262626] py-3 px-5 flex items-center justify-between shadow-md">
            <div className="text-white vt323-regular px-5 text-2xl">
              User Management
            </div>
          <div className="flex justify-start gap-3">
                <button className="bg-white text-[#19594D] py-1 px-3 rounded-sm hover:bg-[#19594D] hover:text-white">
                  Logout
                </button>
          </div>
        </div>
    </>
  );
};

export default Header;