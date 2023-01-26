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
  enabled: string;
  content: string;
  projectTags: string[];
  totalMember: number;
  countMember: null;
  startTime: Date;
  status: string;
}
