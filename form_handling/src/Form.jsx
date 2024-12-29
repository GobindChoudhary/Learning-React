import React from "react";
import { useForm } from "react-hook-form";
const Form = ({ handleSubmitFormData }) => {
  const { register, handleSubmit, reset } = useForm();
  const handleSubmitForm = (data) => {
    handleSubmitFormData(data);
    reset();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(handleSubmitForm)}>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="name"
        />
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="email"
        />
        <input
          {...register("image", { required: true })}
          type="text"
          placeholder="image Url"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
