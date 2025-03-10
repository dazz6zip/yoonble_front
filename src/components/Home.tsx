import axios from "axios";
import main from "../images/img3.png";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { AiFillInstagram } from "react-icons/ai";
import { SocialLinks } from "./Footer";

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
  gap: 70px;
`

const Content = styled.div`
  flex: 1;
  text-align: left;
`

const Title = styled.h1`
font-family: Times New Roman;
   font-size: 50px;
   color:rgb(114, 100, 92);
   margin-bottom: 20px;
`

const Description1 = styled.p`
font-family: Godik;
font-size: 19px;
color:rgb(101, 96, 92);
`

const Description = styled.p`
font-size: 13px;
color:rgb(101, 96, 92);
line-height: 1.5;
`

const ImgContainer = styled.div`
flex: 1;
display: flex;
justify-content: center;
`

const Img = styled.img`
  width: 35vw;
  object-fit: cover;
`;

export default function Home() {
  const isDesktop = useRecoilValue(isDesktopState);

  return (
    <>
      <BackgroundDiv>
        <Card>
          <Content>
            <Title>
              Yoonble Beauty Studio
            </Title>
            <Description1>The Premium Beauty Studio</Description1><br /><br />
            <Description>
              Yoonble Studio is The Best Yoonble Studio is The Best Ha<br />
              Yoonble Studio is The Best Yoonble Studio is The Best HHaHAhah<br />
              Hahahaha Yoonble Studio is The Best Yoonble Studio is The Best<br />
              Yoonble Studio is The Best Yoonble Studio is The Best.<br />
            </Description><br /><br />
            <Description1>Brow | Lip | Eyeline | Eyelash</Description1><br /><br />
            <SocialLinks isDesktop={isDesktop}>
              <a href="https://www.instagram.com/yoonble_studio" target="_blank">
                <AiFillInstagram />
                yoonble_studio
              </a>
            </SocialLinks>
          </Content>
          {isDesktop ?
            <ImgContainer><Img src={main}></Img></ImgContainer> : <></>}
        </Card>
      </BackgroundDiv>
    </>
  );
}
