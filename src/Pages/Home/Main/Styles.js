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
    transition: .3s;
    
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
       transform: scale(1.05);
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
        margin-bottom: 50px;
        color: #0e264b;
        font-size: 4rem;
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
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px;

  @media(max-width: 1024px){
    gap: 40px;
    flex-direction: column;
  }

  .laiza {
    width: 300px;
    height: auto;
  }
`;

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
export const Catalog = styled.div`
  text-align: center;
  padding: 40px 20px;

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;


export const ContentCatalog = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .card {
    position: relative;
    width: 300px;
    margin: 10px;
    color: black;
    font-size: 18px;
    overflow: hidden;
    text-align: center;

    img {
      width: 200px;
      height: auto;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.1);
      filter: brightness(0.7);
    }

    .text {
      margin-top: 10px;
      h3 {
        margin: 0;
        font-size: 24px;
        font-weight: bold;
      }

      p {
        margin: 5px 0 0;
        font-size: 16px;
      }
    }

    &:hover .text {
      color: #0e264b;
    }
  }
`;

