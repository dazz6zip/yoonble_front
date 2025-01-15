import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reservation() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <>
      <div>주의사항</div>
      <button onClick={() => navigate("/book")}>예약하기</button>
    </>
  );
}
