import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Artist from "./components/Artist";
import Artmake from "./components/Artmake";
import { Calendar } from "./components/Calendar";
import Faq from "./components/FAQ";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import Review from "./components/Review";
import Shop from "./components/Shop";
import { AnimatePresence, motion } from "framer-motion";
import { isDesktopState } from "./recoil/atom";
import { useRecoilValue } from "recoil";
import About from "./components/About";
import { Eyefat } from "./components/artmake/Eyefat";
import { Brow } from "./components/artmake/Brow";
import { Eyelash } from "./components/artmake/Eyelash";
import { Eyeline } from "./components/artmake/Eyeline";
import { Lip } from "./components/artmake/Lip";
import { Mark } from "./components/artmake/Mark";
import { Scar } from "./components/artmake/Scar";
import { colors } from "./GlobalStyle";

const MainContainer = styled.div`
  height: 79vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.pink2};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.pink1};
  }
`;

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function Router() {
  const location = useLocation();
  return (
    <>
      <MainContainer>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/artist" element={<Artist />} />
              <Route path="/artmake" element={<Artmake />} />
              <Route path="/artmake/brow" element={<Brow />} />
              <Route path="/artmake/eyefat" element={<Eyefat />} />
              <Route path="/artmake/eyeline" element={<Eyeline />} />
              <Route path="/artmake/eyelash" element={<Eyelash />} />
              <Route path="/artmake/lip" element={<Lip />} />
              <Route path="/artmake/mark" element={<Mark />} />
              <Route path="/artmake/scar" element={<Scar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/review" element={<Review />} />
              <Route path="/book" element={<Calendar />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </MainContainer>
    </>
  );
}
