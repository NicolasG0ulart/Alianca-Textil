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

    overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;

    span{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 10px;
        background-color: ${(props) => props.colorFriso};
        @media(max-width: 510px){
            height: 8px;   
        }  
    }
    h4{
        font-size: 2.8rem;
        @media(max-width: 1480px){
            font-size: 2.2rem;
        }
    }
    @media(max-width: 1024px){
        h4:nth-of-type(2) {
            display: none;
        }
    }
    @media(max-width: 510px){
        height: 90px;  
        h4{
            font-size: 1.8rem;  
        }    
    }
    @media(max-width: 425px){ 
        h4{
            font-size: 1.3rem;  
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
    gap: 13%;
    align-items: center;
    font-family: ${(props) => props.font};

    div{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 15px;
        background-color: ${(props) => props.colorFriso};
        @media(max-width: 510px){
            height: 10px;   
        }  
    }
    span{
        position: absolute;
        top: 0px;
        width: 100%;
        height: 15px;
        background-color: ${(props) => props.colorFriso};
        @media(max-width: 510px){
            height: 10px;   
        }  
    }
    h4{
        font-size: 2.8rem;
        @media(max-width: 1480px){
            font-size: 2.2rem;
        }
    }
    @media(max-width: 1024px){
        h4:nth-of-type(2) {
            display: none;
        }
    } 
    @media(max-width: 510px){
        height: 90px;  
        h4{
            font-size: 1.8rem;  
        }    
    }
    @media(max-width: 425px){ 
        h4{
            font-size: 1.3rem;  
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
    gap: 13%;
    align-items: center;
    font-family: ${(props) => props.font};
    div{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30px;
        background-image: url(${Mescla});
        @media(max-width: 510px){
            height: 20px;   
        }  
    }
    span{
        position: absolute;
        bottom: 30px;
        width: 100%;
        height: 7px;
        background-color: ${(props) => props.colorFriso};
        @media(max-width: 510px){
            bottom: 20px;
            height: 5px;   
        }  
    }
    h4{
        margin-top: -40px;
        font-size: 2.8rem;
        @media(max-width: 1480px){
            font-size: 2.2rem;
        }
    }
    @media(max-width: 1024px){
        h4:nth-of-type(2) {
            display: none;
        }
    }
    @media(max-width: 510px){
        height: 90px;  
        h4{
            margin-top: -20px;
            font-size: 1.8rem;  
        }    
    } 
    @media(max-width: 425px){ 
        h4{
            font-size: 1.3rem;  
        }    
    }
`
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
    @media(max-width: 1024px){
        width: 100%;
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
    @media(max-width: 768px){
        width: 100%;
    }
`
export const Edit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 120px;
    width: 100%;
    @media(max-width: 1024px){
        padding-inline: 30px;
    }
    @media(max-width: 530px){
        margin-top: 80px;
    }
`