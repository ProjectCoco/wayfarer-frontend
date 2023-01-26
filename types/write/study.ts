export interface CreateStudy {
  title: string;
  projectTags: string[];
  projectMember: Member[];
  content: string;
  startTime: string;
}

interface Member {
  position: string;
  totalMember: number;
}
