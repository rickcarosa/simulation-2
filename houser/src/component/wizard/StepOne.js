import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStepOne} from '../../ducks/reducer';

class StepOne extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }

    componentDidMount(){
        this.setState({
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip
        })
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

    saveChanges(id, values){
        let body = {name: this.state.name, address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip}

        axios.put(`/api/house/${id}`, body).then( response => {
            this.setState({
                houses: response.data
            })
        })
    }

render(){

    const {updateStepOne} = this.props
    console.log(this.props)    //makes sure store is connected

    return(
        <div className = "StepOne">
           

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
            <br/>
            <Link to = '/wizard/StepTwo'> <button className = 'btn' onClick = {() => updateStepOne(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip)} > Next Step </button> </Link>

        </div>
    )
  }
}

function mapStateToProps(state){
    const {name, address, city, zip} = state;
    return{
        name,
        address,
        city,
        state: state.state,
        zip
    }
}

export default connect(mapStateToProps, {updateStepOne}) (StepOne);