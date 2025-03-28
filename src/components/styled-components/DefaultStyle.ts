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
  width: 80%;
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

export const Description = styled.p`
  font-size: 0.8rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 20px;
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
  gap: 15px;

  align-items: center;
  justify-content: center;
  height: 100%;
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
  }
`;

export const Sidebar = styled.div`
  width: 100px;
  height: 20vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;

  @media (max-width: 780px) {
    width: 70%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 10px;
    gap: 50px;
    height: auto;
    background-color: ${colors.pink1};
    border-radius: 50px;
    margin: 0 auto;
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

export const AcademyWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const MenuImage = styled.img<{ isDesktop?: boolean }>`
  border-radius: 10px;
  width: 100%;
  height: 20vh;
  min-height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
  @media (max-width: 780px) {
    height: 40vh;
  }
`;

export const Image = styled.img<{ isDesktop?: boolean }>`
  border-radius: 10px;
  width: 100%;
  height: 20vh;
  min-height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
  @media (max-width: 900px) {
    width: 20vw;
    height: auto;
  }
`;

export const ProfileImage = styled.img<{ isDesktop?: boolean }>`
  border-radius: 10px;
  width: 100%;
  height: 20vh;
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

export const Career = styled.div``;

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
