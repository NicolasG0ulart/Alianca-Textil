import React from "react";
import * as S from "./Styles"
import Logo from "../../images/logo.png"

export default function Footer(){

    return(
        <>
            <S.Footer>
                <ul>
                    <li>SOBRE</li>
                    <li>CATÁLOGO VIRTUAL</li>
                    <li><img src={Logo} alt="Logo da Aliança"/></li>
                    <li>TRABALHE CONOSCO</li>
                    <li>CONTATO</li>
                </ul>
            </S.Footer>
        </>
    )
}