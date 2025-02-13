import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { FaArrowLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2vw;
  margin-top: 2vh;
`;

const Title = styled.h1`
  color: rgb(135, 121, 108);
  font-size: 3rem;
`;

export const HeaderAndMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  min-height: 10vh;
`;

export const StyledMenu = styled.div`
  display: block;
  text-decoration: none;
  color: rgb(201, 193, 187);
  font-size: 1.2rem;
  padding-left: 2vw;
  margin-top: 3vh;
  margin-bottom: 2vh;
`;

export const StyledMenuItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: rgb(234, 224, 217);
  font-size: 1rem;
  padding-left: 2vw;
  margin-top: 2vh;
  margin-bottom: 2vh;

  &:hover {
    color: rgb(201, 193, 187);
  }
`;

export const HeaderContainer = styled.div`
  height: 12vh;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 1vh 0;
  border-bottom: 2px solid black;
`;

export const CustomIcon = styled.b`
  color: rgb(234, 224, 217);
  padding-right: 1vw;
`;

export const MenuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "2.5vw",
    height: "2.5vw",
    top: "2vh",
    transform: "translateX(2vw)", // 왼쪽으로 이동
  },
  bmCrossButton: {
    width: "2vw",
    height: "2vw",
    left: "2vw",
    top: "2vh",
  },
  bmMenuWrap: {
    position: "absolute",
    overflow: "hidden",
    height: "100vh",
    top: "0",
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

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <HeaderAndMenu>
        <Menu
          customBurgerIcon={
            isDesktop ? <></> : <GiHamburgerMenu size={"2.5vw"} />
          }
          customCrossIcon={isDesktop ? <></> : <FaArrowLeft size={"2.5vw"} />}
          width={isDesktop ? "20vw" : "60vw"} /* 반응형 너비 */
          isOpen={isDesktop ? true : isMenuOpen}
          onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
          styles={MenuStyles}
        >
          <br />
          <StyledMenu>ABOUT</StyledMenu>
          <StyledMenuItem to="/shop" onClick={closeMenu}>
            <CustomIcon>✷</CustomIcon>SHOP
          </StyledMenuItem>
          <StyledMenuItem to="/artist" onClick={closeMenu}>
            <CustomIcon>✶</CustomIcon>ARTIST
          </StyledMenuItem>
          <StyledMenuItem to="/artmake" onClick={closeMenu}>
            <CustomIcon>✷</CustomIcon>ARTMAKE
          </StyledMenuItem>
          <StyledMenuItem to="/faq" onClick={closeMenu}>
            <CustomIcon>✶</CustomIcon>FAQ
          </StyledMenuItem>
          <StyledMenu>BOOKING</StyledMenu>
          <StyledMenuItem to="/reservation" onClick={closeMenu}>
            <CustomIcon>✶</CustomIcon>RESERVATION
          </StyledMenuItem>
          <StyledMenuItem to="/review" onClick={closeMenu}>
            <CustomIcon>✷</CustomIcon>REVIEW
          </StyledMenuItem>
        </Menu>

        <HeaderContainer>
          <Link to="/">
            <TitleContainer>
              <Title>HEADER</Title>
            </TitleContainer>
          </Link>
        </HeaderContainer>
      </HeaderAndMenu>
    </>
  );
}

export default Header;
