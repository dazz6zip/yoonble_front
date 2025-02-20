import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { FaArrowLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isDesktopState } from "../recoil/atom";
import Translater from "../Translater";
import React from "react";

export const StyledMenu = styled.div`
  display: block;
  text-decoration: none;
  color: rgb(201, 193, 187);
  font-size: 20px;
  padding-left: 1vw;
  margin-top: 3vh;
  margin-bottom: 2vh;
`;

export const StyledMenuItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: rgb(234, 224, 217);
  font-size: 15px;
  padding-left: 2vw;
  margin-top: 2vh;
  margin-bottom: 2vh;

  &:hover {
    color: rgb(201, 193, 187);
  }
`;

export const CustomIcon = styled.b`
  color: rgb(234, 224, 217);
  padding-right: 1vw;
`;

export const MenuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "4vw",
    height: "4vw",
    top: "4vh",
    transform: "translateX(2vw)",
  },
  bmCrossButton: {
    width: "2vw",
    height: "2vw",
    left: "2vw",
    top: "2vh",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "88vh",
    top: "12vh",
  },
  bmMenu: {
    background: "rgb(164, 152, 140)",
    padding: "2vw",
    fontSize: "1rem",
    height: "100%",
    boxShadow: "none",
    transform: "translateX(0)",
    transition: "transform 0.3s ease-in-out",
  },
  bmOverlay: {
    display: "none",
  },
};

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useRecoilValue(isDesktopState);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Menu
        customBurgerIcon={
          isDesktop ? <></> : <GiHamburgerMenu size={"2.5vw"} />
        }
        customCrossIcon={isDesktop ? <></> : <FaArrowLeft size={"2.5vw"} />}
        width={isDesktop ? "20vw" : "35vw"} /* 반응형 너비 */
        isOpen={isDesktop ? true : isMenuOpen}
        onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
        styles={MenuStyles}
      >
        <br />
        <StyledMenu>ABOUT</StyledMenu>
        <StyledMenuItem to="/shop" onClick={closeMenu}>
          <CustomIcon>✶</CustomIcon>SHOP
        </StyledMenuItem>
        <StyledMenuItem to="/artist" onClick={closeMenu}>
          <CustomIcon>✶</CustomIcon>ARTIST
        </StyledMenuItem>
        <StyledMenuItem to="/artmake" onClick={closeMenu}>
          <CustomIcon>✶</CustomIcon>ARTMAKE
        </StyledMenuItem>
        <StyledMenuItem to="/faq" onClick={closeMenu}>
          <CustomIcon>✶</CustomIcon>FAQ
        </StyledMenuItem>
        <StyledMenu>BOOKING</StyledMenu>
        <StyledMenuItem to="/reservation" onClick={closeMenu}>
          <CustomIcon>✷</CustomIcon>RESERVATION
        </StyledMenuItem>
        <StyledMenuItem to="/review" onClick={closeMenu}>
          <CustomIcon>✷</CustomIcon>REVIEW
        </StyledMenuItem>
        <br />
        <StyledMenuItem to="">
          <Translater />
        </StyledMenuItem>
      </Menu>
    </>
  );
}

export default NavigationBar;
