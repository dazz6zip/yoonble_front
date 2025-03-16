import { useState } from "react";
import { slide as Menu, Props as BurgerMenuProps } from "react-burger-menu";
import { FaArrowLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import Translater from "../Translater";
import {
  CustomIcon,
  MenuStyles,
  StyledMenu,
  StyledMenuItem,
} from "./styled-components/HamburgerStyle";
import { AboutProps } from "./styled-components/interface";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useRecoilValue(isDesktopState);
  const location = useLocation();
  const BurgerMenu = Menu as React.ComponentType<BurgerMenuProps>;

  const closeMenu = () => setIsMenuOpen(false);

  if (isDesktop) {
    return null;
  }

  return (
    <>
      <BurgerMenu
        customBurgerIcon={
          isDesktop ? <></> : <GiHamburgerMenu size={"2.5vw"} />
        }
        customCrossIcon={isDesktop ? <></> : <FaArrowLeft size={"2.5vw"} />}
        width={isDesktop ? "20vw" : "35vw"}
        isOpen={isDesktop ? true : isMenuOpen}
        onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
        styles={MenuStyles}
      >
        <br />
        <StyledMenu>ABOUT</StyledMenu>
        <StyledMenuItem
          isActive={location.pathname === "/about"}
          to="/about"
          state={{ selected: "Yoonble" } as AboutProps}
          onClick={closeMenu}
        >
          <CustomIcon>✶</CustomIcon>ABOUT
        </StyledMenuItem>
        <StyledMenuItem
          isActive={location.pathname === "/artist"}
          to="/artist"
          onClick={closeMenu}
        >
          <CustomIcon>✶</CustomIcon>ARTIST
        </StyledMenuItem>
        <StyledMenuItem
          isActive={location.pathname === "/artmake"}
          to="/artmake"
          onClick={closeMenu}
        >
          <CustomIcon>✶</CustomIcon>ARTMAKE
        </StyledMenuItem>
        <StyledMenuItem
          isActive={location.pathname === "/faq"}
          to="/faq"
          onClick={closeMenu}
        >
          <CustomIcon>✶</CustomIcon>FAQ
        </StyledMenuItem>
        <StyledMenu>BOOKING</StyledMenu>
        <StyledMenuItem
          isActive={location.pathname === "/reservation"}
          to="/reservation"
          onClick={closeMenu}
        >
          <CustomIcon>✷</CustomIcon>RESERVATION
        </StyledMenuItem>
        <StyledMenuItem
          isActive={location.pathname === "/review"}
          to="/review"
          onClick={closeMenu}
        >
          <CustomIcon>✷</CustomIcon>REVIEW
        </StyledMenuItem>
        <br />
        <StyledMenuItem isActive={location.pathname === ""} to="">
          <Translater />
        </StyledMenuItem>
      </BurgerMenu>
    </>
  );
}

export default NavigationBar;
