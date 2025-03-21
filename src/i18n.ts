import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en/translation.json';
import translationKo from './locales/ko/translation.json';
import translationJa from './locales/ja/translation.json';
import translationZh from './locales/zh/translation.json';

const resources = {
    en: {
        translation: translationEn,
    },
    ko: {
        translation: translationKo,
    },
    ja: {
        translation: translationJa,
    },
    zh: {
        translation: translationZh
    }
};


i18n.use(initReactI18next).init({
    resources,
    lng: 'ko',               // 기본 언어 설정
    fallbackLng: 'en',       // 번역이 없을 때 대체 언어
    interpolation: {
        escapeValue: false,    // React는 XSS를 자동 방지
    },
});

export default i18n;
