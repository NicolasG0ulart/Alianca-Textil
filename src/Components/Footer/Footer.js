import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import footer from '../../images/ALIANÇAFOOTER.PNG';

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #2A2A8A;
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
`;

const Logo = styled.img`
  height: 80px; 
  width: auto; 
  margin-bottom: 20px; 
`;

const Phone = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0; 
`;

const Address = styled.p`
  margin-top: 10px; 
`;

const Center = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  margin-bottom: 30px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: 5px;
`;

const Bullet = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  margin-right: 10px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #1A1A6A;
`;

const FooterLine = styled.div`
  border-top: 1px solid white;
  padding-top: 10px;
  margin: 10px 0;
`;

function App() {
  return (
    <Container>
      <ContentContainer>
        <Left>
          <Logo src={footer} alt="AliançaTextil Logo" />
          <p style={{ margin: '20px 0' }}>ATENDIMENTO AO CLIENTE</p>
          <Phone>
            <FontAwesomeIcon icon={faPhoneAlt} style={{ color: 'white' }} /> (44) 3233-3067
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
              
              <Link href="#">Tranalhe conosco</Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
             
              <Link href="#">Catálogo virtual</Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              
              <Link href="#">Contatos</Link>
            </div>
          </div>
        </Center>o
        <Right>
        <SectionTitle>PRODUTOS</SectionTitle>
          <Link href="#">Elástico de cueca</Link>
        </Right>
        <Social>
        <SectionTitle>REDES SOCIAIS</SectionTitle>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px', color: 'white' }} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px', color: 'white' }} />
            </a>
          </div>
        </Social>
      </ContentContainer>
      <Footer>
        <p style={{ margin: '5px 0' }}>Desenvolvido em: 2020</p>
        <FooterLine>
          <p style={{ margin: '5px 0' }}>Desenvolvido por</p>
          <img alt="NDB logo" height="50" src="" width="100" style={{ marginTop: '5px' }} />
        </FooterLine>
      </Footer>
    </Container>
  );
}

export default App;
