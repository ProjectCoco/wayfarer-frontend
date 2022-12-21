import React, { useState } from "react";

interface WriteForm {
  title: string;
  summary: string[];
  recruit: string;
  tech: string[];
  start: string;
  content: string;
}

function useForm() {
  const [form, setForm] = useState<WriteForm>({
    title: "",
    summary: [],
    recruit: "",
    tech: [],
    start: "",
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleAddTag = (
    e: React.KeyboardEvent<HTMLInputElement>,
    type: "summary" | "tech"
  ) => {
    if (form[type].length > 5) return;

    if (form[type].includes(e.currentTarget.value))
      return alert("중복된 태그입니다.");

    if (e.key === " " && e.currentTarget.value !== "") {
      setForm({
        ...form,
        [type]: [...form[type], e.currentTarget.value],
      });
      e.currentTarget.value = "";
    }
  };

  const handleRemoveTag = (tag: string, type: "summary" | "tech") => {
    setForm({
      ...form,
      [type]: form[type].filter((t) => t !== tag),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return {
    form,
    handleChange,
    handleAddTag,
    handleRemoveTag,
    handleSubmit,
  };
}

export default useForm;
