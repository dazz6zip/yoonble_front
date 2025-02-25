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

const MainContainer = styled.div`
  height: 79vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  padding: 15px 10px 25px 10px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1024px) {
    padding: 0 80px;
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
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/artist" element={<Artist />} />
              <Route path="/artmake" element={<Artmake />} />
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
