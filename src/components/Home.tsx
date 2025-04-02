import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { getCategories, ICategory, imageLink } from "../fetcher";
import {
  BackgroundDiv,
  Card,
  Content,
  Title,
  Description,
  Bold,
  ImgContainer,
  Img,
  HomeMenuWrapper,
  HomeMenuBox,
  HomeMenuImage,
} from "./styled-components/HomeStyles";
import { AiFillInstagram } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SocialLinks } from "./styled-components/FooterAndHeaderStyled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const isDesktop = useRecoilValue(isDesktopState);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (err) {
        console.error("artmakes 불러오기 실패: ", err);
      }
    };
    fetchData();
  }, []);

  const handleNavigation = (path: string) => {
    navigate("menu/" + (path === "brow" || path === "eyeline" ? path : `general/${path}`));
  };

  return (
    <>
      <BackgroundDiv>
        <Card isDesktop={isDesktop}>
          <Content>
            {isDesktop ? (
              <>
                <Title>
                  YOONBLE
                  <br />
                  STUDIO
                </Title>
                <Description>
                  <Bold>KOREA'S LEADING HIGH-END COSMETIC TATTOO STUDIO</Bold>
                </Description><br /><br />
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
              </>
            ) : (
              <>
                <Description>
                  KOREA NO.1 BEAUTY STUDIO
                </Description><br />
                <Title>
                  YOONBLE
                </Title><br />
                <HomeMenuWrapper>
                  {categories.slice(0, 4).map((category) => (
                    <HomeMenuBox
                      isDesktop={isDesktop}
                      key={category.id}
                      onClick={() => handleNavigation(category.path)}
                    >
                      <HomeMenuImage src={category.img} alt={category.name} />
                    </HomeMenuBox>
                  ))}
                </HomeMenuWrapper><br /><br />
                <SocialLinks isDesktop={isDesktop}>
                  <a href="https://www.instagram.com/yoonble_studio" target="_blank">
                    <AiFillInstagram />
                    insta. yoonble_studio
                  </a>
                  <a href="https://pf.kakao.com/_KxkGWb?from=qr" target="_blank">
                    <RiKakaoTalkFill />
                    kakao. 윤블스튜디오
                  </a>
                </SocialLinks>
              </>
            )}
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
