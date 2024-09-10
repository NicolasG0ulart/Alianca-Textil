import styled from "styled-components";

export const Footer = styled.footer`
    margin-top: 100px;
    padding: 50px 100px;
    background-color: #fff;
    background-size: 100% 100%;
    width: 100%;
    height: 300px;

    display: flex;
    align-items: center;

    div{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 50px;

        img{
            width: 200px;
        }
        p{
            width: 50%;
            font-size: 1.2rem;
            color: #0b337a;
        }
    }
    
    @media(max-width: 1024px){
        padding-inline: 30px;
    }
`
export const Logo = styled.img`
    width: 150px;
    height: 70px;
`