import React from "react";
import * as S from "./Styles"
import Contact from "../../../Components/Contact/Contact"
import Footer from "../../../Components/Footer/Footer"

import { FaUserTie } from "react-icons/fa";
import { useState } from 'react'
import Embalagem from "../../../images/embalagem.png"




export default function Main(){
    const [bgColor] = useState("#0e264b")
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
                    <h2>Estique sua Originalidade com nossos elásticos exclusivos.</h2>
                </div>
                
                <S.Warnings>
                    <S.Frame>
                        <FaUserTie size={30} color="#0e264b"/>
                        <h3>Vagas</h3>
                        <p>Clique aqui e veja todas nossas vagas em aberto</p>
                    </S.Frame>

                    <S.Frame>
                        <FaUserTie size={30} color="#0e264b"/>
                        <h3>Catálogo</h3>
                        <p>Clique aqui e conheça todas as nossas cores</p>
                    </S.Frame>

                    <S.Frame>
                        <FaUserTie size={30} color="#0e264b"/>
                        <h3>Contato</h3>
                        <p>Precisa entrar em contato? Clique aqui</p>
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
                            Explore nosso catálogo de cores e veja como sua arte ganharia vida em
                            um elástico personalizado.
                            Experimente diferentes combinações e personalize ainda mais, digitando a sua marca desejada para ver como ela aparece.
                            Descubra o visual perfeito e crie um design exclusivo que reflete seu estilo!
                            </p>
                            <S.Fita color={fundoColor} colorText={textColor} colorFriso={frisoColor}>
                                <span></span>
                                <h4>{art}</h4>
                            </S.Fita>

                            <S.FitaTwo color={fundoColor} colorText={textColor} colorFriso={frisoColor}>
                                <span></span>
                                <div></div>
                                <h4>{art}</h4>
                            </S.FitaTwo>
                        </div>
                        <S.Colors>
                                <S.YourArt onChange={handleChange} value={art} type="text" placeholder="Digite sua arte aqui"/>
                            <S.Select>
                                <S.ButtonSelect bgColor={bgColor} onClick={changeFundo}>Fundo</S.ButtonSelect>
                                <S.ButtonSelect bgColor={bgColor} onClick={(changeEscrita)}>Escrita</S.ButtonSelect>
                                <S.ButtonSelect bgColor={bgColor} onClick={changeFriso}>Friso</S.ButtonSelect>
                            </S.Select>

                            <S.Buttons>
                                <button onClick={()=> changeColor("#20331B")} style={{backgroundColor: "#20331B"}}>Amazonas</button>
                                <button onClick={()=> changeColor("lightblue")} style={{backgroundColor: "lightblue"}}>Azul BB</button>
                                <button onClick={()=> changeColor("yellow")} style={{backgroundColor: "yellow"}}>Amarelo</button>
                                <button onClick={()=> changeColor("#C6FF56")} style={{backgroundColor: "#C6FF56"}}>Amarelo L.</button>
                                <button onClick={()=> changeColor("#7e0505")} style={{backgroundColor: "#7e0505"}}>Bordô</button>
                                <button onClick={()=> changeColor("#fff")} style={{backgroundColor: "#fff"}}>Branco</button>
                                <button onClick={()=> changeColor("#ce8967")} style={{backgroundColor: "#ce8967"}}>Corsa</button>
                                <button onClick={()=> changeColor("grey")} style={{backgroundColor: "grey"}}>Cinza</button>
                                <button onClick={()=> changeColor("#f96bad")} style={{backgroundColor: "#f96bad"}}>Chiclete</button>
                                <button onClick={()=> changeColor("#37393f")} style={{backgroundColor: "#37393f"}}>Grafite</button>
                                <button onClick={()=> changeColor("#ff6000")} style={{backgroundColor: "#ff6000"}}>Laranja</button>
                                <button onClick={()=> changeColor("#0d1168")} style={{backgroundColor: "#0d1168"}}>Marinho</button>
                                <button onClick={()=> changeColor("#fff9cd")} style={{backgroundColor: "#fff9cd"}}>Marfim</button>
                                <button onClick={()=> changeColor("#ff0074")} style={{backgroundColor: "#ff0074"}}>Pink</button>
                                <button onClick={()=> changeColor("#ff97c7")} style={{backgroundColor: "#ff97c7"}}>Rosa BB</button>
                            </S.Buttons>
                        </S.Colors>
                        
                    </S.ContentCatalog>
                </S.Catalog>


                <Contact/>
                <Footer/>
            </S.Main>
        </>
    )
}