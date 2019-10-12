import React, { Component } from 'react';
import firebase from "../../firebase/config";

export default class EditarGoles extends Component {
    constructor(props){
        super(props);
        this.state = {
          id: props.match.params.id,
          home: '',
          away: '',
          title: '',
          date: '',
          season: '',
          frame: '',
          data: [],
        }
        this.edit = this.edit.bind(this);
        this.myHome = this.myHome.bind(this);
        this.myAway = this.myAway.bind(this);
        this.myTitle = this.myTitle.bind(this);
        this.myDate = this.myDate.bind(this);
        this.mySeason = this.mySeason.bind(this);
        this.myFrame = this.myFrame.bind(this);
      }
    
      componentDidMount(){
        firebase.db.collection("goals").doc(this.state.id).get()
        .then(res => {
          console.log(res.docs);
          this.setState({
            home: res.data().home,
            away: res.data().away,
            title: res.data().title,
            date: res.data().date,
            season: res.data().season,
            frame: res.data().frame,
          });
        })
        .catch(err => {
          console.log(err);
        });
    
        firebase.db.collection("teams").orderBy('team', 'asc').get()
        .then(res => {
          console.log(res.docs[0].data());
          this.setState({
            data: res.docs
          });
          console.log(this.state.data[0].data().img);
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
    
      myLang(event){
        this.setState({
          lang: event.target.value
        });
      }
    
      edit(){
        let editData = {
          home: this.state.home,
          away: this.state.away,
          title: this.state.title,
          date: this.state.date,
          season: this.state.season,
          frame: this.state.frame
        }
        firebase.db.collection("goals").doc(this.state.id).set(editData, {merge: true})
        .then(res => {
          console.log(res);
          window.alert("Data edited");
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
                      <div className="input-field col s12 l6 center-align">
                        <img src={this.state.home} width="140px" />
                        <select class="browser-default" onChange={this.myHome}>
                            <option value="" disabled selected>Local</option>
                            {this.state.data.map((item, index) => {
                              return(
                                <option key={index} value={item.data().flag}>{item.data().country}</option>
                              )
                            })}
                          </select>
                      </div>
                      <div className="input-field col s12 l6 center-align">
                        <img src={this.state.away} width="140px" />
                        <select class="browser-default" onChange={this.myAway}>
                          <option value="" disabled selected>Visitante</option>
                            {this.state.data.map((item, index) => {
                              return(
                                <option key={index} value={item.data().flag}>{item.data().country}</option>
                              )
                            })}
                          </select>
                      </div>
                      <div className="input-field col s12 l12">
                        <input id="title" type="text" className="validate" value={this.state.title} onChange={this.myTitle} />
                        <label className="active" htmlFor="title">Titulo</label>
                      </div>
                      <div className="input-field col s12 l6">
                        <input id="date" type="date" className="validate" value={this.state.date} onChange={this.myDate} />
                        <label className="active" htmlFor="date">Fecha</label>
                      </div>
                      <div className="input-field col s12 l6">
                        <input id="season" type="text" className="validate" value={this.state.season} onChange={this.mySeason} />
                        <label className="active" htmlFor="season">Temporada</label>
                      </div>
                      <div className="input-field col s12 l12">
                        <textarea id="frame" class="materialize-textarea" value={this.state.frame} onChange={this.myFrame}></textarea>
                        <label className="active" htmlFor="frame">Frame</label>
                      </div>
                    </div>
                    <a class="waves-effect waves-light btn right" onClick={this.edit}><i class="material-icons left">save</i>Editar</a>
                  </div>
              </div>
          )
      }
}