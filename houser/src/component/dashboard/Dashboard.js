import React, {Component} from 'react';
import axios from 'axios';
import House from '../house/House';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(){
        super()
        this.state ={
            houses: []
        }

    }

render(){

    const houses = this.state.houses.map((house) => {
        return( 
            <div key = { house.id } > 
                <House house = {house}/>
           
            </div>
        )
    })

    return(
        <div>

            Dashboard <Link to = '/wizard'> <button className = 'btn'> Add New Property </button> </Link>

            {houses}
        </div>
    )
  }
}

export default Dashboard;