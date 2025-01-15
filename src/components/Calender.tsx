import dayjs from "dayjs";
import React from "react";

const CALENDAR_LENGTH = 35; // 7 days * 5 weeks
const DEFAULT_TRASH_VALUE = 0;
const DAY_OF_WEEK = 7;
const DAY_LIST = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const useCalendar = () => {
  const [currentDate, setCurrentDate] = React.useState(dayjs());
  const totalMonthDays = currentDate.daysInMonth(); // 현재 월의 총 일수 계산

  const prevDayList = Array.from({
    // 이전 달의 날짜 공간 계산 (해당 달의 시작 요일 기준)
    length: currentDate.startOf("month").day(), // 시작 요일
  }).map(() => DEFAULT_TRASH_VALUE);

  const currentDayList = Array.from({ length: totalMonthDays }).map(
    // 현재 월의 날짜 리스트
    (_, i) => i + 1
  );

  const nextDayList = Array.from({
    // 다음 달의 날짜 공간 계산 (캘린더의 35칸을 채우기 위해)
    length: CALENDAR_LENGTH - currentDayList.length - prevDayList.length,
  }).map(() => DEFAULT_TRASH_VALUE);

  const currentCalendarList = prevDayList.concat(currentDayList, nextDayList); // 전체 캘린더 배열 생성

  const weekCalendarList = currentCalendarList.reduce(
    // 주 단위로 나누기
    (acc: number[][], cur, idx) => {
      const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(cur);
      return acc;
    },
    []
  );

  return {
    weekCalendarList,
    currentDate,
    setCurrentDate,
  };
};

const Cal = () => {
  const calendar = useCalendar();
  return (
    <div>
      <div>
        <h2>{calendar.currentDate.format("YYYY년 MM월")}</h2>
      </div>

      <button
        onClick={() => {
          calendar.setCurrentDate(calendar.currentDate.subtract(1, "month"));
        }}
      >
        이전달로 이동하기
      </button>

      <button
        onClick={() => {
          calendar.setCurrentDate(calendar.currentDate.add(1, "month"));
        }}
      >
        다음달로 이동하기
      </button>

      <table>
        <thead>
          <tr>
            {DAY_LIST.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.weekCalendarList.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex}>{day !== DEFAULT_TRASH_VALUE ? day : ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Cal, useCalendar };
