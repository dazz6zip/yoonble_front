import { useRecoilValue } from "recoil";
import { isDesktopState } from "../../recoil/atom";
import { useState } from "react";
import { Container, imageLink, Image } from "../Artmake";
import { SubTitle } from "../FAQ";
import styled from "styled-components";
import { MenuProps } from "../Header";

export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  width: 100%;
`;

export const ImgBox = styled.div<MenuProps>`
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

export function Eyeline() {
    const isDesktop = useRecoilValue(isDesktopState);
    const eyelineImgLink = imageLink + '/eyeline/';
    const eyelines = Array.from({ length: 8 }, (_, i) => ({
        index: i,
        image: `${eyelineImgLink}eyeline${i}.jpeg`
    }));

    return (
        <Container>
            <SubTitle>아이라인</SubTitle>
            <ImgWrapper>
                {eyelines.map((eyeline, index) => (
                    <ImgBox isDesktop={isDesktop}>
                        <Image
                            src={eyeline.image}
                            alt={`brow ${eyeline.index}`}
                        />
                    </ImgBox>
                ))}
            </ImgWrapper>
        </Container>
    );
}
