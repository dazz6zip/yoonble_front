import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getMenus, imageLink, IMenu } from "../../fetcher";
import { isDesktopState } from "../../recoil/atom";
import { colors } from "../../GlobalStyle";
import { useTranslation } from "react-i18next";
import { Container, SubTitle } from "../styled-components/DefaultStyle";
import { ImageSliderModal } from "../ImageModal";

const ContentWrapper = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 35vw;
  text-align: center;
  background-color: ${colors.pink4};
  box-shadow: 0px 4px 12px rgba(170, 163, 156, 0.2);
  padding: 20px;
  border-radius: 12px;
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: ${colors.brown0};
`;

const Description = styled.p`
  font-size: 0.8em;
  margin: 10px 0;
  line-height: 1.4;
  color: ${colors.brown0};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 10px;
`;

const SquareImage = styled.img`
  width: 15vw;
  height: 15vw;
  border-radius: 5px;
  box-shadow: 0px 0px 10px ${colors.white};
  object-fit: cover;
  @media (max-width: 768px) {
    width: 30vw;
    height: 30vw;
  }
`;

export function Eyeline() {
  const { t } = useTranslation();
  const isDesktop = useRecoilValue(isDesktopState);
  const [menus, setMenu] = useState<IMenu[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const fetchedMenus = await getMenus("eyeline");
        if (fetchedMenus.length > 0) {
          setMenu(fetchedMenus);
        }
      } catch (err) {
        console.error("메뉴 데이터 로딩 실패:", err);
      }
    };
    fetchMenu();
  }, []);

  const handleImageClick = (menuIndex: number, imageIndex: number) => {
    setSelectedMenuIndex(menuIndex);
    setSelectedImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  return (
    <Container>
      <SubTitle>Eyeline</SubTitle>
      <ContentWrapper>
        {menus.map((menu, index) => (
          <Card>
            <Title>{t(menu.name)}</Title>
            <Description>{t(menu.description)}</Description>
            <Grid>
              {Array.from({ length: menu.imgCnt })
                .map((_, i) => `${menu.img}${i}.jpeg`)
                .map((imgSrc, i) => (
                  <SquareImage key={i} src={imgSrc} alt={`${menu.name}-${i}`}
                    onClick={() => handleImageClick(index, i)} />
                ))}
            </Grid>
          </Card>
        ))}{" "}

        {selectedMenuIndex !== null && (
          <ImageSliderModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={t(menus[selectedMenuIndex].name)}
            images={Array.from(
              { length: menus[selectedMenuIndex].imgCnt },
              (_, i) => `${menus[selectedMenuIndex].img}${i}.jpeg`
            )}
            initialIndex={selectedImageIndex}
          />
        )}
      </ContentWrapper>
    </Container>
  );
}
