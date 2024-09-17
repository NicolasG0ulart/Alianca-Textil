import React from "react"
import * as S from "./Styles"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Header from "../../Components/Header/Index"
import Footer from "../../Components/Footer/Footer"

export default function Contact(){

    const LinkR = styled(Link)`
    color: #0e264b;
    position: relative;
    text-decoration: none;
`


    return(
        <>
            <Header/>
            <S.NotFound>
                <h1>Ops... Parece que esta página não existe!</h1>
                <LinkR to="/"><button>Voltar para o início</button></LinkR>
            </S.NotFound>
           <Footer/>
        </>
    )
}