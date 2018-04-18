import React, {Component} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import StepOne from '../wizard/StepOne';
import StepTwo from '../wizard/StepTwo';
import StepThree from '../wizard/StepThree';


class Wizard extends Component {


    saveChanges(id, values){
        let body = {name: this.state.name, address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip}

        axios.put(`/api/house/${id}`, body).then( response => {
            this.setState({
                houses: response.data
            })
        })
    }

render(){

    

    return(
        <div className = "Wizard">
                <Route path = '/wizard/stepOne' component = {StepOne} />
                <Route path = '/wizard/stepTwo' component = {StepTwo} />
                <Route path = '/wizard/stepThree' component = {StepThree} />
        </div>
    )
  }
}

export default Wizard;