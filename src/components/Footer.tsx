import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 13vh;
  font-size: 15px;
  font-family: Nanum Pen Script;
  color: black;
  text-align: center;

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
      Contact
      <p>hyo_00@gmail.com</p>
    </FooterContainer>
  );
}

export default Footer;
