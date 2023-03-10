import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./redux/actions";

const UserList = () => {
  // const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  const handleEdit = async (user) => {
    const name = prompt("enter new name");
    const email = prompt("enter the new email");

    if (!name || !email) {
      prompt("name and email are required");
    } else {
      const res = await axios.put(`/updateUser/${user._id}`, { name, email });
      console.log(res);
    }
  };

  const handleDelete = async (userId) => {
    const res = await axios.delete(`/deleteUser/${userId}`);
  };
  const fetchData = async () => {
    // const res = await axios.get("/getUsers");
    // console.log(res);
    // console.log(res.data);
    // console.log(res.data.users);
    // // if length is not present then dont set
    // if (res.data.users.length > 0) {
    //   setUserData(res.data.users);
    //   console.log(res.data.users);
    // }
  };

  useEffect(() => {
    // fetchData();
    dispatch(getTodos());
  }, []);
  const userData = useSelector((state) => state.todos);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            All Users
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Email
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Edit
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {userData &&
                userData.map((user) => (
                  <tr>
                    <td className="px-4 py-3">{user.title}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">
                      <button
                        className="hover:text-green-500"
                        onClick={() => handleEdit(user)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-3 text-lg text-gray-900">
                      <button
                        className="hover:text-red-500"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UserList;
