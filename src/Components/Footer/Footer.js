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
                    <div>
                        <FaLinkedin size={50} color="0b337a"/>
                        <FaInstagramSquare size={50} color="0b337a"/>
                        <FaWhatsappSquare size={50} color="0b337a"/>  
                    </div>
                    <h3>Endereço</h3>
                    <p>
                            PEQUERI/MG - 36610-000<br />
                            Nova Pequeri<br />
                            Professora Nair Temponi - n° 56
                    </p>  
                </S.Left>

                <S.Right>
                    <h3>Contatos</h3>
                    
                    <div>
                        <h4>Departamento Pessoal</h4>
                        <p>aliancatextilrh@hotmail.com</p>
                        <h4>Comercial</h4>
                        <p>comercialaliancatextil@outlook.com</p>
                    </div>
                </S.Right>

            </S.Footer>
            <S.Mid>
                <p>
                    Desenvolvido por: <br/>Nicolas Goulart, Diogo Barbosa e Bernardo Brigolini.
                </p>
            </S.Mid>
        </>
    )
}