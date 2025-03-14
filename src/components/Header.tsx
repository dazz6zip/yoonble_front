import { Link, useLocation } from "react-router-dom";
import logoIcon from "../images/yb_logo_icon.png";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import img from "../images/kakao_login_small.png";
import axios from "axios";
import {
  HeaderContainer,
  Menu,
  TitleContainer,
  TitleImg,
  MenuItem,
} from "./styled-components/FooterAndHeaderStyled";

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
        &nbsp;
        <MenuItem to="/about" active={location.pathname === "/about"}>
          ABOUT
        </MenuItem>
        <MenuItem to="/artmake" active={location.pathname === "/artmake"}>
          MENU
        </MenuItem>
        <MenuItem to="/faq" active={location.pathname === "/faq"}>
          FAQ
        </MenuItem>
        <MenuItem
          to="/reservation"
          active={location.pathname === "/reservation"}
        >
          BOOKING
        </MenuItem>
        <MenuItem to="/review" active={location.pathname === "/review"}>
          REVIEW
        </MenuItem>
      </Menu>
    </HeaderContainer>
  );
}
