import './App.css';
import About from './Components/About';
import NAvbar from './Components/NAvbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
// import { BrowserRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>

      <NAvbar title="textUtil" aboutText="About US" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode}  />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the text to Analyze" mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
