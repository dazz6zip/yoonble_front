import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { FaArrowLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/long.jpg";

export const HeaderAndMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 10vh;
`;

export const StyledMenuItem = styled(Link)<{ $isSubMenu?: boolean }>`
  display: block;
  text-decoration: none;
  color: ${(props) => (props.$isSubMenu ? "#888" : "#3A3B42")};
  font-size: ${(props) => (props.$isSubMenu ? "16px" : "18px")};

  padding-left: ${(props) => (props.$isSubMenu ? "20px" : "0")};
  margin-top: ${(props) => (props.$isSubMenu ? "20px" : "30px")};

  &:hover {
    color: ${(props) => (props.$isSubMenu ? "#666" : "#333")};
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
`;

export const CustomIcon = styled.b`
  color: rgb(195, 186, 180);
  padding-right: 10px;
`;

export const MenuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "20px",
    height: "20px",
    top: "15px",
    transform: "translateX(20px)", // 왼쪽으로 20px 이동
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmCrossButton: {
    width: "20px",
    height: "20px",
    left: "20px",
    top: "15px",
  },
  bmMenuWrap: {
    position: "absolute", // 부모 컨테이너 기준으로 설정
    overflow: "hidden", // 넘치는 애니메이션 숨김
    height: "100vh", // 세로 높이 전체를 덮기
    top: "0", // 상단에서 시작
  },
  bmMenu: {
    background: "#f5f5f5",
    padding: "20px",
    fontSize: "1em",
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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <HeaderAndMenu>
        <Menu
          customBurgerIcon={<GiHamburgerMenu size={"30"} />}
          customCrossIcon={<FaArrowLeft size={"30"} />}
          width={"250px"}
          isOpen={isMenuOpen}
          onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
          styles={MenuStyles}
        >
          <br />
          <StyledMenuItem to="/" onClick={closeMenu}>
            ABOUT
          </StyledMenuItem>
          <StyledMenuItem to="/" onClick={closeMenu} $isSubMenu>
            <CustomIcon>✶</CustomIcon>ARTIST
          </StyledMenuItem>
          <StyledMenuItem to="/" onClick={closeMenu} $isSubMenu>
            <CustomIcon>✷</CustomIcon>ARTMAKE
          </StyledMenuItem>
          <StyledMenuItem to="/" onClick={closeMenu} $isSubMenu>
            <CustomIcon>✶</CustomIcon>NOTICE/EVENT
          </StyledMenuItem>
          <StyledMenuItem to="/" onClick={closeMenu} $isSubMenu>
            <CustomIcon>✶</CustomIcon>FAQ
          </StyledMenuItem>
          <StyledMenuItem to="/" onClick={closeMenu}>
            BOOKING
          </StyledMenuItem>
          <StyledMenuItem to="/" onClick={closeMenu} $isSubMenu>
            <CustomIcon>✶</CustomIcon>RESERVATION
          </StyledMenuItem>
          <StyledMenuItem to="/" onClick={closeMenu} $isSubMenu>
            <CustomIcon>✷</CustomIcon>REVIEW
          </StyledMenuItem>
        </Menu>

        <HeaderContainer>
          <Link to="/">
            <img width={"500px"} src={logo} alt="Logo" />
          </Link>
        </HeaderContainer>
      </HeaderAndMenu>
    </>
  );
}

export default Header;
