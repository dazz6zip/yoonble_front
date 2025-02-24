import styled from "styled-components";
import img1 from "../images/artist.jpg";
import React from "react";
import { SubTitle } from "./FAQ";

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  flex: 1;
  text-align: left;
`;

const Image = styled.img`
  width: 90%;
  border-radius: 10px;
`;

const Content = styled.div`
  flex: 2;
  padding-left: 20px;
  margin-bottom: 40px;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 30px;
  color: #333;
  border-bottom: 2px solid rgb(117, 105, 94);
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 2.5;
  color: #555;
`;

export default function Artist() {
  return (
    <Container>
      <ImageWrapper>
        <Image src={img1} alt="shop" />
      </ImageWrapper>
      <Content>
        <Title>Artist Yoon</Title>
        <Description>
          ✶&nbsp;&nbsp;&nbsp;국제 아트메이크 콘테스트 심사위원
        </Description>
        <Description>
          ✶&nbsp;&nbsp;&nbsp;국제 아트메이크 콘테스트 수상 경력
        </Description>
        <Description>
          ✶&nbsp;&nbsp;&nbsp;메이크업 아티스트 출신, 7년 이상의 미용 경력
        </Description>
        <Description>✶&nbsp;&nbsp;&nbsp;메이크업 국가 자격증 보유</Description>
        <Description>
          ✶&nbsp;&nbsp;&nbsp;한국/일본에서 최다 시술 경험 보유
        </Description>
        <Description>✶&nbsp;&nbsp;&nbsp;아트메이크 스쿨 운영 </Description>
        <br />
        <br />
        <Description>
          정교한 기술과 예술적 감각을 바탕으로, 자연스럽고 세련된 결과를
          제공합니다.
        </Description>
      </Content>
    </Container>
  );
}
