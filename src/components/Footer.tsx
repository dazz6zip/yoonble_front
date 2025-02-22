import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiKakaoTalkFill } from "react-icons/ri";
import styled from "styled-components";
import React from "react";

const FooterContainer = styled.footer`
  height: 15vh;
  color: rgb(171, 157, 136);
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background-color: rgb(135, 121, 108); */
  font-size: 14px;
  padding: 20px 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  a {
    color: rgb(171, 157, 136);
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: rgb(135, 121, 108);
    }

    svg {
      font-size: 20px;
    }
  }
`;

const Copyright = styled.div`
  padding-top: 1%;
  font-size: 0.7rem;
  color: rgb(101 90, 79);
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://www.instagram.com/yoonble_studio" target="_blank">
          <AiFillInstagram />
          yoonble_studio
        </a>

        <a href="https://pf.kakao.com/윤블스튜디오" target="_blank">
          <RiKakaoTalkFill />
          윤블스튜디오
        </a>
        <a href="mailto:lovellehyo@gmail.com" target="_blank">
          <MdEmail />
          lovellehyo@gmail.com
        </a>
      </SocialLinks>
      <Copyright>© 2025 YOONBLE</Copyright>
    </FooterContainer>
  );
}

export default Footer;
