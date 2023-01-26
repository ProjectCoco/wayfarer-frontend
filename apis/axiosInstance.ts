import axios from "axios";
import { CreateProject, ReadProject } from "../types/write/project";
import { CreateStudy } from "../types/write/study";

export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

export const getProjectList = async (page: number, status: boolean) => {
  try {
    const response = await axiosInstance.get(
      `/project?page=${page}&status=${status}`
    );
    return response.data;
  } catch (error) {
    throw new Error("프로젝트 목록 조회 실패");
  }
};

export const getStudyList = async (page: number, status: boolean) => {
  try {
    const response = await axiosInstance.get(
      `/study?page=${page}&status=${status}`
    );

    return response.data;
  } catch (error) {
    throw new Error("프로젝트 목록 조회 실패");
  }
};

export const getProject = async (projectId: number) => {
  try {
    const response = await axiosInstance.get<ReadProject>(
      `project/${projectId}`
    );
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw e;
    } else {
      throw new Error("different error than axios");
    }
  }
};

export const createProject = async (form: CreateProject) => {
  console.log("Form", form);
  // const response = axiosInstance.post("/project", form);
  // return response;
};

export const createStudy = async (form: CreateStudy) => {
  console.log("StudyForm", form);
  // const response = axiosInstance.post("/study", form);
  // return response;
};

export {};
