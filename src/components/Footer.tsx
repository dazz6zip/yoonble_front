import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100vw;
  height: 15vh;
  font-size: 15px;
  font-family: Nanum Pen Script;
  color: black;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-color: rgb(180, 169, 159);

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
      <div>♡ Contact ♡</div>
      <div>
        Instagram | @yoonble_studio &nbsp;&nbsp;&nbsp; KakaoTalk | 윤블스튜디오
      </div>
      <br />
      <div>WEBSITE | lovellehyo@gmail.com</div>
    </FooterContainer>
  );
}

export default Footer;
