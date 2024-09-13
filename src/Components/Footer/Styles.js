import styled from "styled-components";

export const Footer = styled.footer`
    margin-top: 50px;
    padding: 20px 100px;
    background-color: #fff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media(max-width: 1024px){
        padding-inline: 30px;
    }
        @media(max-width: 768px){
            flex-direction: column;
        }
`
export const Left = styled.div`
    border: solid red;

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 50%;
    h3{
        font-size: 2rem;
        color: #0b337a;
        @media(max-width: 768px){
            margin-top: 20px;
        }
    }
    p{
        width: 60%;
        font-size: 1rem;
        color: #0b337a;
        @media(max-width: 768px){
            width: 100%;
        }
    }
    div{
        gap: 30px;
        margin-top: 15px;
        display: flex;
        flex-direction: row;
    }
`
export const Right = styled.div`
    border: solid red;

    display: flex;
    flex-direction: column;
    gap: 15px;
    h3{
        font-size: 2rem;
        color: #0b337a;
    }
    h4{
        font-size: 1.2rem;
        color: #0b337a;
    }
    p{
        font-size: 1rem;
        color: #0b337a;
        @media(max-width: 370px){
            font-size: 0.9rem;
        }
    }
`
export const Mid = styled.div`
    border: solid red;

    text-align: center;
    color: #0b337a;  
    padding-inline: 100px;
    background-color: #fff;
    padding-bottom: 10px;

    h5{
        font-size: 1rem;
    }
    p{ 
        a{
            color: #0b337a; 
            text-decoration: none;
        }
    }
    div{   
        display: flex;
        gap: 10px;
        justify-content: center;
        @media(max-width: 768px){
            flex-direction: column;
            margin-top: 20px;
        } 
    }
    @media(max-width: 768px){
        padding: 30px 30px;
        text-align: start;
    }       
`