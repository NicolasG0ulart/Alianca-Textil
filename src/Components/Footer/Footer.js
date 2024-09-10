import React from "react";
import * as S from "./Styles"
import Logo from "../../images/logo.png"

export default function Footer(){

    return(
        <>
            <S.Footer>
                <div>
                    <img src={Logo} alt="Logo do site"/>
                    <p>"O segredo de um grande sucesso está no trabalho de uma grande equipe."</p>
                </div>

                <div>
                    <ul>
                        <li>Contato</li>
                        <li>Sobre nós</li>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
            </S.Footer>
        </>
    )
}