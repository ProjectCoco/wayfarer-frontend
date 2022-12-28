import React, { useState } from "react";

interface StudyForm {
  title: string;
  summary: string[];
  recruit: string;
  start: [string, string, string];
  content: string;
}

function useForm() {
  const [form, setForm] = useState<StudyForm>({
    title: "",
    summary: [],
    recruit: "",
    start: ["", "", ""],
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

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (form.summary.length > 5) return;

    if (form.summary.includes(e.currentTarget.value))
      return alert("중복된 태그입니다.");

    if (e.key === " " && e.currentTarget.value !== "") {
      setForm({
        ...form,
        summary: [...form.summary, e.currentTarget.value],
      });
      e.currentTarget.value = "";
    }
  };

  const handleRemoveTag = (tag: string) => {
    setForm({
      ...form,
      summary: form.summary.filter((t) => t !== tag),
    });
  };

  const handleDateChange = (date: string, type: string) => {
    if (type === "year") {
      setForm({
        ...form,
        start: [date, form.start[1], form.start[2]],
      });
    }
    if (type === "month") {
      setForm({
        ...form,
        start: [form.start[0], date, form.start[2]],
      });
    }
    if (type === "day") {
      setForm({
        ...form,
        start: [form.start[0], form.start[1], date],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.info("StudyForm");
    console.info(form);
  };

  return {
    form,
    handleChange,
    handleAddTag,
    handleRemoveTag,
    handleDateChange,
    handleSubmit,
  };
}

export default useForm;
