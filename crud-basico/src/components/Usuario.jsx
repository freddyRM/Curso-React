import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Usuario = () => {
  
    const [usuario, setUsuario] = useState([])
    const {id} = useParams()

    //ejecutando promesas api
    const obtenerUsuario = async()=>{
        //se puede usar de dos maneras con el useParams , y sin el
        // const res = await axios.get('https://jsonplaceholder.typicode.com/users/id')
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const user = await res.data
        setUsuario(user)
    }
    useEffect( ()=>{
        obtenerUsuario()
    })

  return (
    <div>
        <h4>Usuarios</h4>
        <p>Nombre: {usuario.name}</p>
        <p>Email: {usuario.email}</p>
        <small>Phone: {usuario.phone}</small>
    </div>
  )
}

export default Usuario