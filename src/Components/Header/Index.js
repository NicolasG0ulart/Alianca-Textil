import React, {useState} from "react";
import styled from "styled-components";
import * as S from "./Styles"
import Logo from "../../images/logo.png"
import { Link } from "react-router-dom"

import { FaHome } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { IoColorPaletteSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiSewingMachine } from "react-icons/gi";

const LinkR = styled(Link)`
        color: #0e264b;
        position: relative;
        text-decoration: none;
        &:after{
            content: "";
            position: absolute;
            left: 0;
            top: 30px;
            width: 0%;
            height: 3px;
            background-color: #0e264b;
            transition: 0.4s;
        }
        &:hover:after{
            width: 100%;
        }
    `

export default function Header(){

    const [menuOpen, setMenuOpen] = useState(false)

    function openMenu(){
        setMenuOpen(!menuOpen)
    }


    return(
        <S.HeaderContainer>
            <S.Header>
            <Link to="/"><img src={Logo} alt="Logo da Empresa"/></Link>
                <ul>
                    <li><LinkR to="/">Início</LinkR></li>
                    <li><LinkR to="/sobre">Sobre</LinkR></li>
                    <li><LinkR to="/catalogo">Catálogo Virtual</LinkR></li>
                    <li><LinkR to="/trabalhe-conosco">Trabalhe Conosco</LinkR></li>
                    <li><LinkR to="/contato">Contato</LinkR></li>
                </ul>

                <S.IconBurguer onClick={()=>openMenu()} className={menuOpen ? "open-menu" : ""}>
                    <div></div>
                    <div></div>
                    <div></div>
                </S.IconBurguer>
            </S.Header>

            <S.HeaderMobile onClick={()=>openMenu()} className={menuOpen ? "menu-active" : ""}>
                <ul>
                    <li><FaHome/><LinkR to="/">INÍCIO</LinkR></li>
                    <li><HiInformationCircle/><LinkR to="/sobre">SOBRE</LinkR></li>
                    <li><IoColorPaletteSharp/><LinkR to="/catalogo">CATÁLOGO VIRTUAL</LinkR></li>
                    <li><GiSewingMachine/><LinkR to="/trabalhe-conosco">TRABALHE CONOSCO</LinkR></li>
                    <li><FaPhoneVolume/><LinkR to="/contato">CONTATO</LinkR></li>
                </ul>
            </S.HeaderMobile>
        </S.HeaderContainer>
    )
}