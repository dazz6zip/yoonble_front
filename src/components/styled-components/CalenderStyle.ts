import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CalenderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

export const Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  gap: 5px;
`;

export const Day = styled.div<{ isCurrentMonth: boolean }>`
  background-color: ${({ isCurrentMonth }) =>
    isCurrentMonth ? "#fff" : "#f0f0f0"};
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;
