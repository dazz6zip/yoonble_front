import { useEffect, useState } from "react";
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
import { useLocation } from "react-router-dom";
import { AboutProps } from "./styled-components/interface";

export default function About() {
  const location = useLocation();
  const isDesktop = useRecoilValue(isDesktopState);
  const [selectedMenu, setSelectedMenu] = useState<AboutProps>({
    selected: "Yoonble",
  });
  const { selected } = (location.state as AboutProps) || {};

  useEffect(() => {
    setSelectedMenu({ selected: selected });
  }, [selected]);

  return (
    <Container>
      <Card>
        <Sidebar>
          <MenuItem
            selected={selectedMenu.selected === "Yoonble"}
            onClick={() => setSelectedMenu({ selected: "Yoonble" })}
          >
            Yoonble
          </MenuItem>
          <MenuItem
            selected={selectedMenu.selected === "Artist"}
            onClick={() => setSelectedMenu({ selected: "Artist" })}
          >
            Artist
          </MenuItem>
          <MenuItem
            selected={selectedMenu.selected === "Academy"}
            onClick={() => setSelectedMenu({ selected: "Academy" })}
          >
            Academy
          </MenuItem>
        </Sidebar>
        <ContentArea>
          {selectedMenu.selected === "Yoonble" && <Shop />}
          {selectedMenu.selected === "Artist" && <Artist />}
          {selectedMenu.selected === "Academy" && <Academy />}
        </ContentArea>
      </Card>
    </Container>
  );
}
