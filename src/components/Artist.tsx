import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import {
  Career,
  Container,
  Content,
  Description,
  IaC,
  Image,
  ImageWrapper,
  Title,
} from "./styled-components/DefaultStyle";
import { imageLink } from "../fetcher";
import { colors } from "../GlobalStyle";

export default function Artist() {
  const isDesktop = useRecoilValue(isDesktopState);
  return (
    <Container>
      <IaC isDesktop={isDesktop}>
        <ImageWrapper>
          <Image
            isDesktop={isDesktop}
            src={imageLink + "/artist/artist.jpg"}
            alt="artist"
          />
        </ImageWrapper>
        <Content isDesktop={isDesktop}>
          <Title isDesktop={isDesktop}>Artist. Yoon</Title>
          <Description>
            정교한 기술과 예술적 감각을 바탕으로, 자연스럽고 세련된 결과를
            제공합니다.
            <br />
          </Description>
          <Description>
            ✶&nbsp;&nbsp;&nbsp;메이크업 국가 자격증 보유
          </Description>
          <Description>
            ✶&nbsp;&nbsp;&nbsp;한국/일본에서 최다 시술 경험 보유
          </Description>
          <Career>
            {/* <Year>2025</Year> */}
            <Description>
              ✶&nbsp;&nbsp;&nbsp;국제 아트메이크 콘테스트 심사위원
            </Description>
            <Description>
              ✶&nbsp;&nbsp;&nbsp;국제 아트메이크 콘테스트 수상 경력
            </Description>
            {/* <Year>2024</Year> */}
            <Description>
              ✶&nbsp;&nbsp;&nbsp;메이크업 아티스트 출신, 7년 이상의 미용 경력
            </Description>
            <Description>✶&nbsp;&nbsp;&nbsp;아카데미 운영 </Description>
            <br />
            <br />
            {/* <ImageS isDesktop={isDesktop} src={imageLink + '/artist/artist0.jpeg'} alt="artist" /> */}
          </Career>
        </Content>
      </IaC>
    </Container>
  );
}
