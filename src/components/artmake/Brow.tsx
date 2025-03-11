import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const Card = styled.div`
  width: 25vw;
  text-align: center;
  border: 1px solid #ccc;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
`;

const CircleImage = styled.img`
  width: 12vw;
  height: 12vw;
  border-radius: 50%;
  border: 2px solid black;
  display: block;
  margin: 10px auto;
  object-fit: cover;
`;

const Description = styled.p`
  font-size: 0.9em;
  margin: 10px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

const SquareImage = styled.img`
  width: 10vw;
  height: 10vw;
  border: 1px solid black;
  object-fit: cover;
`;

const CardComponent = ({ circleImgSrc, squareImgSrcs }: { circleImgSrc: string; squareImgSrcs: string[] }) => (
    <Card>
        <Title>Natural Brow</Title>
        <CircleImage src={circleImgSrc} alt="Circle" />
        <Description>
            어쩌고 기법으로다가 어쩌고
        </Description>
        <Grid>
            {squareImgSrcs.map((src, index) => (
                <SquareImage key={index} src={src} alt={`Square ${index + 1}`} />
            ))}
        </Grid>
    </Card>
);

const cardsData = [
    {
        circleImgSrc: "https://d206helh22e0a3.cloudfront.net/images/brow/natural/natural.png",
        squareImgSrcs: [
            "https://d206helh22e0a3.cloudfront.net/images/brow/natural/natural1.jpeg",
            "https://d206helh22e0a3.cloudfront.net/images/brow/natural/natural2.jpeg",
            "https://d206helh22e0a3.cloudfront.net/images/brow/natural/natural3.jpeg",
            "https://d206helh22e0a3.cloudfront.net/images/brow/natural/natural4.jpeg",
        ]
    }, {
        circleImgSrc: "https://d206helh22e0a3.cloudfront.net/images/brow/combo/combo.png",
        squareImgSrcs: [
            "/path/to/square-image1.jpg", "/path/to/square-image2.jpg",
            "/path/to/square-image3.jpg", "/path/to/square-image4.jpg",
        ]
    },
    {
        circleImgSrc: "https://d206helh22e0a3.cloudfront.net/images/brow/shadow/shadow.png",
        squareImgSrcs: [
            "/path/to/square-image21.jpg", "/path/to/square-image22.jpg",
            "/path/to/square-image23.jpg", "/path/to/square-image24.jpg",
        ]
    }
];


export function Brow() {
    return (
        <Container>
            {cardsData.map((data, index) => (
                <CardComponent key={index} {...data} />
            ))}
        </Container>
    );
};


