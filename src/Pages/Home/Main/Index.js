import React from "react";
import * as S from "./Styles"
import Footer from "../../../Components/Footer/Footer"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaUserTie } from "react-icons/fa";
import Embalagem from "../../../images/embalagem.png"
import LV40 from "../../../images/produtos/lv40.jpg"
import LV35 from "../../../images/produtos/lv35.jpg"
import LV30 from "../../../images/produtos/lv30.jpg"
import LV25 from "../../../images/produtos/lv25.jpg"

import NY40 from "../../../images/produtos/ny40.jpg"
import NY35 from "../../../images/produtos/ny35.jpg"
import NY30 from "../../../images/produtos/ny30.jpg"
import NY25 from "../../../images/produtos/ny25.jpg"


const LinkR = styled(Link)`
        color: #0e264b;
        position: relative;
        text-decoration: none;
    `


export default function Main() {

    const handleJobSelection = () => {
        localStorage.setItem('selectedJob', 'BANCO DE TALENTOS');
      };

    return (
        <>
            <S.Main>
                <div class="banner">
                    <h2>Estique sua Originalidade com nossos elásticos exclusivos.</h2>
                </div>

                <S.Warnings>
                <LinkR to="/trabalhe-conosco" onClick={handleJobSelection}>
            <S.Frame>
                <FaUserTie size={30} color="#0e264b" />
                <h3>Vagas</h3>
                <p>Clique aqui e veja todas nossas vagas em aberto</p>
    </S.Frame>
  </LinkR>

                    <LinkR to="/catalogo">
                        <S.Frame>
                            <FaUserTie size={30} color="#0e264b" />
                            <h3>Catálogo</h3>
                            <p>Clique aqui e conheça todas as nossas cores</p>
                        </S.Frame>
                    </LinkR>

                    <LinkR to="/contato">
                        <S.Frame>
                            <FaUserTie size={30} color="#0e264b" />
                            <h3>Contato</h3>
                            <p>Precisa entrar em contato? Clique aqui</p>
                        </S.Frame>
                    </LinkR>
                </S.Warnings>

                <S.Enterprise>

                    <S.ContentEnterprise>
                        <S.Text>
                            <h1>Quem Somos </h1 > 
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
                            <img class="laiza" src={Embalagem} alt="Funcionária embalando caixa" />
                        </div>
                    </S.ContentEnterprise>
                </S.Enterprise>

                <S.Catalog>
                    <h1>Conheça nossos produtos</h1>

                    <S.ContentCatalog>
                        <div className="container">
                            <div className="card">
                                <img class="laiza" src={LV40} alt="" />
                                <div className="text">
                                    <h3>Las Vegas 40MM</h3>
                                </div>
                            </div>

                            <div className="card">
                                <img class="laiza" src={LV35} alt="" />
                                <div className="text">
                                    <h3>Las Vegas 35MM</h3>
                                </div>
                            </div>

                            <div className="card">
                                <img class="laiza" src={LV30} alt="" />
                                <div className="text">
                                    <h3>Las Vegas 30MM</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img class="laiza" src={LV25} alt="" />
                            <div className="text">
                                <h3>Las Vegas 25MM</h3>
                            </div>
                        </div>

                        <div className="card">
                                <img class="laiza" src={NY40} alt="" />
                                <div className="text">
                                    <h3>New York 40MM</h3>
                                </div>
                            </div>

                            <div className="card">
                                <img class="laiza" src={NY35} alt="" />
                                <div className="text">
                                    <h3>New York 35MM</h3>
                                </div>
                            </div>

                            <div className="card">
                                <img class="laiza" src={NY30} alt="" />
                                <div className="text">
                                    <h3>New York 30MM</h3>
                                </div>
                            </div>
                        <div className="card">
                            <img class="laiza" src={NY25} alt="" />
                            <div className="text">
                                <h3>New York 25MM</h3>
                            </div>
                        </div>
                    </S.ContentCatalog>
                </S.Catalog>
                <Footer />
            </S.Main>
        </>
    )
}
