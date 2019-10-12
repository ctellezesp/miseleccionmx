import React, { Component } from 'react';
import firebase from "../../firebase/config";

export default class EditarEquipo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id,
            country: '',
            flag: '',
            abr: ''
        }
        this.edit = this.edit.bind(this);
        this.myCountry = this.myCountry.bind(this);
        this.myFlag = this.myFlag.bind(this);
        this.myAbr = this.myAbr.bind(this);
    }

    componentDidMount(){
        console.log(this.state.id);
        firebase.db.collection("teams").doc(this.state.id).get()
        .then(res => {
            console.log(res.data());
            this.setState({
                country: res.data().country,
                flag: res.data().flag,
                abr: res.data().abr
            });
        })
    }

    myCountry(event){
        this.setState({
            country: event.target.value
        });
    }

    myFlag(event){
        this.setState({
            flag: event.target.value
        });
    }

    myAbr(event){
        this.setState({
            abr: event.target.value
        });
    }

    edit(){
        let editData = {
          country: this.state.country,
          flag: this.state.flag,
          abr: this.state.abr,
        }
        firebase.db.collection("teams").doc(this.state.id).set(editData, {merge: true})
        .then(res => {
          console.log(res);
          window.alert("Data edited");
        })
        .catch(err => {
          console.log(err);
          window.alert("Error");
        })
      }

    render(){
        return(
            <div className="row">
                <div className="col s12 l8">
                    <div className="row">
                        <div className="input-field col s12 l9">
                            <input id="country" type="text" className="validate" value={this.state.country} onChange={this.myCountry} />
                            <label className="active" htmlFor="country">Pais</label>
                        </div>
                        <div className="input-field col s12 l3">
                            <input id="abr" type="text" className="validate" value={this.state.abr} onChange={this.myAbr} />
                            <label className="active" htmlFor="abr">Abreviatura</label>
                        </div>
                        <div className="input-field col s12 l12">
                            <input id="img" type="text" className="validate" value={this.state.flag} onChange={this.myFlag} />
                            <label className="active" htmlFor="img">Logo</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light btn right" onClick={this.edit} ><i className="material-icons left">save</i>Edit</a>
                </div>
                <div className="col s12 l4">
                    <img src={this.state.flag} width="300px" height="auto" />
                </div>
            </div>
        )
    }
}