import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import Translater from "../Translater";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";

interface MenuProps {
  isDesktop: boolean;
}

export const HeaderContainer = styled.div`
  height: 9vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 1vh 0;
`;

const TitleContainer = styled.div<MenuProps>`
  display: flex;
  gap: 2vw;
  margin-top: 2vh;
  flex-grow: 1;
  justify-content: center;
  padding-bottom: ${(props) => (props.isDesktop ? 0 : "1rem")};
  transition: justify-content 0.3s ease;
`;

const Title = styled.h1`
  color: rgb(101, 90, 79);
  font-size: 2rem;
`;

const Menu = styled.div<MenuProps>`
  margin-top: 3%;
  display: ${(props) => (props.isDesktop ? "flex" : "none")};
  gap: 2vw;
  flex: 2;
  justify-content: flex-end;
  align-items: center;
`;

const MenuTitle = styled.div`
  font-size: 1rem;
  color: rgb(135, 121, 108);
  padding-left: 2vw;
`;

const MenuItem = styled(Link)`
  font-size: 0.8rem;
  color: rgb(160, 143, 124);
  transition: color 0.3s ease;
  &:hover {
    color: rgb(101, 80, 79);
  }
`;

const CustomIcon = styled.b`
  color: rgb(101, 80, 79);
  padding-right: 0.5vw;
`;

export default function Header() {
  const isDesktop = useRecoilValue(isDesktopState);
  return (
    <HeaderContainer>
      <Link to="/">
        <TitleContainer isDesktop={isDesktop}>
          <Title>YOONBLE</Title>
        </TitleContainer>
        <Menu isDesktop={isDesktop}>
          <MenuTitle>ABOUT</MenuTitle>
          <MenuItem to="/shop">
            <CustomIcon>✶</CustomIcon>SHOP
          </MenuItem>
          <MenuItem to="/artist">
            <CustomIcon>✶</CustomIcon>ARTIST
          </MenuItem>
          <MenuItem to="/artmake">
            <CustomIcon>✶</CustomIcon>ARTMAKE
          </MenuItem>
          <MenuItem to="/faq">
            <CustomIcon>✶</CustomIcon>FAQ
          </MenuItem>
          <MenuTitle>BOOKING</MenuTitle>
          <MenuItem to="/reservation">
            <CustomIcon>✷</CustomIcon>RESERVATION
          </MenuItem>
          <MenuItem to="/review">
            <CustomIcon>✷</CustomIcon>REVIEW
          </MenuItem>
          {/* <MenuItem to="">
            <Translater />
          </MenuItem> */}
        </Menu>
      </Link>
    </HeaderContainer>
  );
}
