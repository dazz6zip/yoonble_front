import styled from "styled-components";

export const ServiceItemContainer = styled.div`
  display: grid;
  gap: 12px;
  width: 90%;
  max-width: 600px;
  margin: 20px auto;

  /* 모바일 (기본) → 1x6 */
  grid-template-columns: 1fr;

  /* 태블릿 (768px 이상) → 2x3 */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 데스크톱 (1024px 이상) → 3x2 */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ selected }) =>
    selected ? "rgb(169, 161, 154)" : "rgb(214, 201, 189)"};
  color: ${({ selected }) => (selected ? "#333" : "#666")};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: rgb(167, 155, 143);
    transform: scale(1.02);
  }

  svg {
    color: ${({ selected }) => (selected ? "black" : "#999")};
  }
`;
