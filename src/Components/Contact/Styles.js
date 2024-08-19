import styled from "styled-components"

export const Contact = styled.section`
    margin-top: 100px;
    padding-inline: 100px;
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
`
export const Left = styled.div`
    width: 45%;
    height: 300px;
`
export const Right = styled.form`
    padding-top: 70px;
    background-color: #0e264b;
    border-radius: 5px;
    width:  500px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;


    input{
        outline: none;
        border-style: none;
        border-radius: 5px;
        font-size: 1.2rem;
        text-align: center;
        height: 50px;
        width: 350px;
    }

    textarea{
        outline: none;
        resize: none;
        width: 350px;
        height: 200px;
        font-size: 1.2rem;
        text-align: center;
    }
`