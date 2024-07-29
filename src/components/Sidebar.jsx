import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { LiaChartBar } from "react-icons/lia";
import { IoLogOut } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const getActiveClass = (isActive) => (
        isActive ? 'bg-[#19594D] text-black' : 'text-white'
    );

    return (
        <aside className="bg-[#262626] py-3 px-5 box-shadow-new w-[15%]" style={{ minHeight: `calc(100vh - 56px - 32px)` }}>
            <div style={{ minHeight: "inherit" }}>
                <ul className="flex flex-col gap-2" style={{ minHeight: "inherit" }}>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => `flex items-center justify-start gap-2 transition-all delay-50 rounded-sm py-1 px-2 group transition-colors duration-100 ${getActiveClass(isActive)}`}
                    >
                        {({ isActive }) => (
                            <>
                                <MdDashboard className={`text-xl group-hover:text-white ${isActive ? 'text-white' : 'text-white'}`} />
                                <span className={`font-semibold group-hover:text-white ${isActive ? 'text-white' : 'text-white'}`}>Dashboard</span>
                            </>
                        )}
                    </NavLink>
                    <NavLink
                        to="/manage-users"
                        className={({ isActive }) => `flex items-center justify-start gap-2 transition-all delay-50 rounded-sm py-1 px-2 group transition-colors duration-100 ${getActiveClass(isActive)}`}
                    >
                        {({ isActive }) => (
                            <>
                                <FaUsersGear className={`text-xl group-hover:text-white ${isActive ? 'text-white' : 'text-white'}`} />
                                <span className={`font-semibold group-hover:text-white ${isActive ? 'text-white' : 'text-white'}`}>Manage Users</span>
                            </>
                        )}
                    </NavLink>
                    <NavLink
                        to="/statics"
                        className={({ isActive }) => `flex items-center justify-start gap-2 transition-all delay-50 rounded-sm py-1 px-2 group transition-colors duration-100 ${getActiveClass(isActive)}`}
                    >
                        {({ isActive }) => (
                            <>
                                <LiaChartBar className={`text-xl group-hover:text-white ${isActive ? 'text-white' : 'text-white'}`} />
                                <span className={`font-semibold group-hover:text-white ${isActive ? 'text-white' : 'text-white'}`}>Statics</span>
                            </>
                        )}
                    </NavLink>
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
