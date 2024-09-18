import styled from "styled-components"

export const ContentContact = styled.section`
    padding: 100px 100px;
     color: #0e264b;
    @media(max-width: 1500px){
        padding-inline 45px
    }
    @media(max-width: 1024px){
        padding: 50px 30px;
    }
    @media(max-width: 1024px){
      margin-top: 80px;
  }
`

export const Map = styled.div`
    display: flex;
    justify-content: space-between;
    section{
        width: 45%;
        h3{
            font-size: 2rem;
        }
        p{
            font-size: 1.2rem;
            margin-top: 20px;
        }


        iframe{
            width: 100%;
            height: 400px;
            border-style: none;
            border-radius: 5px;
            loading: lazy;
        }
        
        @media(max-width: 1024px){
            width: 100%;
        }
    }
    @media(max-width: 1024px){
        flex-direction: column;
        align-items: center;
    }
`
export const Contato = styled.div`
    padding-top: 100px;
    display: flex;
    section{
        width: 50%;
        @media(max-width: 1024px){
            width: 100%;
        }
    }
     h3{
        font-size: 2rem;
    }

    form{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 50px;

        input{
            padding-left: 10px;
            font-size: 1rem;
            color: ghostwhite;
            font-family: "Paytone One", sans-serif;
            border-radius: 5px;
            outline: none;
            border-style: none;
            background-color: #0e264b;
            height: 50px;
            width: 30%;
            &::placeholder{
                color: ghostwhite;
            }
            @media(max-width: 1024px){
                width: 100%;
            }
        }
        textarea{  
            padding: 10px 10px;
            font-family: "Paytone One", sans-serif;
            font-size: 1rem;
            color: ghostwhite;
            border-radius: 5px;
            outline: none;
            border-style: none;
            background-color: #0e264b;
            width: 100%;
            height: 200px;
            &::placeholder{
                color: ghostwhite;
            }
        }
        button{
            border-style: none;
            background-color: #0e264b;
            border-radius: 5px;
            margin-top: -20px;
            height: 50px;
            width: 100px;
            font-family: "Paytone One", sans-serif;
            font-size: 1rem;
            color: ghostwhite;
            transition: 0.4s;
            @media(max-width: 1024px){
                width: 100%;
            }
                &:hover{
                    background-color: #0b337a;
                    cursor: pointer;
                }
        }
    }

    @media(max-width: 1024px){
        flex-direction: column;
        align-items: center;
    }
`
export const Number = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;

    padding-left: 100px;
    h3{
        font-size: 2rem;

    }
    p{
        margin-top: 10px; 
    }
    @media(max-width: 1024px){
        margin-top: 50px;
        padding: 0;
        gap: 30px;
        width: 100%;
    }
    @media(max-width: 768px){
        flex-direction: column;
    }
`