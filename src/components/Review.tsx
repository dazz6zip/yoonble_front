import { useState, useEffect } from "react";
import { Container, Content, SubTitle } from "./styled-components/DefaultStyle";
import { getReviews, IReview } from "../fetcher";
import styled from "styled-components";
import { colors } from "../GlobalStyle";

const LanguageButtons = styled.div`
  margin-bottom: 1rem;
`;

const LanguageButton = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: ${({ $active }) =>
    $active ? `${colors.brown3}` : `${colors.pink1}`};
  color: ${({ $active }) =>
    $active ? `${colors.brown5}` : `${colors.brown1}`};
  cursor: pointer;
`;

const ImageGrid = styled.div`
  column-count: 4;
  column-gap: 1rem;
  width: 100%;
  @media (max-width: 720px) {
    column-count: 1;
    width: 60%;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 300px;
  object-fit: cover;
  margin-bottom: 1rem;
  break-inside: avoid;
  @media (max-width: 780px) {
    max-width: 500px;
  }
`;

export default function Review() {
  const [language, setLanguage] = useState<"ko" | "ja">("ko");
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getReviews();
      setReviews(data);
    };
    fetchData();
  }, []);

  const filtered = reviews.filter((review) => review.language === language);

  return (
    <Container>
      <Content>
        <SubTitle>Review</SubTitle>
        <LanguageButtons>
          <LanguageButton
            $active={language === "ko"}
            onClick={() => setLanguage("ko")}
          >
            🇰🇷 한국어
          </LanguageButton>
          <LanguageButton
            $active={language === "ja"}
            onClick={() => setLanguage("ja")}
          >
            🇯🇵 日本語
          </LanguageButton>
        </LanguageButtons>
        <ImageGrid>
          {filtered.map((review) => (
            <Img
              key={review.id}
              src={review.img}
              alt={`Review ${review.id}`}
              loading="lazy"
            />
          ))}
        </ImageGrid>
      </Content>
    </Container>
  );
}
