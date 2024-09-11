import React from 'react';
import styled from 'styled-components';

import Header from "../../Components/Header/Index"
import Footer from "../../Components/Footer/Footer"
import Galerinha from "../../images/galerinha.PNG"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

const LeftSection = styled.div`
  width: 50%;
  padding: 20px;
  h1, h2 {
    color: #0e264b;
  }
    h2{
        margin-top: 40px;
    }
  p {
    margin-top: 20px;
    color: #0e264b;
    line-height: 1.6;
  }
`;

const ImageSection = styled.img`
    margin-top: 50px;
  width: 100%;
  height: 210px;
`;

const RightSection = styled.div`
  width: 50%;
  padding: 20px;
`;

const Timeline = styled.div`
  position: relative;
  margin: 20px 0;
  padding: 20px 0;
`;

const TimelineItem = styled.div`
  position: relative;
  width: 40%;
  padding: 20px;
  background-color: #0e264b;
  color: #1a1a1a;
  border-radius: 8px;
  margin-bottom: 20px;
  &.left {
    left: 0;
    margin-left: 10%;
  }
  &.right {
    left: 50%;
    transform: translateX(10%);
  }
  h3 {
    color: #fff;
    font-size: 24px;
  }
  p {
    color: #fff;
    line-height: 1.6;
  }
`;

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <LeftSection>
          <h1>HISTÓRIA ALIANÇA TÊXTIL</h1>
          <p>
          Texto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatório
          </p>
          <p>
          Texto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatório
          </p>
          <h2>UMA EMPRESA EM CONSTANTE EVOLUÇÃO</h2>
          <p>
          Texto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatório
          </p>
          <ImageSection src={Galerinha} alt='Imagem de uma das matérias primas'/>
        </LeftSection>
        
        <RightSection>
          <Timeline>
            <TimelineItem className="left">
              <h3>2018</h3>
              <p>Texto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatório</p>
            </TimelineItem>
            <TimelineItem className="right">
              <h3>2019</h3>
              <p>Texto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatório</p>
            </TimelineItem>
          </Timeline>
        </RightSection>
      </Container>

      <Footer/>
    </div>
  );
}

export default App;
