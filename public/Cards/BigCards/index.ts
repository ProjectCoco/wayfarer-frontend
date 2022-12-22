import big_project_developer from "./BigProjCardDev.svg";
import big_project_designer from "./BigProjCardDgn.svg";
import big_project_planner from "./BigProjCardPlan.svg";
import big_project_all from "./BigProjCardAll.svg";
import big_study_developer from "./BigStudyCardDev.svg";
import big_study_designer from "./BigStudyCardDgn.svg";
import big_study_planner from "./BigStudyCardPlan.svg";
import big_study_all from "./BigStudyCardAll.svg";

export const BigCardsImg = {
  big_project_developer,
  big_project_designer,
  big_project_planner,
  big_project_all,
  big_study_developer,
  big_study_designer,
  big_study_planner,
  big_study_all,
};

export type BigCardsImgType = keyof typeof BigCardsImg;
