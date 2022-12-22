import small_project_developer from "./SmProjCardDev.svg";
import small_project_designer from "./SmProjCardDgn.svg";
import small_project_planner from "./SmProjCardPlan.svg";
import small_project_all from "./SmProjCardAll.svg";
import small_study_developer from "./SmStudyCardDev.svg";
import small_study_designer from "./SmStudyCardDgn.svg";
import small_study_planner from "./SmStudyCardPlan.svg";
import small_study_all from "./SmStudyCardAll.svg";

export const SmallCardsImg = {
  small_project_developer,
  small_project_designer,
  small_project_planner,
  small_project_all,
  small_study_developer,
  small_study_designer,
  small_study_planner,
  small_study_all,
};

export type SmallCardsImgType = keyof typeof SmallCardsImg;
