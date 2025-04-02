import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Artist from "./components/Artist";
import Artmake from "./components/Artmake";
import { Calendar } from "./components/Calendar";
import Faq from "./components/FAQ";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import Review from "./components/Review";
import { AnimatePresence, motion } from "framer-motion";
import About from "./components/About";
import { Brow } from "./components/artmake/Brow";
import { Eyeline } from "./components/artmake/Eyeline";
import { colors } from "./GlobalStyle";
import { Common } from "./components/artmake/Common";

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
              <Route path="/menu" element={<Artmake />} />
              <Route path="/menu/brow" element={<Brow />} />
              <Route path="/menu/eyeline" element={<Eyeline />} />
              <Route path="/menu/general/:path" element={<Common />} />
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
