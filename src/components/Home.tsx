import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { colors } from "../GlobalStyle";
import { imageLink } from "../fetcher";

const BackgroundDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 79vh;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  max-width: 75vw;
  width: 90%;
`;

const Content = styled.div`
  flex: 1;
  text-align: left;
`;

const Title = styled.h1`
  font-family: "Times New Roman", serif;
  font-size: 60px;
  color: ${colors.brown3};
  margin-bottom: 20px;
  line-height: 1.1;
`;

const Description = styled.p`
  font-size: 13px;
  color: ${colors.brown2};
  line-height: 1.6;
`;

const Bold = styled.span`
font-size: 14px;
  font-weight: bold;
  color: ${colors.brown0};
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 40vw;
  max-width: 500px;
  object-fit: cover;
`;

export default function Home() {
  const isDesktop = useRecoilValue(isDesktopState);

  return (
    <>
      <BackgroundDiv>
        <Card>
          <Content>
            <Title>YOONBLE<br />STUDIO</Title>
            <Description>
              <Bold>KOREA'S LEADING HIGH-END COSMETIC TATTOO STUDIO</Bold>
            </Description>
            <br /><br />
            <Description>
              <Bold>Yoonble</Bold> is a high-end cosmetic tattoo brand known for its <Bold>precision</Bold> and <Bold>meticulous design</Bold>.<br />
              Every step—from <Bold>consultation</Bold> to the final procedure—is personally handled with <Bold>expert care</Bold>.<br />
              Through <Bold>personalized 1:1 consultations</Bold>, we analyze each client’s unique features<br />
              to create <Bold>harmonious, natural enhancements</Bold>.<br />
              <Bold>Experience refined beauty and confidence</Bold> with Yoonble.
            </Description>
            <br /><br /><br />
            <Description>More Info &nbsp;&nbsp;  <Bold>SHOP | MENU | ACADEMY</Bold></Description>
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
