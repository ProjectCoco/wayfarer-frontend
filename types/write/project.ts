interface Member {
  position: string;
  totalMember: number;
}

export interface CreateProject {
  title: string;
  projectTags: string[];
  projectSkills: string[];
  projectMember: Member[];
  content: string;
  startTime: string;
}

export interface ReadProject {
  projectArticleId: number;
  title: string;
  content: string;
  projectTags: string[];
  projectSkills: string[];
  projectMemberResponses: ProjectMemberResponse[];
  startTime: Date;
  createdTime: Date;
  status: string;
}

export interface ProjectMemberResponse {
  projectArticleId: number;
  position: string;
  totalMember: number;
  countMember: number;
}
