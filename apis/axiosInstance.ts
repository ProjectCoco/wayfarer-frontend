import axios from "axios";
import { CreateProject } from "../types/project";

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

export const createProject = async (form: CreateProject) => {
  console.log("Form", form);
};

export {};
