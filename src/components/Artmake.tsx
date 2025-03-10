import { useEffect, useState } from "react";
import styled from "styled-components";
import { getArtmakeCategories, getArtmakes, IArtmake, IArtmakeCategory } from "../fetcher";
import { SubTitle } from "./FAQ";
import { MenuProps } from "./Header";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import img1 from "../images/img1.jpg";
import img2 from "../images/Keep it simple.png";
import { useNavigate } from "react-router-dom";

export const imageLink = 'https://d206helh22e0a3.cloudfront.net/images';

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
  gap: 40px;
  justify-content: center;
  width: 100%;
`;

export const ContentBox = styled.div<MenuProps>`
  width: 100%;
  max-width: 250px;
  padding: 20px;
  border-radius: 12px;
  background-color: #DCC1B6;
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
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(101, 80, 79);
  padding: 10px 0;
  margin-bottom: 10px;

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
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  text-align: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export default function Artmake() {
  const [categories, setCategories] = useState<IArtmakeCategory[]>([]);
  const [imageStates, setImageStates] = useState<string[]>([]);
  const isDesktop = useRecoilValue(isDesktopState);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await getArtmakeCategories();
        setCategories(fetchedCategories);
        // setImageStates(fetchedCategories.map(() => img1));
      } catch (err) {
        console.error("artmakes 불러오기 실패: ", err);
      }
    };
    fetchData();
  }, []);

  // const handleMouseOver = (index: number) => {
  //   if (isDesktop) {
  //     const newImageStates = [...imageStates];
  //     newImageStates[index] = img2;
  //     setImageStates(newImageStates);
  //   }
  // };

  // const handleMouseOut = (index: number) => {
  //   if (isDesktop) {
  //     const newImageStates = [...imageStates];
  //     newImageStates[index] = img1;
  //     setImageStates(newImageStates);
  //   }
  // };

  const handleClick = (path: string) => {
    // if (!isDesktop) {
    //   const newImageStates = [...imageStates];
    //   newImageStates[index] = newImageStates[index] === img2 ? img1 : img2;
    //   setImageStates(newImageStates);
    // }
    navigate(path);
  };

  return (
    <Container>
      <SubTitle>Menu</SubTitle>
      <ContentWrapper>
        {categories.map((category) => (
          <ContentBox isDesktop={isDesktop} key={category.id}
            onClick={() => handleClick(category.path)}>
            <Image
              // src={imageStates[index]}
              src={category.img}
              alt={category.name}
            // onMouseOver={() => handleMouseOver(index)}
            // onMouseOut={() => handleMouseOut(index)}
            />
            <Title isDesktop={isDesktop}>{artmake.name}</Title>
            <Description>{artmake.description}</Description>
          </ContentBox>
        ))}
      </ContentWrapper>
    </Container>
  );
}
