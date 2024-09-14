import React from "react";
import * as S from "./Styles"
import Logo from "../../images/logo.png"
import { Link } from "react-router-dom";
import styled from "styled-components";


const LinkR = styled(Link)`
    color: #0e264b;
    position: relative;
    text-decoration: none;
    `

export default function Footer() {

    return (
        <>
            <S.Footer>
                <ul>
                    <li><LinkR to="/sobre">Sobre</LinkR></li>
                    <li><LinkR to="/catalogo">Catálogo Virtual</LinkR></li>
                    <Link to="/"><img src={Logo} alt="Logo da Empresa"/></Link>
                    <li><LinkR to="/trabalhe-conosco">Trabalhe Conosco</LinkR></li>
                    <li><LinkR to="/contato">Contato</LinkR></li>
                </ul>
                <h5>Desenvolvido por:</h5>
                <div>
                    <p><a href="https://www.instagram.com/nicolas__g0ulart/" target="_blank" rel="noreferrer">Nicolas Goulart</a></p>
                    <p><a href="https://www.instagram.com/diogobarbos4_/" target="_blank" rel="noreferrer">Diogo Barbosa</a></p>
                    <p><a href="https://www.instagram.com/bernardobrigolini/" target="_blank" rel="noreferrer">Bernardo Brigolini</a></p>
                </div>
            </S.Footer>
        </>
    )
}