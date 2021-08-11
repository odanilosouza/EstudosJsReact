/*
Uma forma de ser feito

import React from 'react';

class App3 extends React.Component{
  constructor(props){
    super(props);
    this.state = { nome : '' }
    this.changeNome = this.changeNome.bind(this);
  }
  changeNome = function(evt){
    this.setState({ nome : evt.target.value});
  }
  render(){
    return(
      <>
        nome: <input type='text' value={this.state.nome} onChange={this.changeNome}/>
        <p>Olá {this.state.nome}</p>
      </>
    );
  }
}

export default App3;*/

//Pode ser feito conforme exemplo abaixo:
import React from 'react';

class App3 extends React.Component{
  constructor(props){
    super(props);
    this.state = { nome : '' }
  }
  changeNome = (evt) => {
    this.setState({ nome : evt.target.value});
  }
  render(){
    return(
      <>
        nome: <input type='text' value={this.state.nome} onChange={this.changeNome}/>
        <p>Olá {this.state.nome}</p>
      </>
    );
  }
}

export default App3;