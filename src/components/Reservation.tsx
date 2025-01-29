import { useNavigate } from "react-router-dom";
import img1 from "../images/Notice.png";

export default function Reservation() {
  const navigate = useNavigate();

  return (
    <>
      <div>주의사항</div>
      <img width={"300"} src={img1} alt="Logo" />
      <button onClick={() => navigate("/book")}>예약하기</button>
    </>
  );
}
