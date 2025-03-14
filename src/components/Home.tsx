import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { imageLink } from "../fetcher";
import {
  BackgroundDiv,
  Card,
  Content,
  Title,
  Description,
  Bold,
  ImgContainer,
  Img,
} from "./styled-components/HomeStyles";

export default function Home() {
  const isDesktop = useRecoilValue(isDesktopState);

  return (
    <>
      <BackgroundDiv>
        <Card>
          <Content>
            <Title>
              YOONBLE
              <br />
              STUDIO
            </Title>
            <Description>
              <Bold>KOREA'S LEADING HIGH-END COSMETIC TATTOO STUDIO</Bold>
            </Description>
            <br />
            <br />
            <Description>
              <Bold>Yoonble</Bold> is a high-end cosmetic tattoo brand known for
              its <Bold>precision</Bold> and <Bold>meticulous design</Bold>.
              <br />
              Every step—from <Bold>consultation</Bold> to the final
              procedure—is personally handled with <Bold>expert care</Bold>.
              <br />
              Through <Bold>personalized 1:1 consultations</Bold>, we analyze
              each client’s unique features
              <br />
              to create <Bold>harmonious, natural enhancements</Bold>.<br />
              <Bold>Experience refined beauty and confidence</Bold> with
              Yoonble.
            </Description>
            <br />
            <br />
            <br />
            <Description>
              More Info &nbsp;&nbsp; <Bold>SHOP | MENU | ACADEMY</Bold>
            </Description>
          </Content>
          {isDesktop && (
            <ImgContainer>
              <Img src={imageLink + "/main.png"} alt="Yoonble Studio" />
            </ImgContainer>
          )}
        </Card>
      </BackgroundDiv>
    </>
  );
}
