import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100vw;
  height: 15vh;
  color: black;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #ead8c4;

  background-color: rgb(135, 121, 108);

  @media (min-width: 768px) {
    font-size: 17px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <div>
        Instagram | @yoonble_studio &nbsp;♡&nbsp; KakaoTalk | 윤블스튜디오
      </div>
      <br />
      <div>WEBSITE | lovellehyo@gmail.com</div>
    </FooterContainer>
  );
}

export default Footer;
