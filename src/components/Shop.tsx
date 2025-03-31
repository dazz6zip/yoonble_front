import img1 from "../images/img1.jpg";
import img2 from "../images/img4.png";
import img3 from "../images/img5.jpg";
import video from "../images/yb.mp4";
import { useEffect, useState } from "react";
import {
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
      <VideoWrapper>
        <Video autoPlay muted loop>
          <source src={video} type="video/mp4"></source>
        </Video>
      </VideoWrapper>
      <Content>
        <Title>About</Title>
        <Description>{t("shop.about.description")}</Description>

        <Title>Design</Title>
        <Description>
          대표원장이 상담부터 디자인, 시술까지 전 과정을 직접 진행하며, 고객 한
          분 한 분을 위한 최상의 결과를 제공합니다. 디자인 단계에서는 얼굴형과
          이미지를 정밀 분석하여 개개인의 조화로운 아름다움을 극대화할 수 있는
          디자인을 제안합니다. 고객님의 취향을 세심하게 반영한 맞춤 컨설팅과
          전문적인 심미적 접근을 통해, 완성도 높은 결과를 약속드립니다.
        </Description>

        <Title>1:1 예약제</Title>
        <Description>{t("shop.reservation.description")}</Description>
      </Content>
    </Container>
  );
}
