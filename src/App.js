import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import Main from './components/Main'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'Alexs'
    }
  }

  render() {
    const { userName } = this.state;
    return (
      <div className="App" >
        <header className="App-container">
          <Main userName={userName} />
        </header>
      </div>
    );
  }

}
