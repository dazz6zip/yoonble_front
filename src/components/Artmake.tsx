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
  Image,
  SubTitle,
  Title,
} from "./styled-components/DefaultStyle";
import { useTranslation } from "react-i18next";

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
      <SubTitle>Menu</SubTitle>
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
