import styled from "styled-components";
import React from "react";
import { colors } from "../../GlobalStyle";

export const ServiceItemContainer = styled.div`
  display: grid;
  gap: 12px;
  width: 100%;
  max-width: 900px;
  min-width: 400px;
  margin: 20px auto;

  /* 모바일 (기본) → 1x6 */
  grid-template-columns: repeat(2, 1fr);

  /* 태블릿 (768px 이상) → 2x3 */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 데스크톱 (1024px 이상) → 3x2 */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceEtc = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceDescript = styled.div`
  color: ${colors.brown3};
  font-size: 0.8rem;
  padding-top: 5px;
`;

export const ServiceItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ selected }) =>
    selected ? colors.pink : colors.pink1};
  color: ${({ selected }) => (selected ? colors.white3 : colors.brown0)};
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: ${colors.pink2};
    color: ${colors.white2};
  }

  &:hover svg {
    color: ${colors.white2};
  }

  svg {
    color: ${({ selected }) => (selected ? "rgb(241, 235, 227)" : "#666")};
  }
`;
