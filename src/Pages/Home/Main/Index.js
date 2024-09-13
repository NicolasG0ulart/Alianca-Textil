import React from "react";
import * as S from "./Styles"
import Contact from "../../../Components/Contact/Contact"
import Footer from "../../../Components/Footer/Footer"
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaUserTie } from "react-icons/fa";
import Embalagem from "../../../images/embalagem.png"

const LinkR = styled(Link)`
        color: #0e264b;
        position: relative;
        text-decoration: none;
    `


export default function Main(){
   
    return(
        <>
            <S.Main>
                <div class="banner">
                    <h2>Estique sua Originalidade com nossos elásticos exclusivos.</h2>
                </div>
                
                <S.Warnings>
                <LinkR to="/candidatar-se">
                    <S.Frame>
                        <FaUserTie size={30} color="#0e264b"/>
                        <h3>Vagas</h3>
                        <p>Clique aqui e veja todas nossas vagas em aberto</p>
                    </S.Frame>
                </LinkR>

                <LinkR to="/catalogo">
                    <S.Frame>
                        <FaUserTie size={30} color="#0e264b"/>
                        <h3>Catálogo</h3>
                        <p>Clique aqui e conheça todas as nossas cores</p>
                    </S.Frame>
                </LinkR>

                <LinkR to="/contato">
                    <S.Frame>
                        <FaUserTie size={30} color="#0e264b"/>
                        <h3>Contato</h3>
                        <p>Precisa entrar em contato? Clique aqui</p>
                    </S.Frame>
                </LinkR>
                </S.Warnings>

                <S.Enterprise>

                    <S.ContentEnterprise>
                        <S.Text>
                            <h1>Quem Somos</h1>
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
                    <h1>Conheça nossos produtos</h1>

                    <S.ContentCatalog>
                        {/* <img src={NAPJ} alt="imagem de um exemplo de nossos produtos"/>
                        <img src={Pear} alt="imagem de um exemplo de nossos produtos"/> */}
                    </S.ContentCatalog>
                </S.Catalog>


                <Contact/>
                <Footer/>
            </S.Main>
        </>
    )
}