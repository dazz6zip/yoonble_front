import img1 from "../images/img1.jpg";
import img2 from "../images/img4.png";
import img3 from "../images/img5.jpg";
import video from "../images/yb.mp4";
import { useEffect, useState } from "react";
import {
  AboutTitle,
  Container,
  Content,
  Description,
  Title,
  Video,
  VideoWrapper,
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
        <AboutTitle>About</AboutTitle>
        <Description>{t("shop.about.description")}</Description>

        <AboutTitle>Design</AboutTitle>
        <Description>{t("shop.design.description")}</Description>

        <AboutTitle>{t("shop.title")}</AboutTitle>
        <Description>{t("shop.reservation.description")}</Description>
      </Content>
      <VideoWrapper>
        <Video autoPlay muted loop>
          <source src={video} type="video/mp4"></source>
        </Video>
      </VideoWrapper>
    </Container>
  );
}
