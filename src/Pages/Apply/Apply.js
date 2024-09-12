import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputMask from 'inputmask';
import Logo from "../../images/logo.png";

const StyledForm = styled.form`
  max-width: 100%;
  width: 90%;
  margin: 0 auto;
  background: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  /* Adicionar margens adicionais em telas grandes */
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
    width: 50%; /* Reduzido para 50% em telas maiores */
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
`;

const Label = styled.label`
  position: absolute;
  top: ${(props) => (props.active ? '-10px' : '15px')};
  left: 15px;
  font-size: ${(props) => (props.active ? '12px' : '16px')};
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
  max-height: 100px;  /* Ajuste a altura máxima conforme necessário */
  object-fit: contain;
`;

const Candidatar = () => {
  const [gender, setGender] = useState('');
  const [focusedFields, setFocusedFields] = useState({});

  useEffect(() => {
    InputMask({"mask": "(99) 99999-9999"}).mask(document.querySelector('#phone'));

    setFocusedFields((prev) => ({
      ...prev,
      gender: true,
      resume: true
    }));
  }, []);

  const handleFocus = (field) => {
    setFocusedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, value) => {
    setFocusedFields((prev) => ({ ...prev, [field]: !!value }));
  };

  return (
    <StyledForm>
      <LogoContainer>
        <LogoImage src={Logo} alt="Logo" />
      </LogoContainer>
      <h2>Candidatar-se à Vaga</h2>

      <InputContainer>
        <Input
          type="text"
          id="name"
          placeholder=" "
          required
          onFocus={() => handleFocus('name')}
          onBlur={(e) => handleBlur('name', e.target.value)}
        />
        <Label htmlFor="name" active={focusedFields.name}>Nome Completo</Label>
      </InputContainer>

      <InputContainer>
        <Input
          type="email"
          id="email"
          placeholder=" "
          required
          onFocus={() => handleFocus('email')}
          onBlur={(e) => handleBlur('email', e.target.value)}
        />
        <Label htmlFor="email" active={focusedFields.email}>Email</Label>
      </InputContainer>

      <InputContainer>
        <Input
          type="tel"
          id="phone"
          placeholder=" "
          required
          onFocus={() => handleFocus('phone')}
          onBlur={(e) => handleBlur('phone', e.target.value)}
        />
        <Label htmlFor="phone" active={focusedFields.phone}>Telefone</Label>
      </InputContainer>

      <InputContainer>
        <StyledSelect
          id="job"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          onFocus={() => handleFocus('job')}
          onBlur={(e) => handleBlur('job', e.target.value)}
          required
        >
          <option value="">Selecione o Cargo</option>
          <option value="production">Auxiliar de produção</option>
          <option value="packaging">Embalagem</option>
          <option value="weaver">Tecelão</option>
          <option value="admin">Auxiliar Administrativo</option>
        </StyledSelect>
        <Label htmlFor="job" active={true}>Cargo Desejado</Label>
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
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="non-binary">Não-binário</option>
          <option value="prefer-not-to-say">Prefiro não dizer</option>
        </StyledSelect>
        <Label htmlFor="gender" active={true}>Gênero</Label>
      </InputContainer>

      <InputContainer>
        <Input
          type="file"
          id="resume"
          accept=".pdf"
          onFocus={() => handleFocus('resume')}
          onBlur={(e) => handleBlur('resume', e.target.value)}
        />
        <Label htmlFor="resume" active={true}>Currículo (PDF)</Label>
      </InputContainer>

      <InputContainer>
        <TextArea
          id="cover_letter"
          placeholder=" "
          required
          onFocus={() => handleFocus('cover_letter')}
          onBlur={(e) => handleBlur('cover_letter', e.target.value)}
        />
        <Label htmlFor="cover_letter" active={focusedFields.cover_letter}>Mensagem de Apresentação</Label>
      </InputContainer>

      <StyledButton type="submit">Enviar</StyledButton>
    </StyledForm>
  );
};

export default Candidatar;
