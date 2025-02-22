import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Layout from "./components/Layout";
import React from "react";
import NavigationBar from "./components/NavigationBar";
import ResponsiveProvider from "./components/ResponsiveProvider";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ResponsiveProvider />
        <Header />
        {/* <div style={{ backgroundColor: "rgb(214,201,189)" }}>
          214,201,189
          <div style={{ color: "rgb(137, 121, 105)" }}>
            주요 텍스트 색상 (135, 121, 108)
          </div>
          <div style={{ color: "rgb(101, 90, 79)" }}>
            헤더 및 타이틀 색상 (101, 90, 79)
          </div>
          <div style={{ color: "rgb(171, 157, 136)" }}>
            서브 텍스트 및 설명 (171, 157, 136)
          </div>
          <div style={{ color: "rgb(160, 143, 124)" }}>
            링크 텍스트 색상 (160, 143, 124)
          </div>
          <div style={{ color: "rgb(214, 190, 148)" }}>
            강조 텍스트 색상 (214, 190, 148)
          </div>
          <div style={{ backgroundColor: "rgb(101, 80, 79)" }}>
            버튼 색상 (101, 80, 79)
          </div>
          <div style={{ backgroundColor: "rgb(160,143, 124)" }}>
            하이라이트 색상 (160,143, 124)
          </div>
          <div style={{ backgroundColor: "rgb(171, 147, 136)" }}>
            보조 색상 1 (171, 147, 136)
          </div>
          <div style={{ backgroundColor: "rgb(200, 187, 172)" }}>
            보조 색상 2 (200, 187, 172)
          </div>
        </div> */}
        <NavigationBar />
        <Layout />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
