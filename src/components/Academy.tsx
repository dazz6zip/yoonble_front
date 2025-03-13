import styled from "styled-components";
import img1 from "../images/artist.jpg";
import { MenuProps } from "./Header";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { imageLink } from "../fetcher";
import { colors } from "../GlobalStyle";

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div<MenuProps>`
  padding-left: ${(props) => (props.isDesktop ? "20px" : 0)};
  margin-bottom: 40px;
  text-align: left;
`;

const Title = styled.h2<MenuProps>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.brown1};
  text-align: ${(props) => (props.isDesktop ? "left" : "center")};
  padding-left: ${(props) => (props.isDesktop ? "7px" : 0)};

  padding-top: ${(props) => (props.isDesktop ? 0 : "16px")};
  padding-bottom: 10px;
  margin-bottom: 10px;

  background: linear-gradient(
    to bottom,
    rgba(117, 105, 94, 0.6),
    rgba(117, 105, 94, 0)
  );
  background-repeat: no-repeat;
  background-size: 100% 3px;
  background-position: bottom;
`;


const Description = styled.p`
  font-size: 15px;
  line-height: 1.5;
  padding-bottom: 7px;
`;

// const IaC = styled.div<MenuProps>`
//   display: ${(props) => (props.isDesktop ? "flex" : "block")};
// `;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-right: 15px;
`;

const Image = styled.img<MenuProps>`
  max-width: 15vw;
  border-radius: 10px;
`;

export default function Academy() {
  const isDesktop = useRecoilValue(isDesktopState);
  return (
    <Container>
      {/* <IaC isDesktop={isDesktop}> */}
      <Content isDesktop={isDesktop}>
        <Title isDesktop={isDesktop}>Academy</Title>
        <Description>
          윤블 아카데미는 극 소수정예 과외식 수업으로 각 개인의 수준에 맞춘 맞춤형 교육을 진행합니다. 기술을 배우는 데 진심으로 임하시는 분들만을 대상으로 1:1 실습 실무 중심의 초밀착 수업으로 실전에서 바로 활용 가능한 기술을 알려드립니다.
        </Description><br />
        <Description>
          창업을 처음부터 끝까지 체계적으로 지도하는 창업반, 눈썹 전문 기술에 집중하는 단과반 등, 반영구를 처음 시작하는 분들은 물론, 경력자 원장님들의 스킬 업과 재수강도 한 번의 시행착오 없이 체계적으로 진행됩니다.</Description>
      </Content>
      <ImageWrapper>
        <Image isDesktop={isDesktop} src={imageLink + '/academy/0.jpeg'} alt="shop" />
        <Image isDesktop={isDesktop} src={imageLink + '/academy/1.jpeg'} alt="shop" />
        <Image isDesktop={isDesktop} src={imageLink + '/academy/2.jpeg'} alt="shop" />
      </ImageWrapper>
      {/* </IaC> */}
    </Container>
  );
}
