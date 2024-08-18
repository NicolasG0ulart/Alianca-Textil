import styled from "styled-components";

export const Header = styled.header`
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
    }
`