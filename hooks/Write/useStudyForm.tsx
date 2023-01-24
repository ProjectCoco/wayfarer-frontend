/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { createStudy } from "../../apis/axiosInstance";
import { dateProcessing, memberProcessing } from "../../utils/write/utiles";

interface StudyForm {
  title: string;
  projectTags: string[];
  projectMember: string[][];
  startTime: [string, string, string];
  content: string;
}

function useStudyForm() {
  const [form, setForm] = useState<StudyForm>({
    title: "",
    projectTags: [],
    projectMember: [],
    startTime: ["", "", ""],
    content: "",
  });

  const [memberNum, setMemberNum] = useState(1);

  useEffect(() => {
    setForm({
      ...form,
      projectMember: [...form.projectMember, ["", "1명"]],
    });
  }, [memberNum]);

  const handleRecruit = (idx: number, idx2: number, value: string) => {
    setForm({
      ...form,
      projectMember: form.projectMember.map((item, i) => {
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
    type: "projectTags" | "projectSkills"
  ) => {
    if (form["projectTags"].length > 5) return;

    if (form["projectTags"].includes(e.currentTarget.value))
      return alert("중복된 태그입니다.");

    if (e.key === " " && e.currentTarget.value !== "") {
      setForm({
        ...form,
        [type]: [...form["projectTags"], e.currentTarget.value],
      });
      e.currentTarget.value = "";
    }
  };

  const handleRemoveTag = (
    tag: string,
    type: "projectTags" | "projectSkills"
  ) => {
    setForm({
      ...form,
      projectTags: form["projectTags"].filter((t) => t !== tag),
    });
  };

  const handleDateChange = (date: string, type: string) => {
    if (type === "year") {
      setForm({
        ...form,
        startTime: [date, form.startTime[1], form.startTime[2]],
      });
    }
    if (type === "month") {
      setForm({
        ...form,
        startTime: [form.startTime[0], date, form.startTime[2]],
      });
    }
    if (type === "day") {
      setForm({
        ...form,
        startTime: [form.startTime[0], form.startTime[1], date],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const memberArr = memberProcessing(form.projectMember);
    const validDate = dateProcessing(form.startTime);
    const requestForm = {
      ...form,
      projectMember: memberArr,
      startTime: validDate,
    };

    createStudy(requestForm);
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

export default useStudyForm;
