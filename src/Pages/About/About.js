import React from 'react';
import styled from 'styled-components';

import Header from "../../Components/Header/Index";
import Footer from "../../Components/Footer/Footer"; 
import Galerinha from "../../images/galerinha.PNG";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;

const MainContent = styled.main`
  flex: 1;
  @media(max-width: 1024px){
      margin-top: 80px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  width: 50%;
  padding: 20px;

  h1, h2 {
    color: #0e264b;
  }

  h2 {
    margin-top: 40px;
  }

  p {
    margin-top: 20px;
    color: #0e264b;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    text-align: center;
  }
`;

const ImageSection = styled.img`
  margin-top: 50px;
  width: 100%;
  height: 210px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: auto;
    margin-top: 20px;
  }
`;

const RightSection = styled.div`
  width: 50%;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column; 
  position: relative;
  margin: 20px 0;
  padding: 20px 0;
  align-items: center; 

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const TimelineItem = styled.div`
  width: 70%; 
  max-width: 300px; 
  padding: 20px;
  background-color: #0e264b;
  color: #fff;
  border-radius: 8px;
  margin-bottom: 50px; 

  &.left {
    align-self: flex-start;
  }

  &.right {
    align-self: flex-end;
  }

  h3 {
    font-size: 24px;
  }

  p {
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    width: 90%; 
    max-width: none;
    margin: 20px auto; 
    
    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

function App() {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Container>
          <LeftSection>
            <h1>HISTÓRIA ALIANÇA TÊXTIL</h1>
            <p>
              Texto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatório
            </p>
            <p>
              Texto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatório
            </p>
            <h2>UMA EMPRESA EM CONSTANTE EVOLUÇÃO</h2>
            <p>
              Texto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatório
            </p>
            <ImageSection src={Galerinha} alt='Imagem de uma das matérias primas' />
          </LeftSection>

          <RightSection>
            <Timeline>
              <TimelineItem>
                <h3>2018</h3>
                <p>Texto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatório</p>
              </TimelineItem>
              <TimelineItem>
                <h3>2019</h3>
                <p>Texto aleatórioTexto aleatórioTexto aleatórioTexto aleatórioTexto aleatório</p>
              </TimelineItem>
            </Timeline>
          </RightSection>
        </Container>
      </MainContent>
      <Footer />
    </PageContainer>
  );
}

export default App;
