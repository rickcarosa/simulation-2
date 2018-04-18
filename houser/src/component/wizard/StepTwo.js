import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStepTwo} from '../../ducks/reducer';
import {cancel} from '../../ducks/reducer';


class StepTwo extends Component {
    constructor(){
        super()
        this.state = {
            image: ''
        }
    }

    updateImage(value){
        this.setState({
          image: value
        })
      }

    addHouse = (name, address, city, state, zip) => {
        console.log('click')
        axios.post('/api/house', {name: this.state.name, address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip})
    }


render(){

    const {updateStepTwo} = this.props
    console.log(this.props)

    return(
        <div className = "StepTwo">

            Add New Listing <Link to = '/'><button className = "cancel" type = "submit" 
                                    onClick = {() => this.props.cancel()}> Cancel </button> </Link>


            <p> Image URL </p>
            <input value = {this.state.image} onChange = { (event) => this.updateImage(event.target.value)}/> 
            <Link to = '/wizard/StepOne'> <button className = 'btn' onClick = {() => updateStepTwo(this.state.image)}> Previous Step </button> </Link>
            <Link to = '/wizard/StepThree'> <button className = 'btn' onClick = {() => updateStepTwo(this.state.image)} > Next Step </button> </Link>
        </div>
    )
  }
}

function mapStateToProps(state){
    const {image} = state;
    return{
        image
    }
}

export default connect(mapStateToProps, {updateStepTwo, cancel}) (StepTwo);