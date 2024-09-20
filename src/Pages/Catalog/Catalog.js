import React from "react";
import Header from "../../Components/Header/Index";
import Footer from "../../Components/Footer/Footer"
import * as S from "./Styles"
import { useState, useEffect} from "react";


export default function Catalog() {
    const [fonts] = useState([
        { font: "Escolha a fonte desejada", nameFont: "Escolha a fonte desejada" },
        { font: "Protest Guerrilla", nameFont: "Protest Guerrilla" },
        { font: "Pacifico", nameFont: "Pacifico" },
        { font: "Permanent Marker", nameFont: "Permanent Marker" },
        { font: "Fascinate Inline", nameFont: "Fascinate Inline" },
        { font: "Nerko One", nameFont: "Nerko One" },
        { font: "Paytone One", nameFont: "Paytone One" },
        { font: "Rampart", nameFont: "Rampart" },
        { font: "Satisfy", nameFont: "Satisfy" },
        { font: "Tourney", nameFont: "Tourney" },
        { font: "Rampart", nameFont: "Rampart" },
    ])
    const [font, setFont] = useState("Paytone One")
    const [fontSize, setFontSize] = useState(40)
    const [letterSpacing, setletterSpacing] = useState(5)
    const [maxLength, setMaxLength] = useState(20);
    const [maxSpacing, setmaxSpacing] = useState(18);
    const [maxFont, setmaxFont] = useState(60);

    const [colors] = useState([
        { name: 'Amazonas', color: '#20331B', type: "escuro" },
        { name: 'Amarelo', color: 'yellow' },
        { name: 'Amarelo Luminoso', color: '#c6ff56' },
        { name: 'Azul BB', color: 'lightblue' },
        { name: 'Branco', color: '#fff' },
        { name: 'Bordô', color: '#4c0013', type: "escuro" },
        { name: 'Cinza', color: '#D3D3D3' },
        { name: 'Corsa', color: '#D2B46C' },
        { name: 'Coral', color: '#F08080' },
        { name: 'Chiclete', color: '#f74780' },
        { name: 'Fluence', color: '#089080' },
        { name: 'Grafite', color: '#4d4b4d', type: "escuro" },
        { name: 'Jeans', color: '#3232CD', type: "escuro" },
        { name: 'Laranja', color: '#FF7F00' },
        { name: 'Laranja Cítrico', color: '#fc4b08' },
        { name: 'Lilás', color: '#bf9bde' },
        { name: 'Lilás Fantástico', color: '#EE82EE' },
        { name: 'Louise', color: '#805a46' },
        { name: 'Marinho', color: '#11114e', type: "escuro" },
        { name: 'Marfim', color: '#efd3af' },
        { name: 'Odalisca', color: '#B8236B' },
        { name: 'Pink', color: '#ff0084' },
        { name: 'Preto', color: '#000', type: "escuro" },
        { name: 'Rosa BB', color: '#EEC8DD' },
        { name: 'Roxo', color: 'purple', type: "escuro" },
        { name: 'Rosa Fluor', color: '#ff0066' },
        { name: 'Royal', color: '#0000FF', type: "escuro" },
        { name: 'Romance', color: '#FFD1C2' },
        { name: 'Salmão', color: '#F2BFA7' },
        { name: 'Sandi', color: '#ff91b9' },
        { name: 'Tulipero', color: '#9786aa' },
        { name: 'Teos', color: '#66CDAA' },
        { name: 'Turquesa', color: '#007DA6' },
        { name: 'Verde Fluor', color: '#09ff14' },
        { name: 'Verde Bandeira', color: '#229a00' },
        { name: 'Vermelho', color: 'red' },
    ])

    const [bgColor] = useState("#0e264b")
    const [fundoColor, setFundoColor] = useState("#0b337a")
    const [textColor, setTextColor] = useState("yellow")
    const [frisoColor, setFrisoColor] = useState("yellow")
    const [activeButton, setActiveButton] = useState("fundo")
    const [art, setArt] = useState("Aliança Têxtil")
    function changeFundo() {
        setActiveButton("fundo")
    }
    function changeEscrita() {
        setActiveButton("escrita")
    }
    function changeFriso() {
        setActiveButton("friso")
    }
    function changeColor(color) {
        if (activeButton === "fundo") {
            setFundoColor(color)
        } else if (activeButton === "escrita") {
            setTextColor(color)
        } else if (activeButton === "friso") {
            setFrisoColor(color)
        }
    }
    function handleChange(event) {
        setArt(event.target.value)
    }
    function handleChangeFont(event) {
        setFont(event.target.value)
    }
    const handleFontSize = (event) => {
        setFontSize(event.target.value)
    }
    const handleFontSpacing = (event) => {
        setletterSpacing(event.target.value)
    }
    useEffect(() => {
        const updateMaxLength = () => {
          if (window.innerWidth <= 768) {
            setmaxSpacing(10)
            setMaxLength(100);
            setmaxFont(40);
          } else {
            setMaxLength(20);
            setMaxLength(10);
            setmaxFont(40);
          }
        };
        updateMaxLength();
        window.addEventListener('resize', updateMaxLength);
        return () => window.removeEventListener('resize', updateMaxLength);
      }, []);


    return (
        <>
            <Header />
            <S.ContentCatalog>
                <h1>
                    Explore nosso catálogo de cores e veja como sua arte ganharia vida em um elástico personalizado. Experimente diferentes combinações e personalize ainda mais, digitando a sua marca desejada para ver como ela aparece. Descubra o visual perfeito e crie um design exclusivo que reflete seu estilo!
                </h1>

                <S.Buttons>
                    {colors.map((item) => (
                        <S.Button color={item.type === "escuro" ? "#fff" : "#000"} bgColor={item.color} bgImg={item.bgImg} onClick={() => changeColor(item.color)} >{item.name}</S.Button>
                    ))}
                </S.Buttons>

                <S.Edit>
                    <S.Left>
                        <S.YourArt  maxLength={maxLength} onChange={handleChange} value={art} type="text" placeholder="Digite sua arte aqui" />
                        <S.Select>
                            <S.ButtonSelect
                                bgColor={bgColor}
                                isActive={activeButton === "fundo"}
                                onClick={changeFundo}>
                                    Fundo
                            </S.ButtonSelect>

                            <S.ButtonSelect
                                bgColor={bgColor}
                                isActive={activeButton === "escrita"}
                                onClick={(changeEscrita)}>
                                    Escrita
                            </S.ButtonSelect>

                            <S.ButtonSelect
                                bgColor={bgColor}
                                isActive={activeButton === "friso"}
                                onClick={changeFriso}>
                                    Friso  
                            </S.ButtonSelect>

                        </S.Select>
                    </S.Left>

                    <S.Right>
                        <select placeholder="Escolha a fonte" onChange={handleChangeFont}>
                            {fonts.map((item) => (
                                <option value={item.font}>{item.nameFont}</option>
                            ))}
                        </select>
                        <div>
                            <label>Tamanho da fonte</label>
                            <input value={fontSize} onChange={handleFontSize} type="range" min="20" max={maxFont} />
                            <label>Espaçamento</label>
                            <input value={letterSpacing} onChange={handleFontSpacing} type="range" min="1" max={maxSpacing} />
                        </div>
                    </S.Right>
                </S.Edit>

                <S.Elasticos>
                    <S.Fita font={font} color={fundoColor} colorText={textColor} colorFriso={frisoColor} fontSize={`${fontSize}`}spacing={`${letterSpacing}`}>
                        <span></span>
                        <h4>{art}</h4>
                    </S.Fita>

                    <S.FitaTwo font={font} color={fundoColor} colorText={textColor} colorFriso={frisoColor} fontSize={`${fontSize}`} spacing={`${letterSpacing}`}>
                        <div></div>
                        <span></span>
                        <span></span>
                        <h4>{art}</h4>
                    </S.FitaTwo>

                    <S.FitaThree font={font} color={fundoColor} colorText={textColor} colorFriso={frisoColor} fontSize={`${fontSize}`} spacing={`${letterSpacing}`}>
                        <div></div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <h4>{art}</h4>
                    </S.FitaThree>
                </S.Elasticos>

            </S.ContentCatalog>

            <Footer />
        </>
    )
}