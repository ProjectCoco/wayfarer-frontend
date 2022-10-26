import "styled-components";
import { defaultTheme } from "./DefaultTheme";

type DefaultColor = typeof defaultTheme["colors"];

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      Blue: "#001AFF";
      sub_blue: "#72B8FF";
      sub_blue1: "#C0CEFF";
      sub_blue2: "#97AEFF";
      sub_blue3: "#6B8CFF";
      sub_blue4: "#4770FF";
      sub_blue5: "#1F8EFF";
      sub_blue6: "#72B8FF";
      // yellow
      Yello: "#E7FE54";
      sub_yellow: "#FFEF5A";
      // green
      green: "#7AFFCD";
      // gray
      gray_100: "#FAFAFA";
      gray_200: "#F2F2F3";
      gray_300: "#E6E6E8";
      gray_400: "#BDBEC1";
      gray_500: "#96989C";
      gray_600: "#74767B";
      gray_700: "#4A4B4F";
      gray_800: "#2D2D2F";
      gray_900: "#000000";
    };

    fontSize: {
      heading6_text_6xl_regular: "32px";
      caption1_text_xs_regular: "10px";
      caption2_text_2xs_regular: "11px";
      caption3_text_3xs_regular: "12px";
    };
  }
}
