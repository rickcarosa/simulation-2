import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Wizard extends Component {
    constructor(){
        super()
            this.state ={
                name: '',
                address: '',
                city: '',
                state: '',
                zip: 0
         }
    }

    updateName(value){
        this.setState({
          name: value
        })
      }

    updateAddress(value){
        this.setState({
            address: value
        })
    }

    updateCity(value){
        this.setState({
            city: value
        })
    }

    updateState(value){
        this.setState({
            state: value
        })
    }

    updateZip(value){
        this.setState({
            zip: value
        })
    }


render(){
    return(
        <div className = "Wizard">
           Wizard <Link to = '/'> <button className = 'btn'> Cancel </button> </Link>
           <p> Name </p>
           <input value = {this.state.name} onChange = { (event) => this.updateName(event.target.value)}/> 
           <p> Address </p>
           <input value = {this.state.address} onChange = { (event) => this.updateAddress(event.target.value)} /> 
           <p> City </p>
           <input value = {this.state.city} onChange = { (event) => this.updateCity(event.target.value)}/> 
           <p> State </p>
           <input value = {this.state.state} onChange = { (event) => this.updateState(event.target.value)}/> 
           <p> Zip </p>
           <input type = "number" value = {this.state.zip} onChange = { (event) => this.updateZip(event.target.value)}/> 
        </div>
    )
  }
}

export default Wizard;