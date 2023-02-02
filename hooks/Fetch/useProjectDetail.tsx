import { useEffect, useState } from "react";
import { getProject } from "../../apis/axiosInstance";
import { ReadProject } from "../../types/write/project";

function useProjectDetail(projectId: number) {
  const [data, setData] = useState<ReadProject>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProject(1).then((data) => {
      setData(data);
      setIsLoading(false);
    });
  }, [projectId]);

  return {
    data,
    isLoading,
  };
}

export default useProjectDetail;
