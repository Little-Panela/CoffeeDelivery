import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { defaultTheme } from "../styles/themes/default";
import { CartContextProvider } from "./CartContext";

export function GlobalContext({ children }: any) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>{children}</CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
