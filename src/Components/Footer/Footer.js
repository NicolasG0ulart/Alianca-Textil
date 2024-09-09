import React from "react";
import * as S from "./Styles"
import Logo from "../../images/logo.png"

export default function Footer(){

    return(
        <>
            <S.Footer>
                <S.Logo src={Logo} alt="Logo da empresa"/>
                <h1>Aliança Têxtil.</h1>
            </S.Footer>
        </>
    )
}