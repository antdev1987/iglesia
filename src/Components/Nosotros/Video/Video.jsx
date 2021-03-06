import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { device } from '../../../Responsive/Responsive';

const Background = styled.div`
  background: #dadada;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto 0 auto;
`;

const Box = styled.div`
  text-align: center;
  padding: 20px 0;
`;

const H2 = styled.h2`
  font-family: Avenir2;
  color: #0c59b5;
  font-size: 20px;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 30px;
  }
`;

const ContainerVideo = styled.iframe`
  margin-top: 20px;
  height: 300px;
  width: 100%;
  outline: none;
  border: none;

  @media ${device.tablet} {
    height: 500px;
    width: 80%;
  }
`;

const Video = () => {
  return (
    <Background>
      <Container>
        <Box>
          <Fade top delay={1000}>
            <H2>
              conoce más de <br /> ministerios palabra fiel
            </H2>
          </Fade>
          <Fade delay={1100}>
            <ContainerVideo
              src="https://www.youtube.com/embed/maz7ao3TYHw?"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Fade>
        </Box>
      </Container>
    </Background>
  );
};

export default Video;
