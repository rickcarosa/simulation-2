import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStepThree} from '../../ducks/reducer';
import {cancel} from '../../ducks/reducer';

class StepThree extends Component {
    constructor(){
        super()
        this.state = {
            mortgage: '',
            rent: ''
        }
    }

    updateMortgage(value){
        this.setState({
          mortgage: value
        })
      }

    updateRent(value){
        this.setState({
          rent: value
        })
      }

    addHouse(){
        let { name, address, city, state, zip, image} = this.props;
        let { mortgage, rent} = this.state
        console.log('click')
        axios.post('/api/house', {name, address, city, state, zip, image, mortgage, rent})
    }


render(){

    const {updateStepThree} = this.props
    console.log(this.props)

    return(
        <div className = "StepThree">

            Add New Listing <Link to = '/'><button className = "cancel" type = "submit" 
                                    onClick = {() => this.props.cancel()}> Cancel </button> </Link>

            <p> Monthly Mortgage </p>
            <input value = {this.state.mortgage} onChange = { (event) => this.updateMortgage(event.target.value)}/>
            <p> Monthly Rent </p>
            <input value = {this.state.rent} onChange = { (event) => this.updateRent(event.target.value)}/> 
            <Link to = '/wizard/StepTwo'> <button className = 'btn' onClick = {() => updateStepThree(this.state.mortgage, this.state.rent)}> Previous Step </button> </Link>
            <Link to = '/'> <button className = "Add" onClick = {() => this.addHouse()}> Complete </button> </Link>
        </div>
    )
  }
}

function mapStateToProps(state){
    const {name, address, city, zip, image, mortgage, rent} = state;
    return{
        name, address, city, state: state.state, zip, image, mortgage, rent
    }
}

export default connect(mapStateToProps, {updateStepThree, cancel}) (StepThree);