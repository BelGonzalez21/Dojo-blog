//al poner sfc + ENTER aparece la estructura del componente
// en style en linea de create , colocamos dos parede de brackets el primero siginifica dinamismo y el segundo el objeto del value           
            //<a href="/create" style={{
            //     color: "white",
            //     borderRadius: '8px',
            //     backgroundColor: '#f1356d'
            // }}>New Blog</a>
const  Navbar = () => {
    return (  
        <nav className="navbar">
           <h1>The Dojo blog</h1>
           <div className="links">
            <a href="/">Home</a>
            <a href="/create" >New Blog</a>
        </div> 
        </nav>
    );
}
 
export default Navbar;