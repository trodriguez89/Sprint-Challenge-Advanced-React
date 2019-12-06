import React from "react";

const PlayerCard = props => {
    return (
        <div>
            {props.info.map(item => (
                <div>
                    <h2>Name: {item.name}</h2>
                    <h3>Country: {item.country}</h3>
                    <h4>Searches: {item.searches}</h4>
                </div>
            ))}

        </div>
    );
}

export default PlayerCard;