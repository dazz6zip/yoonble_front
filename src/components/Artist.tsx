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
import { useTranslation } from "react-i18next";

export default function Artist() {
  const isDesktop = useRecoilValue(isDesktopState);
  const { t } = useTranslation();
  const qualifications: string[] = t("artist.qualifications", { returnObjects: true }) as string[];

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
