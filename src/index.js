import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//components
import AgregarEquipo from './components/equipos/agregar-equipo';
import EditarEquipo from './components/equipos/editar-equipo';
import ListaEquipos from './components/equipos/lista-equipos';
import CrearGoles from './components/goles/crear-goles';
import EditarGoles from './components/goles/editar-goles';
import ListaGoles from './components/goles/lista-goles';
import Goles from './components/goles/goles';
import Menu from './components/menu';
import Dashboard from './components/dashboard';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: 'Seleccion Mexicana'
        }
    }

    render() {
        return (
            <Router>
                <Menu title={this.state.title}></Menu>
                <Route path="/" exact component={Goles} />
                <Route path="/editar-goles/:id" component={EditarGoles} />
                <Route path="/crear-goles" component={CrearGoles} />
                <Route path="/lista-goles" component={ListaGoles} />
                <Route path="/equipos" component={ListaEquipos} />
                <Route path="/editar-equipo/:id" component={EditarEquipo} />
                <Route path="/agregar-equipo" component={AgregarEquipo} />
                <Route path="/dashboard" component={Dashboard} />
            </Router>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);