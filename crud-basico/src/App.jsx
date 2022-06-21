import React from 'react'
// import Listadonombres from './components/Listadonombres'
// import Bienvenida from './components/Bienvenida'
// import Cards from './components/Cards'
//en esta version se cambio el Switch por Routes
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
// import Hola from './components/Hola'
import Usuarios from './components/Usuarios'
import Usuario from './components/Usuario';

function App() {
  return (
    // <div>
    //   {/* <Listadonombres></Listadonombres> */}
    //   <h1>Propiedades de los componentes</h1>
    //   {/* ademas se puede hacer llamadas de api
    //   se resuelve y se obtiene los datos una vez obtenidos
    //   se mandan al component para recibirlos como props */}
    //   {/* <Bienvenida nombre="Freddy"/>
    //   <Bienvenida nombre="Victoria"/>
    //   <Bienvenida nombre="Jose"/>
    //   <Bienvenida nombre="Francisca"/> */}
    //   <hr/>
    //   <div className="row">
    //     <div className="col">
    //       <Cards
    //         imagen="https://picsum.photos/536/354"
    //         titulo="Titulo card 1"
    //         texto="Texto de la card 1"
    //       />
    //     </div>
    //     <div className="col">
    //       <Cards
    //         imagen="https://picsum.photos/536/354"
    //         titulo="Titulo card 2"
    //         texto="Texto de la card 2"
    //       />
    //     </div>
    //     <div className="col">
    //       <Cards
    //         imagen="https://picsum.photos/536/354"
    //         titulo="Titulo card 3"
    //         texto="Texto de la card 3"
    //       />
    //     </div>
    //   </div>
    // </div>
    //esto es para indicar la ruta
    //nota : para el orden debe ser de la ultima a la raiz
    //en caso de no serlo se coloca exact antes del path
    //cuando se le ingresa un parametro en la ruta
    //ejemplo /inicio/:nombre lo siguiente que
    //venga despues de los puntos es dinamico
    // <Router>
    //   <Link to="/inicio">Inicio</Link>
    //   <Link to="/">Base</Link>
    //   <Routes>
    //     <Route path="/inicio/:nombre" element={<Hola />} />
    //     <Route path="/" element={<Bienvenida />} />
    //   </Routes>
    // </Router>
    <Router>
      <Link to="/">Usuarios</Link>
      <Routes>
        {/* ruta estatica */}
        <Route exact path="/" element={<Usuarios />} />
        {/* ruta dinamica */}
        <Route path="/usuario/:id" element={<Usuario />} />
      </Routes>
    </Router>
  );
}

export default App
