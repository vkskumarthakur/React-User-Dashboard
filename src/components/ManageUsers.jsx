import React from "react";
import PieChart from "./PieChart";


const Dashboard = () => {
    return (
        <div className="flex items-center justify-between gap-3">
            <div className="bg-white p-2 rounded-2xl flex-1 p-3">
                <div className="flex justify-between items-center p-3 border-b-[1px] border-[#19594D]">
                    <div>
                        <span className="text-md font-semibold">Users</span>
                    </div>
                    <div>
                        <span className="text-md font-semibold">July, 29</span>
                    </div>
                </div>
                <div className="p-3 flex flex-wrap justify-between gap-2 items-stretch">
                    <div className="bg-[#FEE4CB] rounded-2xl py-2 px-5 min-w-[32.5%]">
                        <div className="flex justify-between items-ceter">
                        <div className="flex flex-col justify-center gap-2">
                            <span className="font-semibold text-3xl">40</span>
                            <span className="font-semibold text-sm">Users</span>
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                            <span className="font-semibold text-xl">Background</span>
                            <div className="flex justify-center items-center gap-1">
                                <span className="font-normal text-sm">IT</span>
                                <span className="bg-[#19594D] rounded-full p-1"></span>
                                <span className="font-normal text-sm">Non-IT</span>
                                <span className="bg-white rounded-full p-1"></span>
                            </div>
                        </div>
                        </div>
                        <div>
                            <PieChart/>
                        </div>
                    </div>
                    <div className="bg-[#FEE4CB] rounded-2xl py-2 px-5 min-w-[32.5%] flex-1 flex-col justify-start gap-2">
                    <div className="flex justify-between items-ceter">
                        <div className="flex flex-col justify-center gap-2">
                            <span className="font-semibold text-xl">User Table</span>
                            {/* <span className="font-semibold text-sm">Users</span> */}
                        </div>
                        {/* <div className="flex flex-col justify-center gap-2">
                            <span className="font-semibold text-2xl">Background</span>
                        </div> */}
                        </div>
                        <div className="">
                        <table className="table-auto w-full h-full border-spacing-1 mt-3">
                <thead className="font-normal text-[14px] text-left text-gray-600 mb-10">
                  <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Past Experience</th>
                    <th>Education</th>
                    <th>Skills</th>
                  </tr>
                </thead>
                <tbody>
                    <tr className="text-base text-[12px]">
                      <td className="text-black font-semibold pt-3">Test User</td>
                      <td className="text-gray-600 pt-3">Test@testing.com</td>
                      <td className="text-gray-600 pt-3">9876543210</td>
                      <td className="text-red-700 font-semibold pt-3">Test Experience</td>
                      <td className="text-red-700 font-semibold pt-3">B.Tech</td>
                      <td className="text-red-700 font-semibold pt-3">Frontend Engineer </td>
                    </tr>
                </tbody>
              </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;