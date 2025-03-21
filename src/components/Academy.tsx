import img1 from "../images/artist.jpg";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { imageLink } from "../fetcher";
import {
  Container,
  Content,
  Description,
  Image,
  ImageWrapper,
  Title,
} from "./styled-components/DefaultStyle";
import { useTranslation } from "react-i18next";

export default function Academy() {
  const isDesktop = useRecoilValue(isDesktopState);
  const { t } = useTranslation();
  return (
    <Container>
      <Content isDesktop={isDesktop}>
        <Title isDesktop={isDesktop}>Academy</Title>
        <Description>
          {t("academy.description1")}</Description><br />
        <Description>
          {t("academy.description2")}</Description>
      </Content>
      <ImageWrapper>
        <Image
          isDesktop={isDesktop}
          src={imageLink + "/academy/0.jpeg"}
          alt="shop"
        />
        <Image
          isDesktop={isDesktop}
          src={imageLink + "/academy/1.jpeg"}
          alt="shop"
        />
        <Image
          isDesktop={isDesktop}
          src={imageLink + "/academy/2.jpeg"}
          alt="shop"
        />
      </ImageWrapper>
      {/* </IaC> */}
    </Container>
  );
}
