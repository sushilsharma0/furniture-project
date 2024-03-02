import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  return (
    <div className="overflow-x-auto mr-56">
      <div className="my-5 max-w-[55rem] mx-auto flex gap-5">
        <input
          type="text"
          className="flex h-12 w-[35rem] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-900 border-2 border-black text-black"
          placeholder="Search User..."
          onChange={(e) => setName(e.target.value)}
        ></input>
        <Link to={`/searchUser/${name}`}>
          <button className="rounded-md border-2 border-black px-5 py-2 text-lg font-bold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-blue-800 hover:text-white">
            Search
          </button>
        </Link>
      </div>
      <p className="text-xl font-semibold mx-auto w-20 mb-5">All Users</p>
      <table
        className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden"
        border={"1"}
      >
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-6 text-left font-semibold text-sm">
              Serial Number
            </th>
            <th className="py-3 px-6 text-left font-semibold text-sm">id</th>
            <th className="py-3 px-6 text-left font-semibold text-sm">
              name
            </th>
            <th className="py-3 px-6 text-left font-semibold text-sm">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user._id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="py-3 px-6">{index + 1}</td>
              <td className="py-3 px-6">{user._id}</td>
              <td className="py-3 px-6">
                <Link to={`/user/${user._id}`}>{user.name}</Link>
              </td>
              <td className="py-3 px-6">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
