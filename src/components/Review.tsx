import img1 from "../images/Review.png";
import React from "react";
import { SubTitle } from "./FAQ";

export default function Review() {
  return (
    <>
      <SubTitle>리뷰</SubTitle>
      <img width={"400"} src={img1} alt="Logo" />
    </>
  );
}
