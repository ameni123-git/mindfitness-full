import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import DashboardHeader from './DashboardHeader';
const Formation = props => (
  <tr>
    <td>{props.formation.formateurname}</td>
    <td>{props.formation.titre}</td>
    <td>{props.formation.lieu}</td>
    <td>{props.formation.date_debut.substring(0,10)}</td>
    <td>{props.formation.nb_place}</td>
    <td>{props.formation.difficulté}</td>
    <td>
      <Link to={"/edit/"+props.formation._id}>edit</Link> | <a href="#" onClick={() => { props.deleteFormation(props.formation._id) }}>delete</a>
    </td>
  </tr>
)

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.deleteFormation= this.deleteFormation.bind(this)

    this.state = {formations: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/formations/')
      .then(response => {
        this.setState({ formations: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteFormation(id) {
    axios.delete('http://localhost:5000/formations/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      formations: this.state.formations.filter(el => el._id !== id)
    })
  }

  formationList() {
    return this.state.formations.map(currentformation => {
      return <Formation formation={currentformation} deleteFormation={this.deleteFormation} key={currentformation._id}/>;
    })
  }

  render() {
    return (
      <div className="dashboard">
        <DashboardHeader/>
        <div className ="container">
          <div className="dashboard__content">
            <div className="table">
            <table>
          <thead>
            <tr>
              <th>Formateur</th>
              <th>Titre </th>
              <th>Lieu</th>
              <th>Date</th>
              <th>Nombre de places </th>
              <th>Difficulté </th>
            </tr>
          </thead>
          <tbody>
            { this.formationList() }
          </tbody>
        </table>
            </div>
          
          </div>
        </div>
      </div>
    )
  }
}