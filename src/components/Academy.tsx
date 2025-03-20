import styled from "styled-components";
import img1 from "../images/artist.jpg";
import { MenuProps } from "./Header";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { imageLink } from "../fetcher";
import { colors } from "../GlobalStyle";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div<MenuProps>`
  padding-left: ${(props) => (props.isDesktop ? "20px" : 0)};
  margin-bottom: 40px;
  text-align: left;
`;

const Title = styled.h2<MenuProps>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.brown1};
  text-align: ${(props) => (props.isDesktop ? "left" : "center")};
  padding-left: ${(props) => (props.isDesktop ? "7px" : 0)};

  padding-top: ${(props) => (props.isDesktop ? 0 : "16px")};
  padding-bottom: 10px;
  margin-bottom: 10px;

  background: linear-gradient(
    to bottom,
    rgba(117, 105, 94, 0.6),
    rgba(117, 105, 94, 0)
  );
  background-repeat: no-repeat;
  background-size: 100% 3px;
  background-position: bottom;
`;


const Description = styled.p`
  font-size: 15px;
  line-height: 1.5;
  padding-bottom: 7px;
`;

// const IaC = styled.div<MenuProps>`
//   display: ${(props) => (props.isDesktop ? "flex" : "block")};
// `;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-right: 15px;
`;

const Image = styled.img<MenuProps>`
  max-width: 15vw;
  border-radius: 10px;
`;

export default function Academy() {
  const isDesktop = useRecoilValue(isDesktopState);
  const { t } = useTranslation();
  return (
    <Container>
      {/* <IaC isDesktop={isDesktop}> */}
      <Content isDesktop={isDesktop}>
        <Title isDesktop={isDesktop}>Academy</Title>
        <Description>
          {t("academy.description1")}</Description><br />
        <Description>
          {t("academy.description2")}</Description>
      </Content>
      <ImageWrapper>
        <Image isDesktop={isDesktop} src={imageLink + '/academy/0.jpeg'} alt="shop" />
        <Image isDesktop={isDesktop} src={imageLink + '/academy/1.jpeg'} alt="shop" />
        <Image isDesktop={isDesktop} src={imageLink + '/academy/2.jpeg'} alt="shop" />
      </ImageWrapper>
      {/* </IaC> */}
    </Container>
  );
}
