import { useRecoilValue } from "recoil";
import { isDesktopState } from "../../recoil/atom";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getMenus, IMenu } from "../../fetcher";
import { useTranslation } from "react-i18next";
import { Container, Image, SubTitle } from "../styled-components/DefaultStyle";
import { ImageSliderModal } from "../ImageModal";

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
  const { t } = useTranslation();
  const isDesktop = useRecoilValue(isDesktopState);
  const [menu, setMenu] = useState<IMenu | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const eyefatImgLink = "https://d206helh22e0a3.cloudfront.net/images/eyefat";

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const fetchedMenus = await getMenus(3);
        if (fetchedMenus.length > 0) setMenu(fetchedMenus[0]); // 애교살은 메뉴가 1개뿐
      } catch (err) {
        console.error("메뉴 데이터 로딩 실패:", err);
      }
    };
    fetchMenu();
  }, []);

  useEffect(() => {
    if (menu) {
      const urls = Array.from({ length: menu.imgCnt }, (_, i) => `${eyefatImgLink}/eyefat${i}.jpeg`);
      setImageUrls(urls);
    }
  }, [menu]);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  if (!menu) {
    return (
      <Container>
        <SubTitle>애교살 시술 정보를 불러올 수 없습니다.</SubTitle>
      </Container>
    );
  }

  return (
    <Container>
      <SubTitle>{t(menu.name)}</SubTitle>
      <DetailWrapper>{t(menu.description)}</DetailWrapper>
      <ImgWrapper>
        {Array.from({ length: menu.imgCnt }, (_, i) => (
          <ImgBox key={i} onClick={() => handleImageClick(i)}>
            <Image
              src={`${eyefatImgLink}/eyefat${i}.jpeg`}
              alt={`${menu.name} 이미지 ${i + 1}`}
            />
          </ImgBox>
        ))}
      </ImgWrapper>
      <ImageSliderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t(menu.name)}
        images={imageUrls}
        initialIndex={selectedIndex}
      />
    </Container>

  );
}
