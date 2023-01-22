import React, { useState } from "react";

const useCommunityForm = () => {
  const [form, setForm] = useState({
    topic: "",
    title: "",
    content: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return { form, handleChange, handleSubmit };
};

export default useCommunityForm;
