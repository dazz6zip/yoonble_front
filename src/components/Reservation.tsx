import { useEffect, useState } from "react";
import { AiOutlineBorder, AiOutlineCheckSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { getArtmakes, IArtmake } from "../fetcher";
import img1 from "../images/Notice.png";
import {
  ServiceItem,
  ServiceItemContainer,
} from "./styled-components/CheckStyle";

export default function Reservation() {
  const navigate = useNavigate();
  const [artmakes, setArtmakes] = useState<IArtmake[]>([]);
  const [selected, setSelected] = useState<IArtmake[]>([]);

  const toggleSelection = (artmake: IArtmake) => {
    setSelected(
      (prev) =>
        prev.includes(artmake)
          ? prev.filter((item) => item !== artmake) // 선택 해제
          : [...prev, artmake] // 선택 추가
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setArtmakes(await getArtmakes());
      } catch (err) {
        console.error("artmakes 불러오기 실패: ", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <img width={"300"} src={img1} alt="Logo" />
      <ServiceItemContainer>
        {artmakes.map((artmake) => (
          <ServiceItem
            key={artmake.id}
            selected={selected.includes(artmake)}
            onClick={() => toggleSelection(artmake)}
          >
            {selected.includes(artmake) ? (
              <AiOutlineCheckSquare size={24} />
            ) : (
              <AiOutlineBorder size={24} />
            )}
            <span>
              {artmake.name} ({artmake.duration}분 소요)
            </span>
          </ServiceItem>
        ))}
      </ServiceItemContainer>
      <button onClick={() => navigate("/book")}>예약하기</button>
    </>
  );
}
