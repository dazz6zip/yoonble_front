import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { colors } from "./GlobalStyle";

const ButtonContainer = styled.div`
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const LangButton = styled.button<{ now: boolean }>`
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.now ? colors.brown0 : colors.brown2)};
  font-weight: ${(props) => (props.now ? `bold` : `none`)};

  &:hover {
    color: ${colors.brown0};
  }
`;

export default function Translator() {
  const [langState, setLangState] = useState("ko");
  const { i18n } = useTranslation();

  const changeProc = (value: string) => {
    i18n.changeLanguage(value);
    setLangState(value);
  };

  return (
    <ButtonContainer>
      <LangButton now={langState === "en"} onClick={() => changeProc("en")}>
        English
      </LangButton>
      <LangButton now={langState === "ko"} onClick={() => changeProc("ko")}>
        한국어
      </LangButton>
      <LangButton now={langState === "ja"} onClick={() => changeProc("ja")}>
        日本語
      </LangButton>
      <LangButton now={langState === "zh"} onClick={() => changeProc("zh")}>
        中文
      </LangButton>
    </ButtonContainer>
  );
}
