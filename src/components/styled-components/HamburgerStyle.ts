import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const StyledMenu = styled.div`
  display: block;
  text-decoration: none;
  color: ${colors.white3};
  font-size: 15px;
  padding-left: 1vw;
  margin-top: 3vh;
  margin-bottom: 2vh;
`;

export const StyledMenuItem = styled(Link)<{ isActive: boolean }>`
  display: block;
  text-decoration: none;
  color: ${(props) => (props.isActive ? colors.white3 : colors.white)};
  font-size: ${(props) => (props.isActive ? "0.8rem" : "0.7rem")};
  padding-left: 2vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.white3};
  }
`;

export const CustomIcon = styled.b`
  color: ${colors.white2};
  padding-right: 1vw;
`;

export const MenuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "25px",
    height: "25px",
    top: "3vh",
    left: "1.5vh",
    transform: "translateX(2vw)",
    color: colors.pink2,
  },
  bmCrossButton: {
    width: "2vw",
    height: "2vw",
    left: "2vw",
    top: "2vh",
    color: colors.white3,
  },
  bmMenuWrap: {
    position: "fixed",
    height: "91vh",
    top: "9vh",
  },
  bmMenu: {
    background:
      "linear-gradient(to right, rgb(199, 171, 163, 0.8) 60%, rgb(199, 171, 163, 0.5) 80%, rgba(199, 171, 163, 0))",
    padding: "2vw",
    fontSize: "1rem",
    height: "100%",
    boxShadow: "none",
    transform: "translateX(0)",
    transition: "transform 0.3s ease-in-out",
  },
  bmOverlay: {
    background: "rgba(221, 208, 199, 0.1)",
  },
};
