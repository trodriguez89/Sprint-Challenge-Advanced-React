import React from "react";
import {useDarkMode} from "../hooks/useDarkMode";
import styled from "styled-components";

const NavStyle = styled.nav`
    display: flex;
    justify-content: center;
    border-bottom: 2px solid black;
`
const TitleDiv = styled.div`
    width: 93%;
    text-align: left;
`
const ButtonDiv = styled.div`
    width: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonStyle = styled.button`
    padding: 5px;
    border-radius: 5px;
    background-color: black;
    color: white;
`

const Nav = () => {
    const [darkMode, setDarkMOde] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMOde(!darkMode);
    };

    return (
        <NavStyle>
            <TitleDiv>
            <h2>Women's World Cup Players Ranked by Search Interest</h2>
            </TitleDiv>
            <ButtonDiv>
            <ButtonStyle onClick={toggleMode}>Dark Mode</ButtonStyle>
            </ButtonDiv>
        </NavStyle>
    );
}

export default Nav;