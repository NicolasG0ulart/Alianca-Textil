import React, {useState} from "react";
import * as S from "./Styles"
import Logo from "../../images/logo.png"
import { Link } from "react-router-dom"

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
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/catalogo">Catálogo Virtual</Link></li>
                    <li><Link to="/contato">Contato</Link></li>

                </ul>

                <S.IconBurguer onClick={()=>openMenu()} className={menuOpen ? "open-menu" : ""}>
                    <div></div>
                    <div></div>
                    <div></div>
                </S.IconBurguer>
            </S.Header>

            <S.HeaderMobile onClick={()=>openMenu()} className={menuOpen ? "menu-active" : ""}>
                <ul>
                    <li><FaHome/><Link to="/">INÍCIO</Link></li>
                    <li><HiInformationCircle/><Link to="/sobre">SOBRE</Link></li>
                    <li><IoColorPaletteSharp/><Link to="/catalogo">CATÁLOGO VIRTUAL</Link></li>
                    <li><FaPhoneVolume/><Link to="/contato">CONTATO</Link></li>
                </ul>
            </S.HeaderMobile>
        </S.HeaderContainer>
    )
}