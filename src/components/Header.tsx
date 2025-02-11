import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  color: rgb(135, 121, 108);
  font-size: 50px;
  margin: 20px;
  border-bottom: 2px solid rgb(117, 105, 94);
  display: inline-block;
`;

const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  background: rgb(164, 152, 140);
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: none;
`;

const StyledMenu = styled.div`
  color: rgb(201, 193, 187);
  font-size: 18px;
  margin-top: 30px;
`;

const StyledMenuItem = styled(Link)`
  text-decoration: none;
  color: rgb(234, 224, 217);
  font-size: 14px;
  margin-top: 20px;
  &:hover {
    color: rgb(201, 193, 187);
  }
`;

const CustomIcon = styled.b`
  color: rgb(234, 224, 217);
  padding-right: 10px;
`;

const Content = styled.div`
  margin-left: 250px; /* 사이드바 넓이만큼 왼쪽 여백 추가 */
  height: 10vh;
  align-items: center; /* 세로 중앙 정렬 */
`;

function Header() {
  return (
    <>
      <Sidebar>
        <StyledMenu>ABOUT</StyledMenu>
        <StyledMenuItem to="/shop">
          <CustomIcon>✷</CustomIcon>SHOP
        </StyledMenuItem>
        <StyledMenuItem to="/artist">
          <CustomIcon>✶</CustomIcon>ARTIST
        </StyledMenuItem>
        <StyledMenuItem to="/artmake">
          <CustomIcon>✷</CustomIcon>ARTMAKE
        </StyledMenuItem>
        <StyledMenuItem to="/faq">
          <CustomIcon>✶</CustomIcon>FAQ
        </StyledMenuItem>
        <StyledMenu>BOOKING</StyledMenu>
        <StyledMenuItem to="/reservation">
          <CustomIcon>✶</CustomIcon>RESERVATION
        </StyledMenuItem>
        <StyledMenuItem to="/review">
          <CustomIcon>✷</CustomIcon>REVIEW
        </StyledMenuItem>
      </Sidebar>

      <Content>
        <Link to="/">
          <Title>YOONBLE</Title>
        </Link>
      </Content>
    </>
  );
}

export default Header;
