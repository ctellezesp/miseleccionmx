import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/dashboard.css';

export default class Dashboard extends Component {
    render(){
        return(
            <div className="row">
                <div className="col s12 l8 offset-l2">
                    <div className="row">
                        <div className="col s12 l6">
                            <Link to="/lista-goles">
                                <div className="card card-link center-align">
                                    <i className="material-icons large">view_list</i>
                                    <h4>Lista Goles</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="col s12 l6">
                            <Link to="/crear-goles">
                                <div className="card card-link center-align">
                                    <i className="material-icons large">add</i>
                                    <h4>Añadir Partido</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="col s12 l6">
                            <Link to="/equipos">
                                <div className="card card-link center-align">
                                    <i className="material-icons large">view_list</i>
                                    <h4>Ver Paises</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="col s12 l6">
                            <Link to="/agregar-equipo">
                                <div className="card card-link center-align">
                                    <i className="material-icons large">add</i>
                                    <h4>Agregar Pais</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}