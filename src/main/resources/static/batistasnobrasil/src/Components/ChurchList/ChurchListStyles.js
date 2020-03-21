import styled from "styled-components";

export const ChurchListDiv = styled.div `
display:flex;
flex-direction:column;
align-items:center;

margin-top:2em;
`

export const ChurchDiv = styled.div `
display:flex;
flex-direction:row;
justify-content:space-between;
background-color:lightblue;
width:40%;
margin:1em;
border-radius:10px;
`

export const ChurchTextDiv = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
margin-right:1em;
`

export const ChurchImg = styled.img `
width:10em;
margin:1em;
`

export const ChurchName = styled.h1 `
margin:0;
text-align:right;
`

export const ChurchCity = styled.i `
text-align:right;

`

export const NoChurches = styled.h1 `
text-align:center;
`