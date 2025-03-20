import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getMenus, imageLink, IMenu } from "../../fetcher";
import { isDesktopState } from "../../recoil/atom";
import { colors } from "../../GlobalStyle";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const Card = styled.div`
  width: 38vw;
  text-align: center;
  background-color:${colors.brown5};
  padding: 20px;
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
  gap: 10px;
  margin-top: 10px;
`;

const SquareImage = styled.img`
  width: 15vw;
  height: 15vw;
  border: 1px solid ${colors.brown1};
  object-fit: cover;
`;

export function Eyeline() {
  const { t } = useTranslation();
  const isDesktop = useRecoilValue(isDesktopState);
  const [menus, setMenu] = useState<IMenu[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const fetchedMenus = await getMenus(5);
        if (fetchedMenus.length > 0) {
          setMenu(fetchedMenus);
        }
      } catch (err) {
        console.error("메뉴 데이터 로딩 실패:", err)
      }
    };
    fetchMenu();
  }, [])

  return (
    <Container>
      {menus.map(menu => (
        <Card>
          <Title>{t(menu.name)}</Title>
          <Description>{t(menu.description)}</Description>
          <Grid>
            {Array.from({ length: menu.imgCnt })
              .map((_, i) => `${menu.img}${i}.jpeg`)
              .map((imgSrc, i) => (
                <SquareImage key={i} src={imgSrc} alt={`${menu.name}-${i}`} />
              ))}
          </Grid>
        </Card>
      ))}
    </Container>
  );
};


