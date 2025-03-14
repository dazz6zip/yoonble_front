import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const BackgroundDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 79vh;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  max-width: 75vw;
  width: 90%;
`;

export const Content = styled.div`
  flex: 1;
  text-align: left;
`;

export const Title = styled.h1`
  font-family: "Times New Roman", serif;
  font-size: 60px;
  color: ${colors.brown3};
  margin-bottom: 20px;
  line-height: 1.1;
`;

export const Description = styled.p`
  font-size: 13px;
  color: ${colors.brown2};
  line-height: 1.6;
`;

export const Bold = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.brown0};
`;

export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 40vw;
  max-width: 500px;
  object-fit: cover;
`;
