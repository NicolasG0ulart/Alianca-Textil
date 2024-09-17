import styled from "styled-components";

export const Footer = styled.footer`
    margin-top: 50px;
    padding: 20px 100px;
    background-color: #fff;
    width: 100%;
    text-align: center;
    color: #0e264b;

    ul{
        display: flex;
        list-style: none;
        border-bottom: red 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        font-size: 1.5rem;
        @media(max-width: 768px){
            align-items: start;
            flex-direction: column;
        }
    }
    img{
        height: 60px;
        @media(max-width: 900px){
            display: none;
        }
    }
    h5{
        margin-top: 10px;
        font-size: 1.3rem;
        @media(max-width: 768px){
            margin-top: 30px;
        }
    }
    p{
        margin-top: 5px;
        font-size: 1.2rem;

        a{
            color: #0e264b;
            text-decoration: none;
        }
    }

    @media(max-width: 1024px){
        padding-inline: 30px;
    }
    @media(max-width: 768px){
        text-align: start;
    }
` 
