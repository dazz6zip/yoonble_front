import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SubTitle } from "./FAQ";
import { MenuProps } from "./Header";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";
import { getCategories, ICategory } from "../fetcher";

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
  background-color:rgb(229, 211, 206);
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
  color: rgb(101, 80, 79);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
        // setImageStates(fetchedCategories.map(() => img1));
      } catch (err) {
        console.error("artmakes 불러오기 실패: ", err);
      }
    };
    fetchData();
  }, []);

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
            <Title isDesktop={isDesktop}>{category.name}</Title>
            <Description>{category.description}</Description>
          </ContentBox>
        ))}
      </ContentWrapper>
    </Container>
  );
}
