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

  const handleDropClick = (selected: string) => {
    setForm({
      ...form,
      Interests: selected,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("폼 전송 준비", form);
  };

  return {
    form,
    handleInputChange,
    handleSubmit,
    handleDropClick,
  };
}

export default useSignUpForm;
