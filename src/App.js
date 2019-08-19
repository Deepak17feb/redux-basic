import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
class App extends Component {
  state= {
    age: 21
  }

  render() {
    return (
      <div className="App">
        <h1>Age: {this.props.age}</h1>
        <button onClick={this.props.onAgeUp}>Age up</button>
        <button onClick={this.props.onAgeDown}>Age down</button>
      </div>
    );
  }
}

const mapDispachtoProps =(state)=> {
  return{
    age:state.age
  }
}

const mapDispachtoAge =(dispach)=> {
  return {
    onAgeUp: () => dispach({
      type: 'AGE_UP'
    }),
    onAgeDown: () => dispach({
      type: 'Age_Down'
    })
  }
}

export default connect(mapDispachtoProps, mapDispachtoAge) (App);
