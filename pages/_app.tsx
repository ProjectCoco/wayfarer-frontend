import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Footer from "../components/common/Footer/Footer";
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
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
