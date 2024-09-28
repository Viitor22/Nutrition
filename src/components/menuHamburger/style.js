import styled from "styled-components";
import { breakpoints } from "../../style";


export const ContainerDiv = styled.div`
.nav-bar {
    display: none;
    justify-content: space-between;
    padding: 1rem 2rem;
}

.mobile-menu-icon {
    display: none;
    img {
        width: 32px;
    }
}

.mobile-menu {
    display: none;

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

@media screen and (max-width: ${breakpoints.tablet}) {
    .nav-bar {
        display: flex;
        padding: 1rem 2rem;
    }

    .mobile-menu {
    margin-bottom: 16px;
    }

    .mobile-menu-icon {
        display: block;
    }
    .mobile-menu-icon button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .mobile-menu ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 1rem;

        li {
            margin-top: 12px;
        }
    }
    .mobile-menu .nav-item {
        display: block;
        padding-top: 1.2rem;
    }

    .open {
        display: block;
    }
}
`

export const MenuButton = styled.button`

    background-color: transparent;
    border-radius: 5px;
    border: 2px solid #000;
    display: inline-block;
    cursor: pointer;
    color: #000;
    font-size: 16px;
    padding: 0 30px;
    margin: 0 35%;
    text-decoration: none;
    transition: .5s;

    &:hover{
        background-color: #000;
        color: #fff;
    }
`