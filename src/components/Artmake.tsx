import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SubTitle } from "./FAQ";
import { MenuProps } from "./Header";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";
import { getCategories, ICategory } from "../fetcher";
import { colors } from "../GlobalStyle";
import { useTranslation } from "react-i18next";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 40px;
  justify-content: center;
  width: 100%;
`;

export const ContentBox = styled.div<MenuProps>`
  width: 100%;
  max-width: 250px;
  padding: 15px;
  padding-bottom: 5px;
  border-radius: 12px;
  background-color:${colors.pink};
  box-shadow: 0px 4px 12px rgba(117, 105, 94, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h2<MenuProps>`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colors.brown1};
  padding: 5px 0;
  margin-bottom: 8px;

background: linear - gradient(
  to bottom,
  rgb(117, 105, 94, 0.6),
  rgba(117, 105, 94, 0)
);
background - position: bottom;
background - repeat: no - repeat;
background - size: 100 % 3px;
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: #555;
  text-align: center;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  margin-bottom: 15px;
`;

export default function Artmake() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [imageStates, setImageStates] = useState<string[]>([]);
  const isDesktop = useRecoilValue(isDesktopState);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // 언어가 바뀔 때마다 재호출
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (err) {
        console.error("artmakes 불러오기 실패: ", err);
      }
    };
    fetchData();
  }, [t]); // <- t 또는 언어 변경 시 재호출

  return (
    <Container>
      <SubTitle>MENU</SubTitle>
      <ContentWrapper>
        {categories.map((category) => (
          <ContentBox isDesktop={isDesktop} key={category.id}
            onClick={() => navigate(category.path)}>
            <Image
              src={category.img}
              alt={category.name}
            />
            <Title isDesktop={isDesktop}>{t(category.name)}</Title>
            <Description>{t(category.description)}</Description>
          </ContentBox>
        ))}
      </ContentWrapper>
    </Container>
  );
}
