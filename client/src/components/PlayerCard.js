import React from "react";
import styled from"styled-components";

const PlayerContain = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
const PlayerDiv = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    margin-top: 10px;
    font-family: 'Kalam', cursive;
`

const PlayerCard = props => {
    return (
        <PlayerContain>
            {props.info.map(item => (
                <PlayerDiv>
                    <h2>Name: {item.name}</h2>
                    <h3>Country: {item.country}</h3>
                    <h4>Searches: {item.searches}</h4>
                </PlayerDiv>
            ))}
        </PlayerContain>
    );
}

export default PlayerCard;