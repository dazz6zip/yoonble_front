// 창 크기를 감지 -> isDesktopState 업데이트

import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isDesktopState } from "../recoil/atom";

export default function ResponsiveProvider() {
  const setIsDesktop = useSetRecoilState<boolean>(isDesktopState);

  // 창 크기 변경 시
  // todo: 디바운싱?
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsDesktop]);

  return null;
}
