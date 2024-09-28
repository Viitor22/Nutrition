import styled from "styled-components";
import { breakpoints } from "../../style";

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 32px 96px;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}){
        width: 100vw;
        padding: 32px 96px;
    }

    .content{
        display: flex;

        .links{
            display: flex;

            > :last-child {
                border: none;
            }
        }
    }

    button {
        background-color: transparent;
        border-radius: 5px;
        border: 2px solid #000;
        display: inline-block;
        cursor: pointer;
        color: #000;
        font-size: 16px;
        padding: 4px 30px;
        margin-left: 64px;
        text-decoration: none;
        transition: .5s;
    }
    
    button:hover{
        background-color: #000;
        color: #fff;
    }
    
    a{
        padding: 0px 20px;
        border-right: 1px solid #736F68;
    }
    
    a:hover{
        cursor: pointer;
        color: #4b8f29;
    }
    
    img {
        width: 30px;
    }

    .content{
        display: flex;

        .links{
            display: flex;
        }

        .hover{
        display: flex;
        padding: 0px 20px;
        align-items: center;
        position: relative;
            &:hover{
                .dropdown-content{
                    display: block;
                    z-index: 2;
                }
            }
        }
    }
`

