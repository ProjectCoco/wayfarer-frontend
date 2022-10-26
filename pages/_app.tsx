import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/DefaultTheme";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
