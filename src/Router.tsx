import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Artist from "./components/Artist";
import Artmake from "./components/Artmake";
import { Calender } from "./components/Calender";
import Faq from "./components/FAQ";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import Review from "./components/Review";
import Shop from "./components/Shop";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 75vh;
  padding: 15px 10px 25px 10px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1024px) {
    padding: 0 80px;
  }
`;

export default function Router() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/artmake" element={<Artmake />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/review" element={<Review />} />
          <Route path="/cal" element={<Calender />} />
        </Routes>
      </Container>
    </>
  );
}
