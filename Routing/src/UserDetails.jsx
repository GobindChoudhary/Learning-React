import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const UserDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/users");
  };
  return (
    <div>
      <h1>userName: {name}</h1>
      <br />
      <button
        onClick={goBack}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Click Me
      </button>
    </div>
  );
};

export default UserDetails;
