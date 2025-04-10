import { useRecoilValue } from "recoil";
import { isDesktopState } from "../../recoil/atom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMenus, imageLink, IMenu } from "../../fetcher";
import { useTranslation } from "react-i18next";
import { Container, Image, SubTitle } from "../styled-components/DefaultStyle";
import { ImageSliderModal } from "../ImageModal";
import { useParams } from "react-router-dom";

export const DetailWrapper = styled.div<{ isDesktop?: boolean }>`
  display: flex;
  font-size: 14px;
  color: rgb(98, 90, 82);
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: ${(props) => (props.isDesktop ? "70%" : "100%")};
  max-width: 80vw;
  line-height: 1.5;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  justify-content: center;
  width: 100%;
`;

export const ImgBox = styled.div<{ isDesktop?: boolean }>`
  width: ${(props) => (props.isDesktop ? "20%" : "100%")};
  max-width: ${(props) => (props.isDesktop ? "250px" : "100%")};
  padding: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
`;

export function Common() {
  const { t } = useTranslation();
  const isDesktop = useRecoilValue(isDesktopState);
  const { path } = useParams();
  const [menu, setMenu] = useState<IMenu>();
  const link = `${imageLink}/${path}/${path}`;
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const fetchedMenu = await getMenus(path);
        if (fetchedMenu) setMenu(fetchedMenu[0]);
      } catch (err) {
        console.error("메뉴 데이터 로딩 실패:", err);
      }
    };
    fetchMenu();
  }, []);

  useEffect(() => {
    if (menu) {
      const urls = Array.from(
        { length: menu.imgCnt },
        (_, i) => `${link}${i}.jpeg`
      );
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
        <SubTitle>시술 정보를 불러올 수 없습니다.</SubTitle>
      </Container>
    );
  }

  return (
    <Container>
      <SubTitle>{t(menu.name)}</SubTitle>
      <DetailWrapper isDesktop={isDesktop}>{t(menu.description)}</DetailWrapper>
      <ImgWrapper>
        {Array.from({ length: menu.imgCnt }, (_, i) => (
          <ImgBox key={i} isDesktop={isDesktop} onClick={() => handleImageClick(i)}>
            <Image
              src={`${link}${i}.jpeg`}
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
