import { useEffect, useMemo, useState } from "react";
import { imageLink } from "../fetcher";
import { AcademyImage, AcademyImageWrapper, FadeImage } from "./styled-components/DefaultStyle";

export default function RotatingImage() {
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    // 이미지 미리 로드
    const images = useMemo(() => {
        return Array.from({ length: 13 }, (_, i) => {
            const img = new Image();
            img.src = `${imageLink}/academy/${i}.jpeg`;
            return img.src;
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false); // 흐려지기 시작
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % images.length);
                setIsVisible(true); // 다시 보이기
            }, 600); // transition duration(0.8s)의 절반
        }, 2500);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <AcademyImageWrapper>
            <FadeImage
                src={images[index]}
                alt="academy"
                isVisible={isVisible}
            />
        </AcademyImageWrapper>
    );
}
