import React, { useState } from 'react';
import styled from 'styled-components';

// Definição de cores e escalas
const colors = [
    { name: 'MARFIM', color: '#F5F5DC', scale: 'Neutro' },
    { name: 'VANILLA', color: '#F3E5AB', scale: 'Amarelo' },
    { name: 'BRANCO', color: '#FFFFFF', scale: 'Branco' },
    { name: 'MASTRUZ', color: '#DFF2BF', scale: 'Verde' },
    { name: 'BISCOITO', color: '#F5DEB3', scale: 'Amarelo' },
    // ... outras cores
];

const scales = [
    { name: 'Azul', color: '#00CED1' },
    { name: 'Verde', color: '#00FF00' },
    { name: 'Branco', color: '#FFFFFF' },
    { name: 'Neutro', color: '#D2B48C' },
    { name: 'Amarelo', color: '#F3E5AB' },
    // ... outras escalas
];

// Componentes com Styled-Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

const Header = styled.header`
  text-align: center;
  padding: 32px;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  p {
    font-size: 1.25rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  margin-bottom: 8px;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #008080;
  color: white;
  border: none;
  cursor: pointer;
`;

const ScaleList = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  input {
    margin-left: 8px;
  }
`;

const ColorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  div {
    cursor: pointer;
    text-align: center;
    p {
      margin-top: 8px;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 32px;
  border-radius: 8px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedScales, setSelectedScales] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleScaleChange = (scale) => {
    setSelectedScales(prev =>
      prev.includes(scale) ? prev.filter(s => s !== scale) : [...prev, scale]
    );
  };

  const handleColorClick = (color) => setSelectedColor(color);
  const handleCloseModal = () => setSelectedColor(null);

  const filteredColors = colors.filter(color => {
    const matchesSearch = color.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesScale = selectedScales.length === 0 || selectedScales.includes(color.scale);
    return matchesSearch && matchesScale;
  });

  return (
    <Container>
      <Header>
        <h1>CARTELA DE CORES</h1>
        <p>Cartela de Cores</p>
      </Header>
      <div className="flex">
        <aside style={{ width: '25%', padding: '16px' }}>
          <SearchInput
            type="text"
            placeholder="Procurar Cor"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Button>BUSCAR</Button>
          <h2>ESCALA DE CORES</h2>
          <ScaleList>
            {scales.map(scale => (
              <li key={scale.name}>
                <div style={{ width: '16px', height: '16px', backgroundColor: scale.color }}></div>
                <input
                  type="checkbox"
                  checked={selectedScales.includes(scale.name)}
                  onChange={() => handleScaleChange(scale.name)}
                />{' '}
                {scale.name}
              </li>
            ))}
          </ScaleList>
        </aside>
        <main style={{ width: '75%', padding: '16px' }}>
          <ColorsGrid>
            {filteredColors.map((color, index) => (
              <div key={index} onClick={() => handleColorClick(color)}>
                <div style={{ width: '100%', height: '80px', backgroundColor: color.color }}></div>
                <p>{color.name}</p>
              </div>
            ))}
          </ColorsGrid>
        </main>
      </div>
      {selectedColor && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <div style={{ width: '100%', height: '100%', backgroundColor: selectedColor.color }}></div>
            <p>{selectedColor.name}</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default App;
