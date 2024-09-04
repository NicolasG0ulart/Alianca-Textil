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
    }
    p{
        margin-top: 30px;
        font-size: 1.2rem;
        font-weight: 100;
        color: #0b337a;
    }
    @media(max-width: 1024px){
        text-align: center;
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
`