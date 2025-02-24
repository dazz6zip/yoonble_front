import { useEffect, useState } from "react";
import styled from "styled-components";
import { getArtmakes, IArtmake } from "../fetcher";
import React from "react";
import { SubTitle } from "./FAQ";

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ContentBox = styled.div`
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #333;
  border-bottom: 2px solid rgb(117, 105, 94);
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
`;

export default function Artmake() {
  const [artmakes, setArtmakes] = useState<IArtmake[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setArtmakes(await getArtmakes());
      } catch (err) {
        console.error("artmakes 불러오기 실패: ", err);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <SubTitle>시술 종류</SubTitle>
      <ContentWrapper>
        {artmakes.map((artmake) => (
          <ContentBox key={artmake.id}>
            <Title>{artmake.name}</Title>
            <Description>{artmake.description}</Description>
          </ContentBox>
        ))}
      </ContentWrapper>
    </Container>
  );
}
