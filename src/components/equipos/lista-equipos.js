import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "../../firebase/config";

export default class ListaEquipos extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        firebase.db.collection("teams").orderBy('country', 'asc').get()
        .then(res => {
            console.log(res);
            this.setState({
                data: res.docs
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    render(){
        return (
            <div className="row">
              <div className="col s12 l10 offset-l1">
                <Link to="/agregar-equipo" className="waves-effect waves-light btn right"><i className="material-icons left">add</i>Agregar Equipo</Link>
                <table className="striped centered responsive-table">
                  <thead>
                    <tr>
                        <th>Pais</th>
                        <th>abr</th>
                        <th>edit</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.data.map((item, index) => {
                      return (<tr key={index}>
                        <td>{item.data().country}</td>
                        <td>{item.data().abr}</td>
                        <td><Link to={`/editar-equipo/${item.ref.id}`}><i className="material-icons">edit</i></Link></td>
                      </tr>)
                    })}
                  </tbody>
                </table>
              </div>
            </div>
        )
    }
}