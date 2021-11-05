import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.png";
import "./Dashboard.css";
export default class Navbar extends Component {

  render() {
    return (
      <div className = "dashboardHeader">
        <div className ="container">
        <img src={logo} alt="mindfitness logo" /> 
          <ul>
            <li><Link to="/" className="navbar-brand">Liste formations</Link></li>
            <li><Link to="/create" className="nav-link">Ajouter Formation </Link></li>
         </ul>
        </div>
        </div>
        
     
      
     
    );
  }
}