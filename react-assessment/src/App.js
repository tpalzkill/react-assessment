import React, { Component } from 'react';
import Item from './components/item.js';
import InputField from './components/inputField'

const tableClasses = `table is-bordered`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Item/>
        <table className={tableClasses}>
          <tr><th>To Do List</th></tr>
          <tr><td>Gotta do this</td></tr>
          <tr><td>Gotta do that</td></tr>
          <tr><td>and this</td></tr>
        </table>
        <InputField/>
      </div>
    );
  }
}

export default App;
