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

export function Eyelash() {
    const isDesktop = useRecoilValue(isDesktopState);
    const browImgLink = imageLink + '/eyelash/';
    const brows = Array.from({ length: 11 }, (_, i) => ({
        index: i + 1,
        image: `${browImgLink}perm${i + 1}.jpeg`
    }));

    return (
        <Container>
            <SubTitle>속눈썹펌</SubTitle>
            <ImgWrapper>
                {brows.map((brow, index) => (
                    <ImgBox isDesktop={isDesktop}>
                        <Image
                            src={brow.image}
                            alt={`brow ${brow.index}`}
                        />
                    </ImgBox>
                ))}
            </ImgWrapper>
        </Container>
    );
}
