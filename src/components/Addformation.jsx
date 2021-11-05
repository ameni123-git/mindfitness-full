import React, { Component } from 'react';
import "./Addformation.css";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class Addformation extends Component {
  constructor(props) {
    super(props);

    this.onChangeFormateurname = this.onChangeFormateurname.bind(this);
    this.onChangeTitre = this.onChangeTitre.bind(this);
    this.onChangeLieu = this.onChangeLieu.bind(this);
    this.onChangeDate_debut = this.onChangeDate_debut.bind(this);
    this.onChangeNombre_place = this.onChangeNombre_place.bind(this);
    this.onChangeDifficulté = this.onChangeDifficulté.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      formateurname: '',
      titre: '',
      lieu: '',
      date_debut: new Date(),
      formateurs: [] ,
      nb_place : 0,
      difficulté : ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/formateurs/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            formateurs: response.data.map(formateur => formateur.formateurname),
            formateurname: response.data[0].formateurname
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeFormateurname(e) {
    this.setState({
      formateurname: e.target.value
    })
  }

  onChangeTitre(e) {
    this.setState({
      titre: e.target.value
    })
  }

  onChangeLieu(e) {
    this.setState({
      lieu: e.target.value
    })
  }

  onChangeDate_debut(date) {
    this.setState({
      date_debut: date
    })
  }
  onChangeDifficulté(e) {
    this.setState({
      difficulté: e.target.value
    })
  }
  onChangeNombre_place(e) {
    this.setState({
      nb_place: e.target.value
    })
  }
  
  
  onSubmit(e) {
    e.preventDefault();

    const formation  = {
      formateurname: this.state.formateurname,
      titre: this.state.titre,
      lieu : this.state.lieu,
      date_debut : this.state.date_debut,
      nb_place : this.state.nb_place,
      difficulté : this.state.difficulté
    }

    console.log(formation);

    axios.post('http://localhost:5000/formations/add', formation)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div className="ajouter__formation">
      <h1>Ajouter une formation</h1>
      <form onSubmit={this.onSubmit}>
        
          <label>Formateur: </label>
          <select ref="formateurInput"
              required
              className="input__section"
              value={this.state.formateurname}
              onChange={this.onChangeFormateurname}>
              {
                this.state.formateurs.map(function(formateur) {
                  return <option 
                    key={formateur}
                    value={formateur}>{formateur}
                    </option>;
                })
              }
          </select>
        
        <div className="form-group"> 
          <label>Titre </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.titre}
              onChange={this.onChangeTitre}
              />
        </div>
        <div className="form-group">
          <label>Lieu </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.lieu}
              onChange={this.onChangeLieu}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date_debut}
              onChange={this.onChangeDate_debut}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Nombre de place  </label>
          <input 
              type="Text" 
              className="form-control"
              value={this.state.nb_place}
              onChange={this.onChangeNombre_place}
              />
        </div>
        <div className="form-group">
          <label>Difficulté </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.difficulté}
              onChange={this.onChangeDifficulté}
              />
        </div>
        <br/>
        <div className="form-group">
          <input type="submit" value="Ajouter" className="btnAdd" bgColor="#FF1481" />
        </div>
      </form>
    </div>
    )
  }
}