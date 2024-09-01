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
    h3{
        color: #0e264b;
        font-size: 2rem;
    }
    p{
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