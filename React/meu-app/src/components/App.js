import React from "react";

class App extends React.Component{
  render(){
    return(
      <>
      <p>Meu primeiro parágrafo...</p>
      <p>Meu nuds</p>
      <div>
        <pre>Cansei de ser trouxa...</pre>
      </div>
      <p>{ new Date().toLocaleDateString("pt-BR") }</p>
      </>

    )
  }
}

export default App;