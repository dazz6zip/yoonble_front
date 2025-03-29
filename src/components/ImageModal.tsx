import Modal from "react-modal";
import Slider from "react-slick";
import { useRef, useEffect, useState } from "react";
import { CloseButtonTopRight, ModalImage, modalStyles, ModalTitle, NextButton, PrevButton } from "./styled-components/ImageModalStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageSliderModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    images: string[];
    initialIndex?: number;
}

export function ImageSliderModal({ isOpen, onClose, title, images, initialIndex = 0 }: ImageSliderModalProps) {
    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        if (sliderRef.current && isOpen) {
            sliderRef.current.slickGoTo(initialIndex);
        }
    }, [initialIndex, isOpen]);

    const handlePrev = () => sliderRef.current?.slickPrev();
    const handleNext = () => sliderRef.current?.slickNext();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={modalStyles}
        >
            <CloseButtonTopRight onClick={onClose}>×</CloseButtonTopRight>
            <PrevButton onClick={handlePrev}>❮</PrevButton>
            <NextButton onClick={handleNext}>❯</NextButton>
            <Slider
                ref={sliderRef}
                initialSlide={initialIndex}
                dots={false}
                arrows={false}
                infinite={false}
            >
                {images.map((src, idx) => (
                    <div key={idx}>
                        <ModalImage src={src} alt={`modal-${idx}`} />
                    </div>
                ))}
            </Slider>
            <ModalTitle>{title}</ModalTitle>
        </Modal>
    );
}


