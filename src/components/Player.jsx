function Player (props, style, name) {
    return (
        <div>
            <h2 style={props.style}>Player {props.whichPlayer}</h2>
            <h3>Wins: </h3>
        </div>
    );
}

export default Player;