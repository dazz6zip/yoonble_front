import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";
import { getCategories, ICategory } from "../fetcher";
import {
  Container,
  ContentBox,
  ContentWrapper,
  Description,
  MenuImage,
  SubTitle,
  Title,
} from "./styled-components/DefaultStyle";

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
      <SubTitle>Menu</SubTitle>
      <ContentWrapper>
        {categories.map((category) => (
          <ContentBox
            isDesktop={isDesktop}
            key={category.id}
            onClick={() => navigate(category.path)}
          >
            <MenuImage src={category.img} alt={category.name} />
            <Title isDesktop={isDesktop}>{category.name}</Title>
            <Description>{category.description}</Description>
          </ContentBox>
        ))}
      </ContentWrapper>
    </Container>
  );
}
