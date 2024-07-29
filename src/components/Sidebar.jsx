import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { LiaChartBar } from "react-icons/lia";
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="bg-[#262626] py-3 px-5 box-shadow-new w-[15%]" style={{minHeight:`calc(100vh - 56px - 32px)`}}>
   <div style={{minHeight:"inherit"}}>
    <ul className="flex flex-col gap-2" style={{minHeight:"inherit"}}>
        <li className="flex items-center justify-start gap-2 transition-all delay-50 hover:bg-[#19594D] hover:cursor-pointer rounded-sm py-1 px-2 group">
            <MdDashboard className="text-[white] group-hover:text-white"/>
            <span className="text-white font-semibold group-hover:text-white">Dashboard</span>
        </li>
        <li className="flex items-center justify-start gap-2 transition-all delay-50 hover:bg-[#19594D] hover:cursor-pointer rounded-sm py-1 px-2 group">
            <FaUsersGear className="text-white group-hover:text-white"/>
            <span className="text-white font-semibold group-hover:text-white">Manage Users</span>
        </li>
        <li className="flex items-center justify-start gap-2 transition-all delay-50 hover:bg-[#19594D] hover:cursor-pointer rounded-sm py-1 px-2 group">
            <LiaChartBar className="text-white group-hover:text-white"/>
            <span className="text-white font-semibold group-hover:text-white">Statics</span>
        </li>
        <li className="flex items-center justify-start gap-2 transition-all delay-50 hover:bg-red-500 hover:cursor-pointer rounded-sm py-1 px-2 group mt-auto">
            <IoLogOut className="text-white group-hover:text-white"/>
            <span className="text-white font-semibold group-hover:text-white">Logout</span>
        </li>
    </ul>
   </div>
    </aside>
  );
};

export default Sidebar;