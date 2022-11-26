import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Header from "../components/common/Header/Header";
import { defaultTheme } from "../styles/DefaultTheme";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
