import styled from "styled-components";
import BannerFooter from "../../images/banner-footer.png"

export const Footer = styled.footer`
    margin-top: 100px;
    background-image: url(${BannerFooter});
    padding: 50px 100px;
    background-color: #193e23;
    background-size: 100% 100%;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1{
        color: #fff;
    }

    @media(max-width: 1024px){
        padding-inline: 30px;
    }
`
export const Logo = styled.img`
    width: 150px;
    height: 70px;
`