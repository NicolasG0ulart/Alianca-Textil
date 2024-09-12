import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderSite from "../../Components/Header/Index"
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom';

const Background = styled.div`
  height: 100vh;
  background-image: url('https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-1024x683.jpg');
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
`;

const Quote = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

const Vagas = styled.div`
  padding: 50px 0;
  text-align: center;
  background-color: #f8f8f8;
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
  background-color: #4b0082;

  &:hover {
    background-color: #2c3e50;
    
  }
`;

const ContentList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const JobListings = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Job = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin-bottom: 30px;
  margin-right: 2.5%;
  width: 45%;
  display: inline-block;
  vertical-align: top;
  height: auto;
  box-sizing: border-box;
  text-align: left;

  &:nth-child(2n) {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-right: 0;
  }
`;

const JobTitle = styled.h3`
  margin-top: 0;
  color: #4b0082;
  margin-bottom: 10px;
`;

const JobDescription = styled.p`
  font-weight: normal;
  color: #333;
  margin-bottom: 15px;
`;

const ApplyButton = styled(Button)`
  background-color: #2c3e50;
  margin-top: 10px;
  font-size: 15px;
  padding: 10px;
  


  &:hover {
    background-color: #1a252f;
  }
`;

const App = () => {
  const [filter, setFilter] = useState('');

  const jobs = [
    { title: 'MECÂNICO DE MANUTENÇÃO', description: 'Executar serviços de manutenção preventiva e corretiva...' },
    { title: 'AUXILIAR DE PRODUÇÃO', description: 'Auxiliar na linha de produção.' },
    { title: 'ANALISTA DE SISTEMAS', description: 'Desenvolver e manter sistemas de informação...' },
    { title: 'ENGENHEIRO CIVIL', description: 'Planejar, projetar e gerenciar construções e reformas...' },
    { title: 'DESENVOLVEDOR WEB', description: 'Desenvolver e manter websites...' },
    { title: 'GERENTE DE PROJETOS', description: 'Gerenciar projetos, coordenar equipes...' },
    { title: 'ANALISTA FINANCEIRO', description: 'Realizar análises financeiras, elaborar relatórios...' },
    { title: 'BANCO DE TALENTOS', description: 'Banco de Talentos' },
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
          <Button onClick={scrollToVagas}>Venha Conferir</Button>
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
          <JobListings>
            <h2>Listando as vagas mais recentes</h2>
            <p>{filteredJobs.length} vagas encontradas</p>
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
