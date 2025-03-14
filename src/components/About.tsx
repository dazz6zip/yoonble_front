import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import Shop from "./Shop";
import Artist from "./Artist";
import Academy from "./Academy";
import {
  Card,
  Container,
  ContentArea,
  MenuItem,
  Sidebar,
} from "./styled-components/DefaultStyle";

export default function About() {
  const isDesktop = useRecoilValue(isDesktopState);
  const [selectedMenu, setSelectedMenu] = useState<
    "Yoonble" | "Artist" | "Academy"
  >("Yoonble");

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
