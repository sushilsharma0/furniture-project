import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UsersProfile() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  const handleDelete = () => {
    try {
      axios.delete(`http://localhost:8000/api/users/delete/${id}`);
      alert("user deleted successful");
      window.location.href = "/users";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[47vw] mx-auto mt-28 p-6 bg-white shadow-md rounded-md mr-96">
      <div className="w-[40vw]">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
          <p className="text-gray-600 text-lg">{user.email}</p>
        </div>
        <div className="mt-6 space-y-4">
          <h2 className="text-lg font-semibold">User Information</h2>
          <ul className="flex flex-col gap-5 text-2xl">
            <li>
              <strong>ID:</strong> {user._id}
            </li>
            <li>
              <strong>Email:</strong> {user.email}
            </li>
            <li>
              <strong>Account Created at:</strong>{" "}
              {new Date(user.createdAt).toLocaleString()}
            </li>
            <li>
              <strong>Account Updated at:</strong>{" "}
              {new Date(user.updatedAt).toLocaleString()}
            </li>
          </ul>
        </div>
        <div className="mt-4 flex gap-5">
          <button
            onClick={handleDelete}
            className="inline-flex items-center w-full justify-center rounded-md bg-red-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
          >
            Delete user
          </button>
          <Link
            className="inline-flex items-center  w-full justify-center rounded-md bg-blue-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            to={`/updateUser/${user._id}`}
          >
            Update user
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UsersProfile;
