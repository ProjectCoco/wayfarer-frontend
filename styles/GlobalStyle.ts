import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul { margin:0;padding:0;line-height:140%; }
    h1, h2, h3, h4, h5, h6 { font-size:100%;font-weight:400 }
    ul { list-style:none }
    button, input, select { margin:0 }
    html { box-sizing:border-box }
    *, :after, :before { box-sizing:inherit;font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif; }
    img { height:auto;max-width:100% }
`;

export default GlobalStyle;
