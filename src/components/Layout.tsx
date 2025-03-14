import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import Router from "../Router";
import Footer from "./Footer";
import { LayoutContainer } from "./styled-components/DefaultStyle";

const Layout = () => {
  const isDesktop = useRecoilValue(isDesktopState);

  return (
    <LayoutContainer isDesktop={isDesktop}>
      <Router />
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
