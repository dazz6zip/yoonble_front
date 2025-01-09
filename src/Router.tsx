import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";

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
          <Route path="/" Component={Home} />
        </Routes>
      </Container>
    </>
  );
}
