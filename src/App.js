import React from 'react';
import './App.css';
import { Button } from 'antd';
import Main from './components/Main'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Button type="primary">Primary</Button>
      </header>
    </div>
  );
}

export default App;
