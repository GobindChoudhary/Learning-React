import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { userDelete } from "../store/reducers/UserReducers";
const Users = () => {
  const { users } = useSelector((state) => state.userReducer);
  console.log(users);
  const dispatch = useDispatch();
  const deleteHandler = (id) => dispatch(userDelete(id));
  return (
    <div className=" min-h-screen w-full bg-gray-900">
      <h1 className="text-red-200 text-4xl font-bolder mb-10">User</h1>
      <ul>
        {users.map((user) => (
          <li className="text-white" key={user.id}>
            {user.name}
            <span className="inline-block">
              <MdDelete
                className=" ml-4 cursor-pointer"
                onClick={() => deleteHandler(user.id)}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
