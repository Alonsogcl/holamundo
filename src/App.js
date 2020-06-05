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

class Text extends Component{
  render(){ //El método Render siempre debe devolver un elemento
    /**const textoSegunBool=this.props.boolean ? 'Es Cierto!':'Falso'**/
    const textoSegunBool = this.props.isActivated ? 'On' : 'Off'
    const mappedNumbers = this.props.arrayOfNumbers.map( n => n * 2 )
    
  return(
    <div>
      <p>{mappedNumbers.join(', ')}</p> 
      <p>{this.props.objectWithInfo.key}</p>
    </div>
  )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hello from props'/>
        {/*<Text number={2} text='Texto en string' boolean/>//Cuando indicamos el uso de una prop y no especificamos su valor entonces por default será true*/
        /*Esta forma de utilizar las props de tipo boleano para pasar directamente true
        es muy útil a la hora de usarlo para activar ciertas funcionalidades */}
        <Text 
          arrayOfNumbers={[2,3,10]}
          objectWithInfo={{key:'First Value', key2: 'otherValue'}}
          isActivated
          number={2} 
          text='Texto en string' 
        />
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
