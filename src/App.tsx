import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import { CartContextProvider } from "./contexts/CartContext";
import { LocationContextProvider } from "./contexts/LocationContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <LocationContextProvider>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </LocationContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
