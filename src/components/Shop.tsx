import styled from "styled-components";
import img1 from "../images/img1.jpg";
import img2 from "../images/img4.png";
import img3 from "../images/img5.jpg";
import { useEffect, useState } from "react";
import { colors } from "../GlobalStyle";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5vw;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30vw;
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 20vw;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colors.brown1};
  padding-bottom: 10px;
  margin-bottom: 10px;
  background: linear-gradient(to bottom, rgba(117, 105, 94, 0.6), rgba(117, 105, 94, 0));
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 3px;
`;

const Description = styled.p`
  font-size: 0.8rem;
  line-height: 1.6;
`;

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
