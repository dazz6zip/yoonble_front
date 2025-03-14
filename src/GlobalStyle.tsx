import { createGlobalStyle } from "styled-components";

export const colors = {
  background: "#eededc",
  background1: "rgb(245, 239, 238)",
  footer: "rgb(156, 145, 134, 0.4)",
  brown0: "rgb(80, 70, 65)",
  brown1: "rgb(101, 80, 79)",
  brown2: "rgb(101, 96, 92)",
  brown3: "rgb(114, 100, 92)",
  brown4: "rgb(196, 185, 175)",
  brown5: "rgb(217, 206, 196)",
  pink: "rgb(221, 199, 193)",
  pink1: "rgb(231, 217, 212)",
  pink2: "rgb(192, 151, 140)",
  pink3: "#bb827b",
  white: "rgb(237, 230, 227)",
  white1: "rgb(237, 230, 227, 0.5)",
  white2: "rgb(248, 244, 243)",
};

const GlobalStyle = createGlobalStyle`
  /* 폰트 가져오기 */
  @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  *[hidden] {
    display: none;
  }

  html, body, #root {
    margin: 0 auto; /* 페이지를 가운데 정렬 */
    padding: 0;
    width: 100%;
    overflow-x: hidden; /* 가로 스크롤 방지 */
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    justify-content: center;
    align-items: flex-start;
    display: flex;
    background: radial-gradient(circle, ${colors.background} 0%,${colors.background1} 80%);
    font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
