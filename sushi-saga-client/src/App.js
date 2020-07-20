import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushiOG: [],
    renderFour: 0
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(arr => this.setState({sushiOG: arr}))
  }

  moreSushi = () => {
    this.setState(prevState => ({renderFour: prevState.renderFour + 4}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.state.sushiOG} 
          renderFour={this.state.renderFour}
          moreSushi={this.moreSushi}
          />
        <Table />
      </div>
    );
  }
}

export default App;