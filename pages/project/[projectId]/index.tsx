import { useRouter } from "next/router";
import React from "react";
import useProjectDetail from "../../../hooks/Fetch/useProjectDetail";

function ProjectDetail() {
  const { projectId } = useRouter().query;
  const { data } = useProjectDetail(+projectId!);
  console.log(data);
  return <div>ProjectDetail</div>;
}

export default ProjectDetail;
