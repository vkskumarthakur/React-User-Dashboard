import React from "react";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-between gap-3">
        <div className="bg-white p-2 rounded-md flex-1 p-3">
            <div className="flex justify-between items-center p-3">
            <div>
                <span className="text-md font-semibold">Dashboard</span>
            </div>
            <div>
                <span className="text-md font-semibold">July, 29</span>
            </div>
            </div>
            <div className="bg-gray-300 p-3 flex flex-wrap justify-start gap-2 items-center">
                <div className="bg-[#19594D] p-2 rounded-md min-w-52"></div>
                <div className="bg-[#19594D] p-2 rounded-md min-w-52"></div>
                <div className="bg-[#19594D] p-2 rounded-md min-w-52"></div>
                <div className="bg-[#19594D] p-2 rounded-md min-w-52"></div>
                <div className="bg-[#19594D] p-2 rounded-md min-w-52"></div>
                <div className="bg-[#19594D] p-2 rounded-md min-w-52"></div>
                <div className="bg-[#19594D] p-2 rounded-md min-w-52"></div>
                <div className="bg-[#19594D] p-2 rounded-md min-w-52"></div>
                <div className="bg-[#19594D] p-2 rounded-md min-w-52"></div>
                <div className="bg-[#19594D] p-2 rounded-md min-w-52"></div>

            </div>
        </div>
        <div className="bg-white p-2 rounded-md flex-1">
            
        </div>
    </div>
  );
};

export default Dashboard;