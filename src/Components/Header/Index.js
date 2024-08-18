import React from "react";
import * as S from "./Styles"
import Logo from "../../images/logo.png"

export default function Header(){

    return(
        <>
            <S.Header>
                <img src={Logo} alt="Logo da Empresa"/>
                <ul>
                    <li>Início</li>
                    <li>Sobre</li>
                    <li>Catálogo Virtual</li>
                    <li>Contato</li>

                </ul>
            </S.Header>
        </>
    )
}