import React, { useEffect, useState } from "react";

interface ProjectForm {
  title: string;
  summary: string[];
  recruit: string[][];
  tech: string[];
  start: [string, string, string];
  content: string;
}

function useProjectForm() {
  const [form, setForm] = useState<ProjectForm>({
    title: "",
    summary: [],
    recruit: [["", "1명"]],
    tech: [],
    start: ["", "", ""],
    content: "",
  });

  const [memberNum, setMemberNum] = useState(1);

  useEffect(() => {
    setForm({
      ...form,
      recruit: [...form.recruit, ["", "1명"]],
    });
  }, [memberNum]);

  const handleRecruit = (idx: number, idx2: number, value: string) => {
    setForm({
      ...form,
      recruit: form.recruit.map((item, i) => {
        if (i === idx) item[idx2] = value;
        return item;
      }),
    });
  };

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
    console.log(form);
  };

  const handleAddMember = () => {
    if (memberNum >= 5) return;
    setMemberNum((prev) => prev + 1);
  };

  return {
    form,
    handleChange,
    handleAddTag,
    handleRemoveTag,
    handleDateChange,
    handleSubmit,
    handleAddMember,
    handleRecruit,
    memberNum,
  };
}

export default useProjectForm;
