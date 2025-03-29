import { Link, useLocation } from "react-router-dom";
import logoIcon from "../images/yb_logo_icon.png";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import Translator from "../Translator";
import img from "../images/kakao_login_small.png";
import axios from "axios";
import {
  HeaderContainer,
  Menu,
  TitleContainer,
  TitleImg,
  MenuItem,
  DropdownMenu,
  DropdownItem,
  MenuItemContainer,
} from "./styled-components/FooterAndHeaderStyled";
import { useState } from "react";
import { AboutProps } from "./styled-components/interface";

interface KakaoLoginResponse {
  redirectUri: string;
  clientId: string;
}

export default function Header() {
  const isDesktop = useRecoilValue(isDesktopState);
  const location = useLocation();

  const [aboutOpen, setAboutOpen] = useState(false);

  const kakaoLogin = async () => {
    try {
      const response = await axios.get<KakaoLoginResponse>("/api/users/");
      const { clientId, redirectUri } = response.data;
      window.location.href = ``;
    } catch (error) {
      console.log("kakao login error: ", error);
    }
  };
  return (
    <HeaderContainer isDesktop={isDesktop}>
      <TitleContainer isDesktop={isDesktop}>
        <Link to="/">
          <TitleImg isDesktop={isDesktop} src={logoIcon} alt="Logo" />
        </Link>
      </TitleContainer>
      <Menu isDesktop={isDesktop}>
        <MenuItemContainer>
          &nbsp;
          <MenuItem
            to="/about"
            state={{ selected: "Yoonble" } as AboutProps}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
            active={location.pathname.startsWith("/about")}
          >
            ABOUT
            {aboutOpen && (
              <DropdownMenu>
                <DropdownItem
                  to="/about"
                  state={{ selected: "Yoonble" } as AboutProps}
                >
                  Yoonble
                </DropdownItem>
                <DropdownItem
                  to="/about"
                  state={{ selected: "Artist" } as AboutProps}
                >
                  Artist
                </DropdownItem>
                <DropdownItem
                  to="/about"
                  state={{ selected: "Academy" } as AboutProps}
                >
                  Academy
                </DropdownItem>
              </DropdownMenu>
            )}
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
        </MenuItemContainer>
        <Translator />
      </Menu>
    </HeaderContainer>
  );
}
