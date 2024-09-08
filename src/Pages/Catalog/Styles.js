import styled from "styled-components"
import Mescla from "../../images/mescla.PNG"

export const Fita = styled.div`
    position: relative;
    margin-top: 30px;
    background-color: ${(props) => props.color};
    color: ${(props) => props.colorText};
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 18%;
    align-items: center;
    font-family: ${(props) => props.font};

    overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;

    span{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 10px;
        background-color: ${(props) => props.colorFriso};
    }
    h4{
        font-size: 2.8rem;
        @media(max-width: 1480px){
            font-size: 2.2rem;
        }
    }
`
export const FitaTwo = styled.div`
    overflow: hidden;
    position: relative;
    margin-top: 50px;
    background-color: ${(props) => props.color};
    color: ${(props) => props.colorText};
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 18%;
    align-items: center;
    font-family: ${(props) => props.font};

    div{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 15px;
        background-color: ${(props) => props.colorFriso};
    }
    span{
        position: absolute;
        top: 0px;
        width: 100%;
        height: 15px;
        background-color: ${(props) => props.colorFriso};
    }
    span:nth-of-type(2) {
        
    }
    h4{
        font-size: 2.8rem;
        @media(max-width: 1480px){
            font-size: 2.2rem;
        }
    }
`
export const FitaThree = styled.div`
    margin-top: 50px;
    position: relative;
    background-color: ${(props) => props.color};
    color: ${(props) => props.colorText};
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 18%;
    align-items: center;
    font-family: ${(props) => props.font};
    div{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30px;
        background-image: url(${Mescla});
    }
    span{
        position: absolute;
        bottom: 30px;
        width: 100%;
        height: 7px;
        background-color: ${(props) => props.colorFriso};
    }
    h4{
        margin-top: -40px;
        font-size: 2.5rem;
        @media(max-width: 1480px){
            font-size: 2rem;
        }
    }
    @media(max-width: 1087px){
        width: 100%;
    }
`
export const ContentCatalog = styled.div`
    margin-top: 30px;
    h1{
        padding-inline: 100px;
        text-align: center;
        font-size: 1.8rem;
        color: #0e264b;
    }
    @media(max-width: 1480px){
        gap: 30px;
    }
    @media(max-width: 1087px){
        display: flex;
        justify-content: center;
    }
`
export const Buttons = styled.div` 
    margin-top: 50px;
    padding-inline: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
`
export const Button = styled.button`
    border-style: none;
    box-shadow: 2px 4px 7px -1px rgba(0,0,0,0.43);
    border-radius: 2px;
    background-color: ${(props) => props.bgColor};
    width: 200px;
    height: 60px;
    padding: 5px 10px;
    font-size: 1.1rem;
    font-family: "Paytone One", sans-serif;

    &:hover{
        cursor: pointer;
    }

    @media(max-width: 1480px){
        width: 100px;
        height: 45px;
        font-size: .9rem;
    }
    @media(max-width: 1480px){
        width: 90px;
        font-size: .8rem;
    }
    @media(max-width: 380px){
        width: 78px;
        padding-inline: 1px;
        }
`
export const Select = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 30px;

`
export const Elasticos = styled.section`
    gap: 100px;
    margin-top: 60px;
    padding-inline: 100px;
    width: 100%;
    
`
export const YourArt = styled.input`
    background-color: #0e264b;
    height: 60px;
    border-style: none;
    border-radius: 5px;
    width: 30%;
    font-size: 1.3rem;
    color: #fff;
    font-weight: 700;
    padding-left: 15px;

    &::placeholder{
        color: #fff;
        font-size: 1.3rem;
        color: #0b337a;
    }
`
export const ButtonSelect = styled.button`
    width: 200px;
    height: 60px;
    background-color: ${(props) => props.bgColor};
    border-style: none;
    border-radius: 5px;
    font-size: 1.1rem;
    color: #fff;
    font-weight: 700;
    &:hover{
        cursor: pointer;
    }
    @media(max-width: 1480px){
        font-size: .9rem;
    }
    @media(max-width: 380px){
        width: 78px;
        padding-inline: 1px;
    }
`
export const Edit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 120px;
    width: 100%;
`