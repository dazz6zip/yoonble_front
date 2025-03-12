import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getMenus, IMenu } from "../../fetcher";
import { isDesktopState } from "../../recoil/atom";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const Card = styled.div`
  width: 25vw;
  text-align: center;
  border: 1px solid #ccc;
  background-color:rgb(196, 185, 175);
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: rgb(51, 47, 46);
`;

const CircleImage = styled.img`
  width: 12vw;
  height: 12vw;
  border-radius: 50%;
  border: 2px solid rgb(102, 94, 92);
  display: block;
  margin: 10px auto;
  background-color: #E6DBD2;
  object-fit: cover;
`;

const Description = styled.p`
  font-size: 0.8em;
  margin: 10px 0;
  line-height: 1.4;
  color: rgb(91, 85, 83);
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
  border: 1px solid black;
  object-fit: cover;
`;


export function Brow() {
  const isDesktop = useRecoilValue(isDesktopState);
  const [menus, setMenu] = useState<IMenu[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const fetchedMenus = await getMenus(1);
        if (fetchedMenus.length > 0) setMenu(fetchedMenus);
      } catch (err) {
        console.error("메뉴 데이터 로딩 실패:", err)
      }
    };
    fetchMenu();
  }, [])
  return (
    <Container>
      {menus.map((menu, index) => (
        <Card>
          <Title>{menu.name}</Title>
          <CircleImage src={menu.img + ".png"} alt="Circle" />
          <Description>{menu.description}</Description>
          <Grid>
            {Array.from({ length: menu.imgCnt }, (_, i) => (
              <SquareImage key={i} src={`${menu.img}${i}.jpeg`} alt={`${menu.name + i}`} />
            ))}
          </Grid>
        </Card>
      ))}
    </Container>
  );
};


