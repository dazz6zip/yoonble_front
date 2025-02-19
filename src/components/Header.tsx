import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

export const HeaderContainer = styled.div`
  height: 12vh;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 1vh 0;
  background-color: rgb(214, 201, 189);
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2vw;
  margin-top: 2vh;
`;

const Title = styled.h1`
  color: rgb(135, 121, 108);
  font-size: 3rem;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <TitleContainer>
          <Title>YOONBLE</Title>
        </TitleContainer>
      </Link>
    </HeaderContainer>
  );
}
