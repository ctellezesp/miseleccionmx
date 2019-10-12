import React, { Component } from 'react';
import firebase from "../../firebase/config";

export default class AgregarEquipo extends Component {
    constructor(props){
        super(props);
        this.state = {
            country: '',
            flag: '',
            abr: ''
        }
        this.save = this.save.bind(this);
        this.myCountry = this.myCountry.bind(this);
        this.myFlag = this.myFlag.bind(this);
        this.myAbr = this.myAbr.bind(this);
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

    save(){
        console.log(this.state);
        firebase.db.collection("teams").add(this.state)
        .then(res => {
            console.log(res);
            window.alert("Datos agregados");
        })
        .catch(err => {
            console.log(err);
            window.alert("Error");
        });
    }

    render(){
        return(
            <div className="row">
                <div className="col s12 l8">
                    <div className="row">
                        <div className="input-field col s12 l9">
                            <input id="country" type="text" className="validate" onChange={this.myCountry} />
                            <label htmlFor="country">Pais</label>
                        </div>
                        <div className="input-field col s12 l3">
                            <input id="abr" type="text" className="validate" onChange={this.myAbr} />
                            <label htmlFor="abr">Abreviatura</label>
                        </div>
                        <div className="input-field col s12 l12">
                            <input id="img" type="text" className="validate" onChange={this.myFlag} />
                            <label htmlFor="img">Logo</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light btn right" onClick={this.save}><i className="material-icons left">save</i>Guardar</a>
                </div>
                <div className="col s12 l4">
                    <img src={this.state.flag} width="300px" height="auto" />
                </div>
            </div>
        )
    }
}