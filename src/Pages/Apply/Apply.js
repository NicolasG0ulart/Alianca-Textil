import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import Logo from "../../images/logo.png";
import emailjs from '@emailjs/browser';
import { storage } from './firebase.js'; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import { v4 as uuidv4 } from 'uuid'; 
import Modal from 'react-modal'; 
import { FaCheckCircle, FaSpinner, FaTimesCircle  } from "react-icons/fa";



const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
};



const errorModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    backgroundColor: '#f8d7da', 
    color: '#721c24', 
  },
};



const CloseButton = styled.button`
  background-color: #0033A0;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #00A859;
  }
`;


const StyledForm = styled.form`
  max-width: 100%;
  width: 90%;
  margin: 0 auto;
  background: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 20px;

  h2 {
    font-size: 1.25rem;
    margin: 20px 0;
    text-align: center;
    color: #0033A0;
  }

  @media (min-width: 768px) {
    padding: 30px;
    width: 80%;
    h2 {
      font-size: 1.5rem;
      margin: 30px 0;
    }
  }

  @media (min-width: 1024px) {
    width: 50%;
    padding: 40px;
    h2 {
      font-size: 1.75rem;
      margin: 40px 0;
    }
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: transparent;
  box-sizing: border-box;
  &:focus {
    border-color: #FFD700;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: transparent;
  resize: vertical;
  box-sizing: border-box;
  &:focus {
    border-color: #FFD700;
    outline: none;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 50px;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #FFFFFF;
  box-sizing: border-box;
  &:focus {
    border-color: #FFD700;
    outline: none;
  }
`;

const Label = styled.label`
  position: absolute;
  top: ${(props) => (props.active ? '-10px' : '15px')};
  left: 15px;
  font-size: ${(props) => (props.active ? '14px' : '16px')};
  color: ${(props) => (props.active ? '#00A859' : '#0033A0')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  transition: 0.3s ease;
  pointer-events: none;
  background: #FFFFFF;
  padding: 0 5px;
  box-shadow: ${(props) => (props.active ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none')};
  border-radius: 5px;
`;

const StyledButton = styled.button`
  width: 100%;
  max-width: 300px;
  height: 50px;
  background: ${(props) => (props.loading ? '#B0B0B0' : '#0033A0')}; 
  color: #FFFFFF;
  border-radius: 25px;
  border: none;
  cursor: ${(props) => (props.loading ? 'not-allowed' : 'pointer')};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.4s;
  margin: 20px auto;
  box-sizing: border-box;

  &:hover {
    background: ${(props) => (props.loading ? '#B0B0B0' : '#00A859')}; 
  }
`;

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 100px;
  object-fit: contain;
`;

const SuccessIcon = styled(FaCheckCircle)`
  color: #00A859;
  font-size: 4rem;
  margin-bottom: 20px;
  
`;



const LoadingSpinner = styled(FaSpinner)`
  font-size: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;


