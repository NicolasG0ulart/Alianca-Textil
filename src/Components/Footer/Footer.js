import React from "react";
import * as S from "./Styles"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";




export default function Footer(){

    return(
        <>
            <S.Footer>
                <S.Left>
                    <h3>Alinça Têxtil</h3>
                    <p>"O segredo de um grande sucesso está no trabalho de uma grande equipe"</p>
                    <div>
                        <FaLinkedin size={50} color="0b337a"/>
                        <FaInstagramSquare size={50} color="0b337a"/>
                        <FaWhatsappSquare size={50} color="0b337a"/>
                    </div>
                </S.Left>

                <S.Right>
                    <h3>Endereço</h3>
                    <p>
                        PEQUERI/MG - 36610-000<br />
                        Nova Pequeri<br />
                        Professora Nair Temponi - n° 56
                    </p>
                    <div>
                        <p>aliancatextil@hotmail.com</p>
                        <p>aliancatextilrh@hotmail.com</p>
                        <p>faturamentoaliancatextil@outlook.com</p>
                    </div>
                </S.Right>

                <S.Mid>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </S.Mid>
            </S.Footer>
        </>
    )
}