import { useState } from 'react'; //importo el hook 

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])  //cada objeto representa a un blog, que se tienen que incorporar en el template, usando map
    //This is how we output list od data in React
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}> {/*keep track of items*/}
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}

        </div>
    );
}

export default Home;




/////****************************class 9******************/////
// instalo react developer tool extension de Chrome o firefox,
// que me muestra los componentes y la info de los hooks


//////************************class10*********************//////
//-------------------------OUTPITTING LIST
//uso map para recorrer los objetos dentro de los curly braces, cada vez que pasa por un objeto se crea el template
// { blogs.map((blog) => (
//     <div className="blog-preview" key={blog.id}> {/* //logra un traking de los objetos, para distinguirlos en el DOM, pr eso es importante no olvidarse de ellos. */}
//             <div>{ blog.author }</div>
//             <div>{ blog.body }</div>
//             <div>{ blog.id }</div>                                       

//     </div>
// ))} 