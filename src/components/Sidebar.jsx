import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { LiaChartBar } from "react-icons/lia";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="bg-[#262626] py-3 px-5 box-shadow-new w-[15%]" style={{ minHeight: `calc(100vh - 56px - 32px)` }}>
            <div style={{ minHeight: "inherit" }}>
                <ul className="flex flex-col gap-2" style={{ minHeight: "inherit" }}>
                <Link to="/dashboard">
                    <li className="flex items-center justify-start gap-2 hover:bg-[#19594D] hover:cursor-pointer rounded-sm py-1 px-2 group bg-transparent transition-colors duration-100 delay-100">
                        <MdDashboard className="text-white group-hover:text-white group-hover:scale-110 transition-transform duration-1000" />
                        <span className="text-white font-semibold group-hover:text-white">Dashboard</span>
                    </li>
                    </Link>
                        <Link to="/manage-users">
                    <li className="flex items-center justify-start gap-2 transition-all delay-50 hover:bg-[#19594D] hover:cursor-pointer rounded-sm py-1 px-2 group bg-transparent transition-colors duration-100 delay-100">
                        <FaUsersGear className="text-white group-hover:text-white" />
                        <span className="text-white font-semibold group-hover:text-white">Manage Users</span>
                    </li>
                    </Link>
                    <Link to="/statics">
                    <li className="flex items-center justify-start gap-2 transition-all delay-50 hover:bg-[#19594D] hover:cursor-pointer rounded-sm py-1 px-2 group bg-transparent transition-colors duration-100 delay-100">
                        <LiaChartBar className="text-white group-hover:text-white" />
                        <span className="text-white font-semibold group-hover:text-white">Statics</span>
                    </li>
                    </Link>
                    <li className="flex items-center justify-start gap-2 transition-all delay-50 hover:bg-red-500 hover:cursor-pointer rounded-sm py-1 px-2 group bg-transparent transition-colors duration-100 delay-100 mt-auto">
                        <IoLogOut className="text-white group-hover:text-white" />
                        <span className="text-white font-semibold group-hover:text-white">Logout</span>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;