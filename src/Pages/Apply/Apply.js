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
import { FaCheckCircle, FaSpinner, FaTimesCircle } from "react-icons/fa";



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
  background: ${((props) => (props.loading ? '#B0B0B0' : '#0033A0'))}; 
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
  position: relative;

  &:hover {
    background: #00A859;
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

    emailjs.send("service_0l8sivj", "template_cie0fvh", templateParams, "dAX_ixFgIYZH0mnJ-")
      .then(response => {
        console.log('Email sent successfully:', response);
        setLoading(false);
        setIsModalOpen(true);
      })
      .catch(error => {
        console.error('Error sending email:', error);
        setLoading(false);
        setIsErrorModalOpen(true);
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  useEffect(() => {
    const selectedJob = localStorage.getItem('selectedJob');
    switch (selectedJob) {
      case 'AUXILIAR DE PRODUÇÃO':
        setJob('AUXILIAR DE PRODUÇÃO');
        break;
      case 'OPERADOR DE FIOS':
        setJob('OPERADOR DE FIOS');
        break;
      case 'AUXILIAR EMBALADOR':
        setJob('AUXILIAR EMBALADOR');
        break;
      case 'AUXILIAR DE ESTOQUISTA':
        setJob('AUXILIAR DE ESTOQUISTA');
        break;
      case 'AUXILIAR ENGOMADEIRA':
        setJob('AUXILIAR ENGOMADEIRA');
        break;
      case 'OPERADOR EMBALAGEM':
        setJob('OPERADOR EMBALAGEM');
        break;
      case 'MECÂNICO':
        setJob('MECÂNICO');
        break;
      case 'OPERADOR JACQUARD':
        setJob('OPERADOR JACQUARD');
        break;
      case 'AUXILIAR DE TECELÃO':
        setJob('AUXILIAR DE TECELÃO');
        break;
      case 'TECELÃO':
        setJob('TECELÃO');
        break;
      case 'INSPETOR DE TECELÃO':
        setJob('INSPETOR DE TECELÃO');
        break;
      case 'CONTRAMESTRE':
        setJob('CONTRAMESTRE');
        break;
      case 'SETOR ADMINISTRATIVO':
        setJob('SETOR ADMINISTRATIVO');
        break;
      case 'BANCO DE TALENTO':
        setJob('BANCO DE TALENTO');
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
      name:true,
      phone:true,
      email:true,
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
    if (!value) {
      setFocusedFields((prev) => ({ ...prev, [field]: false }));
    }
  };

  return (
    <>
      <StyledForm onSubmit={(e) => {
        setLoading(true); 
        sendEmail(e);
      }}>
        <LogoContainer>
          <LogoImage src={Logo} alt="logo" />
        </LogoContainer>

        <h2>Candidatar-se à vaga de:   {job}</h2>

        <InputContainer>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => handleFocus('name')}
            onBlur={() => handleBlur('name', name)}
            required
          />
          <Label active={focusedFields.name}>Nome completo</Label>
        </InputContainer>

        <InputContainer>
          <InputMask
            mask="(99) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onFocus={() => handleFocus('phone')}
            onBlur={() => handleBlur('phone', phone)}
            required
          >
            {() => <Input type="text" required />}
          </InputMask>
          <Label active={focusedFields.phone}>Telefone</Label>
        </InputContainer>

        <InputContainer>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email', email)}
            required
          />
          <Label active={focusedFields.email}>E-mail</Label>
        </InputContainer>

        <InputContainer>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            onFocus={() => handleFocus('date')}
            onBlur={() => handleBlur('date', date)}
            required
          />
          <Label active={focusedFields.date}>Data de nascimento</Label>
        </InputContainer>

        <InputContainer>
          <StyledSelect
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            onFocus={() => handleFocus('gender')}
            onBlur={() => handleBlur('gender', gender)}
            required
          >
            <option value="">Selecionar</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="nao informar">Prefiro não informar</option>
          </StyledSelect>
          <Label active={focusedFields.gender}>Gênero</Label>
        </InputContainer>

        <InputContainer>
          <Input
            type="file"
            onChange={handleResumeChange}
            onFocus={() => handleFocus('resume')}
            onBlur={() => handleBlur('resume', resumeFile)}
            required
          />
          <Label active={focusedFields.resume}>Anexar currículo</Label>
        </InputContainer>

        <InputContainer>
          <TextArea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            onFocus={() => handleFocus('cover_letter')}
            onBlur={() => handleBlur('cover_letter', coverLetter)}
          />
          <Label active={focusedFields.cover_letter}>Carta de apresentação (opcional)</Label>
        </InputContainer>

        <StyledButton type="submit" loading={loading} disabled={loading}>
          {loading ? <LoadingSpinner /> : 'Enviar'}
        </StyledButton>
      </StyledForm>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={customModalStyles}
        contentLabel='Sucess Modal'
      >

        <SuccessIcon />
        <h2>Currículo enviado com sucesso!</h2>
        <CloseButton onClick={handleCloseModal}>Fechar</CloseButton>
      </Modal>

      <Modal
        isOpen={isErrorModalOpen}
        onRequestClose={() => setIsErrorModalOpen(false)}
        style={errorModalStyles}
        contentLabel='Error Modal'
      >
        <FaTimesCircle style={{ color: '#721c24', fontSize: '4rem', marginBottom: '20px' }} />
        <h2>Currículo não enviado</h2>
        <CloseButton onClick={() => setIsErrorModalOpen(false)}>Tentar novamente</CloseButton>
      </Modal>
    </>
  );
};
export default Candidatar;