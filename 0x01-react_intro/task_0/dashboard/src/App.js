import logo from './holberton_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" />
        <h1>School Holberton</h1>
      </header>
      <hr id="hr" />
      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>
      <footer className="App-footer">
        <hr id="hr-footer" />
        <p className="footer-p">Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
