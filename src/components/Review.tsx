import img1 from "../images/Review.png";
import { Container, Content, SubTitle } from "./styled-components/DefaultStyle";
import styled from "styled-components";

export default function Review() {
  return (
    <Container>
      <Content>
        <SubTitle>Review</SubTitle>
        <img width={"400"} src={img1} alt="Logo" />
      </Content>
    </Container>
  );
}
