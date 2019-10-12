import React, { Component } from 'react';
import firebase from "../../firebase/config";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/table.css';

export default class ListaGoles extends Component {
    constructor(props){
        super(props);
        this.state = {
          goals: []
        }
      }
    
      componentDidMount(){
        firebase.db.collection("goals").orderBy('date', 'desc').get()
        .then(res => {
          console.log(res.docs);
          this.setState({
            goals: res.docs
          })
        })
        .catch(err => {
          console.log(err)
        });
      }
    
      render() {
          return (
              <div class="row">
                  <div class="col s12 l10 offset-l1">
                    <table class="striped centered responsive-table">
                      <thead>
                        <tr>
                            <th>Local</th>
                            <th>Visitante</th>
                            <th>Titulo</th>
                            <th>Temporada</th>
                            <th>Editar</th>
                        </tr>
                      </thead>
    
                      <tbody>
                        {this.state.goals.map((item, index) => {
                          return (<tr key={index}>
                            <td><img src={item.data().home} /></td>
                            <td><img src={item.data().away} /></td>
                            <td>{item.data().title}</td>
                            <td>{item.data().season}</td>
                            <td><Link to={`/editar-goles/${item.ref.id}`}><i className="material-icons play-icon">edit</i></Link></td>
                          </tr>)
                        })}
                      </tbody>
                    </table>
                  </div>
              </div>
          )
      }
}