import { useEffect, useMemo, useState } from "react";
import { imageLink } from "../fetcher";
import { AcademyImage } from "./styled-components/DefaultStyle";

export default function RotatingImage() {
    const [index, setIndex] = useState(0);

    // 이미지 미리 로드
    const images = useMemo(() => {
        return Array.from({ length: 11 }, (_, i) => {
            const img = new Image();
            img.src = `${imageLink}/academy/${i}.jpeg`;
            return img.src;
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <AcademyImage
            src={`${imageLink}/academy/${index}.jpeg`}
            alt="academy"
        />
    );
}
