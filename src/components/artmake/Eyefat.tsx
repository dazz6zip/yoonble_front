import { useRecoilValue } from "recoil";
import { isDesktopState } from "../../recoil/atom";
import { useEffect, useState } from "react";
import { Container, Image } from "../Artmake";
import { SubTitle } from "../FAQ";
import styled from "styled-components";
import { getMenus, IMenu } from "../../fetcher";

export const DetailWrapper = styled.div`
  display: flex;
  font-size: 14px;
  color: rgb(98, 90, 82);
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 70vw;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  width: 100%;
`;

export const ImgBox = styled.div`
  width: 100%;
  max-width: 250px;
  padding: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export function Eyefat() {
    const isDesktop = useRecoilValue(isDesktopState);
    const [menu, setMenu] = useState<IMenu | null>(null);
    const eyefatImgLink = "https://d206helh22e0a3.cloudfront.net/images/eyefat";

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const fetchedMenus = await getMenus(3);
                if (fetchedMenus.length > 0) setMenu(fetchedMenus[0]); // 애교살은 메뉴가 1개뿐
            } catch (err) {
                console.error("메뉴 데이터 로딩 실패:", err)
            }
        };
        fetchMenu();
    }, [])

    if (!menu) {
        return <Container><SubTitle>애교살 시술 정보를 불러올 수 없습니다.</SubTitle></Container>;
    }

    return (
        <Container>
            <SubTitle>{menu.name}</SubTitle>
            <DetailWrapper>{menu.description}</DetailWrapper>
            <ImgWrapper>
                {Array.from({ length: menu.imgCnt }, (_, i) => (
                    <ImgBox key={i}>
                        <Image
                            src={`${eyefatImgLink}/eyefat${i}.jpeg`}
                            alt={`${menu.name} 이미지 ${i + 1}`}
                        />
                    </ImgBox>
                ))}
            </ImgWrapper>
        </Container>
    );
}
