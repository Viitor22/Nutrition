import styled, {createGlobalStyle} from "styled-components";

export const breakpoints = {
    desktop: '1024px',
    tablet: '768px'
}

const GlobalCss = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
`

export default GlobalCss