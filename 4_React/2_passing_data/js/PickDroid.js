import React from 'react';

class PickDroid extends React.Component {
  handleClick = () => {
    // console.log('clicked');
    // console.log(this.props.onPick);
    if(typeof this.props.onPick === 'function') {
      // console.log(this.props.name);
      this.props.onPick(this.props.name);
    }
  }


  render(){
    return (<div>
      <h1>{this.props.name}</h1>
      <button onClick={this.handleClick}>I choose this droid</button>
    </div>)
  }
}

export default PickDroid;