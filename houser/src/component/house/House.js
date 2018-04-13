import React from 'react';

function House(props){

    let {id, name, address, city, state, zip} = props.house

    return(
        <div className = "House">
            <h3> {name} </h3>
            <h3> {address} </h3>
            <h3> {city} </h3>
            <h3> {state} </h3>
            <h3> {zip} </h3>
            <button onClick = { () => props.deleteHouse(id)}> Delete </button>

        </div>
    )
}

export default House;