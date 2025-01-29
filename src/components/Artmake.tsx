import styled from "styled-components";

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  flex: 1 1 calc(50% - 20px);
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #333;
  border-bottom: 2px solid rgb(117, 105, 94);
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
`;

export default function Artmake() {
  return (
    <Container>
      <ContentWrapper>
        <ContentBox>
          <Title>눈썹</Title>
          <Description>
            <strong>자연눈썹</strong>: 개인의 모발 흐름 구조를 정밀 분석한 후
            초미세 마이크로 니들을 활용하여 한 올 한 올 정교하게 그려넣는 증모
            효과 기술입니다.
          </Description>
        </ContentBox>
        <ContentBox>
          <Title>입술</Title>
          <Description>
            <strong>입술 반영구 시술</strong>: 입술에 자연스럽고 생기 있는
            색감을 부여하여 건강하고 또렷한 인상을 연출하는 시술입니다.
          </Description>
        </ContentBox>
      </ContentWrapper>
      <ContentWrapper>
        <ContentBox>
          <Title>미인점</Title>
          <Description>
            <strong>미인점 시술</strong>: 얼굴의 조화를 이루고 인상을 더욱
            돋보이게 해주는 반영구 시술입니다.
          </Description>
        </ContentBox>
        <ContentBox>
          <Title>헤어라인</Title>
          <Description>
            <strong>헤어라인 시술</strong>: 한 올 한 올 정교하게 결을 살려 그려
            넣는 헤어라인 시술입니다.
          </Description>
        </ContentBox>
      </ContentWrapper>
      <ContentWrapper>
        <ContentBox>
          <Title>눈</Title>
          <Description>
            <strong>눈물주머니라이너+하이라이터</strong>: 애교살에 자연스러운
            볼륨감을 더해 밝고 생기 있는 인상을 연출해 줍니다.
          </Description>
        </ContentBox>
        <ContentBox>
          <Title>속눈썹</Title>
          <Description>
            <strong>윤블펌</strong>: 맞춤 컬링 시술로, 개개인의 눈매와 속눈썹
            결을 고려한 자연스러운 컬링 효과를 제공합니다.
          </Description>
        </ContentBox>
      </ContentWrapper>
    </Container>
  );
}
