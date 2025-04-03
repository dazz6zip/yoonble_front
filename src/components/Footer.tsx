import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import {
  Copyright,
  FooterContainer,
  SocialLinks,
} from "./styled-components/FooterAndHeaderStyled";

function Footer() {
  const isDesktop = useRecoilValue(isDesktopState);
  return (
    <FooterContainer isDesktop={isDesktop}>
      {isDesktop ? (
        <>
          <SocialLinks isDesktop={isDesktop}>
            <a href="https://www.instagram.com/yoonble_studio" target="_blank">
              <AiFillInstagram />
              insta.&emsp;&emsp;&nbsp; yoonble_studio
            </a>

            <a href="https://pf.kakao.com/_KxkGWb?from=qr" target="_blank">
              <RiKakaoTalkFill />
              kakao.&emsp;&nbsp;&nbsp; 윤블스튜디오
            </a>
            <a href="mailto:lovellehyo@gmail.com" target="_blank">
              <MdEmail />
              website.&nbsp;&nbsp;&nbsp; we.develop.your@gmail.com
            </a>
          </SocialLinks>
          <Copyright isDesktop={isDesktop}>© 2025 YOONBLE</Copyright>
        </>
      ) : (
        <>
          <SocialLinks isDesktop={isDesktop}>
            <a href="https://pf.kakao.com/_KxkGWb?from=qr" target="_blank">
              <RiKakaoTalkFill />
              kakao.&emsp;&nbsp;&nbsp; 윤블스튜디오
            </a>
            <a href="mailto:lovellehyo@gmail.com" target="_blank">
              <MdEmail />
              website.&nbsp;&nbsp;&nbsp; we.develop.your@gmail.com
            </a>
          </SocialLinks><br />
          <Copyright isDesktop={isDesktop}>© 2025 YOONBLE</Copyright>
        </>
      )
      }
    </FooterContainer >
  );
}

export default Footer;
