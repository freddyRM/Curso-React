import React, {useState} from 'react'
import uniqid from 'uniqid'

const Listadonombres = () => {

  const [nombre, setNombre] = useState('')
  const [listanombres, setListaNombres] = useState([])
  const [modoEdicion, setModoEdicion] = useState(false)
  const [id, setId] = useState('')
  const [error, setError] = useState(null)

  const addNombre = (e) => {
    e.preventDefault()
    if(!nombre.trim()){
      // console.log('el campo nombre esta vacio')
      setError('el campo nombre esta vacio')
      return
    }
    const nuevoNom = {
      id:uniqid(),
      tituloNombre:nombre
    }
    setListaNombres([...listanombres,nuevoNom])
    setNombre('')
    setError(null)
  }

  const deleteNombre = (id) => {
    const nuevoArray = listanombres.filter(item => item.id !== id)
    setListaNombres(nuevoArray)
  }

  const editar = (item) => {
    setModoEdicion(true)
    setNombre(item.tituloNombre)
    setId(item.id)
  }

  const editarNombre = (e) => {
    e.preventDefault()
    const NuevoArray = listanombres.map( item => item.id === id ? {id:item.id, tituloNombre:nombre}: item)
    setListaNombres(NuevoArray)
  }

  return (
    <div>
      <h2>Aplicacion de CRUD basica</h2>
      <div className="row">
        <div className="col">
          <h2>Listado de nombres</h2>
          <ul className="list-group">
            {
              listanombres.map( item =>

                <li key="{item.id}" 
                    className="list-group-item">
                  {item.tituloNombre}
                    <button 
                      className="btn btn-danger 
                      float-right"
                      onClick={()=>{deleteNombre(item.id)}}
                    >
                      BORRAR
                    </button>
                    <button 
                      className="btn btn-info 
                      float-right"
                      onClick={()=>{editar(item)}}
                    >
                      EDITAR
                    </button>
                </li>

              )
            }
          </ul>
        </div>
        <div className="col">
          <h2>Formulario para añadir nombres</h2>
          <form onSubmit={modoEdicion ? editarNombre : addNombre} className="form-group">
            <input 
              onChange={(e)=>{setNombre(e.target.value)}} 
              classname="form-control mb-3" 
              type="text" 
              placeholder="introduce el nombre"
              value={nombre}
              />
            <input classname="btn btn-info btn-block"
              type="submit" 
              value={modoEdicion ? 'EDITAR NOMBRE' : 'REGISTRAR NOMBRE'}  
            />
          </form>
          {
            error != null ? (
              <div className="alert alert-danger">
                {error}
              </div>
            ):
            (
              <div></div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Listadonombres
