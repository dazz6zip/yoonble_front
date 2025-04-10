import { useEffect, useState } from "react";
import { imageLink } from "../fetcher";
import { AcademyImage } from "./styled-components/DefaultStyle";

export default function RotatingImage() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const maxIndex = 10; // 마지막 이미지 번호
        const interval = setInterval(() => {
            setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        }, 2000); // 2초마다 변경

        return () => clearInterval(interval); // 언마운트 시 정리
    }, []);

    return (
        <AcademyImage
            src={`${imageLink}/academy/${index}.jpeg`}
            alt="academy"
        />
    );
}
