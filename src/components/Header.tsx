import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logoIcon from "../images/yb_logo_icon.png";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import img from "../images/kakao_login_small.png";
import axios from "axios";

export interface MenuProps {
  isDesktop: boolean;
}

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
  border-bottom: 1px solid #CFB3A6;
`;

const TitleContainer = styled.div<MenuProps>`
  display: flex;
  gap: 2vw;
  margin-top: 2vh;
  justify-content: center;
  padding-bottom: ${(props) => (props.isDesktop ? 0 : "1rem")};
`;

const TitleImg = styled.img<MenuProps>`
  width: 20vw;
  margin-left: ${(props) => (props.isDesktop ? "8vw" : 0)};
  max-width: ${(props) => (props.isDesktop ? "60px" : "40px")};
`;

const Menu = styled.div<MenuProps>`
  margin-top: 1%;
  display: ${(props) => (props.isDesktop ? "flex" : "none")};
  gap: 2vw;
  justify-content: flex-start;
  align-items: center;
`;

const MenuItem = styled(Link) <{ active: boolean }>`
  font-size: 0.8rem;
  color: ${(props) => (props.active ? "rgb(80, 60, 55)" : "rgb(160, 143, 124)")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  transition: color 0.3s ease;
  &:hover {
    color: rgb(101, 80, 79);
  }
`;

interface KakaoLoginResponse {
  redirectUri: string;
  clientId: string;
}

export default function Header() {
  const isDesktop = useRecoilValue(isDesktopState);
  const location = useLocation();

  // const kakaoLogin = async () => {
  //   try {
  //     const response = await axios.get<KakaoLoginResponse>("/api/users/");
  //     const { clientId, redirectUri } = response.data;
  //     window.location.href = ``;
  //   } catch (error) {
  //     console.log("kakao login error: ", error);
  //   }
  // };
  return (
    <HeaderContainer isDesktop={isDesktop}>
      <TitleContainer isDesktop={isDesktop}>
        <Link to="/">
          <TitleImg isDesktop={isDesktop} src={logoIcon} alt="Logo" />
        </Link>
      </TitleContainer>
      <Menu isDesktop={isDesktop}>
        <MenuItem to="/about" active={location.pathname === "/about"}>
          ABOUT
        </MenuItem>
        <MenuItem to="/artmake" active={location.pathname === "/artmake"}>
          MENU
        </MenuItem>
        <MenuItem to="/faq" active={location.pathname === "/faq"}>
          FAQ
        </MenuItem>
        <MenuItem to="/reservation" active={location.pathname === "/reservation"}>
          BOOKING
        </MenuItem>
        <MenuItem to="/review" active={location.pathname === "/review"}>
          REVIEW
        </MenuItem>
      </Menu>
    </HeaderContainer>
  );
}
