import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiKakaoTalkFill } from "react-icons/ri";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { MenuProps } from "./Header";

const FooterContainer = styled.footer<MenuProps>`
  height: ${(props) => (props.isDesktop ? "9vh" : "12vh")};
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color:rgb(156, 145, 134);
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
    color: rgb(91, 84, 78);
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: rgb(100, 83, 66);
    }

    svg {
      font-size: 20px;
    }
  }
`;

const Copyright = styled.div<MenuProps>`
  padding-top: ${(props) => (props.isDesktop ? "0.5%" : "2%")};
  font-size: 0.7rem;
  color: rgb(101 90, 79);
`;

function Footer() {
  const isDesktop = useRecoilValue(isDesktopState);
  return (
    <FooterContainer isDesktop={isDesktop}>
      <SocialLinks isDesktop={isDesktop}>
        <a href="https://www.instagram.com/yoonble_studio" target="_blank">
          <AiFillInstagram />
          insta.&nbsp;&nbsp; yoonble_studio
        </a>

        <a href="https://pf.kakao.com/_KxkGWb?from=qr" target="_blank">
          <RiKakaoTalkFill />
          kakao.&nbsp;&nbsp; 윤블스튜디오
        </a>
        <a href="mailto:lovellehyo@gmail.com" target="_blank">
          <MdEmail />
          website.&nbsp;&nbsp; lovellehyo@gmail.com
        </a>
      </SocialLinks>
      <Copyright isDesktop={isDesktop}>© 2025 YOONBLE</Copyright>
    </FooterContainer>
  );
}

export default Footer;
