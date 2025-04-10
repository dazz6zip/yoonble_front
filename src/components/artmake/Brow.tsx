import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getMenus, IMenu } from "../../fetcher";
import { isDesktopState } from "../../recoil/atom";
import { colors } from "../../GlobalStyle";
import { useTranslation } from "react-i18next";
import { ImageSliderModal } from "../ImageModal";
import { Container, SubTitle } from "../styled-components/DefaultStyle";

const ContentWrapper = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 30vw;
  gap: 5%;
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

const CircleImage = styled.img<{ isDesktop: boolean }>`
  width: ${(props) => (props.isDesktop ? "10vw" : "40vw")};
  height: ${(props) => (props.isDesktop ? "10vw" : "40vw")};
  border-radius: 50%;
  display: block;
  margin: 10px auto;
  background-color: ${colors.white1};
  object-fit: cover;
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
  margin-top: 20px;
`;

const SquareImage = styled.img`
  width: 13vw;
  height: 13vw;
  border-radius: 5px;
  box-shadow: 0px 0px 10px ${colors.white};
  object-fit: cover;
  @media (max-width: 768px) {
    width: 30vw;
    height: 30vw;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  gap: 15px;
`;

const Page = styled.span`
  font-size: 0.8em;
  color: ${colors.brown3};
`;

const PageButton = styled.button<{ disabled: boolean }>`
  background: none;
  border: none;
  font-size: 1.2em;
  color: ${({ disabled }) => (disabled ? colors.brown4 : colors.brown3)};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: color 0.3s;

  &:hover {
    color: ${({ disabled }) => (disabled ? colors.brown4 : colors.brown0)};
  }
`;

export function Brow() {
  const isDesktop = useRecoilValue(isDesktopState);
  const { t } = useTranslation();
  const [menus, setMenu] = useState<IMenu[]>([]);
  const [currentPages, setCurrentPages] = useState<number[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const fetchedMenus = await getMenus("brow");
        if (fetchedMenus.length > 0) {
          setMenu(fetchedMenus);
          setCurrentPages(new Array(fetchedMenus.length).fill(0)); // 모든 카드 페이지를 0으로 초기화
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

  const changePage = (cardIndex: number, direction: "prev" | "next") => {
    setCurrentPages((prev) => {
      const updatedPages = [...prev];
      const totalPages = Math.ceil(menus[cardIndex].imgCnt / 4);

      if (direction === "prev" && updatedPages[cardIndex] > 0) {
        updatedPages[cardIndex] -= 1;
      } else if (
        direction === "next" &&
        updatedPages[cardIndex] < totalPages - 1
      ) {
        updatedPages[cardIndex] += 1;
      }

      return updatedPages;
    });
  };

  return (
    <Container>
      <SubTitle>Eyebrow</SubTitle>
      <ContentWrapper>
        {menus.map((menu, index) => {
          const totalPages = Math.ceil(menu.imgCnt / 4); // 4개씩 페이징
          const currentPage = currentPages[index];

          return (
            <Card>
              <Title>{t(menu.name)}</Title>
              <CircleImage isDesktop={isDesktop} src={menu.img + ".png"} alt="Circle" />
              <Description>{t(menu.description)}</Description>
              <Grid>
                {Array.from({ length: menu.imgCnt })
                  .map((_, i) => `${menu.img}${i}.jpeg`)
                  .slice(currentPage * 4, (currentPage + 1) * 4)
                  .map((imgSrc, i) => {
                    return (
                      <SquareImage
                        key={i}
                        src={imgSrc}
                        alt={`${menu.name}-${i}`}
                        onClick={() => handleImageClick(index, i)}
                      />
                    );
                  })}
              </Grid>
              {totalPages > 1 && (
                <PaginationContainer>
                  <PageButton
                    disabled={currentPage === 0}
                    onClick={() => changePage(index, "prev")}
                  >
                    {"<"}
                  </PageButton>
                  <Page>{`${currentPage + 1} / ${totalPages}`}</Page>
                  <PageButton
                    disabled={currentPage === totalPages - 1}
                    onClick={() => changePage(index, "next")}
                  >
                    {">"}
                  </PageButton>
                </PaginationContainer>
              )}
            </Card>
          );
        })}

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
