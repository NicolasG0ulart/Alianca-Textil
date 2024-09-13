import styled from "styled-components";

export const Footer = styled.footer`
    margin-top: 50px;
    padding: 20px 100px;
    background-color: #fff;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const Left = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 50%;
    h3{
        font-size: 2rem;
        color: #0b337a;
    }
    p{
        width: 60%;
        font-size: 1rem;
        color: #0b337a;  
    }
    div{
        gap: 30px;
        margin-top: 15px;
        display: flex;
        flex-direction: row;
    }
`
export const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    h3{
        font-size: 2rem;
        color: #0b337a;
    }
    p{
        font-size: 1rem;
        color: #0b337a;  
    }


`
export const Mid = styled.div`
    color: #0b337a;  
    padding-inline: 100px;
    background-color: #fff;

    p{
        text-align: center;
    }
`