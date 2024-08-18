import React from "react";
import * as S from "./Styles"

import { FaUserTie } from "react-icons/fa";
import { useState } from 'react'
import Embalagem from "../../../images/embalagem.png"




export default function Main(){
    const [bgColor] = useState("#0b9148")
    const [fundoColor, setFundoColor] = useState("#0b337a")
    const [textColor, setTextColor] = useState("yellow")
    const [frisoColor, setFrisoColor] = useState("yellow")
    const [activeButton, setActiveButton] = useState("fundo")
    const [art, setArt] = useState("Aliança Têxtil")
    function changeFundo(){
        setActiveButton("fundo")
    }
    function changeEscrita(){
        setActiveButton("escrita")
    }
    function changeFriso(){
        setActiveButton("friso")
    }
    function changeColor(color){
        if(activeButton === "fundo"){
            setFundoColor(color)
        }else if(activeButton === "escrita"){
            setTextColor(color)
        }else if(activeButton === "friso"){
            setFrisoColor(color)
        }
    }
    function handleChange(event){
        setArt(event.target.value)
    }
    
    return(
        <>
            <S.Main>
                <div class="banner">
                    <h2>Algum texto aleatório para colocar AQUI.
                        <br/>Algum texto aleatório para
                        <br/>colocar AQUI.
                    </h2>
                </div>
                
                <S.Warnings>
                    <S.Frame>
                        <FaUserTie size={30} color="#0e264b"/>
                        <h3>Vagas</h3>
                        <p>Clique aqui e veja todas nossas vagas em aberto</p>
                    </S.Frame>

                    <S.Frame>
                        <FaUserTie size={30} color="#0e264b"/>
                        <h3>Vagas</h3>
                        <p>Clique aqui e veja todas nossas vagas em aberto</p>
                    </S.Frame>

                    <S.Frame>
                        <FaUserTie size={30} color="#0e264b"/>
                        <h3>Vagas</h3>
                        <p>Clique aqui e veja todas nossas vagas em aberto</p>
                    </S.Frame>
                </S.Warnings>

                <S.Enterprise>
                    <h1>Quem Somos</h1>

                    <S.ContentEnterprise>
                        <S.Text>
                            <p>
                                Há seis anos, estamos comprometidos em fornecer elasticidade, conforto e qualidade para a indústria de roupas íntimas.
                                Localizada na cidade de Pequeri - MG, nossa empresa funciona 24 horas por dia,
                                para garantir que nossos clientes sempre tenham acesso aos melhores produtos. 
                                Nosso compromisso com a excelência é evidente em cada elástico que produzimos.
                                <br/><br/>
                                Utilizamos materiais da mais alta qualidade e técnicas de fabricação de última geração para
                                garantir que nossos produtos atendam e superem as expectativas dos nossos clientes.
                            </p>
                        </S.Text>

                        <div>
                            <img class="laiza" src={Embalagem} alt="Funcionária embalando caixa"/>
                        </div>
                    </S.ContentEnterprise>
                </S.Enterprise>

                <S.Catalog>
                    <h1>Conheça nosso catálogo de cores</h1>

                    <S.ContentCatalog>
                        <div class="left">
                            <p>
                            Explore nosso catálogo de cores e veja como sua arte ganharia vida em<br/>
                            um elástico personalizado.
                            Experimente diferentes combinações e personalize<br/>ainda mais, digitando a sua marca desejada para ver como ela aparece.
                            <br/>Descubra o visual perfeito e crie um design exclusivo que reflete seu estilo!
                            </p>
                            <S.Fita color={fundoColor} colorText={textColor} colorFriso={frisoColor}>
                                <span></span>
                                <h4>{art}</h4>
                            </S.Fita>

                            <S.Fita color={fundoColor} colorText={textColor} colorFriso={frisoColor}>
                                <span></span>
                                <h4>{art}</h4>
                            </S.Fita>
                        </div>
                        <S.Colors>
                                <S.YourArt onChange={handleChange} value={art} type="text" placeholder="Digite sua arte aqui"/>
                            <S.Select>
                                <S.ButtonSelect bgColor={bgColor} onClick={changeFundo}>Fundo</S.ButtonSelect>
                                <S.ButtonSelect bgColor={bgColor} onClick={(changeEscrita)}>Escrita</S.ButtonSelect>
                                <S.ButtonSelect bgColor={bgColor} onClick={changeFriso}>Friso</S.ButtonSelect>
                            </S.Select>

                            <S.Buttons>
                                <button onClick={()=> changeColor("red")} style={{backgroundColor: "red"}}>Nome</button>
                                <button onClick={()=> changeColor("darkred")} style={{backgroundColor: "darkred"}}>Nome</button>
                                <button onClick={()=> changeColor("blue")} style={{backgroundColor: "blue"}}>Nome</button>
                                <button onClick={()=> changeColor("darkblue")} style={{backgroundColor: "darkblue"}}>Nome</button>
                                <button onClick={()=> changeColor("green")} style={{backgroundColor: "green"}}>Nome</button>
                                <button onClick={()=> changeColor("darkgreen")} style={{backgroundColor: "darkgreen"}}>Nome</button>
                                <button onClick={()=> changeColor("pink")} style={{backgroundColor: "pink"}}>Nome</button>
                                <button onClick={()=> changeColor("hotpink")} style={{backgroundColor: "hotpink"}}>Nome</button>
                                <button onClick={()=> changeColor("yellow")} style={{backgroundColor: "yellow"}}>Nome</button>
                                <button onClick={()=> changeColor("cyan")} style={{backgroundColor: "cyan"}}>Nome</button>
                                <button onClick={()=> changeColor("grey")} style={{backgroundColor: "grey"}}>Nome</button>
                                <button onClick={()=> changeColor("darkgrey")} style={{backgroundColor: "darkgrey"}}>Nome</button>
                                <button onClick={()=> changeColor("white")} style={{backgroundColor: "white"}}>Nome</button>
                                <button onClick={()=> changeColor("lightpink")} style={{backgroundColor: "lightpink"}}>Nome</button>
                                <button onClick={()=> changeColor("lightgreen")} style={{backgroundColor: "lightgreen"}}>Nome</button>
                            </S.Buttons>
                        </S.Colors>
                        
                    </S.ContentCatalog>
                </S.Catalog>
            </S.Main>
        </>
    )
}