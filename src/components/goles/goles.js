import React, { Component } from 'react';
import firebase from "../../firebase/config";
import '../styles/goles.css';

export default class Goles extends Component {
    constructor(props){
        super(props);
        this.state = {
          current: '',
          data: []
        }
        this.myFrame = this.myFrame.bind(this);
      }
    
      componentDidMount(){
        firebase.db.collection("goals").orderBy('date', 'desc').get()
        .then(res => {
          console.log(res.docs);
          this.setState({
            data: res.docs,
            current: res.docs[0].data().frame
          })
        })
        .catch(err => {
          console.log(err);
        });
      }
    
      myFrame(val){
        this.setState({
          current: val
        });
        console.log(val);
      }
    
    
      render() {
        return (
            <div className="row mt-10">
              <div className="col s12 m8 offset-m2">
                <div className="video-container" id="play">
                  <iframe src={this.state.current} width="640" height="480" allowFullScreen></iframe>
                  <a style={{position: 'absolute', top: 0, left: 0}} href={this.state.current} target="_blank">&#128279;</a>
                </div>
              </div>
              <div className="col s12">
                <div className="gallery">
                  {this.state.data.map((item, index)=> {
                  return(
                    <div key={index} className="card center-align" onClick={() => this.myFrame(item.data().frame)}>
                        <div className="card-content">
                          <div className="row center-align">
                              <div className="col s6">
                                  <img src={item.data().home} />
                              </div>
                              <div className="col s6">
                                  <img src={item.data().away} />
                              </div>
                          </div>
                      </div>
                      <div className="card-action center-align">
                          <span>{item.data().title}</span>
                      </div>
                      <div className="season">{item.data().season}</div>
                    </div>
                  ) 
                  })}
                </div>
              </div>
            </div>
        )
      }
}