// Recoil 상태를 정의하는 Atom(전약 상태 저장소) 파일

import { atom } from "recoil";
import { IArtmake, IArtmakeCategory } from "../fetcher";

export const isDesktopState = atom<boolean>({
  key: "isDesktopState",
  default: window.innerWidth >= 768,
});

export const selectedArtsState = atom<IArtmake[]>({
  key: "selectedArtsState",
  default: [],
});

export const selectedCategoryState = atom<IArtmakeCategory[]>({
  key: "selectedArtmakeCatetory",
})
