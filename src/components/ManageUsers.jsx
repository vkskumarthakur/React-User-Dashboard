import React, { useState } from 'react';
import PieChart from './PieChart';
import { LiaUserEditSolid } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import { FaPlusCircle } from 'react-icons/fa';
import ConfirmationModal from './ConfirmationModal';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ManageUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'VIKAS KUMAR THAKUR',
      email: 'Test@testing.com',
      phone: '9876543210',
      experience: 'Test Experience',
      education: 'MCA',
      skills: 'Frontend Engineer',
    },
    {
      id: 2,
      name: 'VIKAS KUMAR THAKUR',
      email: 'Test@testing.com',
      phone: '9876543210',
      experience: 'Test Experience',
      education: 'MCA',
      skills: 'Frontend Engineer',
    },
    {
      id: 3,
      name: 'VIKAS KUMAR THAKUR',
      email: 'Test@testing.com',
      phone: '9876543210',
      experience: 'Test Experience',
      education: 'MCA',
      skills: 'Frontend Engineer',
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleAddUser = () => {
    setModalOpen(true);
    setModalData({});

  };

  const handleEditUser = (user) => {
    setModalOpen(true);
    setModalData(user);

  };

  const handleDeleteUser = (id) => {
    setUserToDelete(id);
    setConfirmationOpen(true);

  };

  const confirmDeleteUser = () => {
    setUsers(users.filter((user) => user.id !== userToDelete));
    setConfirmationOpen(false);
    toast.success("User Deleted!");
  };

  const handleSaveUser = (data) => {
    if (data.id) {
      setUsers(users.map((user) => (user.id === data.id ? data : user)));
    } else {
      setUsers([...users, { id: users.length + 1, ...data }]);
    }
    toast.success("User Added!");
    setModalOpen(false);
  };

  const Modal = () => {
    const [data, setData] = useState(modalData);

    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
    return (
      <div
        className={`modal bg-[#03030391] fixed top-0 left-0 w-full h-full flex justify-center items-center ${
          modalOpen ? 'open' : ''
        }`}
      >
        <div className="modal-content bg-white w-[80%] md:max-w-[600px] rounded-xl p-3">
          <div className="modal-header border-b-[1px] border-[#19594D] flex justify-between items-center">
            <span className="text-md font-semibold">
              {data.id ? 'Edit User' : 'Add User'}
            </span>
            <span
              className="text-md font-semibold cursor-pointer"
              onClick={() => setModalOpen(false)}
            >
              <IoMdClose className="text-[#19594D]" />
            </span>
          </div>
          <div className="modal-body p-3">
            <form className="flex flex-col justify-between items-start gap-3 w-full">
              <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full">
                <div className="w-full form-group flex-1 flex flex-col items-start justify-start gap-2">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    className="py-1 px-3 w-full outline-none bg-[#636262] text-white"
                    required
                  />
                </div>
                <div className="w-full form-group flex-1 flex flex-col items-start justify-start gap-2">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="py-1 px-3 w-full outline-none bg-[#636262] text-white"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full">
                <div className="w-full form-group flex-1 flex flex-col items-start justify-start gap-2">
                  <label>Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    className="py-1 px-3 w-full outline-none bg-[#636262] text-white"
                  />
                </div>
                <div className="w-full form-group flex-1 flex flex-col items-start justify-start gap-2">
                  <label>Experience:</label>
                  <input
                    type="text"
                    name="experience"
                    value={data.experience}
                    onChange={handleChange}
                    className="py-1 px-3 w-full outline-none bg-[#636262] text-white"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full">
                <div className="w-full form-group flex-1 flex flex-col items-start justify-start gap-2">
                  <label>Education:</label>
                  <input
                    type="text"
                    name="education"
                    value={data.education}
                    onChange={handleChange}
                    className="py-1 px-3 w-full outline-none bg-[#636262] text-white"
                  />
                </div>
                <div className="w-full form-group flex-1 flex flex-col items-start justify-start gap-2">
                  <label>Skills:</label>
                  <input
                    type="text"
                    name="skills"
                    value={data.skills}
                    onChange={handleChange}
                    className="py-1 px-3 outline-none w-full bg-[#636262] text-white"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer flex justify-between items-center gap-3 p-3">
            <button
              className="flex-1 bg-white border-[1px] border-[#19594D] text-[#19594D] py-1 px-3 rounded-sm"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="flex-1 bg-[#19594D] py-1 px-3 text-white rounded-sm"
              onClick={() => handleSaveUser(data)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };
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
            <span className="text-md font-semibold">Manage Users</span>
          </div>
          <div>
            <span className="text-md font-semibold">{formattedDate}</span>
          </div>
        </div>
        <div className="p-3 flex-1">
          <div className="bg-[#19594d30] rounded-2xl py-2 px-5">
            <div className="flex justify-between items-center">
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
              <PieChart />
            </div>
          </div>
        </div>
        <div className="p-3 flex-1">
          <div className="bg-[#19594d30] rounded-2xl p-3 flex-col justify-start gap-2">
            <div className="flex justify-between items-center">
              <div className="w-full flex justify-between gap-2">
                <span className="font-semibold text-xl">User Details</span>
                <button
                  className="rounded-full bg-[#19594D] py-2 px-4 group flex items-center justify-start gap-2 text-white transition-all duration-300 delay-300"
                  title="Add User"
                  onClick={handleAddUser}
                >
                  <FaPlusCircle className="text-white" />
                  <span className="hidden group-hover:block text-sm">
                    Add New User
                  </span>
                </button>
              </div>
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
                  {users.map((user) => (
                    <tr key={user.id} className="text-base text-[14px] bg-[]">
                      <td className="text-black font-semibold pt-3">
                        {user.name}
                      </td>
                      <td className="text-gray-600 pt-3">{user.email}</td>
                      <td className="text-gray-600 pt-3">{user.phone}</td>
                      <td className="text-gray-600 pt-3">
                        {user.experience}
                      </td>
                      <td className="text-gray-600 pt-3">{user.education}</td>
                      <td className="text-gray-600 pt-3">{user.skills}</td>
                      <td>
                        <div className="flex items-center justify-start gap-2">
                          <LiaUserEditSolid
                            className="text-[16px] hover:text-[#19594D] cursor-pointer"
                            title="Edit User"
                            onClick={() => handleEditUser(user)}
                          />
                          <RiDeleteBin6Line
                            className="text-[16px] hover:text-[#19594D] cursor-pointer"
                            title="Delete User"
                            onClick={() => handleDeleteUser(user.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ToastContainer />
        {modalOpen && <Modal />}
        {confirmationOpen && (
          <ConfirmationModal
            isOpen={confirmationOpen}
            onClose={() => setConfirmationOpen(false)}
            onConfirm={confirmDeleteUser}
          />
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
