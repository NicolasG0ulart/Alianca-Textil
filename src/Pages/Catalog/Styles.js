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
    gap: 13%;
    align-items: center;
    font-family: ${(props) => props.font};
    font-weight: ${(props) => props.fontWeight};
    letter-spacing: ${(props) => props.spacing}px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    span {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 10px;
        background-color: ${(props) => props.colorFriso};
        @media(max-width: 510px) {
            height: 8px;   
        }  
    }
    h4 {
        font-size: ${(props) => props.fontSize}px;
    }
    @media(max-width: 1024px) {
        h4:nth-of-type(2) {
            display: none;
        }
    }
    @media(max-width: 924px){
        h4 {
            font-size: ${(props) => props.fontSize / 1.5}px;
            letter-spacing: ${(props) => props.spacing / 3}px;
        }
    }
`;

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
    gap: 13%;
    align-items: center;
    font-family: ${(props) => props.font};
    font-weight: ${(props) => props.fontWeight};
    letter-spacing: ${(props) => props.spacing}px;

    div {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 15px;
        background-color: ${(props) => props.colorFriso};
        @media(max-width: 510px) {
            height: 10px;   
        }  
    }
    span {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 15px;
        background-color: ${(props) => props.colorFriso};
        @media(max-width: 510px) {
            height: 10px;   
        }  
    }
    h4 {
        font-size: ${(props) => props.fontSize}px;
    }
    @media(max-width: 1024px) {
        h4:nth-of-type(2) {
            display: none;
        }
    } 
    @media(max-width: 924px){
        h4 {
            font-size: ${(props) => props.fontSize / 1.5}px;
            letter-spacing: ${(props) => props.spacing / 3}px;
        }
    }
`;
export const FitaThree = styled.div`
    margin-top: 50px;
    position: relative;
    background-color: ${(props) => props.color};
    color: ${(props) => props.colorText};
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 13%;
    align-items: center;
    font-family: ${(props) => props.font};
    font-weight: ${(props) => props.fontWeight};
    letter-spacing: ${(props) => props.spacing}px;

    div {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30px;
        background-image: url(${Mescla});
        @media(max-width: 510px) {
            height: 20px;   
        }  
    }
    span {
        position: absolute;
        bottom: 30px;
        width: 100%;
        height: 7px;
        background-color: ${(props) => props.colorFriso};
        @media(max-width: 510px) {
            bottom: 20px;
            height: 5px;   
        }  
    }
    h4 {
        margin-top: -40px;
        font-size: ${(props) => props.fontSize}px;
    }
    @media(max-width: 1024px) {
        h4:nth-of-type(2) {
            display: none;
        }
    }
    @media(max-width: 924px){
        h4 {
            font-size: ${(props) => props.fontSize / 1.5}px;
            letter-spacing: ${(props) => props.spacing / 3}px;
        }
    }
`;
export const ContentCatalog = styled.div`
    margin-top: 30px;
    h1{
        padding-inline: 100px;
        text-align: center;
        font-size: 1.8rem;
        color: #0e264b;
        @media(max-width: 1024px){
            padding-inline: 30px;
        }
        @media(max-width: 768px){
            text-align: start;
        }
        @media(max-width: 550px){
            font-size: 1.5rem;
        }
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

    @media(max-width: 768px){
        padding-inline: 30px;
        justify-content: space-between;
    }
    @media(max-width: 530px){
        gap: 15px;
    }
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
    color: ${(props) => props.color};

    &:hover{
        cursor: pointer;
    }
    @media(max-width: 530px){
        width: 150px;
    }
    @media(max-width: 400px){
        width: 120px;
    }
`
export const Select = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 30px;
    @media(max-width: 768px){
        padding-inline: 30px;
        width: 100%;
    }
    @media(max-width: 500px){
        gap: 25px;
        flex-direction: column;
        padding-inline: 0px;
    }

`
export const Elasticos = styled.section`
    gap: 100px;
    margin-top: 60px;
    padding-inline: 100px;
    width: 100%;
    @media(max-width: 1024px){
        padding-inline: 30px;
    } 
`
export const YourArt = styled.input`
    width: 100%;
    background-color: #0e264b;
    height: 60px;
    border-style: none;
    border-radius: 5px;
    font-size: 1.3rem;
    color: #fff;
    font-weight: 700;
    padding-left: 15px;

    &::placeholder{
        color: #fff;
        font-size: 1.3rem;
        color: #0b337a;
    }
    @media(max-width: 1024px){
        width: 100%;
    }
`
export const ButtonSelect = styled.button`
    width: 200px;
    height: 60px;
    background-color: ${(props) => (props.isActive ? '#0b337a' : '#0e264b')};
    border-style: none;
    border-radius: 5px;
    font-size: 1.1rem;
    color: #fff;
    font-weight: 700;
    border-bottom: ${(props) => (props.isActive ? '7px solid #019443' : 'none')};
    &:hover{
        border-bottom: 7px solid #019443;
        background-color: #0b337a;
        cursor: pointer;
    }
    @media(max-width: 1480px){
        font-size: .9rem;
    }
    @media(max-width: 768px){
        width: 100%;
    }
`
export const Left = styled.div`
    @media(max-width: 1200px){
        width: 400px;
    }
    @media(max-width: 470px){
        width: 100%;
    }
`
export const Right = styled.div`
    position: relative;
    display: flex;
    width: 400px;

    select{
        height: 60px;
        width: 100%;
        border-style: none;
        border-radius: 5px;
        position: absolute;
        right: 0;
        background-color: #0e264b;
        color: #fff;
        font-size: 1.3rem;
        font-weight: 100;
        font-family: "Paytone One", sans-serif;
        @media(max-width: 470px){
            font-size: 1rem;
        }
    }
    div{
        margin-top: 70px;
        display: flex;
        flex-direction: column;

        label{
            color: #0e264b;
            font-size: 1.2rem;
            font-weight: 100;
        }
    }
    @media(max-width: 470px){
        width: 100%;
    }
`
export const Edit = styled.div`
    padding-inline: 100px;
    display: flex;
    gap: 50px;
    justify-content: space-between;

    margin-top: 120px;
    width: 100%;
    @media(max-width: 1024px){
        padding-inline: 30px;
    }
    @media(max-width: 768px){
        align-items: center;
        flex-direction: column;
    }
    @media(max-width: 530px){
        margin-top: 80px;
    }
`