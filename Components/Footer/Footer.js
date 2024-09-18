import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import footer from '../../images/logo.png';
import logo from '../../images/ndb_1.png';

const Container = styled.div`
  background-color: #FFF;
  color: white;
  margin: 0;
  padding: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Left = styled.div`
  max-width: 300px;
  color: #0e264b;

  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Logo = styled.img`
  height: 80px; 
  width: auto; 
  margin-bottom: 20px; 

  @media only screen and (max-width: 480px) {
    height: 40px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 768px) {
    height: 60px;
    margin-bottom: 20px;
  }
`;

const Phone = styled.p`
  font-size: 26px;  
  font-weight: bold;
  margin: 20px 0; 
  color: #0e264b;

  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Address = styled.p`
  margin-top: 29px; 
  color: #0e264b;
  font-size: 18px; 

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Center = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const SectionTitle = styled.h3`
  margin-bottom: 30px;
  color: #0e264b;
  font-size: 24px; 

  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const Link = styled.a`
  color: #0e264b;
  text-decoration: none;
  margin-bottom: 5px;
  font-size: 18px; 

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  color: #0e264b;

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  color: #0e264b;

  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Footer = styled.div`
  text-align: center;
  padding: 30px 20px;
  background-color: #FFF;
  color: #0e264b;
  border-top: 1px solid #0e264b;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const FooterText = styled.p`
  margin: 5px 0;
  font-size: 18px;  

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const FooterLogo = styled.img`
  margin-top: 10px;
  height: 80px;  
  width: auto;

  @media only screen and (max-width: 480px) {
    height: 60px;
  }
`;

function App() {
  return (
    <Container>
      <ContentContainer>
        <Left>
          <Logo src={footer} alt="AliançaTextil Logo" />
          <p style={{ margin: '20px 0' }}>ATENDIMENTO AO CLIENTE</p>
          <Phone>
            <FontAwesomeIcon icon={faPhoneAlt} style={{ color: '#0e264b' }} /> (32) 99943-1256
          </Phone>
          <Address>
            Professora Nair Temponi, 56, Nova Pequeri, Pequeri-MG, CEP: 36610000
          </Address>
        </Left>
        <Center>  
          <SectionTitle>CONTEÚDO</SectionTitle>
          <div>
            <Link href="/sobre">Sobre a empresa</Link><br />
            <Link href="/trabalhe-conosco">Trabalhe conosco</Link><br />
            <Link href="/catalogo">Catálogo virtual</Link><br />
            <Link href="/contato">Contatos</Link>
          </div>
        </Center>
        <Right>
          <SectionTitle>PRODUTOS</SectionTitle>
          <Link>Elásticos para Roupa íntima</Link>
        </Right>
        <Social>
          <SectionTitle>REDES SOCIAIS</SectionTitle>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://www.instagram.com/aliancatextil.oficial/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px', color: '#0e264b' }} />
            </a>
            <a href="https://www.linkedin.com/in/alian%C3%A7a-t%C3%AAxtil-152733324/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px', color: '#0e264b' }} />
            </a>
          </div>
        </Social>
      </ContentContainer>
      <Footer>
        <FooterText>Desenvolvido em: 2024</FooterText>
        <FooterText>Desenvolvido por</FooterText>
        <FooterLogo src={logo} alt="NDB Logo" />
      </Footer>
    </Container>
  );
}

export default App;
