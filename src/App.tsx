import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header />
        <Router />
        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
