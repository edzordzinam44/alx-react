import React from 'react';
import './App.css';
import holbertonLogo from './assets/holberton-logo.png';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  return (
    <div className="App">
      {/* App-header */}
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="Holberton logo"/>
      </header>

      {/* App-body */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
	  <form>
	    <label htmlFor='email'>Email:</label>
	      <input type='email' name='email'></input>
	      <label htmlFor='password'>Password:</label>
	      <input type='password' name='password'></input>
	      <button>OK</button>
	  </form>
      </div>

      {/* App-footer */}
      <div className="App-footer">
        <p>Copyright {getFullYear} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
