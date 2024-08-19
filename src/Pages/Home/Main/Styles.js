import styled from "styled-components";
import Banner from "../../../images/banner-home.png"
import Mescla from "../../../images/mescla.PNG"

export const Main = styled.main`
    .banner{
        background-image: url(${Banner});
        background-size: 100%;
        box-shadow: inset 194px 0px 145px 31px rgba(0,0,0,0.81);
        padding-inline: 100px;
        height: 430px;
        width: 100%;
        display: flex;
        align-items: center;
    }
    h2{
        color: #fff;
        font-size: 3rem;
        font-weight: 200;
    }
`
export const Warnings = styled.section`
    margin-top: -80px;
    padding-inline: 100px;
    height: 230px;

    display: flex;
    justify-content: space-between;
`
export const Frame = styled.div`
    background-color: #fff;
    box-shadow: 0px 9px 7px -1px rgba(0,0,0,0.23);
    border-radius: 10px;
    width: 260px;
    height: 160px;
    
    padding: 20px 30px;

    h3{
        font-size: 1.2rem;
        font-weight: 100;
        color: #0b337a;
    }
    p{
        font-size: 1rem;
        font-weight: 100;
    }
    &:hover{
       cursor: pointer;
    }
`

export const Enterprise = styled.section`
    padding: 60px 100px;

    h1{
        color: #0e264b;
        font-size: 2rem;
    }
    img{
        width: 170px;
        height: 210px;  
        border-radius: 5px;  
    }
`
export const ContentEnterprise = styled.div`
    display: flex;
    justify-content: space-between;

    .laiza{
        height: 370px;
        width: 290px;
    }
`
export const Text = styled.div`
    width: 40vw;
    padding-top: 30px;

    p{
        font-size: 1.2rem;
        font-weight: 100;
        color: #0b337a;
    }
`
export const Catalog = styled.section`
    padding: 60px 100px;
    h1{
        color: #0e264b;
        font-size: 2rem;
    }
    .left{
        width: 700px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media(max-width: 1480px){
            width: 500px;
        }
    }

`
export const Fita = styled.div`
    position: relative;
    background-color: ${(props) => props.color};
    color: ${(props) => props.colorText};
    height: 120px;
    width: 700px;
    display: flex;
    justify-content: center;;
    align-items: center;
    span{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 10px;
        background-color: ${(props) => props.colorFriso};
    }
    h4{
        font-size: 2.8rem;
    }
    @media(max-width: 1480px){
        width: 500px;
        height: 100px;
    }
`
export const FitaTwo = styled.div`
    position: relative;
    background-color: ${(props) => props.color};
    color: ${(props) => props.colorText};
    height: 120px;
    width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    }
    @media(max-width: 1480px){
        width: 500px;
        height: 100px;
    }
`
export const ContentCatalog = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    p{
        font-size: 1.2rem;
        font-weight: 100;
        color: #0b337a;
    }
`
export const Buttons = styled.div` 
    margin-top: 30px;
    width:  580px;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    flex-wrap: wrap;

    button{
        border-style: none;
        box-shadow: 2px 4px 7px -1px rgba(0,0,0,0.43);
        border-radius: 5px;
        background-color: hotpink;
        width: 120px;
        height: 50px;
        padding: 5px 10px;
        font-size: 1.1rem;
        font-family: "Paytone One", sans-serif;

        &:hover{
            cursor: pointer;
        }
    }
`
export const Select = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

`
export const ButtonSelect = styled.button`
    width: 100px;
    height: 50px;
    background-color: ${(props) => props.bgColor};
    border-style: none;
    border-radius: 5px;
    font-size: 1.1rem;
    color: #fff;
    font-weight: 700;
    &:hover{
        cursor: pointer;
    }
`
export const Colors = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`
export const YourArt = styled.input`
    background-color: #0e264b;
    height: 50px;
    border-style: none;
    border-radius: 5px;
    width: 100%;
    font-size: 1.3rem;
    color: #fff;
    font-weight: 700;
    padding-left: 15px;

    &::placeholder{
        font-size: 1.3rem;
        color: #0b337a;
    }
`