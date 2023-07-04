import logo from './platzi.webp';
import './App.css';

function App() { // esta funcion es un componente de react (los componentes usan UpperCamelCase)
  return (
// todo lo que retorna un componente son los elementos
     <div className="App">     

     <TodoItem />
     <TodoItem />
     <TodoItem />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar. 
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's learn React
        </a>
      </header>
    </div>
  );
}

// crear otro componente:

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llorar al monte</p>
      <span>X</span>
    </li>
  );
}

export default App;
