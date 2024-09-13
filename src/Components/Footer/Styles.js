import styled from "styled-components";

export const Footer = styled.footer`
    margin-top: 100px;
    padding: 50px 100px;
    background-color: #fff;
    background-size: 100% 100%;
    width: 100%;
    height: 300px;

    display: flex;
    justify-content: space-between;
`
export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
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
        margin-top: 25px;
        display: flex;
        flex-direction: row;
    }
`
export const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    position: absolute;
    top: 50px;
`