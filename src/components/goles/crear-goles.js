import React, { Component } from 'react';
import firebase from "../../firebase/config";

export default class CrearGoles extends Component {
    constructor(props){
        super(props);
        this.state = {
          home: '',
          away: '',
          title: '',
          date: '',
          season: '',
          frame: '',
          data: []
        }
        this.save = this.save.bind(this);
        this.myHome = this.myHome.bind(this);
        this.myAway = this.myAway.bind(this);
        this.myTitle = this.myTitle.bind(this);
        this.myDate = this.myDate.bind(this);
        this.mySeason = this.mySeason.bind(this);
        this.myFrame = this.myFrame.bind(this);
      }
    
      componentDidMount(){
        firebase.db.collection("teams").orderBy('country', 'asc').get()
        .then(res => {
          console.log(res.docs);
          this.setState({
            data: res.docs
          });
          console.log(this.state.data[0].data());
        })
        .catch(err => {
          console.log(err);
        });
      }
    
      myHome(event){
        this.setState({
          home: event.target.value
        });
      }
    
      myAway(event){
        this.setState({
          away: event.target.value
        });
      }
    
      myTitle(event){
        this.setState({
          title: event.target.value
        });
      }
    
      myDate(event){
        this.setState({
          date: event.target.value.toString()
        });
      }
    
      myFrame(event){
        this.setState({
          frame: event.target.value
        });
      }
    
      mySeason(event){
        this.setState({
          season: event.target.value
        });
      }
    
      save(){
        let toSave = {
          home: this.state.home,
          away: this.state.away,
          title: this.state.title,
          date: this.state.date,
          season: this.state.season,
          frame: this.state.frame
        }
        firebase.db.collection("goals").add(toSave)
        .then(res => {
          console.log(res);
          window.alert("Data added");
        })
        .catch(err => {
          console.log(err);
          window.alert("Error");
        })
      }
    
      render() {
          return (
              <div className="row">
                  <div className="col s12 l10 offset-l1">
                    <div className="row">
                      <div className="input-field col s12 l6">
                        <select className="browser-default" onChange={this.myHome}>
                            <option value="" disabled selected>Elige tu pais Local</option>
                            {this.state.data.map((item, index) => {
                              return(
                                <option key={index} value={item.data().flag}>{item.data().country}</option>
                              )
                            })}
                          </select>
                      </div>
                      <div className="input-field col s12 l6">
                        <select className="browser-default" onChange={this.myAway}>
                            <option value="" disabled selected>Elige tu pais Visitante</option>
                            {this.state.data.map((item, index) => {
                              return(
                                <option key={index} value={item.data().flag}>{item.data().country}</option>
                              )
                            })}
                          </select>
                      </div>
                      <div className="input-field col s12 l12">
                        <input id="title" type="text" className="validate" onChange={this.myTitle} />
                        <label htmlFor="title">Titulo</label>
                      </div>
                      <div className="input-field col s12 l6">
                        <input id="date" type="date" className="validate" onChange={this.myDate} />
                        <label htmlFor="date">Fecha</label>
                      </div>
                      <div className="input-field col s12 l6">
                        <input id="season" type="text" className="validate" onChange={this.mySeason} />
                        <label htmlFor="season">Temporada</label>
                      </div>
                      <div className="input-field col s12 l12">
                        <textarea id="frame" className="materialize-textarea" onChange={this.myFrame}></textarea>
                        <label htmlFor="frame">Frame</label>
                      </div>
                    </div>
                    <a class="waves-effect waves-light btn right" onClick={this.save}><i class="material-icons left">save</i>Guardar</a>
                  </div>
              </div>
          )
      }
}