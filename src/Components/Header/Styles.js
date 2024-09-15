import styled from "styled-components";

export const HeaderContainer = styled.section`
    .menu-active{
        left: 0;
    }
`
export const Header = styled.header`
    background-color: #fff;
    witdh: 100%;
    height: 80px;
    padding-inline: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        height: 60px;
    }

    ul{
        display: flex;
        gap: 30px;
        list-style: none;
        font-size: 1.4rem;
        color: #0e264b;
        @media(max-width: 1024px){
            display: none;
        }
}
    .open-menu{
        top: 40px;
        :nth-child(1){
            transform: rotate(45deg);
        }
        :nth-child(2){
            display: none;
        }
        :nth-child(3){
            position: absolute;
            transform: rotate(-45deg);
        }
    }
    @media(max-width: 1024px){
        position: fixed;
        width: 100%;
        top: 0;
        justify-content: center;
    }
    
`
export const IconBurguer = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    display: none;
    flex-direction: column;
    gap: 3px;

    div{
        background-color: #0e264b;
        width: 35px;
        height: 4px;
        transition: .4s;
    }

    &:hover{
        cursor: pointer;
    }
    @media(max-width: 1024px){
        display: flex;
    }
`

export const HeaderMobile = styled.header`
    @media(max-width: 1024px){
        display: flex;
    }
    z-index: 1000;
    transition: .5s;
    position: fixed;
    top: 80px;
    left: -100%;
    display: none;
    height: 100%;
    width: 100%;
    background-color: #fff;
    flex-direction: column;
    align-items: center;

    img{
        margin-top: 50px;
        width: 30%;
    }

    ul{
        padding-inline: 50px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        list-style: none;
        font-size: 1.8rem;
        color: #0e264b;
        font-weight: 100;
        text-align: start;
        height: 100%;
        width: 100%;

        li{
            display: flex;
            gap: 15px;
            align-items: center;
            height: 60px;
         }
        @media(max-width: 500px){
            font-size: 1.5rem;
            padding-inline: 10px;
        }
    }
`