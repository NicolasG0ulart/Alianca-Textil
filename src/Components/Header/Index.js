import React, {useState} from "react";
import * as S from "./Styles"
import Logo from "../../images/logo.png"

import { FaHome } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { IoColorPaletteSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";


export default function Header(){

    const [menuOpen, setMenuOpen] = useState(false)

    function openMenu(){
        setMenuOpen(!menuOpen)
    }


    return(
        <S.HeaderContainer>
            <S.Header>
                <img src={Logo} alt="Logo da Empresa"/>
                <ul>
                    <li>Início</li>
                    <li>Sobre</li>
                    <li>Catálogo Virtual</li>
                    <li>Contato</li>

                </ul>

                <S.IconBurguer onClick={()=>openMenu()} className={menuOpen ? "open-menu" : ""}>
                    <div></div>
                    <div></div>
                    <div></div>
                </S.IconBurguer>
            </S.Header>

            <S.HeaderMobile onClick={()=>openMenu()} className={menuOpen ? "menu-active" : ""}>
                <ul>
                    <li><FaHome/>INÍCIO</li>
                    <li><HiInformationCircle/>SOBRE</li>
                    <li><IoColorPaletteSharp/>CATÁLOGO VIRTUAL</li>
                    <li><FaPhoneVolume/>CONTATO</li>
                </ul>
            </S.HeaderMobile>
        </S.HeaderContainer>
    )
}