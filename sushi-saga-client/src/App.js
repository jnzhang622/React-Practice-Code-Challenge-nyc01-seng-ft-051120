import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushiOG: []
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(arr => this.setState({sushiOG: arr}))
  }

  render() {
    console.log(this.state.sushiOG)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushiOG}/>
        <Table />
      </div>
    );
  }
}

export default App;