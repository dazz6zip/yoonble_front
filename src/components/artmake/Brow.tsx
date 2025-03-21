import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getMenus, IMenu } from "../../fetcher";
import { isDesktopState } from "../../recoil/atom";
import { colors } from "../../GlobalStyle";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const Card = styled.div`
  width: 25vw;
  text-align: center;
  padding: 20px;
  border: 1px solid ${colors.brown4}
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: ${colors.brown0};
`;

const CircleImage = styled.img`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  display: block;
  margin: 10px auto;
  background-color:${colors.white1};
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
  gap: 10px;
  margin-top: 10px;
`;

const SquareImage = styled.img`
  width: 10vw;
  height: 10vw;
  border: 1px solid ${colors.brown1};
  object-fit: cover;
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
  color: ${colors.brown3}
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

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const fetchedMenus = await getMenus(1);
        if (fetchedMenus.length > 0) {
          setMenu(fetchedMenus);
          setCurrentPages(new Array(fetchedMenus.length).fill(0)); // 모든 카드 페이지를 0으로 초기화
        }
      } catch (err) {
        console.error("메뉴 데이터 로딩 실패:", err)
      }
    };
    fetchMenu();
  }, [])

  const changePage = (cardIndex: number, direction: "prev" | "next") => {
    setCurrentPages((prev) => {
      const updatedPages = [...prev];
      const totalPages = Math.ceil(menus[cardIndex].imgCnt / 4);

      if (direction === "prev" && updatedPages[cardIndex] > 0) {
        updatedPages[cardIndex] -= 1;
      } else if (direction === "next" && updatedPages[cardIndex] < totalPages - 1) {
        updatedPages[cardIndex] += 1;
      }

      return updatedPages;
    });
  }

  return (
    <Container>
      {menus.map((menu, index) => {
        const totalPages = Math.ceil(menu.imgCnt / 4); // 4개씩 페이징
        const currentPage = currentPages[index];

        return (
          <Card>
            <Title>{t(menu.name)}</Title>
            <CircleImage src={menu.img + ".png"} alt="Circle" />
            <Description>{t(menu.description)}</Description>
            <Grid>
              {Array.from({ length: menu.imgCnt })
                .map((_, i) => `${menu.img}${i}.jpeg`)
                .slice(currentPage * 4, (currentPage + 1) * 4)
                .map((imgSrc, i) => (
                  <SquareImage key={i} src={imgSrc} alt={`${menu.name}-${i}`} />
                ))}
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
    </Container>
  );
};

