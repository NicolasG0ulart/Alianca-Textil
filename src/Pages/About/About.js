import React from 'react';
import styled from 'styled-components';

import Header from "../../Components/Header/Index";
import Footer from "../../Components/Footer/Footer"; 
import BannerAbout from "../../images/banner-about.png"

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
  width: 100%; 
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
            Empresa de fabricação de elásticos para cuecas fundada em 04/12/2017 na cidade de Pequeri em Minas Gerais, nasceu de um sonho de um grupo de pessoas com o principal motivo de suprir a demanda da indústria local.
            </p>
            <p>
            Teve seu início com apenas 4 funcionários e nos dias de hoje passam de 80. Tem um propósito de atender as maiores confecções do País
            </p>
            <ImageSection src={BannerAbout} alt='Imagem de uma das matérias primas' />
          </LeftSection>

          <RightSection>
            <Timeline>
              <TimelineItem>
                <h3>Investimentos</h3>
                <p>Nossa empresa passou por um crescimento notável, com um aumento de 130% nos investimentos. Esse avanço reflete nosso empenho contínuo em modernizar nossas operações, otimizar processos e garantir produtos de alta qualidade. Estamos focados em expandir e inovar, sempre buscando novas oportunidades para fortalecer nossa presença no mercado.</p>
              </TimelineItem>
              <TimelineItem>
                <h3>Pandemia</h3>
                <p>A pandemia trouxe desafios como o aumento dos preços das matérias-primas, mas seguimos firmes em nosso compromisso. Investimos na contratação de novos funcionários, fortalecendo nossa equipe e apoiando a comunidade local. Mesmo diante das dificuldades, priorizamos a qualidade de nossos produtos, enfrentando cada obstáculo com determinação e responsabilidade.</p>
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
