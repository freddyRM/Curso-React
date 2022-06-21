import React,{useState, useEffect} from 'react'
import {store} from './firebaseconfig'

const App = () => {

  const [modoEdicion, setModoEdicion] = useState(null)
  const [idUsuario, setIdUsuario] = useState('')
  const [nombre,setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [usuariosAgenda, setUsuariosAgenda] = useState([])
  const [error,setError] = useState([])

  useEffect( () => {
    const getUsuarios = async() => {
      const {docs} = await store.collection('agenda').get()
      const nuevoArray = docs.map( item => ({id: item.id, ...item.data()}))
      setUsuariosAgenda(nuevoArray)
    }
    getUsuarios()
  },[])

  const borrarUsuario = async (id) => {
    try{
      await store.collection('agenda').doc(id).delete()
      const {docs} = await store.collection('agenda').get()
      const nuevoArray = docs.map( item => ({id: item.id, ...item.data()}))
      setUsuariosAgenda(nuevoArray)
    }catch(e){
      console.log(e)
    }
  }

  const setUsuarios = async (e) => {
    e.preventDefault()
    if(!nombre.trim()){
      setError('El campo nombre esta vacio')
    } else if(!telefono.trim()){
      setError('El campo telefono esta vacio')
    }
    
    //crea la coleccion en firebase
    //store.collection('agenda')
    const usuario = {
      nombre: nombre,
      telefono: telefono
    } 

    try{
      const data = await store.collection('agenda').add(usuario) 
      const {docs} = await store.collection('agenda').get()
      const nuevoArray = docs.map( item => ({id: item.id, ...item.data()}))
      setUsuariosAgenda(nuevoArray)
      alert('tarea añadida')
    }catch(e){
      console.log(e)
    }
    setNombre('')
    setTelefono('')
  }

  const setUpdate = async (e) => {
    e.preventDefault()
    if(!nombre.trim()){
      setError('El campo nombre esta vacio')
    } else if(!telefono.trim()){
      setError('El campo telefono esta vacio')
    }
    
    //crea la coleccion en firebase
    //store.collection('agenda')
    const usuarioAct = {
      nombre: nombre,
      telefono: telefono
    } 

    try{
      await store.collection('agenda').doc(idUsuario).set(usuarioAct)
      const {docs} = await store.collection('agenda').get()
      const nuevoArray = docs.map( item => ({id: item.id, ...item.data()}))
      setUsuariosAgenda(nuevoArray)
    }catch(e){
      console.log(e)
    }
    setNombre('')
    setTelefono('')
    setModoEdicion(false)
    setIdUsuario('')
  }

  const pulsarActualizar = async (id)=> {
    try{
      const data = await store.collection('agenda').doc(id).get()
      const {nombre, telefono} = data.data()
      setNombre(nombre)
      setTelefono(telefono)
      setIdUsuario(id)
      setModoEdicion(true)
      console.log(data.data())
      console.log(id)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Formulario de Usuario</h2>
          <form
            onSubmit={modoEdicion ? (setUpdate):(setUsuarios)} 
            className='form-group'>
            <input 
              value={nombre}
              onChange={(e)=>{setNombre(e.target.value)}}
              className='form-control'
              placeholder='Introduce el nombre' 
             type='text'  
            />
            <input
              value={telefono}
              onChange={(e)=>{setTelefono(e.target.value)}} 
              className='form-control mt-3'
              placeholder='Introduce el numero' 
              type='text'
            />
            {
              modoEdicion ? 
              (
                <input 
                  type="submit" 
                  value='Editar' 
                  className='btn btn-dark btn-block mt-3'
                />
              )
              :
              (
                <input 
                  type="submit" 
                  value='Registrar' 
                  className='btn btn-dark btn-block mt-3'
                />
              )
            } 
          </form>
          {
            error ?
            (
              <div>
                <p>{error}</p>
              </div>
            )
            :
            (
              <span></span>
            )
          }
        </div>
        <div className="col">
          <h2>Lista de tu Agenda</h2>
          <ul className='list-group'>
            {
              usuariosAgenda.length !== 0 ?
              (
                usuariosAgenda.map( item => (
                  <li className='list-group-item' key={item.id}>
                    {item.nombre} -- {item.telefono}
                    <button 
                      className='btn btn-info float-right mr-3'
                      onClick={(id) => {pulsarActualizar(item.id)}}
                    >
                      Actualizar
                    </button>
                    <button 
                      onClick={ (id) => {borrarUsuario(item.id)} } 
                      className='btn btn-danger float-right'>
                      Borrar
                    </button>
                  </li>
                  ))
              )
              :
              (
                <span>Lo siento no hay usuarios en tu agenda</span>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
