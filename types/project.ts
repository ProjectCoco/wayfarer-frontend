export interface CreateProject {
  title: string;
  projectTags: string[];
  projectSkills: string[];
  projectMember: Member[];
  content: string;
  startTime: string;
}

interface Member {
  position: string;
  totalMember: number;
}
