import styled from "styled-components"

export const Contact = styled.section`
    margin-top: 100px;
    padding-inline: 100px;
    @media(max-width: 1024px){
        padding-inline: 30px;
    }
`
export const ContentContact = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    h3{
        color: #0e264b;
        font-size: 2rem;
        @media(max-width: 768px){
            text-align: left;
        }
    }
    p{
        margin-top: 30px;
        font-size: 1.2rem;
        font-weight: 100;
        color: #0b337a;
        @media(max-width: 768px){
            text-align: left;
        }
    }
    @media(max-width: 1024px){
        text-align: center;
    }
    @media(max-width: 768px){
        align-items: start;
        gap: 50px;
        flex-direction: column;
    }
`
export const Left = styled.div`
    width: 45%;
    @media(max-width: 1024px){
        text-align: center;
        width: 100%;
    }
`
export const Button = styled.button`
    width: 250px;
    height: 50px;
    background-color: #0b337a;
    border-style: none;
    border-radius: 5px;
    font-size: 1.1rem;
    color: #fff;
    font-weight: 700;
    &:hover{
        cursor: pointer;
        background
    }
    @media(max-width: 768px){
        width: 100%;
    }
`