import logo from './logo.svg';
import './App.css';
import Projects from './Projects.js';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <img src="pixelMe.png" width="50" height="50" alt="pixel Me" />
          <h1>Jianna Braza's Portfolio</h1>
        </nav>
      </header>
      <main className="p-5">
        <Projects />
      </main>
    </div>
  );
}

export default App;
