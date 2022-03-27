import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <img src={logo} className="App-logo img-fluid" alt="logo" />
            Dictionary
          </h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          This project was created by{" "}
          <a
            href="https://www.juliagiebultowicz.com/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Julia Giebultowicz
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/gabibble/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

/* */
