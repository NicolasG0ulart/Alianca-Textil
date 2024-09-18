import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import footer from '../../images/logo.png';
import logo from '../../images/ndb_1.png';

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #FFF;
  color: white;
  margin: 0;
  padding: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
`;

const Left = styled.div`
  max-width: 300px;
  color:#0e264b;
`;

const Logo = styled.img`
  height: 80px; 
  width: auto; 
  margin-bottom: 20px; 
`;

const Phone = styled.p`
  font-size: 26px;  /* Aumenta o tamanho da fonte */
  font-weight: bold;
  margin: 20px 0; 
  color:#0e264b;
`;

const Address = styled.p`
  margin-top: 29px; 
  color:#0e264b;
  font-size: 18px; /* Aumenta o tamanho da fonte */
`;

const Center = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  margin-bottom: 30px;
  color:#0e264b;
  font-size: 24px; /* Aumenta o tamanho da fonte */
`;

const Link = styled.a`
  color:#0e264b;
  text-decoration: none;
  margin-bottom: 5px;
  font-size: 18px; /* Aumenta o tamanho da fonte */
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  color:#0e264b;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  color:#0e264b;
`;

const Footer = styled.div`
  text-align: center;
  padding: 30px 20px;
  background-color: #0e264b;
  color: white;
  height: 300px;  /* Define uma altura fixa para o rodapé */
  overflow: hidden;  /* Impede que o conteúdo interno aumente o rodapé */
`;

const FooterLine = styled.div`
  border-top: 1px solid white;
  padding-top: 15px;
  margin: 20px 0;
`;

const FooterText = styled.p`
  margin: 5px 0;
  font-size: 18px;  /* Aumenta o tamanho da fonte */
`;

const FooterLogo = styled.img`
  margin-top: 20px;
  height: 150px;  /* Tamanho da logo */
  width: auto;
  max-height: 100%;  /* Garante que a logo não ultrapasse o rodapé */
`;



function App() {
  return (
    <Container>
      <ContentContainer>
        <Left>
          <Logo src={footer} alt="AliançaTextil Logo" />
          <p style={{ margin: '20px 0' }}>ATENDIMENTO AO CLIENTE</p>
          <Phone>
            <FontAwesomeIcon icon={faPhoneAlt} style={{ color: '#0e264b' }} /> (44) 3233-3067
          </Phone>
          <Address>
            Professora Nair Temponi, 56, Nova Pequeri, Pequeri-MG, CEP: 36610000
          </Address>
        </Left>
        <Center>
          <SectionTitle>CONTEÚDO</SectionTitle>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <Link href="#">Sobre a empresa</Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <Link href="#">Trabalhe conosco</Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <Link href="#">Catálogo virtual</Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <Link href="#">Contatos</Link>
            </div>
          </div>
        </Center>
        <Right>
          <SectionTitle>PRODUTOS</SectionTitle>
          <Link href="#">Elástico de cueca</Link>
        </Right>
        <Social>
          <SectionTitle>REDES SOCIAIS</SectionTitle>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px', color: '#0e264b' }} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px', color: '#0e264b' }} />
            </a>
          </div>
        </Social>
      </ContentContainer>
      <Footer>
        <FooterText>Desenvolvido em: 2024</FooterText>
        <FooterLine>
          <FooterText>Desenvolvido por</FooterText>
          <FooterLogo src={logo} alt="NDB Logo" />
        </FooterLine>
      </Footer>
    </Container>
  );
}

export default App;
