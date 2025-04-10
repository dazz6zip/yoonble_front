import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    maxWidth: "800px",
    width: "90vw",
    overflow: "visible",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 1000,
  },
};

export const ModalImage = styled.img`
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  color: ${colors.brown5};
  margin-top: 1.5rem;
  font-family: "GowunBatang-Regular";
`;

export const CloseButtonTopRight = styled.button`
  position: absolute;
  top: 16px;
  right: -1.5rem;
  background: transparent;
  border: none;
  font-size: 2.5rem;
  color: ${colors.brown5};
  cursor: pointer;
  z-index: 1001;
  &:hover {
    color: white;
  }
`;

export const NavButton = styled.button`
  background: transparent;
  color: ${colors.brown5};
  border: none;
  font-size: 2em;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;

  &:hover {
    color: white;
  }
`;

export const PrevButton = styled(NavButton)`
  left: -2rem;
`;

export const NextButton = styled(NavButton)`
  right: -2rem;
`;

export const MobileImageScrollArea = styled.div`
    max-height: 85vh;
    overflow-y: auto;
    padding: 10px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const MobileImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ModalMobileTitle = styled.button`
  position: absolute;
  top: 1vh;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: ${colors.brown5};
  cursor: pointer;
  left: 50%;
  font-family: "GowunBatang-Regular";
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 0.9rem;
  color: ${colors.brown5};
  cursor: pointer;
  position: absolute;
  left: 50%;
  margin-top: 3.5vh;
  font-family: "GowunBatang-Regular";
  transform: translate(-50%, -50%);
`;