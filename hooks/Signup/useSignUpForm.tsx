import React, { useState } from "react";

function useSignUpForm() {
  const [form, setForm] = useState({
    nickname: "",
    Interests: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return {
    form,
    handleInputChange,
    handleSubmit,
  };
}

export default useSignUpForm;
