import React from "react";
import PieChart from "./PieChart";


const Dashboard = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return (
        <div className="flex items-center justify-between gap-3">
            <div className="bg-white rounded-2xl flex-1 p-3">
                <div className="flex justify-between items-center p-3 border-b-[1px] border-[#19594D]">
                    <div>
                        <span className="text-md font-semibold">Dashboard</span>
                    </div>
                    <div>
                        <span className="text-md font-semibold"> {formattedDate} </span>
                    </div>
                </div>
                <div className="p-3 flex flex-wrap justify-between gap-2 items-stretch">
                    <div className="bg-[#19594d30] rounded-2xl py-2 px-5 flex-1">
                        <div className="flex justify-between items-ceter">
                        <div className="flex flex-col justify-center gap-2">
                            <span className="font-semibold text-3xl">40</span>
                            <span className="font-semibold text-sm">Users</span>
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                            <span className="font-semibold text-xl">Background</span>
                            <div className="flex justify-center items-center gap-1">
                                <span className="bg-[#19594D] rounded-full p-1"></span>
                                <span className="font-normal text-sm">IT</span>
                                <span className="bg-white rounded-full p-1"></span>
                                <span className="font-normal text-sm">Others</span>
                            </div>
                        </div>
                        </div>
                        <div>
                            <PieChart/>
                        </div>
                    </div>
                    {/* <div className="bg-[#19594d30] rounded-2xl py-2 px-5 min-w-[32.5%] flex flex-col justify-start gap-2">
                        <span className="font-semibold text-3xl">40</span>
                        <span className="font-semibold text-sm">Users</span>
                    </div>
                    <div className="bg-[#19594d30] rounded-2xl py-2 px-5 min-w-[32.5%] flex flex-col justify-start gap-2">
                        <span className="font-semibold text-3xl">40</span>
                        <span className="font-semibold text-sm">Users</span>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Dashboard;