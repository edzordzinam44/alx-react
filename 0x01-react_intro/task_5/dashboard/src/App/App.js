import logo from './holberton_logo.png';
import './utils/utils.js';
import './App.css';
import '../Notifications.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" />
        <h1>School Holberton</h1>
      </header>
      {/* <hr id="hr" /> */}
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password" id='password'>Password:</label>
          <input type="password" id="password" name="password" required/>
        </div>
        <button type="submit">OK</button>
      </main>
      <footer className="App-footer">
        {/* <hr id="hr-footer" /> */}
        <p className="footer-p">Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
