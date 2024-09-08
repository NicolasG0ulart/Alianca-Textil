import styled from "styled-components";
import Banner from "../../../images/banner-home.png"
import BannerMobile from "../../../images/banner-mobile.png"

export const Main = styled.main`
    .banner{
        background-image: url(${Banner});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        box-shadow: inset 194px 0px 145px 31px rgba(0,0,0,0.81);
        padding-inline: 100px;
        height: 430px;
        width: 100%;
        display: flex;
        align-items: center;
        @media(max-width: 1024px){
            background-image: url(${BannerMobile});
            padding-inline: 30px;
        }
    }
    h2{
        color: #fff;
        font-size: 6vh;
        font-weight: 200;
        text-shadow: 2px 3px 2px rgba(0,0,0,0.7);
        @media(max-width: 1024px){
            font-size: 4.7vh;
        }
        @media(max-width: 768px){
            font-size: 4vh;
        }
        @media(max-width: 600px){
            display: none;
        }
    }
    
`
export const Warnings = styled.section`
    margin-top: -80px;
    padding-inline: 100px;
    height: 230px;
    display: flex;
    justify-content: space-between;
    @media(max-width: 1024px){
        padding-inline: 30px;
    }
    @media(max-width: 768px){
        padding-inline: 30px;
        gap: 50px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
    }
`
export const Frame = styled.div`
    background-color: #fff;
    box-shadow: 0px 9px 7px -1px rgba(0,0,0,0.23);
    border-radius: 10px;
    width: 260px;
    height: 160px;
    
    padding: 20px 30px;

    h3{
        font-size: 1.2rem;
        font-weight: 100;
        color: #0b337a;
    }
    p{
        font-size: 1rem;
        font-weight: 100;
    }
    &:hover{
       cursor: pointer;
    }
    @media(max-width: 1024px){
        width: 220px;
    }
    @media(max-width: 768px){
        scroll-snap-align: start;
        flex: 0 0 50%;
        height: 170px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center; /* Centralizar o texto */
    }
    @media(max-width: 540px){
        flex: 0 0 80%;
        height: 190px;
    }
`

export const Enterprise = styled.section`
    padding: 60px 100px;

    h1{
        color: #0e264b;
        font-size: 2rem;
        @media(max-width: 1024px){
            text-align: center;
        }
        @media(max-width: 768px){
            text-align: left;
        }
    }
    img{
        width: 170px;
        height: 210px;  
        border-radius: 5px;
    }
    @media(max-width: 1024px){
        padding-inline: 30px;
    }
    
`
export const ContentEnterprise = styled.div`
    display: flex;
    justify-content: space-between;

    .laiza{
        height: 370px;
        width: 290px;
        @media(max-width: 1024px){
            width: 100%;
            height: 430px;;
        }
    }
    @media(max-width: 1024px){
        gap: 50px;
        flex-direction: column;
        align-items: center;
    }
`
export const Text = styled.div`
    width: 40vw;
    padding-top: 30px;

    p{
        font-size: 1.2rem;
        font-weight: 100;
        color: #0b337a;
    }
    @media(max-width: 1024px){
        width: 100%;
        text-align: center;
    }
    @media(max-width: 768px){
        text-align: left;
    }
`
export const Catalog = styled.section`
    padding: 60px 100px;
    height: 500px;
    display: flex;
    justify-content: space-between;
    h1{
        color: #fff;
        font-size: 2rem;
        @media(max-width: 1024px){
            text-align: center;
        }
    }
`
export const ContentCatalog = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 30px;
    
    img{
        width: 300px;
        border-radius: 3px;
    }
    img:nth-of-type(2) {
        width: 280px;
        height: 290px;
    }
`