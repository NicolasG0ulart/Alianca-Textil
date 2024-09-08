import React from "react";
import Header from "../../Components/Header/Index";
import Footer from "../../Components/Footer/Footer"
import * as S from "./Styles"
import { useState } from "react";


export default function Catalog() {
    const [fonts] = useState([
        {font: "Escolha a fonte desejada", nameFont: "Escolha a fonte desejada"},
        {font: "Protest Guerrilla", nameFont: "Protest Guerrilla"},
        {font: "Pacifico", nameFont: "Pacifico"},
        {font: "Permanent Marker", nameFont: "Permanent Marker"},
        {font: "Fascinate Inline", nameFont: "Fascinate Inline"},
        {font: "Nerko One", nameFont: "Nerko One"},
        {font: "Paytone One", nameFont: "Paytone One"}
    ])
    const [font, setFont] = useState("Paytone One")

    const [colors] = useState([
        { name: 'Amazonas', color: '#20331B' },
        { name: 'Amarelo', color: 'yellow' },
        { name: 'Amarelo Luminoso', color: '#c6ff56' },
        { name: 'Azul BB', color: 'lightblue' },
        { name: 'Branco', color: '#fff' },
        { name: 'Bordô', color: '#4c0013' },
        { name: 'Cinza', color: '#8c8c8c' },
        { name: 'Corsa', color: '#a06f53' },
        { name: 'Chiclete', color: '#f74780' },
        { name: 'Fluence', color: '#089080' },
        { name: 'Grafite', color: '#4d4b4d' },
        { name: 'Jeans', color: '#233758' },
        { name: 'Laranja', color: '#ea5c0e' },
        { name: 'Laranja Cítrico', color: '#fc4b08' },
        { name: 'Lilás', color: '#bf9bde' },
        { name: 'Louise', color: '#805a46' },
        { name: 'Marinho', color: '#11114e' },
        { name: 'Marfim', color: '#efd3af' },
        { name: 'Pink', color: '#ff0084' },
        { name: 'Preto', color: '#000' },
        { name: 'Rosa BB', color: '#ff91b9' },
        { name: 'Roxo', color: 'purple' },
        { name: 'Rosa Fluor', color: '#ff007f' },
        { name: 'Royal', color: '#0404e2' },
        { name: 'Salmão', color: '#fb998e' },
        { name: 'Tulipero', color: '#9786aa' },
        { name: 'Turquesa', color: '#0097ff' },
        { name: 'Verde Fluor', color: '#09ff14' },
        { name: 'Verde Bandeira', color: '#229a00' },
        { name: 'Vermelho', color: 'red' },



    ])

    const [bgColor] = useState("#0e264b")
    const [fundoColor, setFundoColor] = useState("#0b337a")
    const [textColor, setTextColor] = useState("yellow")
    const [frisoColor, setFrisoColor] = useState("yellow")
    const [activeButton, setActiveButton] = useState("fundo")
    const [art, setArt] = useState("Digite sua marca aqui!!")
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
    function handleChangeFont(event){
        setFont(event.target.value)
    }


    return (
        <>
            <Header />
            <S.ContentCatalog>
                <h1>
                Explore nosso catálogo de cores e veja como sua arte ganharia vida em um elástico personalizado. Experimente diferentes combinações e personalize ainda mais, digitando a sua marca desejada para ver como ela aparece. Descubra o visual perfeito e crie um design exclusivo que reflete seu estilo!
                </h1>

                <S.Buttons>
                    {colors.map((item) => (
                        <S.Button bgColor={item.color} bgImg={item.bgImg} onClick={()=> changeColor(item.color)} >{item.name}</S.Button>
                    ))}
                </S.Buttons>

                <S.Edit>
                    <S.YourArt onChange={handleChange} value={art} type="text" placeholder="Digite sua arte aqui"/>
                    <S.Select>
                        <S.ButtonSelect bgColor={bgColor} onClick={changeFundo}>Fundo</S.ButtonSelect>
                        <S.ButtonSelect bgColor={bgColor} onClick={(changeEscrita)}>Escrita</S.ButtonSelect>
                        <S.ButtonSelect bgColor={bgColor} onClick={changeFriso}>Friso</S.ButtonSelect>
                    </S.Select>

                    <select placeholder="Escolha a fonte" onChange={handleChangeFont}>
                        {fonts.map((item) => (
                            <option value={item.font}>{item.nameFont}</option>
                        ))}
                    </select>
                </S.Edit>

                <S.Elasticos>
                    <S.Fita font={font} color={fundoColor} colorText={textColor} colorFriso={frisoColor}>
                        <span></span>
                        <h4>{art}</h4>
                        <h4>{art}</h4>
                    </S.Fita> 
                    
                    <S.FitaTwo font={font} color={fundoColor} colorText={textColor} colorFriso={frisoColor}>
                        <div></div>
                        <span></span>
                        <span></span>
                        <h4>{art}</h4>
                        <h4>{art}</h4>
                    </S.FitaTwo>

                    <S.FitaThree font={font} color={fundoColor} colorText={textColor} colorFriso={frisoColor}>
                        <div></div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <h4>{art}</h4>
                        <h4>{art}</h4>
                    </S.FitaThree>                      
                </S.Elasticos>
            </S.ContentCatalog>

            <Footer/>
        </>
    )
}