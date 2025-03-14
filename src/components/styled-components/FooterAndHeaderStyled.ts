import styled from "styled-components";
import { colors } from "../../GlobalStyle";
import { Link } from "react-router-dom";
import { MenuProps } from "./interface";

export const FooterContainer = styled.footer<MenuProps>`
  height: ${(props) => (props.isDesktop ? "9vh" : "12vh")};
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.pink1};
  opacity: 0.7;
  font-size: 12px;
  padding: 20px 0;
`;

export const SocialLinks = styled.div<MenuProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isDesktop ? "repeat(3, 2fr)" : "repeat(1, 1fr)"};
  gap: ${(props) => (props.isDesktop ? "20px" : "3%")};
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => (props.isDesktop ? "4px" : 0)};

  a {
    color: ${colors.brown0};
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.brown2};
    }

    svg {
      font-size: 20px;
    }
  }
`;

export const Copyright = styled.div<MenuProps>`
  padding-top: ${(props) => (props.isDesktop ? "0.5%" : "2%")};
  font-size: 0.7rem;
  color: ${colors.brown0};
`;

export const HeaderContainer = styled.div<MenuProps>`
  height: ${(props) => (props.isDesktop ? "12vh" : "9vh")};
  display: flex;
  justify-content: ${(props) => (props.isDesktop ? 0 : "center")};
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => (props.isDesktop ? "1vh 0" : 0)};
  z-index: 100;
  padding-top: ${(props) => (props.isDesktop ? "1px" : 0)};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #cfb3a6;
`;

export const TitleContainer = styled.div<MenuProps>`
  display: flex;
  gap: 2vw;
  margin-top: 2vh;
  justify-content: center;
  padding-bottom: ${(props) => (props.isDesktop ? 0 : "1rem")};
`;

export const TitleImg = styled.img<MenuProps>`
  width: 20vw;
  margin-left: ${(props) => (props.isDesktop ? "8vw" : 0)};
  max-width: ${(props) => (props.isDesktop ? "60px" : "40px")};
`;

export const Menu = styled.div<MenuProps>`
  margin-top: 1%;
  display: ${(props) => (props.isDesktop ? "flex" : "none")};
  gap: 2vw;
  justify-content: flex-start;
  align-items: center;
`;

export const MenuItem = styled(Link)<{ active: boolean }>`
  font-size: 0.8rem;
  color: ${(props) =>
    props.active ? "rgb(80, 60, 55)" : "rgb(160, 143, 124)"};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  transition: color 0.3s ease;
  &:hover {
    color: rgb(101, 80, 79);
  }
`;
