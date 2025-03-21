import { useRecoilValue } from "recoil";
import { isDesktopState } from "../../recoil/atom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMenus, imageLink, IMenu } from "../../fetcher";
import { DetailWrapper, ImgBox } from "./Eyefat";
import { useTranslation } from "react-i18next";
import { Container, Image, SubTitle } from "../styled-components/DefaultStyle";

export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  width: 100%;
`;

// export const ImgBox = styled.div<MenuProps>`
//   width: 100%;
//   max-width: 250px;
//   padding: 1px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   text-align: center;
//   transition: transform 0.3s ease;

//   @media (max-width: 768px) {
//     max-width: 100%;
//   }
// `;

export function Lip() {
  const { t } = useTranslation();
  const isDesktop = useRecoilValue(isDesktopState);
  const link = imageLink + '/lip/lip';
  const [menu, setMenus] = useState<IMenu>();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const fetchedMenu = await getMenus(2);
        if (fetchedMenu.length > 0) setMenus(fetchedMenu[0]);
      } catch (err) {
        console.error("메뉴 데이터 로딩 실패:", err);
      }
    };
    fetchMenu();
  }, []);

  if (!menu) {
    return <Container><SubTitle>입술 시술 정보를 불러올 수 없습니다.</SubTitle></Container>;
  }
  return (
    <Container>
      <SubTitle>{t(menu.name)}</SubTitle>
      <DetailWrapper>{t(menu.description)}</DetailWrapper>
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
