import img1 from "../images/artist.jpg";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { imageLink } from "../fetcher";
import {
  Container,
  Content,
  Description,
  Image,
  AcademyWrapper,
  Title,
} from "./styled-components/DefaultStyle";
import { useTranslation } from "react-i18next";

export default function Academy() {
  const { t } = useTranslation();
  const isDesktop = useRecoilValue(isDesktopState);
  return (
    <Container>
      <AcademyWrapper>
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
      </AcademyWrapper>
      <Content isDesktop={isDesktop}>
        <Title isDesktop={isDesktop}>Academy</Title>
        <Description>
          {t("academy.description1")}</Description><br />
        <Description>
          {t("academy.description2")}</Description>
      </Content>
    </Container>
  );
}