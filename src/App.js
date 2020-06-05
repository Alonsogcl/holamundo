import React, {Component} from 'react';
//import React from 'react';
import logo from './logo.svg';
import './App.css';

/*function Hello(props){
return <h2>{props.title}</h2>
}*/

//Definiendo nuestro componente como una función
//const Hello=(props)=><h2>{props.title}</h2>

//TODOS LOS COMPONENTES QUE HAGAMOS EN REACT TIENEN QUE ACTUAR COMO FUNCIONES PURAS Y NO MODIFICAR SUS PROPIEDADES

/*Primer componente con state: Las props que le pasamos a un componente cambian su renderizado y es muy util para cambiar 
el comportamiento de un componente pero se necesita saber como se puede hacer para que sean
 reactivos que reaccionen a los cambios para ello se necesita conocer y usar el state*/
class Contador extends Component{
  constructor(){ //Para añadir el state a nuestro componente hay que utilizar el método constructor de la clase 
    super()        //y se llama el método super() que ejecutará el constructor de la clase que extendemos, de Component en este caso.
    this.state={contador:1} //Aquí se inicia el state del componente para ello se usa this que es el contexto del componente,
                            // apuntamos a la propiedad state y le pasamos un objeto con el estado inicial del componente
   //setInterval(()=> this.state.contador=this.state.contador+1, 1000) //Ejecuta una función que incrementa el contador cada segundo que pasa
   //No se debe actualizar directamente el estado del componente sino con setState, porque React  optimiza cuando debe hacer los cambios en el 
   //árbol de elementos del navegador para ello tiene una cola en la que va priorizando el trabajo para reflejar los cambios de nuestros componentes.                    
   //Hay que usar setState que preguntará cuando es el momento para actualizar el componente
   setInterval(()=> {this.setState({contador: this.state.contador+1})
   }, 1000)
  }

  render(){ //Se actualiza el método render eliminando la constante
    //const contador=0
    //return <span>{contador}</span>
    return <span>{this.state.contador}</span> //se usa el state para recuperar el valor del contador
  }
}
/**********Fin Primer componente con state************/

class Title extends Component{ 
  render(){ //renderiza una etiqueta h1
    return <h1>{this.props.text}</h1> 
  }
}
//Valor por defecto para las props cuando no se le envía datos
Title.defaultProps={
  text:'Titulo por defecto' //Se asignan todas las props que queremos tengan un valor por defecto
}

//Definiendo nuestro componente como una clase
class Hello extends Component{
  render(){ //método en el que se tiene que devolver el elemento que queremos renderizar
    return <h2>{this.props.title}</h2>  //El método Render no tiene parámetros por lo que para acceder a las props debemos referirnos al contexto this
  }
}

class Text extends Component{
  render(){ 
     const { //Ordenarlas alfabeticamente y una debajo de la otra
       arrayOfNumbers, 
       isActivated, 
       multiply,
       objectWithInfo,
       //title
    }=this.props  //Destructuración del objeto para escribirlo una sola vez y no estar repitieneod las referecnias this.props 
     //Utilizado en la primera linea del render para acceder a todas las props que se utilizarán y así simplificar las referencias
     //se pueden quitar las referencias de nuestro código y queda más limpio por ejemplo const textoSegunBool = this.props.isActivated ? 'On' : 'Off'

    //El método Render siempre debe devolver un elemento
    /**const textoSegunBool=this.props.boolean ? 'Es Cierto!':'Falso'**/
    
    //this.props.title=<h3>Otra cosa</h3> //No se puede modificar el valor de una prop, marca error
    //TypeError: Assignment to read-only properties is not allowed in strict mode

    //const textoSegunBool = isActivated ? 'On' : 'Off'
    //const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2 )
    const mappedNumbers = arrayOfNumbers.map(multiply)
    
  return(
    <div>
      {this.props.title} {/*Para evaluar la prop se utilizan llaves*/}
      <p>{mappedNumbers.join(', ')}</p> 
      <p>{objectWithInfo.key}</p>
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
        <Text    //Tipo de props
          arrayOfNumbers={[2,3,10]} //Listas
          objectWithInfo={{key:'First Value', key2: 'otherValue'}} //Objetos
          isActivated //Boleanos
          number={2}  //Números
          multiply={(number)=>number*4} //Funciones
          text='Texto en string'  //Strings
          title= {<h1>Este es el titulo</h1>}//Elementos de React
        />
        <Title text="Este es otro mensaje"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Primer componente con State</h1>
        <Contador/>
      </header>
    </div>
  );
}

export default App;
/*Funciones puras
function sumaPura(a, b){
  return a + b; //Devuelve el mismo resultado para los mismos parámetros de entrada
  //La lógica de la función no produce efectos colaterales fuera de ella
}

function sumaImpura(a, b){
  return a + b + Match.random(); //No siempre devuelve el mismo resultado en cada ejecución aunque los parámetros sean los mismos
}

let b=2 //Utiliza una variable externa y el parámetro para la suma
function sumaImpura2(a){
  b= a + b;//Crea un efecto externo a la función y cada vez que invoquemos a la función el resultado será diferente a pesar de pasarle el mismo parámetro
  return b; //Además de devolver el resultado modifica el valor de la variable externa  en cada ejecución 
}

Debemos usar nuestros componentes como si fueran funciones puras, solo que sus parámetros son las props
React no permite que las props puedan ser modificadas, son de solo lectura, no podemos alterar su valor, son inmutables

this.props.title=<h3>Otra cosa</h3>
*/