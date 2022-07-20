import { useState } from 'react'; //importo el hook 
const Home = () => {

    //onClick event, cuando lo queremos utilizar, solo colocamos el nombre de la constante en onclick = {nombreEvento} , 
    // sin paréntesis para que no se ejecute directamente, sino solo al hacerse click. se ve por consola del inspector, no terminal
    // const handleClick = () => {
    //     console.log('Hello, ninjas!');
    // }

    //--------------que pasa si colocamos el parametro e, si lo ejecuto con el boton sale en consola una lista larga de propiedades del e
    // const handleClick = (e) => {
    //     console.log('Hello, ninjas!', e);
    // }

    //cuando necesito colocar un parametro pero no puedo usar los parentesis directo en el button porque lo ejecuta, hago esto.
    // const handleClickAgain = (name) => {
    //     console.log('hello ' + name);
    // }
    //---------------
    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // } //.target es la porpiedad que muestra cual es la línea de código que estoy modificando.
//********************************En una sola linea***************************** */
    //pero como no puedo darle valor al name desde cliente hago lo siguiente en el boton click again
            // <button onClick={() => {
            //     handleClickAgain('mario')
            // }}>Click me again</button> 
            //          o
            //<button onClick={() => handleClickAgain('mario')}>Click me again</button>  --en una sola línea, le quito un par de brackets. Este manera también puede recibir un e
///*************////*************//*****Uso en vista*******///*****************///******/
    // let name = 'Mario'
    const [name, setName] = useState('Mario'); 
    const [age, setAge] = useState(25); 
    // el name es el valor del useState y el setName es el valor al cual va acambiar. Como son más de un valor, se coloca 
    // en un array. Dentro de useState(puede haber cualquier tipo de dato, hasta objetos)
    const handleClick = () => {
        setName('Luigi'); //Este value es reactive.
        setAge(30); //Puedo usar tantos useState como quiera,dentro del mismo onClick, 
        // console.log(name) //en consola si cambia, pero no en el template porque no es 'reactive' y para lograr esto tengo que usar 'hook' , en este caso usamos el ----useState---(es un tipo de función)
    }
    return (  
        <div className="home">
            <h2>HomePage</h2>
            <p> { name } is { age } years old.</p> {/*uso de las const de useState*/}
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>  */}
        </div>
    );
}
 
export default Home;