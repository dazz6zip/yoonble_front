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
  background-color: ${({ $active }) => ($active ? `${colors.brown3}` : `${colors.pink1}`)};
  color: ${({ $active }) => ($active ? `${colors.brown5}` : `${colors.brown1}`)};
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;      // 수평 가운데 정렬
  align-items: center;          // 수직 가운데 정렬
  min-height: 10vh;             // 적당한 높이 확보 (비었을 때도 가운데 정렬됨)
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개 */
  gap: 1rem;
`;

const Img = styled.img`
  width: 20vw;
  max-width: 300px;
  object-fit: cover;
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
          <LanguageButton $active={language === "ko"} onClick={() => setLanguage("ko")}>
            🇰🇷 한국어
          </LanguageButton>
          <LanguageButton $active={language === "ja"} onClick={() => setLanguage("ja")}>
            🇯🇵 日本語
          </LanguageButton>
        </LanguageButtons>

        <ImageGrid>
          {filtered.map((review) => (
            <ImageWrapper key={review.id}>
              <Img src={review.img} alt={`Review ${review.id}`} loading="lazy" />
            </ImageWrapper>
          ))}
        </ImageGrid>

      </Content>
    </Container>
  );
}