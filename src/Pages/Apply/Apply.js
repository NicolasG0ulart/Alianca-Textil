import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import Logo from "../../images/logo.png";
import emailjs from '@emailjs/browser';
import { storage } from './firebase.js'; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import { v4 as uuidv4 } from 'uuid'; 


// Estilização do formulário e elementos
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
  background: #0033A0;
  color: #FFFFFF;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.4s;
  margin: 20px auto;
  box-sizing: border-box;

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

// Componente Principal
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
        alert('Email enviado com sucesso!');
      })
      .catch(error => {
        console.error('Error sending email:', error);
        alert('Erro ao enviar o email.');
      });
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

    // Verificação de preenchimento automático
    setTimeout(() => {
      if (name) setFocusedFields((prev) => ({ ...prev, name: true }));
      if (phone) setFocusedFields((prev) => ({ ...prev, phone: true }));
      if (email) setFocusedFields((prev) => ({ ...prev, email: true }));
    }, 500); // Pequeno atraso para garantir que o preenchimento automático seja capturado

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

    console.log('Submitting form with data:', { name, email, date, phone, job, gender, resumeFile, coverLetter });

    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
    if (!dateRegex.test(date)) {
      alert('Data deve estar no formato dd/mm/aaaa.');
      return;
    }

    sendEmail(e); 
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <LogoContainer>
        <LogoImage src={Logo} alt="Company Logo" />
      </LogoContainer>
      <h2>Candidatar-se para: {job}</h2>

      <InputContainer>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => handleFocus('name')}
          onBlur={() => handleBlur('name', name)}
        />
        <Label htmlFor="name" active={focusedFields.name}>
          Nome Completo
        </Label>
      </InputContainer>

      <InputContainer>
        <InputMask
          mask="99/99/9999"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          onFocus={() => handleFocus('date')}
          onBlur={() => handleBlur('date', date)}
        >
          {() => <Input id="date" />}
        </InputMask>
        <Label htmlFor="date" active={focusedFields.date}>
          Data de Nascimento
        </Label>
      </InputContainer>

      <InputContainer>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => handleFocus('email')}
          onBlur={() => handleBlur('email', email)}
        />
        <Label htmlFor="email" active={focusedFields.email}>
          Email
        </Label>
      </InputContainer>

      <InputContainer>
        <InputMask
          mask="(99) 99999-9999"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onFocus={() => handleFocus('phone')}
          onBlur={() => handleBlur('phone', phone)}
        >
          {() => <Input id="phone" />}
        </InputMask>
        <Label htmlFor="phone" active={focusedFields.phone}>
          Telefone
        </Label>
      </InputContainer>

      <InputContainer>
        <StyledSelect
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          onFocus={() => handleFocus('gender')}
          onBlur={() => handleBlur('gender', gender)}
        >
          <option value="">Selecione o gênero</option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
          <option value="O">Outro</option>
        </StyledSelect>
        <Label htmlFor="gender" active={focusedFields.gender}>
          Gênero
        </Label>
      </InputContainer>

      <InputContainer>
        <Input type="file" id="resume" onChange={handleResumeChange} />
        <Label htmlFor="resume" active={focusedFields.resume}>
          Anexar Currículo
        </Label>
      </InputContainer>

      <InputContainer>
        <TextArea
          id="coverLetter"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          onFocus={() => handleFocus('cover_letter')}
          onBlur={() => handleBlur('cover_letter', coverLetter)}
        />
        <Label htmlFor="coverLetter" active={focusedFields.cover_letter}>
          Carta de Apresentação
        </Label>
      </InputContainer>

      <StyledButton type="submit">Enviar</StyledButton>
    </StyledForm>
  );
};

export default Candidatar;
