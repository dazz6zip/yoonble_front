import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiKakaoTalkFill } from "react-icons/ri";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 15vh;
  color: #ead8c4;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgb(135, 121, 108);
  font-size: 14px;
  padding: 20px 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  a {
    color: #ead8c4;
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #f5e6d8;
    }

    svg {
      font-size: 20px;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://www.instagram.com/yoonble_studio" target="_blank">
          <AiFillInstagram />
          yoonble_studio
        </a>
        <span>♡</span>
        <a href="https://pf.kakao.com/윤블스튜디오" target="_blank">
          <RiKakaoTalkFill />
          윤블스튜디오
        </a>
      </SocialLinks>
      <SocialLinks>
        WEBSITE <MdEmail />
        <a href="mailto:lovellehyo@gmail.com">lovellehyo@gmail.com</a>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;
