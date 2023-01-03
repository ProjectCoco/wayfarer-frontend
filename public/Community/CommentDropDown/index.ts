import alert from "./Alert.svg";
import comment from "./SmallMessageCircle.svg";
import edit from "./SmallPencil.svg";
import remove from "./Remove.svg";

export const CommentDropDown = {
  alert,
  comment,
  edit,
  remove,
};

export type CommentDropDownType = keyof typeof CommentDropDown;
