import styled from "styled-components"

export const ChurchPageDiv = styled.div `
width:80%
margin:auto;
display:flex;
flex-direction:column;
align-items:center;
`
export const InfoDiv = styled.div `
display:flex;
flex-direction:column;
background-color:lightblue;
padding:0.5em;
width:100%;
border-radius:10px;
margin:1em;
align-items:center;

@media(min-width:500px){
    width:80%;
}

@media(min-width:750px){
    width:60%;
}
`

export const ChurchName = styled.h1 `
font-weight: bold;
font-size:1.5em;
text-align:center;


@media(min-width:500px){
    font-size:2em;

}
`

export const SubHeader = styled.h2 `
margin:0;
margin-bottom:0.3em
font-weight: bold;
font-size:1.25em;


@media(min-width:500px){
    font-size:1.5em;
}

@media(min-width:700px){
    font-size:1.75em;
}
`

export const Info = styled.strong `
font-size:1em;
width:90%;
margin:auto;
text-align:center;
`

export const ChurchAvatar = styled.img `
width:10em;
margin-top:2em;

@media(min-width:700px){
    width:12em;
}

@media(min-width:900px){
    width:15em;
}
`