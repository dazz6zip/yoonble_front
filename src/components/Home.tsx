import axios from "axios";
import logo from "../images/logo.png";
import wp from "../images/Don't miss copy.png";
import React from "react";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100vw;

  object-fit: cover; /* 비율을 유지하면서 부모 요소에 꽉 차게 */
`;

export default function Home() {
  const apiTest = async () => {
    const response = await axios.get<string>("/api/test");
    if (response.data) {
      alert(response.data);
    }
  };

  return (
    <>
      <BackgroundDiv>
        <Img src={wp}></Img>
      </BackgroundDiv>
    </>
  );
}
