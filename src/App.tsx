import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Header />
        <Router />
        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
