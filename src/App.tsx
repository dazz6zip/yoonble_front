import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Layout from "./components/Layout";
import ResponsiveProvider from "./components/ResponsiveProvider";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ResponsiveProvider />
        <Header />
        <Layout />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
