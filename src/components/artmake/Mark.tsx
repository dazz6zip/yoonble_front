import { useRecoilValue } from "recoil";
import { isDesktopState } from "../../recoil/atom";
import { useEffect, useState } from "react";
import { Container, Image, SubTitle } from "../styled-components/DefaultStyle";
import styled from "styled-components";
import { getMenus, imageLink, IMenu } from "../../fetcher";
import { DetailWrapper, ImgBox } from "./Eyefat";

export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  width: 100%;
`;

export function Mark() {
  const isDesktop = useRecoilValue(isDesktopState);
  const link = imageLink + "/mark/mark";
  const [menu, setMenus] = useState<IMenu>();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const fetchedMenu = await getMenus(6);
        if (fetchedMenu.length > 0) setMenus(fetchedMenu[0]);
      } catch (err) {
        console.error("메뉴 데이터 로딩 실패:", err);
      }
    };
    fetchMenu();
  }, []);

  if (!menu) {
    return (
      <Container>
        <SubTitle>미인점 시술 정보를 불러올 수 없습니다.</SubTitle>
      </Container>
    );
  }
  return (
    <Container>
      <SubTitle>{menu.name}</SubTitle>
      <DetailWrapper>{menu.description}</DetailWrapper>
      <ImgWrapper>
        {Array.from({ length: menu.imgCnt }, (_, i) => (
          <ImgBox key={i}>
            <Image
              src={`${link}${i}.jpeg`}
              alt={`${menu.name} 이미지 ${i + 1}`}
            />
          </ImgBox>
        ))}
      </ImgWrapper>
    </Container>
  );
}
