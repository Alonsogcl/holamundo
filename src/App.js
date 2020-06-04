import React, {Component} from 'react';
//import React from 'react';
import logo from './logo.svg';
import './App.css';

/*function Hello(props){
return <h2>{props.title}</h2>
}*/

//Definiendo nuestro componente como una función
//const Hello=(props)=><h2>{props.title}</h2>


//Definiendo nuestro componente como una clase
class Hello extends Component{
  render(){ //método en el que se tiene que devolver el elemento que queremos renderizar
    return <h2>{this.props.title}</h2>  //El método Render no tiene parámetros por lo que para acceder a las props debemos referirnos al contexto this
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hello from props'/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
