import React from "react";
import * as S from "./Styles"
import Footer from "../../../Components/Footer/Footer"
import { Link } from "react-router-dom";
import styled from "styled-components";
import lycra from "../../../images/lycra.png"
import { FaUserTie } from "react-icons/fa";
import Embalagem from "../../../images/embalagem.png"
import NAPJ from "../../../images/produtos/napj.jpeg"

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
                <LinkR to="/candidatar-se" onClick={handleJobSelection}>
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

                        <div>
                            <img class="laiza" src={lycra} alt="Matéria-prima Lycra" />
                        </div>
                    </S.ContentEnterprise>
                </S.Enterprise>

                <S.Catalog>
                    <h1>Conheça nossos produtos</h1>

                    <S.ContentCatalog>
                        <div className="container">
                            <div className="card">
                                <img class="laiza" src={NAPJ} alt="" />
                                <div className="text">
                                    <h3>Las Vegas 40MM</h3>
                                </div>
                            </div>

                            <div className="card">
                                <img class="laiza" src={NAPJ} alt="" />
                                <div className="text">
                                    <h3>Las Vegas 35MM</h3>
                                </div>
                            </div>

                            <div className="card">
                                <img class="laiza" src={NAPJ} alt="" />
                                <div className="text">
                                    <h3>Las Vegas 30MM</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img class="laiza" src={NAPJ} alt="" />
                            <div className="text">
                                <h3>Las Vegas 25MM</h3>
                            </div>
                        </div>

                        <div className="container">
                            <div className="card">
                                <img class="laiza" src={NAPJ} alt="" />
                                <div className="text">
                                    <h3>New York 40MM</h3>
                                </div>
                            </div>


                            <div className="card">
                                <img class="laiza" src={NAPJ} alt="" />
                                <div className="text">
                                    <h3>New York 35MM</h3>
                                </div>
                            </div>

                            <div className="card">
                                <img class="laiza" src={NAPJ} alt="" />
                                <div className="text">
                                    <h3>New York 30MM</h3>
                                </div>
                            </div>
                            <div className="card">
                                <img class="laiza" src={NAPJ} alt="" />
                                <div className="text">
                                    <h3>New York 25MM</h3>
                                </div>
                            </div>

                        </div>
                    </S.ContentCatalog>
                </S.Catalog>
                <Footer />
            </S.Main>
        </>
    )
}
