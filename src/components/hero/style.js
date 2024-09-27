import styled from "styled-components";

import hero from '../../assets/people-5326159.jpg'

export const HeroContainer = styled.div`
    height: 100vh; 
    background-size: cover;

        @media (max-width: 767px){
        max-width: auto;
        height: auto; 

        img{
            max-width: 100%;
            height: 50vh;
        }
    }
`
export const Hero = styled.div`
    position: relative;
    padding: 24px 48px;
    padding-bottom: 12px;
    height: 100%;
    width: 100%;
    text-align: center;
    background-image: url(${hero});
    background-size: 100% 100%;
    background-repeat: no-repeat;
`

export const TituloHero = styled.div`
    position: absolute;
    z-index: 1;
    margin-top: -40%;
    width: 400px;
    margin-left: 10%;
    background-color: #4b8f29;
    padding: 24px;
    border-radius: 12px;
    color: #fff;

    p{
        margin-top: 12px;
    }
`

export const ButtonHero = styled.a`
    background-color: #000;
    border-radius: 5px;
    border: 2px solid #000;
    display: inline-block;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    padding: 4px 30px;
    margin-top: 64px;
    text-decoration: none;
    transition: .5s;

    &:hover{
        border: 2px solid #c8e0b6;
        background-color: #c8e0b6;
        color: #000;
    }    
`

