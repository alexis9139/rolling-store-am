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
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          {/* <Button type="primary">Primary</Button> */}
        </header>
      </div>
    );
  }

}
