import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styled from "styled-components";
import { colors } from "../GlobalStyle";
import { useTranslation } from "react-i18next";
const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FAQItem = styled.div`
  padding: 10px 0;
  min-height: 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  padding: 10px;
  background: ${colors.pink1};
  color: #666;
  width: 80vw;
  max-width: 800px;
  border-radius: 5px;
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: ${colors.pink};
    color: ${colors.white};
  }
`;

const Answer = styled.div<{ isOpen: boolean }>`
  padding: 10px;
  font-size: 12px;
  line-height: 1.6;
  color: #555;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  width: 80vw;
  max-width: 800px;
  min-height: 60px;
`;

export const SubTitle = styled.div`
  text-align: center;
  font-style: italic;
  font-weight: bold;
  color: ${colors.brown3};
  font-size: 1.7rem;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqData = Object.values(t("faq", { returnObjects: true }));

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <Content>
        <SubTitle>FAQ</SubTitle>
        {faqData.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </Question>
            <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
          </FAQItem>
        ))}
      </Content>
    </Container>
  );
}
