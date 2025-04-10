import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import {
  ArtistDescription,
  Container,
  Content,
  Description,
  IaC,
  Image,
  ImageWrapper,
  ProfileImage,
  Title,
} from "./styled-components/DefaultStyle";
import { imageLink } from "../fetcher";
import { useTranslation } from "react-i18next";

export default function Artist() {
  const isDesktop = useRecoilValue(isDesktopState);
  const { t } = useTranslation();
  const qualifications: string[] = t("artist.qualifications", {
    returnObjects: true,
  }) as string[];

  return (
    <Container>
      <IaC isDesktop={isDesktop}>
        <ImageWrapper>
          <ProfileImage
            isDesktop={isDesktop}
            src={imageLink + "/artist/artist.jpg"}
            alt="artist"
          />
        </ImageWrapper>
        <Content isDesktop={isDesktop}>
          <Title isDesktop={isDesktop}>Artist. Yoon</Title>
          <Description>{t("artist.description")}</Description>
          <ArtistDescription>
            {qualifications.map((qualification) => (
              <ArtistDescription>✶&nbsp;&nbsp;&nbsp;{qualification}</ArtistDescription>
            ))}
          </ArtistDescription>
        </Content>
      </IaC>
    </Container>
  );
}
