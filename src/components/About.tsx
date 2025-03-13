import { useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import Shop from "./Shop";
import Artist from "./Artist";
import Academy from "./Academy";
import { colors } from "../GlobalStyle";

const Container = styled.div`
  width: 100vw;
  height: 79vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Card = styled.div`
  display: flex;
  align-items: stretch;
  width: 80%;
  overflow: hidden;
`;

const Sidebar = styled.div`
  width: 10vw;
  height: 20vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;

const MenuItem = styled.h1<{ selected: boolean }>`
  font-size: 15px;
  color: ${({ selected }) => (selected ? "#5a4a42" : `${colors.brown3}`)};
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: ${colors.brown0};
  }

  &::after {
    content: "";
    display: ${({ selected }) => (selected ? "block" : "none")};
    width: 8px;
    height: 8px;
    background: ${colors.brown3};
    border-radius: 50%;
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function About() {
  const isDesktop = useRecoilValue(isDesktopState);
  const [selectedMenu, setSelectedMenu] = useState<"Yoonble" | "Artist" | "Academy">("Yoonble");

  return (
    <Container>
      <Card>
        <Sidebar>
          <MenuItem
            selected={selectedMenu === "Yoonble"}
            onClick={() => setSelectedMenu("Yoonble")}
          >
            Yoonble
          </MenuItem>
          <MenuItem
            selected={selectedMenu === "Artist"}
            onClick={() => setSelectedMenu("Artist")}
          >
            Artist
          </MenuItem>
          <MenuItem
            selected={selectedMenu === "Academy"}
            onClick={() => setSelectedMenu("Academy")}
          >
            Academy
          </MenuItem>
        </Sidebar>
        <ContentArea>
          {selectedMenu === "Yoonble" && <Shop />}
          {selectedMenu === "Artist" && <Artist />}
          {selectedMenu === "Academy" && <Academy />}
        </ContentArea>
      </Card>
    </Container>
  );
}
