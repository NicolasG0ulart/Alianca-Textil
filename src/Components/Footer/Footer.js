import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import footer from '../../images/logo.png';
import logo from '../../images/ndb_1.png';

const Container = styled.div`  background-color: #FFF;
  color: white;
  margin: 0;
  padding: 0;
 
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  font-weight: bold;
  font-size:20px;

  @media(max-width: 1024px){
    gap: 30px;
    padding-inline: 30px;
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  max-width: 300px;
  color: #0e264b;
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
  color: #0e264b;
`;

const Address = styled.p`
  margin-top: 29px; 
  color: #0e264b;
  font-size: 18px; 
  font-weight: bold;  
`;

const Center = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  @media(max-width: 1024px){
    margin-left: 0;
    width: 100%;
  }
`;

const SectionTitle = styled.h3`
  color: #0e264b;
  font-size: 24px; 
  font-weight: bold;
  @media(max-width: 1024px){
    
  }
`;

const Link = styled.a`
  color: #0e264b;
  text-decoration: none;
  margin-bottom: 5px;
  font-size: 18px; 
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  color: #0e264b;
  @media(max-width: 1024px){
    width: 100%;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  color: #0e264b;
  @media(max-width: 1024px){
    width: 100%;
  }
`;

const Footer = styled.div`
  text-align: center;
  padding: 10px 20px;
  background-color: #0e264b;
  color: white;
  overflow: hidden; 
   
`;

const FooterLine = styled.div`
  border-top: 1px solid white;
  padding-top: 15px;
  margin: 20px 0;
`;

const FooterText = styled.p`
  margin: 5px 0;
  font-size: 18px;  
  font-weight: bold;  
  
`;

const FooterLogo = styled.img`
  margin-top: 30px;
  height: 90px;
  width: auto;
`;


const CustomerService = styled.p`
  margin: 20px 0;
  color: #0e264b;  
  font-weight: bold;  
`;


const DevelopedText = styled.p`
  color: white;  
  font-weight: bold;  
  font-size: 18px;
`;

function App() {
  return (
    <Container>
      <ContentContainer>
        <Left>
          <Logo src={footer} alt="AliançaTextil Logo" />
          <CustomerService>ATENDIMENTO AO CLIENTE</CustomerService>
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
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
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
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '34px', color: '#0e264b' }} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '34px', color: '#0e264b' }} />
            </a>
          </div>
        </Social>
      </ContentContainer>
      <Footer>
        <FooterText>Desenvolvido em: 2024</FooterText>
        <FooterLine>
          <DevelopedText>Desenvolvido por</DevelopedText>
          <a href="https://www.instagram.com/ndbsites_mg/" target="_blank" rel="noopener noreferrer">
            <FooterLogo src={logo} alt="NDB Logo" />
          </a>
        </FooterLine>
      </Footer>
    </Container>
  );
}

export default App;
