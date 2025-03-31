import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { colors } from './GlobalStyle';

const ButtonContainer = styled.div`
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const LangButton = styled.button`
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: none;
  background-color: transparent;
  color: ${colors.brown0};

  &:hover {
    color: ${colors.brown2};
  }
`;

export default function Translator() {
  const { i18n } = useTranslation();

  return (
    <ButtonContainer>
      <LangButton onClick={() => i18n.changeLanguage('en')}>English</LangButton>
      <LangButton onClick={() => i18n.changeLanguage('ko')}>한국어</LangButton>
      <LangButton onClick={() => i18n.changeLanguage('ja')}>日本語</LangButton>
      <LangButton onClick={() => i18n.changeLanguage('zh')}>中文</LangButton>
    </ButtonContainer>
  );
}
