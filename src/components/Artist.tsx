import styled from "styled-components";
import { MenuProps } from "./Header";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { imageLink } from "../fetcher";
import { colors } from "../GlobalStyle";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  align-items: center;
`;

const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;
  padding-right: 15px;
`;

const Image = styled.img<MenuProps>`
  max-width: 400px;
  width: ${(props) => (props.isDesktop ? "30vw" : "50vw")};
  border-radius: 10px;
`;

const ImageS = styled.img<MenuProps>`
  max-width: 200px;
  width: ${(props) => (props.isDesktop ? "15vw" : "40vw")};
  border-radius: 10px;
`;

const Content = styled.div<MenuProps>`
  flex: 2;
  padding-left: ${(props) => (props.isDesktop ? "20px" : 0)};
  margin-bottom: 40px;
  text-align: left;
`;

const Title = styled.h2<MenuProps>`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${colors.brown1};
  text-align: ${(props) => (props.isDesktop ? "left" : "center")};
  padding-left: ${(props) => (props.isDesktop ? "7px" : 0)};

  padding-top: ${(props) => (props.isDesktop ? 0 : "16px")};
  padding-bottom: 10px;
  margin-bottom: 10px;

  background: linear-gradient(
    to bottom,
    rgba(117, 105, 94, 0.6),
    rgba(117, 105, 94, 0)
  );
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 3px;
`;

const Description = styled.p`
  font-size: 0.8rem;
  line-height: 1.5;
  padding-bottom: 7px;
`;

const Career = styled.div``;

const IaC = styled.div<MenuProps>`
  display: ${(props) => (props.isDesktop ? "flex" : "block")};
`;

export default function Artist() {
  const isDesktop = useRecoilValue(isDesktopState);
  const { t } = useTranslation();
  const qualifications: string[] = t("artist.qualifications", { returnObjects: true }) as string[];

  return (
    <Container>
      <IaC isDesktop={isDesktop}>
        <ImageWrapper>
          <Image isDesktop={isDesktop} src={imageLink + '/artist/artist.jpg'} alt="artist" />
        </ImageWrapper>
        <Content isDesktop={isDesktop}>
          <Title isDesktop={isDesktop}>Artist. Yoon</Title>
          <Description>{t("artist.description")}</Description>
          <Career>
            {qualifications.map((qualification) => (
              <Description>✶&nbsp;&nbsp;&nbsp;{qualification}</Description>
            ))}
          </Career>
        </Content>
      </IaC>
    </Container>
  );
}
