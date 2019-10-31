import React from 'react';
import './App.css';

class App extends React.Component {
  add1() {
    this.props.add1()
  }
  render() {
    return (
      <div>
        <div>点击了第<span>{this.props.value}次</span></div>
        <button onClick={this.add1.bind(this)}>+1</button>
      </div >
    )
  }
}
export default App;
