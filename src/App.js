import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ImageRow from './components/img-row/img-row';

class App extends Component {
  render() {
    return (
      <div >
      <div className="App"> 
         <header className="App-header">
          <h1 className="App-title">Generator</h1>
        </header>
        </div>
        <ImageRow/>
        </div>
    );
  }
}

export default App;
