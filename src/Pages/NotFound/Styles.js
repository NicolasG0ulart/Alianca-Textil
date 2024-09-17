import styled from "styled-components";

export const NotFound = styled.section`
    padding: 50px 100px;
    height: 70vh;
    border: solid red;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    h1{
        color: #0b337a;
        font-size: 3rem;
    }

    button{
        border: none;
        border-radius: 10px;
        background-color: #0e264b;
        color: #fff;
        font-size: 1.5rem;
        font-family: "Paytone One", sans-serif;
        height: 60px;
        padding-inline: 20px;
        transition: .4s;
        &:hover{
            cursor: pointer;
            background-color: #0b337a;
        }
    }
`