import React, { Component } from 'react';
import Nav from './Nav';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Fio', age: 21, belt: 'green', id: 1},
      { name: 'Fiore', age: 22, belt: 'black', id: 2},
      { name: 'Fiorella', age: 23, belt: 'red', id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <Nav ninjas={this.state.ninjas}/>
        <AddNinja />
      </div>
    );
  }
}

export default App;
