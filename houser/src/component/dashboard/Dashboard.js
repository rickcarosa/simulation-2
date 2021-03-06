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

        this.deleteHouse = this.deleteHouse.bind(this);
    }

    getHouses(){
        axios.get('/api/houses').then( response => {   
        this.setState({
          houses: response.data
      })
    })
  }

    componentDidMount(){
        this.getHouses()
    }

    deleteHouse(id){
        axios.delete(`/api/house/${id}`).then(() => {
            this.getHouses()
        })
    }

render(){

    const houses = this.state.houses.map((house) => {
        return( 
            <div key = { house.id } > 
                <House house = {house} 
                       deleteHouse = {this.deleteHouse}/>
           
            </div>
        )
    })

    return(
        <div>

            Dashboard <Link to = '/wizard/StepOne'> <button className = 'btn'> Add New Property </button> </Link>

            {houses}
        </div>
    )
  }
}

export default Dashboard;