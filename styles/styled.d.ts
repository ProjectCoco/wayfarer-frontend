import "styled-components";
import { defaultTheme } from "./DefaultTheme";

type DefaultColor = typeof defaultTheme["colors"];

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      // blue
      Main_blue: "#044ADC";
      // pink
      Creative_pink: "#FF0099";
      // green
      Lively_green: "#C0FF0D";
      // purple
      Together_purple: "#9C00FF";
      // black, gray
      Cosmic_black: "#17181C";
      gray100: "#F7F7F8";
      gray200: "#E3E4E8";
      gray300: "#C7C9D1";
      gray500: "#8F92A3";
      gray600: "#73778C";
      gray700: "#5C5F70";
      gray800: "#454754";
      gray900: "#2E3038";
    };

    fontSize: {
      text_6xl: "34px";
      text_5xl: "30px";
      text_4xl: "28px";
      text_3xl: "24px";
      text_2xl: "22px";
      text_xl: "20px";
      text_lg: "18px";
    };

    fontWeight: {
      bold: "700";
      medium: "500";
      regular: "400";
    };
  }
}
