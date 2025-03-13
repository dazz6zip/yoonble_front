import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getMenus, IMenu } from "../../fetcher";
import { isDesktopState } from "../../recoil/atom";
import { colors } from "../../GlobalStyle";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const Card = styled.div`
  width: 25vw;
  text-align: center;
  background-color:${colors.brown5};
  padding: 20px;
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
  background-color:${colors.background};
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

const PaginationDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 5px;
`

const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid ${colors.brown3};
  background-color: ${({ active }) => (active ? colors.brown4 : colors.background)};
  cursor: pointer;
  transition: background-color 0.3s;
`

export function Brow() {
  const isDesktop = useRecoilValue(isDesktopState);
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

  const changePage = (cardIndex: number, newPage: number) => {
    setCurrentPages((prev) => {
      const updatedPages = [...prev];
      updatedPages[cardIndex] = newPage;
      return updatedPages;
    })
  }

  return (
    <Container>
      {menus.map((menu, index) => {
        const totalPages = Math.ceil(menu.imgCnt / 4); // 4개씩 페이징
        const currentPage = currentPages[index];

        return (
          <Card>
            <Title>{menu.name}</Title>
            <CircleImage src={menu.img + ".png"} alt="Circle" />
            <Description>{menu.description}</Description>
            <Grid>
              {Array.from({ length: menu.imgCnt })
                .map((_, i) => `${menu.img}${i}.jpeg`)
                .slice(currentPage * 4, (currentPage + 1) * 4)
                .map((imgSrc, i) => (
                  <SquareImage key={i} src={imgSrc} alt={`${menu.name}-${i}`} />
                ))}
            </Grid>

            {totalPages > 1 ? <PaginationDots>
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <Dot
                  key={pageIndex}
                  active={currentPage === pageIndex}
                  onClick={() => changePage(index, pageIndex)}
                />
              ))}
            </PaginationDots> : <></>
            }
          </Card>)
      })}
    </Container>
  );
};


