import React from "react";
import PieChart from "./PieChart";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";

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
        <div className="p-3 flex-1">
          <div className="bg-[#FEE4CB] rounded-2xl py-2 px-5">
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
                  <span className="font-normal text-sm">Others</span>
                  <span className="bg-white rounded-full p-1"></span>
                </div>
              </div>
            </div>
            <div>
              <PieChart />
            </div>
          </div>
        </div>
        <div className="p-3 flex-1">
          <div className="bg-[#FEE4CB] rounded-2xl p-3 flex-col justify-start gap-2">
            <div className="flex justify-between items-ceter">
              <div className="w-full flex justify-between gap-2">
                <span className="font-semibold text-xl">User Details</span>
                <button className="rounded-full bg-[#19594D] py-2 px-4 group flex items-center justify-start gap-2 text-white transition-all duration-300 delay-300" title="Add User"><FaPlusCircle className="text-white" /><span className="hidden group-hover:block text-sm">Add New User</span></button>
              </div>
              {/* <div className="flex flex-col justify-center gap-2">
                            <span className="font-semibold text-2xl">Background</span>
                        </div> */}
            </div>
            <div className="border-2 border-white bg-white rounded-2xl mt-3 p-2">
              <table className="table-auto w-full border-spacing-1 max-h-[100px] overflow-y-auto">
                <thead className="font-normal text-[14px] text-[#19594D] text-left mb-10 border-b-[1px] border-slate-600 w-full">
                  <tr>
                    <th className="pb-2">User Name</th>
                    <th className="pb-2">Email</th>
                    <th className="pb-2">Phone</th>
                    <th className="pb-2">Past Experience</th>
                    <th className="pb-2">Education</th>
                    <th className="pb-2">Skills</th>
                    <th className="pb-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-base text-[14px] bg-[]">
                    <td className="text-black font-semibold pt-3">VIKAS KUMAR THAKUR</td>
                    <td className="text-gray-600 pt-3">Test@testing.com</td>
                    <td className="text-gray-600 pt-3">9876543210</td>
                    <td className="text-gray-600 pt-3">Test Experience</td>
                    <td className="text-gray-600 pt-3">MCA</td>
                    <td className="text-gray-600 pt-3">Frontend Engineer </td>
                    <td>
                      <div className="flex items-center justify-start gap-2">
                        <FaEdit className="text-[16px] hover:text-[#19594D] cursor-pointer" title="Edit User" />
                        <MdDelete className="text-[16px] hover:text-[#19594D] cursor-pointer" title="Delete User" />
                      </div>
                    </td>
                  </tr>
                  <tr className="text-base text-[14px] bg-[]">
                    <td className="text-black font-semibold pt-3">VIKAS KUMAR THAKUR</td>
                    <td className="text-gray-600 pt-3">Test@testing.com</td>
                    <td className="text-gray-600 pt-3">9876543210</td>
                    <td className="text-gray-600 pt-3">Test Experience</td>
                    <td className="text-gray-600 pt-3">MCA</td>
                    <td className="text-gray-600 pt-3">Frontend Engineer </td>
                    <td>
                      <div className="flex items-center justify-start gap-2">
                        <FaEdit className="text-[16px] hover:text-[#19594D] cursor-pointer" title="Edit User" />
                        <MdDelete className="text-[16px] hover:text-[#19594D] cursor-pointer" title="Delete User" />
                      </div>
                    </td>
                  </tr>
                  <tr className="text-base text-[14px] bg-[]">
                    <td className="text-black font-semibold pt-3">VIKAS KUMAR THAKUR</td>
                    <td className="text-gray-600 pt-3">Test@testing.com</td>
                    <td className="text-gray-600 pt-3">9876543210</td>
                    <td className="text-gray-600 pt-3">Test Experience</td>
                    <td className="text-gray-600 pt-3">MCA</td>
                    <td className="text-gray-600 pt-3">Frontend Engineer </td>
                    <td>
                      <div className="flex items-center justify-start gap-2">
                        <FaEdit className="text-[16px] hover:text-[#19594D] cursor-pointer" title="Edit User" />
                        <MdDelete className="text-[16px] hover:text-[#19594D] cursor-pointer" title="Delete User" />
                      </div>
                    </td>
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