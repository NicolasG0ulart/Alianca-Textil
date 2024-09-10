import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputMask from 'inputmask';
import Logo from "../../images/logo.png"

const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  background: #FFFFFF;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2{
    font-size: 2rem;
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
    color: #0033A0;
  }

    .centralizar{
        display: flex;
        justify-content: center;
    }
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: transparent;
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
  width: 250px;
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
    transition: .4s;
  &:hover {
    background: #00A859;
  }
`;

const Candidatar = () => {
  const [gender, setGender] = useState('');
  const [focusedFields, setFocusedFields] = useState({});

  useEffect(() => {
    InputMask({"mask": "(99) 99999-9999"}).mask(document.querySelector('#phone'));
    
    // Forçar a animação dos campos "gênero" e "currículo" assim que o componente carregar
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
      <div className="logo">
        <img src={Logo} alt="Logo" height="150" width="380" />
      </div>
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
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          onFocus={() => handleFocus('gender')}
          onBlur={(e) => handleBlur('gender', e.target.value)}
          required
        >
          <option value="">Selecione o Cargo</option>
          <option value="male">Auxiliar de produção</option>
          <option value="female">Embalagem</option>
          <option value="non-binary">Tecelão</option>
          <option value="prefer-not-to-say">Auxiliar Administrativo</option>
        </StyledSelect>
        <Label htmlFor="gender" active={true /* sempre ativo */}>Cargo Desejado</Label>
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
        <Label htmlFor="gender" active={true /* sempre ativo */}>Gênero</Label>
      </InputContainer>

      <InputContainer>
        <Input
          type="file"
          id="resume"
          accept=".pdf"
          onFocus={() => handleFocus('resume')}
          onBlur={(e) => handleBlur('resume', e.target.value)}
        />
        <Label htmlFor="resume" active={true /* sempre ativo */}>Currículo (PDF)</Label>
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

      <div className='centralizar'>
        <StyledButton type="submit">Enviar</StyledButton>
      </div>
    </StyledForm>
  );
};

export default Candidatar;
