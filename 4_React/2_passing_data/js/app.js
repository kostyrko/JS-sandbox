import React from 'react';
import ReactDOM from "react-dom";

import PickDroid from './PickDroid'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      droids: []
    }
  }

  addDroid = (droid) => {
    this.setState(prevState => ({
      droids : [...prevState.droids, droid]
    }))
  }

  render(){
    return (<div>
      <PickDroid name="R2D2" onPick={this.addDroid}/>
      <PickDroid name="C3PO" onPick={this.addDroid}/>
      <PickDroid name="BB8" onPick={this.addDroid}/>
      {this.state.droids.length > 0 &&
        <ul>
          {this.state.droids.map((droid,i)=>
          <li key={i}>{droid}</li>)}
        </ul> }
    </div>)
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);