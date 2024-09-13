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

                <S.Mid>
                <h5>Desenvolvido por:</h5>
                    <div>
                        <p><a rel="noreferrer" target="_BLANK" href="https://www.instagram.com/nicolas__g0ulart/">Nicolas Goulart</a></p>
                        <p><a target="_BLANK" rel="noreferrer" href="https://www.instagram.com/bernardobrigolini">Bernardo Brigolini</a></p>
                        <p><a rel="noreferrer" target="_BLANK" href="https://www.instagram.com/bernardobrigolini">Diogo Barbosa</a></p>
                    </div>
                </S.Mid>

                <S.Right>
                    <h3>Contatos</h3>
                    
                    <div>
                        <h4>Departamento Pessoal</h4>
                        <p>aliancatextilrh@hotmail.com</p><br/>
                        <h4>Comercial</h4>
                        <p>comercialaliancatextil@outlook.com</p>
                    </div>
                </S.Right>

            </S.Footer>
        </>
    )
}