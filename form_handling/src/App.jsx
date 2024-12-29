import React, { useState } from "react";
import Card from "./Card.jsx";
import Form from "./Form.jsx";

const App = () => {
  const [users, setUsers] = useState([]);
  const handleSubmitFormData = (data) => {
    setUsers([...users, data]);
  };

  const handleClick = (cardIndex) => {
    setUsers(() => users.filter((item, index) => index != cardIndex));
  };
  return (
    <>
      <div className="h-80 w-full bg-gray-100 flex gap-4">
        {users.map((user, index) => (
          <Card
            key={index}
            index={index}
            user={user}
            handleClick={handleClick}
          />
        ))}
      </div>

      <Form handleSubmitFormData={handleSubmitFormData} />
    </>
  );
};

export default App;
