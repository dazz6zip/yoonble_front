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
  background-color: ${colors.background};
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

export interface MenuItemProps {
  isDesktop: boolean;
  active?: boolean;
}

export const HeaderContainer = styled.div<MenuItemProps>`
  height: ${(props) => (props.isDesktop ? "12vh" : "9vh")};
  display: flex;
  align-items: center;
  font-family: "Playfair Display", "Noto Sans", "Noto Sans KR", sans-serif;
  width: 100%;
  padding: ${(props) => (props.isDesktop ? "1vh 0" : "0")};
  border-bottom: 1px solid #cfb3a6;
`;

export const TitleContainer = styled.div<MenuItemProps>`
  display: flex;
  padding-left: ${(props) =>
    props.isDesktop ? "0" : `calc(50% - 40px - 2.5vw)`};
  justify-content: center;
`;

export const TitleImg = styled.img<MenuItemProps>`
  margin-left: 50px;
  width: ${(props) => (props.isDesktop ? "60px" : "40px")};
`;

export const Menu = styled.div<MenuItemProps>`
  display: ${(props) => (props.isDesktop ? "flex" : "none")};
  align-items: center;
  justify-content: space-between; 
  gap: 2vw;
  width: 100%;
  padding-right: 3rem;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  gap: 1.5rem
`

export const MenuItem = styled(Link) <{ active: boolean }>`
  position: relative;
  font-size: 0.8rem;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) =>
    props.active ? "rgb(80, 60, 55)" : "rgb(160, 143, 124)"};
  cursor: pointer;
  &:hover {
    color: rgb(101, 80, 79);
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  transform: translateX(-25%);
  background: ${colors.white1};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  font-family: "Noto Sans", "Noto Sans KR", sans-serif;
  font-size: 0.7rem;
  z-index: 10;

  animation: slideDown 0.3s ease-out forwards; /* 애니메이션 지속 시간: 0.3초 */
`;

export const DropdownItem = styled(Link)`
  display: block;
  padding: 10px 15px;
  color: rgb(80, 60, 55);
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  &:hover {
    background: rgb(240, 230, 220);
  }
`;
