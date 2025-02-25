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
  height: 100vh;
`;

const Img = styled.img`
  width: 100vw;
  object-fit: cover;
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
