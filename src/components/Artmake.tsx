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
import { useTranslation } from "react-i18next";

export default function Artmake() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [imageStates, setImageStates] = useState<string[]>([]);
  const { t } = useTranslation();
  const isDesktop = useRecoilValue(isDesktopState);
  const navigate = useNavigate();

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
  }, []);

  const handleNavigation = (path: string) => {
    navigate((path === "brow" || path === "eyeline") ? path : `general/${path}`);
  };

  return (
    <Container>
      <SubTitle>Menu</SubTitle>
      <ContentWrapper>
        {categories.map((category) => (
          <ContentBox isDesktop={isDesktop} key={category.id}
            onClick={() => handleNavigation(category.path)}>
            <MenuImage
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