const Candidatar = () => {
  const [gender, setGender] = useState('');
  const [job, setJob] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resumeFile, setResumeFile] = useState(null); 
  const [coverLetter, setCoverLetter] = useState('');
  const [focusedFields, setFocusedFields] = useState({});
  
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleResumeChange = (e) => {
    setResumeFile(e.target.files[0]); 
  };

  const uploadResume = async () => {
    if (resumeFile) {
      const resumeRef = ref(storage, `resumes/${uuidv4()}-${resumeFile.name}`);
      await uploadBytes(resumeRef, resumeFile); 
      const downloadURL = await getDownloadURL(resumeRef); 
      return downloadURL;
    }
    return null;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    const resumeURL = await uploadResume();

    const templateParams = {
      from_name: name,
      from_email: email,
      date: date,
      phone: phone,
      job: job,
      resume: resumeURL, 
      cover_letter: coverLetter,
    };

    emailjs.send("service_d5hd1v1", "template_pd1k2el", templateParams, "hp6NM48KT69N81zP0")
      .then(response => {
        console.log('Email sent successfully:', response);
        setLoading(false);
        setIsModalOpen(true);
      })
      .catch(error => {
        console.error('Error sending email:', error);
        setLoading(false);
        setIsErrorModalOpen(true);
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/'); 
  };

  useEffect(() => {
    const selectedJob = localStorage.getItem('selectedJob');
    switch (selectedJob) {
      case 'MECÂNICO DE MANUTENÇÃO':
        setJob('MECÂNICO');
        break;
      case 'AUXILIAR DE PRODUÇÃO':
        setJob('PRODUÇÃO');
        break;
      case 'ANALISTA DE SISTEMAS':
        setJob('ANALISTA DE SISTEMAS');
        break;
      case 'ENGENHEIRO CIVIL':
        setJob('ENGENHEIRO CIVIL');
        break;
      case 'DESENVOLVEDOR WEB':
        setJob('DESENVOLVEDOR WEB');
        break;
      case 'GERENTE DE PROJETOS':
        setJob('GERENTE DE PROJETOS');
        break;
      case 'ANALISTA FINANCEIRO':
        setJob('ANALISTA FINANCEIRO');
        break;
      case 'BANCO DE TALENTOS':
        setJob('BANCO DE TALENTOS');
        break;
      default:
        setJob('');
        break;
    }

    setTimeout(() => {
      if (name) setFocusedFields((prev) => ({ ...prev, name: true }));
      if (phone) setFocusedFields((prev) => ({ ...prev, phone: true }));
      if (email) setFocusedFields((prev) => ({ ...prev, email: true }));
    }, 500);

    setFocusedFields({
      gender: true,
      job: true,
      date: false,
      resume: true,
      cover_letter: false
    });
  }, [name, phone, email]);

  const handleFocus = (field) => {
    setFocusedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, value) => {
    setFocusedFields((prev) => ({ ...prev, [field]: !!value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
    if (!dateRegex.test(date)) {
      alert('Data deve estar no formato dd/mm/aaaa.');
      return;
    }

    sendEmail(e); 
  };

  return (
    <>
  <StyledForm onSubmit={handleSubmit}>
      <LogoContainer>
        <LogoImage src={Logo} alt="Company Logo" />
      </LogoContainer>
      <h2>Candidatar-se para: {job}</h2>

        <InputContainer>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => handleFocus('name')}
            onBlur={(e) => handleBlur('name', e.target.value)}
            required
          />
          <Label active={focusedFields.name || name}>Nome Completo</Label>
        </InputContainer>

        <InputContainer>
          <InputMask
            mask="99/99/9999"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            onFocus={() => handleFocus('date')}
            onBlur={(e) => handleBlur('date', e.target.value)}
          >
            {() => (
              <Input placeholder="Data de Nascimento (DD/MM/AAAA)" />
            )}
          </InputMask>
          <Label active={focusedFields.date || date}>Data de Nascimento</Label>
        </InputContainer>

        <InputContainer>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => handleFocus('email')}
            onBlur={(e) => handleBlur('email', e.target.value)}
            required
          />
          <Label active={focusedFields.email || email}>E-mail</Label>
        </InputContainer>    

        <InputContainer>
          <InputMask
            mask="(99) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onFocus={() => handleFocus('phone')}
            onBlur={(e) => handleBlur('phone', e.target.value)}
          >
            {() => (
              <Input placeholder="Telefone" />
            )}
          </InputMask>
          <Label active={focusedFields.phone || phone}>Telefone</Label>
        </InputContainer>

        

        <InputContainer>
          <StyledSelect value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Selecione o Gênero</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
            <option value="Prefiro não informar">Prefiro não informar</option>
          </StyledSelect>
          <Label active>Gênero</Label>
        </InputContainer>

       

        <InputContainer>
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
            required
          />
          <Label active>Currículo</Label>
        </InputContainer>

        <InputContainer>
          <TextArea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Carta de Apresentação"
            onFocus={() => handleFocus('cover_letter')}
            onBlur={(e) => handleBlur('cover_letter', e.target.value)}
          />
          <Label active={focusedFields.cover_letter || coverLetter}>Carta de Apresentação (Opcional)</Label>
        </InputContainer>

        <StyledButton type="submit" loading={loading} disabled={loading}>
          {loading ? <LoadingSpinner /> : 'Enviar'}
        </StyledButton>
      </StyledForm>
   
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={customModalStyles}
        contentLabel="Success Modal"
      >

      <SuccessIcon />
        <h2>Currículo enviado com sucesso!</h2>
        <CloseButton onClick={handleCloseModal}>Fechar</CloseButton>
      </Modal>

      <Modal
      isOpen={isErrorModalOpen}
      onRequestClose={() => setIsErrorModalOpen(false)}
       style={errorModalStyles}
      contentLabel="Error Modal"
      >
  <FaTimesCircle style={{ color: '#721c24', fontSize: '4rem', marginBottom: '20px' }} />
  <h2>Currículo não enviado</h2>
  <CloseButton onClick={() => setIsErrorModalOpen(false)}>Tentar novamente</CloseButton>
</Modal>
    </>
  );
};

export default Candidatar;
