import styled from "styled-components";
import { colors } from "../../GlobalStyle";
import { MenuProps } from "./interface";

export const LayoutContainer = styled.div<{ isDesktop: boolean }>`
  /* margin-left: ${(props) => (props.isDesktop ? "15vw" : "0")}; */
  width: 100vw;
  transition: all 0.3s ease-in-out;
`;

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
  width: 90%;
`;

export const Title = styled.h2<MenuProps>`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colors.brown1};
  padding: 5px 0;
  margin-bottom: 8px;
  font-family: "Playfair Display", "Noto Sans", "Noto Sans KR", sans-serif;

  background: linear -
    gradient(to bottom, rgb(117, 105, 94, 0.6), rgba(117, 105, 94, 0));
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100 % 3px;
`;

export const AboutTitle = styled.h2<MenuProps>`
  align-self: flex-start;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colors.brown1};
  padding: 5px 0;
  margin-bottom: 8px;

  background: linear -
    gradient(to bottom, rgb(117, 105, 94, 0.6), rgba(117, 105, 94, 0));
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100 % 3px;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 20px;
  white-space: pre-line;
`;

export const ArtistDescription = styled.p`
  font-size: 0.7rem;
  color: #555;
  line-height: 1.1;
  margin-bottom: 20px;
  white-space: pre-line;
`;

export const ContentBox = styled.div<MenuProps>`
  width: 100%;
  max-width: 250px;
  padding: 15px;
  padding-bottom: 5px;
  border-radius: 12px;
  background-color: ${colors.pink4};
  box-shadow: 0px 4px 12px rgba(170, 163, 156, 0.2);
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

export const Content = styled.div<{ isDesktop?: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  align-items: center;
  justify-content: center;
`;

export const FAQItem = styled.div`
  padding: 10px 0;
  min-height: 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Question = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  padding: 10px;
  background: ${({ isOpen }) => (isOpen ? colors.pink : colors.pink1)};
  color: ${({ isOpen }) => (isOpen ? colors.white3 : colors.brown0)};
  width: 80vw;
  max-width: 800px;
  border-radius: 5px;
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: ${colors.pink};
    color: ${colors.white2};
  }
`;

export const Answer = styled.div<{ isOpen: boolean }>`
  padding: 10px;
  font-size: 12px;
  line-height: 1.6;
  color: #555;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  width: 80vw;
  max-width: 800px;
  min-height: 60px;
`;

export const SubTitle = styled.div`
  text-align: center;
  font-family: "Playfair Display", "Noto Sans", "Noto Sans KR", sans-serif;
  font-weight: bold;
  color: ${colors.brown1};
  font-size: 1.7rem;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

export const Card = styled.div`
  display: flex;
  align-items: stretch;
  width: 80%;
  overflow: hidden;
  @media (max-width: 780px) {
    display: block;
    padding-top: 10px;
    width: 90%;
  }
`;

export const Sidebar = styled.div`
  width: 100px;
  min-width: 300px;
  height: 20vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;

  @media (max-width: 780px) {
    align-self: center;
    width: 70%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 10px;
    gap: 35px;
    height: auto;
    justify-content: center;

    background-color: ${colors.pink1};
    border-radius: 50px;
  }
`;

export const MenuItem = styled.h1<{ selected: boolean }>`
  font-size: ${({ selected }) => (selected ? "1rem" : "0.9rem")};
  color: ${({ selected }) =>
    selected ? `${colors.brown0}` : `${colors.brown3}`};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${colors.brown0};
  }

  &::after {
    content: "✶";
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 780px) {
    padding: 20px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  @media (min-width: 900px) {
    width: 100%;
    padding-right: 30px;
  }
`;

export const AcademyWrapper = styled.div<{ isDesktop?: boolean }>`
  display: ${({ isDesktop }) => (isDesktop ? "grid" : "flex")};
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  overflow-x: ${({ isDesktop }) => (isDesktop ? "visible" : "auto")};
  justify-content: center;

  & > img {
    flex: 0 0 auto; // 모바일에서 가로 스크롤이 가능하도록
    width: ${({ isDesktop }) => (isDesktop ? "100%" : "80%")};
  }
`;


export const MenuImage = styled.img<{ isDesktop?: boolean }>`
  border-radius: 10px;
  width: 100%;
  height: 20vh;
  min-height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
  @media (max-width: 780px) {
    height: 25vh;
  }
`;

export const Image = styled.img<{ isDesktop?: boolean }>`
  border-radius: 10px;
  width: 100%;
  height: ${(props) => (props.isDesktop ? "20vh" : "35vh")};
  min-height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
`;

export const ProfileImage = styled.img<{ isDesktop?: boolean }>`
  border-radius: 10px;
  width: 95%;
  height: 30vh;
  min-height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
  @media (min-width: 900px) {
    min-width: 300px;
    height: auto;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const ImageS = styled.img<MenuProps>`
  max-width: 200px;
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const IaC = styled.div<MenuProps>`
  display: block;
  width: 100%;
  @media (min-width: 900px) {
    display: flex;
  }
`;

export const MenuTitle = styled.div``;

export const MenuDescript = styled.div`
  padding-top: 5px;
  font-size: 0.8rem;
  opacity: 80%;
`;

export const FadeImage = styled.img<{ isVisible: boolean }>`
  width: 100%;
  height: auto;
  object-fit: cover;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  position: absolute;
`;

export const AcademyImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const AcademyImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 30vh;
  min-height: 150px;
  object-fit: cover;
`;
