import styled from "styled-components";

export const GrupoListDiv = styled.div `
display:flex;
flex-direction:column;
align-items:center;

margin-top:2em;
`

export const GrupoDiv = styled.div `
display:flex;
flex-direction:row;
justify-content:space-between;
background-color:lightblue;
width:40%;
margin:1em;
border-radius:10px;
`

export const GrupoTextDiv = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
margin-right:1em;
`

export const GrupoImg = styled.img `
width:10em;
margin:1em;
`

export const GrupoName = styled.h1 `
margin:0;
text-align:right;
`

export const GrupoCity = styled.i `
text-align:right;

`

export const NoGrupos = styled.h1 `
text-align:center;
`