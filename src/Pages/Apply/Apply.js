import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import Logo from "../../images/logo.png";
import emailjs from '@emailjs/browser';
import { storage } from './firebase.js'; // Importar o Firebase Storage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Métodos do Firebase Storage
import { v4 as uuidv4 } from 'uuid'; // Gerar um ID único para o arquivo


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
  const [resumeFile, setResumeFile] = useState(null); // Armazena o arquivo PDF
  const [coverLetter, setCoverLetter] = useState('');
  const [focusedFields, setFocusedFields] = useState({});

  // Atualizar o estado do arquivo no input de currículo
  const handleResumeChange = (e) => {
    setResumeFile(e.target.files[0]); // Armazena o arquivo
  };

  const uploadResume = async () => {
    if (resumeFile) {
      const resumeRef = ref(storage, `resumes/${uuidv4()}-${resumeFile.name}`);
      await uploadBytes(resumeRef, resumeFile); // Faz upload do arquivo
      const downloadURL = await getDownloadURL(resumeRef); // Obtém o link do arquivo
      return downloadURL;
    }
    return null;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Faz upload do arquivo antes de enviar o email
    const resumeURL = await uploadResume();

    

    const templateParams = {
      from_name: name,
      from_email: email,
      date: date,
      phone: phone,
      job: job,
      resume: resumeURL, // Link do currículo no Firebase Storage
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

    setFocusedFields({
      gender: true,
      job: true,
      date: false,
      resume: true,
      cover_letter: false
    });
  }, []);

  const handleFocus = (field) => {
    setFocusedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, value) => {
    setFocusedFields((prev) => ({ ...prev, [field]: !!value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitting form with data:', { name, email, date, phone, job, gender, resumeFile, coverLetter });

    // Valida data no formato dd/mm/yyyy
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
    if (!dateRegex.test(date)) {
      alert('Data deve estar no formato dd/mm/aaaa.');
      return;
    }

    sendEmail(e); // Envia o email após validação
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <LogoContainer>
        <LogoImage src={Logo} alt="Logo" />
      </LogoContainer>
      <h2>Candidatar-se à Vaga: {job}</h2>

      <InputContainer>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => handleFocus('name')}
          onBlur={(e) => handleBlur('name', e.target.value)}
          required
        />
        <Label htmlFor="name" active={focusedFields.name}>Nome Completo</Label>
      </InputContainer>

      <InputContainer>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => handleFocus('email')}
          onBlur={(e) => handleBlur('email', e.target.value)}
          required
        />
        <Label htmlFor="email" active={focusedFields.email}>Email</Label>
      </InputContainer>

      <InputContainer>
        <InputMask
          mask="99/99/9999"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          onFocus={() => handleFocus('date')}
          onBlur={(e) => handleBlur('date', e.target.value)}
        >
          {(inputProps) => <Input {...inputProps} id="date" required />}
        </InputMask>
        <Label htmlFor="date" active={focusedFields.date}>Data de Nascimento (dd/mm/aaaa)</Label>
      </InputContainer>

      <InputContainer>
        <InputMask
          mask="(99) 99999-9999"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onFocus={() => handleFocus('phone')}
          onBlur={(e) => handleBlur('phone', e.target.value)}
        >
          {(inputProps) => <Input {...inputProps} id="phone" required />}
        </InputMask>
        <Label htmlFor="phone" active={focusedFields.phone}>Telefone</Label>
      </InputContainer>

      <InputContainer>
        <StyledSelect
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          onFocus={() => handleFocus('gender')}
          onBlur={(e) => handleBlur('gender', e.target.value)}
          required
        >
          <option value="">Selecione o Gênero</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
          <option value="Prefiro não dizer">Prefiro não dizer</option>
        </StyledSelect>
        <Label htmlFor="gender" active={focusedFields.gender}>Gênero</Label>
      </InputContainer>

      <InputContainer>
        <StyledSelect
          id="job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          onFocus={() => handleFocus('job')}
          onBlur={(e) => handleBlur('job', e.target.value)}
          required
        >
          <option value="">Selecione uma Vaga</option>
          <option value="MECÂNICO DE MANUTENÇÃO">MECÂNICO</option>
          <option value="AUXILIAR DE PRODUÇÃO">PRODUÇÃO</option>
          <option value="ANALISTA DE SISTEMAS">ANALISTA DE SISTEMAS</option>
          <option value="ENGENHEIRO CIVIL">ENGENHEIRO CIVIL</option>
          <option value="DESENVOLVEDOR WEB">DESENVOLVEDOR WEB</option>
          <option value="GERENTE DE PROJETOS">GERENTE DE PROJETOS</option>
          <option value="ANALISTA FINANCEIRO">ANALISTA FINANCEIRO</option>
          <option value="BANCO DE TALENTOS">BANCO DE TALENTOS</option>
        </StyledSelect>
        <Label htmlFor="job" active={focusedFields.job}>Vaga</Label>
      </InputContainer>

      <InputContainer>
        <Input
          type="file"
          id="resume"
          accept=".pdf"
          onChange={handleResumeChange} // Atualiza o estado ao escolher o arquivo
          onFocus={() => handleFocus('resume')}
          onBlur={(e) => handleBlur('resume', e.target.value)}
        />
        <Label htmlFor="resume" active={focusedFields.resume}>Currículo (PDF)</Label>
      </InputContainer>

      <InputContainer>
        <TextArea
          id="coverLetter"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          onFocus={() => handleFocus('cover_letter')}
          onBlur={(e) => handleBlur('cover_letter', e.target.value)}
          required
        />
        <Label htmlFor="cover_letter" active={focusedFields.cover_letter}>Carta de Apresentação</Label>
      </InputContainer>

      <StyledButton type="submit">Enviar</StyledButton>
    </StyledForm>
  );
};

export default Candidatar;
