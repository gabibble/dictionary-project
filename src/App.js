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
            Dictionary{" "}
          </h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Julia</footer>
      </div>
    </div>
  );
}

export default App;

/* */
