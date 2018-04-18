import React from 'react';

function House(props){

    let {id, name, address, city, state, zip, img, mortgage, rent} = props.house

    return(
        <div className = "House">
        <img className = "img-house" src = {img} alt = "pic"/>
            <h3> {name} </h3>
            <h3> {address} </h3>
            <h3> {city} </h3>
            <h3> {state} </h3>
            <h3> {zip} </h3>
            <h3> {mortgage} </h3>
            <h3> {rent} </h3>
            <button onClick = { () => props.deleteHouse(id)}> Delete </button>

        </div>
    )
}

export default House;