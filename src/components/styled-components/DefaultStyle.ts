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
  width: 100%;
`;

export const Title = styled.h2<MenuProps>`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colors.brown1};
  padding: 5px 0;
  margin-bottom: 8px;
  font-family: "Playfair Display";

  background: linear -
    gradient(to bottom, rgb(117, 105, 94, 0.6), rgba(117, 105, 94, 0));
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100 % 3px;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  color: #555;
  text-align: center;
  margin-bottom: 20px;
`;

export const Image = styled.img<{ isDesktop?: boolean }>`
  border-radius: 10px;
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  margin-bottom: 15px;
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
  width: 70%;
  flex-direction: column;
  gap: 15px;
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
  font-family: "Playfair Display";
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
`;

export const Sidebar = styled.div`
  width: 10vw;
  height: 20vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;

export const MenuItem = styled.h1<{ selected: boolean }>`
  font-size: ${({ selected }) => (selected ? "1rem" : "0.9rem")};
  color: ${({ selected }) =>
    selected ? `${colors.brown0}` : `${colors.brown3}`};
  cursor: pointer;
  transition: color 0.3s ease;
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
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-right: 15px;
`;

export const ImageS = styled.img<MenuProps>`
  max-width: 200px;
  width: ${(props) => (props.isDesktop ? "15vw" : "40vw")};
  border-radius: 10px;
`;

export const Career = styled.div``;

export const IaC = styled.div<MenuProps>`
  display: ${(props) => (props.isDesktop ? "flex" : "block")};
`;

export const MenuTitle = styled.div``;

export const MenuDescript = styled.div`
  padding-top: 5px;
  font-size: 0.8rem;
  opacity: 80%;
`;
