import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderSite from "../../Components/Header/Index"
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom';
import Empresa from "../../images/empresa.png"

const Background = styled.div`
  height: 100vh;
  background-image: url(${Empresa});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  text-align: center;
  color: #000;
  padding: 20px;
  margin:20px;
  
`;

const Quote = styled.p`
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 2px 3px 2px rgba(0,0,0,0.7);
  margin-bottom: 1.5rem;
  font-weight: bold;
  
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 2rem;
  text-shadow: 2px 3px 2px rgba(0,0,0,0.7);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Button = styled.button`
  background-color: #fff;
  color: #4b0082;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 2px 3px 2px rgba(0,0,0,0.3);

  &:hover {
    transform: scale(1.05);
  }
  }
`;

const Vagas = styled.div`
  padding: 50px 0;
  text-align: center;
`;

const VagasTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 30px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Input = styled.input`
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const FilterButton = styled(Button)`
  background-color: #0e264b;
  color: #fff;
  box-shadow: 2px 3px 2px rgba(0,0,0,0.3);
`;

const ContentList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .ant-bug{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const JobListings = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media(max-width: 1024px){
    gap: 30px;
  }
  @media(max-width: 768px){
    width: 100%;
  }
`;

const Job = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin-bottom: 30px;
  margin-right: 2.5%;
  width: 45%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;

  &:nth-child(2n) {
    margin-right: 0;
  }
  @media(max-width: 1024px){
    width: 100%;
  }
  @media(max-width: 768px){
    margin: 0;
  }
`;

const JobTitle = styled.h3`
  margin-top: 0;
  color: #0e264b;
  margin-bottom: 10px;
`;

const JobDescription = styled.p`
  font-weight: normal;
  color: #333;
  margin-bottom: 15px;
  margin-top:25px;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 70px;
  }
  @media(max-width: 768px){
    margin-top: 20px;
  }
`;

const ApplyButton = styled(Button)`
  background-color: #2c3e50;
  margin-top: 20px;
  font-size: 15px;
  padding: 10px;
  color: #fff;
  &:hover {
    background-color: #1a252f;
  }
`;

const App = () => {
  const [filter, setFilter] = useState('');

  const jobs = [
    { title: 'AUXILIAR DE PRODUÇÃO', description: ' Checar ordens de serviço, identificar, separar e transportar materiais, além de conferir visualmente e repor materiais com defeitos.' },
    { title: 'OPERADOR DE FIOS', description: '  Carrega os teares com bobinas ou carretéis, passando os fios de urdume e trama.    ' },
    { title: 'AUXILIAR EMBALADOR', description: 'Auxiliares de embalagem atuam no controle de qualidade, garantindo que todos os produtos estão em perfeitas condições antes de serem enviados.' },
    { title: 'AUXILIAR DE ESTOQUISTA', description: 'Manter o estoque organizado, etiquetando e armazenando os produtos de forma adequada para facilitar o acesso e a contagem' },
    { title: 'AUXILIAR ENGOMADEIRA', description: 'Operar e monitorar as máquinas de engomagem, garantindo que estejam funcionando corretamente e ajustando-as conforme necessário' },
    { title: 'OPERADOR EMBALAGEM', description: 'O operador manuseia máquinas de embalagem, ajustando-as conforme necessário para diferentes tipos de produtos e embalagens' },
    { title: 'MECÂNICO', description: 'Realizar inspeções periódicas e testes para garantir que os equipamentos estejam funcionando corretamente. ' },
    { title: 'OPERADOR JACQUARD', description: 'Supervisionar o processo de tecelagem para garantir que a máquina esteja funcionando corretamente e que os padrões estejam sendo produzidos.' },
    { title: 'AUXILIAR DE TECELÃO', description: 'Auxilia na operação e monitoramento das máquinas de tecelagem e na realização de ajustes e pequenas manutenções nas máquinas.' },
    { title: 'TECELÃO', description: 'Opera máquinas manuais ou automatizadas para tecer os fios e Verifica se os elásticos estão sendo produzidos corretamente, corrigindo falhas se necessário.' },
    { title: 'INSPETOR DE TECELÃO', description: 'Acompanhar o processo de produção, desde a preparação dos elásticos até a finalização dos próprios' },
    { title: 'CONTRAMESTRE', description: 'Garantir que a máquina esteja funcionando corretamente e realizar ajustes conforme necessário e monitorar a qualidade dos elásticos.' },
    { title: 'SETOR ADMINISTRATIVO', description: 'Dar apoio à administração de uma empresa em suas tarefas diárias podendo trabalhar em organizações dos mais variados portes e segmentos.' },
    { title: 'BANCO DE TALENTO', description: 'Seleção de candidatos para abertura de novas funções na empresa.' },
  ];

  const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(filter.toLowerCase()));

  const scrollToVagas = () => {
    document.getElementById('vagas-disponiveis').scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplyClick = (jobTitle) => {
    localStorage.setItem('selectedJob', jobTitle);
  };

  return (
    <div>
      <HeaderSite />
      <Background>
        <Content>
          <Quote>"O Sucesso está nos olhos daqueles que o procuram"</Quote>
          <Title>VENHA TRABALHAR CONOSCO</Title>
          <Button onClick={scrollToVagas}>Participe</Button>
        </Content>
      </Background>

      <Vagas id="vagas-disponiveis">
        <VagasTitle>Vagas Disponíveis</VagasTitle>
      </Vagas>

      <Container>
        <Header>
          <Input
            type="text"
            placeholder="Nome da Vaga"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <FilterButton>Filtrar</FilterButton>
        </Header>

        <ContentList>
          <div class="ant-bug">
            <h2>Listando as vagas mais recentes</h2><br/>
            <p>{filteredJobs.length} vagas encontradas</p><br/>
        </div>
          <JobListings>
            
            {filteredJobs.map((job, index) => (
              <Job key={index}>
                <JobTitle>{job.title}</JobTitle>
                <JobDescription>{job.description}</JobDescription>
                <Link to="/candidatar-se" onClick={() => handleApplyClick(job.title)}>
                  <ApplyButton>
                    CANDIDATAR-SE
                  </ApplyButton>
                </Link>
              </Job>
            ))}
          </JobListings>
        </ContentList>
      </Container>

      <Footer />
    </div>
  );
};

export default App;
