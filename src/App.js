// import "./App.css"; -- LO ELEIMINO PORQUE SINO SE TRANSFIERE EL STYLE A TODOS LOS SUBCOMPONENTES --
import Navbar from './Navbar';
import Home from './Home';
//en versiones anetriores al 17 se necesitaba importar react de react     -- import React from 'react; --
//es un component, que luego va a ser llamado por el index(rendizador)
//es una función y siempre debe incluir un return ( -- con el contenido --)
// el logo se llama desestructurado {logo} desde la importación
//el return es el content, no es un html sino .jsx que luego cuando son renderizadas se muestran como html al inspeccionar
//big different es como ponemos clase, aca usamos className no class, pero al ser renderizadas se ven como class
//adentro podemos utilizar values and variables
//El APP.JS es el "root component" y dentro de ellas puedo llamar a más componentes como el navbar, el aside or blogDetails.js y cada uno de estos subcomponentes puede tener más subcomponentes adentro
function App() {
  //variables usadas en el content
  const title = 'Welcome to the new blog';
  const likes = 50;
  //boolean and object not allow
  // const person = {name: 'Yoshi', age: 30}; -- { person } -- NOT

  // ALLOWED VALUES
  // <p> { 10 } </p>
  // <p> { 'Hello there!' } </p>
  // <p> { [1,2,3,4,5] } </p>
  // <p> { Math.random() * 10 } </p>


  // COLOCACIÓN DE COMPONENTES, se importa y luego se coloca el tag con el nombre del componente -- <Navbar></Navbar> or <Navbar /> --siempre tiene que estar cerrada (aparece en violeta)
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
      <Home />
        <h1> { title } </h1>
        <p> Liked { likes } times</p>
       
        
      </div>
    </div>
  );
}
//importante exportar el componente para poder incorporarlo a nuestro renderizador -- index.js --
export default App;
