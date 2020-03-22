import React from "react"
import { Logo, LogoDes, LogoDiv } from "./NavBarStyles";

const NavBar = () => {
    return (
        <LogoDiv>
        <Logo>Batistas No Brasil</Logo>
        <LogoDes>
            Diretorio de Igrejas Batistas Fundamentalistas no Brasil
        </LogoDes>
        </LogoDiv>
    )
}

export default NavBar;