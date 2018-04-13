import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Dashboard from './component/dashboard/Dashboard';
// import Wizard from './component/wizard/Wizard';
import Header from './component/header/Header';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import routes from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    
  }
}

export default connect(mapStateToProps) (App);
