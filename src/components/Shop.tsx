import img1 from "../images/img1.jpg";
import img2 from "../images/img4.png";
import img3 from "../images/img5.jpg";
import { useEffect, useState } from "react";
import {
  Container,
  Content,
  Description,
  ImageWrapper,
  Title,
  Image,
} from "./styled-components/DefaultStyle";
import { useTranslation } from "react-i18next";

export default function Shop() {
  const images = [img1, img2, img3];
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Content>
        <Title>About</Title>
        <Description>{t("shop.about.description")}</Description><br /><br /><br />

        <Title>Design</Title>
        <Description>{t("shop.design.description")}</Description><br /><br /><br />

        <Title>1:1 예약제</Title>
        <Description>{t("shop.reservation.description")}</Description>
      </Content>
      <ImageWrapper>
        <Image src={images[currentImage]} alt="shop" />
      </ImageWrapper>
    </Container>
  );
}