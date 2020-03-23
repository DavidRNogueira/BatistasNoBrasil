import styled from "styled-components"

export const NavBarDiv = styled.div `
width:100vw;
display:flex;
justify-content:space-between;
`

export const Logo = styled.h1 `
font-family: "Arial Black";
margin:0.2em 0 0.2em 0;
font-weight: bold;
font-size:1.75em;
color: #084177;
text-align:center;

@media(min-width:550px){
    font-size:2.5em;
}

`
export const LogoDes = styled.p `
color:grey;
text-align:center;
margin-top:0;
font-size:0.75em;

@media(min-width:550px){
    font-size:1em;
}
`

export const LogoDiv = styled.div `
`