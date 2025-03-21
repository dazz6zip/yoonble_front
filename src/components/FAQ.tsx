import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  Answer,
  Container,
  Content,
  FAQItem,
  Question,
  SubTitle,
} from "./styled-components/DefaultStyle";
import { useTranslation } from "react-i18next";


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
            <Question
              onClick={() => toggleFAQ(index)}
              isOpen={index == openIndex}
            >
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
