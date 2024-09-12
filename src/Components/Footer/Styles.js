import styled from "styled-components";

export const Footer = styled.footer`
    margin-top: 100px;
    padding: 50px 100px;
    background-color: #fff;
    background-size: 100% 100%;
    width: 100%;
    height: 100px;

    ul{
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 100%;
        width: 100%;
        display: flex;
        list-style: none;
        text-decoration: none;
        font-size: 1.4rem;
        color: #0e264b;

        li{
            &:hover{
                cursor: pointer;
                color: #05934e;
            }
        }

        img{
            height: 80px;
        }
    }
`
export const Logo = styled.img`
    width: 150px;
    height: 70px;
`